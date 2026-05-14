/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useMemo, useRef, useState } from "react";
import type { ChangeEvent, Dispatch, FormEvent, ReactNode, SetStateAction } from "react";
import { useMutation, useQuery_experimental as useQuery } from "convex/react";
import {
  ArrowDown,
  ArrowUp,
  Eye,
  EyeSlash,
  FloppyDisk,
  ImageSquare,
  Plus,
  SignOut,
  Trash,
  UploadSimple,
} from "@phosphor-icons/react";
import { api } from "../../convex/_generated/api";
import type { Id } from "../../convex/_generated/dataModel";
import { isConvexConfigured } from "@/lib/convex";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AdminDoctorListSkeleton } from "@/components/common/DoctorSkeletons";
import { cn } from "@/lib/utils";
import type { BilingualText, Doctor, Language } from "@/types";

const ADMIN_TOKEN_KEY = "implantium_admin_token";
const MAX_UPLOAD_IMAGE_EDGE = 1800;
const UPLOAD_JPEG_QUALITY = 0.86;
const supportedImageTypes = new Set(["image/jpeg", "image/png", "image/webp"]);

type AdminDoctor = Doctor & {
  _id: Id<"doctors">;
  visible: boolean;
  sortOrder: number;
};

type EditorState = {
  recordId?: Id<"doctors">;
  slug: string;
  name: BilingualText;
  specialty: BilingualText;
  description: BilingualText;
  experienceYears: number;
  serviceIds: string[];
  photo: string;
  photoStorageId?: Id<"_storage">;
  visible: boolean;
  sortOrder: number;
};

type SaveStatus = "idle" | "saving" | "saved" | "error";

export default function Admin() {
  const [token, setToken] = useState(() => localStorage.getItem(ADMIN_TOKEN_KEY) ?? "");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [selectedId, setSelectedId] = useState<Id<"doctors"> | "new" | null>(null);
  const [editor, setEditor] = useState<EditorState>(() => createBlankDoctor());
  const [activeLanguage, setActiveLanguage] = useState<Language>("ru");
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState("");
  const [formErrors, setFormErrors] = useState<string[]>([]);
  const [saveStatus, setSaveStatus] = useState<SaveStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const loadedEditorKey = useRef<string | null>(null);

  const login = useMutation(api.admin.login);
  const logout = useMutation(api.admin.logout);
  const createDoctor = useMutation(api.doctors.createDoctor);
  const updateDoctor = useMutation(api.doctors.updateDoctor);
  const hideDoctor = useMutation(api.doctors.hideDoctor);
  const deleteDoctor = useMutation(api.doctors.deleteDoctor);
  const reorderDoctors = useMutation(api.doctors.reorderDoctors);
  const generateDoctorPhotoUploadUrl = useMutation(api.doctors.generateDoctorPhotoUploadUrl);

  const viewer = useQuery({
    query: api.admin.viewer,
    args: isConvexConfigured && token ? { token } : "skip",
  });
  const doctorsResult = useQuery({
    query: api.doctors.listAllDoctors,
    args: isConvexConfigured && token ? { token } : "skip",
  });

  const doctors = useMemo(() => {
    if (doctorsResult.status !== "success") {
      return [];
    }

    return (doctorsResult.data as AdminDoctor[]).slice().sort((left, right) => left.sortOrder - right.sortOrder);
  }, [doctorsResult]);

  const isSessionInvalid = viewer.status === "success" && !viewer.data.isAdmin;
  const isAdminLoading =
    Boolean(token) && (viewer.status === "pending" || doctorsResult.status === "pending");

  useEffect(() => {
    document.title = "Управление врачами — IMPLANTIUM";
  }, []);

  useEffect(() => {
    if (viewer.status === "success" && !viewer.data.isAdmin) {
      localStorage.removeItem(ADMIN_TOKEN_KEY);
      setToken("");
      setLoginError("Сессия истекла. Войдите снова.");
    }
  }, [viewer]);

  useEffect(() => {
    if (doctors.length === 0 || selectedId !== null) {
      return;
    }

    setSelectedId(doctors[0]._id);
  }, [doctors, selectedId]);

  useEffect(() => {
    if (selectedId === "new") {
      if (loadedEditorKey.current === "new") {
        return;
      }

      loadedEditorKey.current = "new";
      setEditor(createBlankDoctor(doctors.length));
      setPhotoFile(null);
      setFormErrors([]);
      setSaveStatus("idle");
      setStatusMessage("");
      return;
    }

    const selectedDoctor = doctors.find((doctor) => doctor._id === selectedId);

    if (selectedDoctor) {
      if (loadedEditorKey.current === selectedDoctor._id) {
        return;
      }

      loadedEditorKey.current = selectedDoctor._id;
      setEditor(toEditorState(selectedDoctor));
      setPhotoFile(null);
      setFormErrors([]);
      setSaveStatus("idle");
      setStatusMessage("");
    }
  }, [doctors, selectedId]);

  useEffect(() => {
    if (!photoFile) {
      setPhotoPreview("");
      return;
    }

    const objectUrl = URL.createObjectURL(photoFile);
    setPhotoPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [photoFile]);

  const currentPhoto = photoPreview || editor.photo;

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoginError("");

    try {
      const result = await login({ password });

      if (!result.ok) {
        setLoginError(result.error);
        return;
      }

      localStorage.setItem(ADMIN_TOKEN_KEY, result.token);
      setToken(result.token);
      setPassword("");
    } catch (error) {
      setLoginError(getErrorMessage(error));
    }
  }

  async function handleLogout() {
    try {
      if (token) {
        await logout({ token });
      }
    } finally {
      localStorage.removeItem(ADMIN_TOKEN_KEY);
      setToken("");
      setSelectedId(null);
    }
  }

  function handleAddDoctor() {
    loadedEditorKey.current = "new";
    setSelectedId("new");
    setEditor(createBlankDoctor(doctors.length));
    setPhotoFile(null);
    setFormErrors([]);
    setSaveStatus("idle");
    setStatusMessage("");
  }

  function handleSelectDoctor(doctor: AdminDoctor) {
    loadedEditorKey.current = doctor._id;
    setSelectedId(doctor._id);
    setEditor(toEditorState(doctor));
    setPhotoFile(null);
    setFormErrors([]);
    setSaveStatus("idle");
    setStatusMessage("");
  }

  function handlePhotoSelection(event: ChangeEvent<HTMLInputElement>) {
    const file = event.currentTarget.files?.[0] ?? null;

    if (!file) {
      setPhotoFile(null);
      return;
    }

    if (!isSupportedImageFile(file)) {
      event.currentTarget.value = "";
      setPhotoFile(null);
      setSaveStatus("error");
      setFormErrors(["Выберите изображение в формате JPG, PNG или WEBP."]);
      return;
    }

    setPhotoFile(file);
    setFormErrors([]);
    setSaveStatus("idle");
    setStatusMessage("");
  }

  async function handleSave(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const errors = validateEditor(editor);

    if (errors.length > 0) {
      setFormErrors(errors);
      setSaveStatus("error");
      setStatusMessage("Проверьте обязательные поля.");
      return;
    }

    setSaveStatus("saving");
    setStatusMessage("");
    setFormErrors([]);

    try {
      const finalSlug = editor.slug.trim() || slugify(editor.name.ru);
      const editorWithSlug = { ...editor, slug: finalSlug };
      const photoStorageId = photoFile
        ? await uploadPhoto(photoFile, token, generateDoctorPhotoUploadUrl)
        : editor.photoStorageId;
      const doctorPayload = buildDoctorPayload(editorWithSlug, photoStorageId);

      if (editor.recordId) {
        await updateDoctor({
          token,
          doctorId: editor.recordId,
          doctor: doctorPayload,
        });
      } else {
        const newDoctorId = await createDoctor({
          token,
          doctor: doctorPayload,
        });
        setEditor((current) => ({
          ...current,
          recordId: newDoctorId,
          photoStorageId: photoStorageId ?? undefined,
        }));
        loadedEditorKey.current = null;
        setSelectedId(newDoctorId);
      }

      setPhotoFile(null);
      setSaveStatus("saved");
      setStatusMessage("Изменения сохранены.");
    } catch (error) {
      setSaveStatus("error");
      setStatusMessage(getErrorMessage(error));
    }
  }

  async function handleVisibility(doctor: AdminDoctor) {
    await hideDoctor({
      token,
      doctorId: doctor._id,
      visible: !doctor.visible,
    });
  }

  async function handleDelete(doctor: AdminDoctor) {
    const confirmed = window.confirm(`Удалить врача «${doctor.name.ru}»?`);

    if (!confirmed) {
      return;
    }

    await deleteDoctor({ token, doctorId: doctor._id });

    if (selectedId === doctor._id) {
      setSelectedId(null);
    }
  }

  async function handleMove(doctor: AdminDoctor, direction: -1 | 1) {
    const currentIndex = doctors.findIndex((item) => item._id === doctor._id);
    const nextIndex = currentIndex + direction;

    if (currentIndex < 0 || nextIndex < 0 || nextIndex >= doctors.length) {
      return;
    }

    const nextDoctors = doctors.slice();
    const [movingDoctor] = nextDoctors.splice(currentIndex, 1);
    nextDoctors.splice(nextIndex, 0, movingDoctor);

    await reorderDoctors({
      token,
      orderedIds: nextDoctors.map((item) => item._id),
    });
  }

  if (!isConvexConfigured) {
    return (
      <AdminShell>
        <div className="rounded-[1.5rem] border border-[#D8E2EA] bg-white p-6 shadow-sm">
          <h1 className="text-2xl font-bold text-[#15233A]">Convex не настроен</h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[#52657B]">
            Добавьте переменную `VITE_CONVEX_URL` и настройте Convex-проект, чтобы использовать редактор врачей.
          </p>
        </div>
      </AdminShell>
    );
  }

  if (!token || isSessionInvalid) {
    return (
      <AdminShell>
        <form onSubmit={handleLogin} className="mx-auto max-w-md rounded-[1.5rem] border border-[#D8E2EA] bg-white p-6 shadow-[0_20px_70px_rgba(39,64,95,0.08)]">
          <h1 className="text-2xl font-bold text-[#15233A]">Вход в панель управления</h1>
          <p className="mt-2 text-sm leading-6 text-[#52657B]">
            Введите пароль администратора клиники для редактирования врачей.
          </p>
          <label className="mt-6 flex flex-col gap-2 text-sm font-bold text-[#15233A]">
            Пароль
            <Input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              autoComplete="current-password"
              className="h-12 rounded-xl border-[#DDE3E7] bg-[#FAFBFC]"
            />
          </label>
          {loginError && (
            <p className="mt-3 rounded-xl border border-destructive/20 bg-destructive/5 px-3 py-2 text-sm font-semibold text-destructive">
              {loginError}
            </p>
          )}
          <Button type="submit" className="mt-5 h-12 w-full rounded-xl bg-primary font-bold text-white">
            Войти
          </Button>
        </form>
      </AdminShell>
    );
  }

  return (
    <AdminShell>
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-[#15233A]">Управление врачами</h1>
          <p className="mt-2 text-sm text-[#52657B]">Фото, локализация, порядок и видимость профилей врачей.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            type="button"
            onClick={handleAddDoctor}
            className="rounded-xl bg-primary font-bold text-white"
          >
            <Plus weight="bold" className="size-4" />
            Добавить врача
          </Button>
          <Button type="button" variant="outline" onClick={handleLogout} className="rounded-xl">
            <SignOut className="size-4" />
            Выйти
          </Button>
        </div>
      </div>

      {doctorsResult.status === "error" && (
        <div className="mb-5 rounded-2xl border border-destructive/20 bg-destructive/5 px-4 py-3 text-sm font-semibold text-destructive">
          {doctorsResult.error.message}
        </div>
      )}

      <div className="grid gap-6 xl:grid-cols-[0.95fr_1.35fr]">
        <section className="min-w-0">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-lg font-bold text-[#15233A]">Врачи</h2>
            <Badge variant="secondary" className="rounded-full px-3 py-1">
              {doctors.length}
            </Badge>
          </div>

          {isAdminLoading ? (
            <AdminDoctorListSkeleton />
          ) : doctors.length > 0 ? (
            <div className="grid gap-3">
              {doctors.map((doctor, index) => (
                <DoctorListRow
                  key={doctor._id}
                  doctor={doctor}
                  isSelected={selectedId === doctor._id}
                  canMoveUp={index > 0}
                  canMoveDown={index < doctors.length - 1}
                  onSelect={() => handleSelectDoctor(doctor)}
                  onMoveUp={() => handleMove(doctor, -1)}
                  onMoveDown={() => handleMove(doctor, 1)}
                  onVisibility={() => handleVisibility(doctor)}
                  onDelete={() => handleDelete(doctor)}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-[1.5rem] border border-dashed border-[#C3D2DF] bg-white p-6 text-center">
              <p className="font-bold text-[#15233A]">Врачей пока нет</p>
              <p className="mt-2 text-sm text-[#52657B]">Добавьте врача, чтобы создать первый профиль.</p>
            </div>
          )}
        </section>

        <section className="min-w-0 rounded-[1.5rem] border border-[#D8E2EA] bg-white p-5 shadow-[0_20px_70px_rgba(39,64,95,0.07)] md:p-6">
          <form onSubmit={handleSave} className="grid gap-6">
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <h2 className="text-xl font-bold text-[#15233A]">
                  {editor.recordId ? "Редактирование" : "Новый врач"}
                </h2>
                <p className="mt-1 text-sm text-[#52657B]">Все поля необходимо заполнить на русском и казахском языках.</p>
              </div>
              <label className="flex items-center gap-2 text-sm font-bold text-[#15233A]">
                <input
                  checked={editor.visible}
                  onChange={(event) => setEditor((current) => ({ ...current, visible: event.target.checked }))}
                  type="checkbox"
                  className="size-4 accent-primary"
                />
                Видимый
              </label>
            </div>

            <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr]">
              <div className="grid content-start gap-4">
                <div className="overflow-hidden rounded-[1.25rem] border border-[#D8E2EA] bg-[#F4F8FB]">
                  <div className="flex aspect-[4/3.5] items-center justify-center overflow-hidden">
                    {currentPhoto ? (
                      <img src={currentPhoto} alt="Фото врача" className="size-full object-cover" />
                    ) : (
                      <div className="flex flex-col items-center gap-3 text-[#6B7C90]">
                        <ImageSquare className="size-12" />
                        <span className="text-sm font-semibold">Нет фото</span>
                      </div>
                    )}
                  </div>
                </div>
                <label className="inline-flex h-11 cursor-pointer items-center justify-center gap-2 rounded-xl border border-[#D8E2EA] bg-white px-4 text-sm font-bold text-[#15233A] transition-colors hover:border-primary/30">
                  <UploadSimple className="size-4" />
                  Выбрать фото
                  <input
                    type="file"
                    accept="image/png,image/jpeg,image/jpg,image/webp,.png,.jpg,.jpeg,.webp"
                    className="sr-only"
                    onChange={handlePhotoSelection}
                  />
                </label>
                {photoFile && (
                  <p className="rounded-xl border border-primary/15 bg-primary/5 px-3 py-2 text-xs font-semibold leading-5 text-primary">
                    Фото выбрано. Оно будет оптимизировано и загружено при сохранении.
                  </p>
                )}
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setPhotoFile(null);
                    setEditor((current) => ({ ...current, photo: "", photoStorageId: undefined }));
                  }}
                  className="rounded-xl"
                >
                  Удалить фото
                </Button>
              </div>

              <div className="grid gap-4">


                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Стаж (лет)">
                    <Input
                      value={editor.experienceYears}
                      onChange={(event) => setEditor((current) => ({ ...current, experienceYears: Number(event.target.value) }))}
                      type="number"
                      min={0}
                      className={inputClassName}
                    />
                  </Field>
                  <Field label="Порядок">
                    <Input
                      value={editor.sortOrder}
                      onChange={(event) => setEditor((current) => ({ ...current, sortOrder: Number(event.target.value) }))}
                      type="number"
                      min={0}
                      className={inputClassName}
                    />
                  </Field>
                </div>

                <Tabs value={activeLanguage} onValueChange={(value) => setActiveLanguage(value as Language)}>
                  <TabsList className="grid w-full grid-cols-2 rounded-xl bg-[#F4F8FB]">
                    <TabsTrigger value="ru" className="rounded-lg font-bold">Русский</TabsTrigger>
                    <TabsTrigger value="kk" className="rounded-lg font-bold">Қазақша</TabsTrigger>
                  </TabsList>
                </Tabs>

                <LocalizedFields
                  language={activeLanguage}
                  editor={editor}
                  onChange={setEditor}
                />

                <Field label="Услуги">
                  <div className="grid gap-2 sm:grid-cols-2">
                    {services.map((service) => (
                      <label
                        key={service.id}
                        className={cn(
                          "flex cursor-pointer items-start gap-2 rounded-xl border px-3 py-3 text-sm font-semibold transition-colors",
                          editor.serviceIds.includes(service.id)
                            ? "border-primary/35 bg-[#F4E7E4]/55 text-[#15233A]"
                            : "border-[#D8E2EA] bg-[#FAFBFC] text-[#52657B] hover:border-[#C3D2DF]"
                        )}
                      >
                        <input
                          type="checkbox"
                          checked={editor.serviceIds.includes(service.id)}
                          onChange={() => {
                            setEditor((current) => ({
                              ...current,
                              serviceIds: toggleService(current.serviceIds, service.id),
                            }));
                          }}
                          className="mt-1 size-4 accent-primary"
                        />
                        <span>{service.title.ru}</span>
                      </label>
                    ))}
                  </div>
                </Field>
              </div>
            </div>

            {formErrors.length > 0 && (
              <div className="rounded-2xl border border-destructive/20 bg-destructive/5 px-4 py-3 text-sm font-semibold text-destructive">
                {formErrors.join(" ")}
              </div>
            )}
            {statusMessage && (
              <div
                className={cn(
                  "rounded-2xl border px-4 py-3 text-sm font-semibold",
                  saveStatus === "error"
                    ? "border-destructive/20 bg-destructive/5 text-destructive"
                    : "border-primary/20 bg-primary/5 text-primary"
                )}
              >
                {statusMessage}
              </div>
            )}

            <Button
              type="submit"
              disabled={saveStatus === "saving"}
              className="h-12 rounded-xl bg-primary font-bold text-white"
            >
              <FloppyDisk weight="bold" className="size-4" />
              {saveStatus === "saving" ? "Сохранение..." : "Сохранить врача"}
            </Button>
          </form>
        </section>
      </div>
    </AdminShell>
  );
}

function AdminShell({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-[#F4F8FB] px-4 py-8 text-[#15233A] md:px-8">
      <div className="mx-auto max-w-[1360px]">{children}</div>
    </main>
  );
}

function DoctorListRow({
  doctor,
  isSelected,
  canMoveUp,
  canMoveDown,
  onSelect,
  onMoveUp,
  onMoveDown,
  onVisibility,
  onDelete,
}: {
  doctor: AdminDoctor;
  isSelected: boolean;
  canMoveUp: boolean;
  canMoveDown: boolean;
  onSelect: () => void;
  onMoveUp: () => void;
  onMoveDown: () => void;
  onVisibility: () => void;
  onDelete: () => void;
}) {
  return (
    <article
      className={cn(
        "grid gap-3 rounded-2xl border bg-white p-4 shadow-sm transition-colors sm:grid-cols-[4rem_1fr_auto] sm:items-center",
        isSelected ? "border-primary/45" : "border-[#D8E2EA]"
      )}
    >
      <button
        type="button"
        onClick={onSelect}
        className="size-16 overflow-hidden rounded-2xl bg-[#F4F8FB] text-[#6B7C90]"
      >
        {doctor.photo ? (
          <img src={doctor.photo} alt="" className="size-full object-cover" />
        ) : (
          <span className="flex size-full items-center justify-center text-sm font-bold">
            {doctor.name.ru.slice(0, 1)}
          </span>
        )}
      </button>
      <button type="button" onClick={onSelect} className="min-w-0 text-left">
        <span className="block truncate text-sm font-bold text-[#15233A]">{doctor.name.ru}</span>
        <span className="mt-1 block truncate text-xs font-semibold text-[#52657B]">{doctor.specialty.ru}</span>
        <span className="mt-2 inline-flex rounded-full bg-[#F4F8FB] px-2.5 py-1 text-[11px] font-bold text-[#52657B]">
          {doctor.visible ? "Виден" : "Скрыт"}
        </span>
      </button>
      <div className="flex flex-wrap gap-2 sm:justify-end">
        <IconButton label="Переместить вверх" onClick={onMoveUp} disabled={!canMoveUp}>
          <ArrowUp className="size-4" />
        </IconButton>
        <IconButton label="Переместить вниз" onClick={onMoveDown} disabled={!canMoveDown}>
          <ArrowDown className="size-4" />
        </IconButton>
        <IconButton label={doctor.visible ? "Скрыть" : "Показать"} onClick={onVisibility}>
          {doctor.visible ? <EyeSlash className="size-4" /> : <Eye className="size-4" />}
        </IconButton>
        <IconButton label="Удалить" onClick={onDelete}>
          <Trash className="size-4" />
        </IconButton>
      </div>
    </article>
  );
}

function IconButton({
  label,
  disabled,
  onClick,
  children,
}: {
  label: string;
  disabled?: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      title={label}
      aria-label={label}
      className="flex size-9 items-center justify-center rounded-xl border border-[#D8E2EA] bg-white text-[#52657B] transition-colors hover:border-primary/30 hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
    >
      {children}
    </button>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="flex flex-col gap-2 text-sm font-bold text-[#15233A]">
      {label}
      {children}
    </label>
  );
}

function LocalizedFields({
  language,
  editor,
  onChange,
}: {
  language: Language;
  editor: EditorState;
  onChange: Dispatch<SetStateAction<EditorState>>;
}) {
  return (
    <div className="grid gap-4">
      <Field label={language === "ru" ? "Имя (рус)" : "Аты (қаз)"}>
        <Input
          value={editor.name[language]}
          onChange={(event) => updateLocalized(onChange, "name", language, event.target.value)}
          className={inputClassName}
        />
      </Field>
      <Field label={language === "ru" ? "Специальность (рус)" : "Мамандығы (қаз)"}>
        <Input
          value={editor.specialty[language]}
          onChange={(event) => updateLocalized(onChange, "specialty", language, event.target.value)}
          className={inputClassName}
        />
      </Field>
      <Field label={language === "ru" ? "Описание (рус)" : "Сипаттама (қаз)"}>
        <Textarea
          value={editor.description[language]}
          onChange={(event) => updateLocalized(onChange, "description", language, event.target.value)}
          className="min-h-32 resize-none rounded-xl border-[#DDE3E7] bg-[#FAFBFC]"
        />
      </Field>
    </div>
  );
}

const inputClassName = "h-12 rounded-xl border-[#DDE3E7] bg-[#FAFBFC]";

function updateLocalized(
  onChange: Dispatch<SetStateAction<EditorState>>,
  field: "name" | "specialty" | "description",
  language: Language,
  value: string
) {
  onChange((current) => ({
    ...current,
    [field]: {
      ...current[field],
      [language]: value,
    },
  }));
}

function createBlankDoctor(sortOrder = 0): EditorState {
  return {
    slug: "",
    name: { ru: "", kk: "" },
    specialty: { ru: "", kk: "" },
    description: { ru: "", kk: "" },
    experienceYears: 0,
    serviceIds: [],
    photo: "",
    visible: true,
    sortOrder,
  };
}

function toEditorState(doctor: AdminDoctor): EditorState {
  return {
    recordId: doctor._id,
    slug: doctor.id,
    name: doctor.name,
    specialty: doctor.specialty,
    description: doctor.description,
    experienceYears: doctor.experienceYears ?? 0,
    serviceIds: doctor.serviceIds,
    photo: doctor.photo,
    photoStorageId: doctor.photoStorageId,
    visible: doctor.visible,
    sortOrder: doctor.sortOrder,
  };
}

function validateEditor(editor: EditorState) {
  const errors: string[] = [];

  if (!editor.name.ru.trim() || !editor.name.kk.trim()) errors.push("Имя обязательно на обоих языках.");
  if (!editor.specialty.ru.trim() || !editor.specialty.kk.trim()) errors.push("Специальность обязательна на обоих языках.");
  if (!editor.description.ru.trim() || !editor.description.kk.trim()) errors.push("Описание обязательно на обоих языках.");
  if (editor.serviceIds.length === 0) errors.push("Выберите хотя бы одну услугу.");

  return errors;
}

function buildDoctorPayload(editor: EditorState, photoStorageId?: Id<"_storage">) {
  return {
    slug: editor.slug.trim(),
    name: trimLocalized(editor.name),
    specialty: trimLocalized(editor.specialty),
    description: trimLocalized(editor.description),
    experienceYears: Number.isFinite(editor.experienceYears) ? editor.experienceYears : 0,
    serviceIds: editor.serviceIds,
    photoStorageId: photoStorageId ?? null,
    visible: editor.visible,
    sortOrder: Number.isFinite(editor.sortOrder) ? editor.sortOrder : 0,
  };
}

function trimLocalized(text: BilingualText) {
  return {
    ru: text.ru.trim(),
    kk: text.kk.trim(),
  };
}

function toggleService(serviceIds: string[], serviceId: string) {
  return serviceIds.includes(serviceId)
    ? serviceIds.filter((item) => item !== serviceId)
    : [...serviceIds, serviceId];
}

const cyrillicToLatin: Record<string, string> = {
  а: "a", б: "b", в: "v", г: "g", д: "d", е: "e", ё: "yo", ж: "zh",
  з: "z", и: "i", й: "y", к: "k", л: "l", м: "m", н: "n", о: "o",
  п: "p", р: "r", с: "s", т: "t", у: "u", ф: "f", х: "kh", ц: "ts",
  ч: "ch", ш: "sh", щ: "shch", ъ: "", ы: "y", ь: "", э: "e", ю: "yu",
  я: "ya",
  // Kazakh-specific
  ә: "a", ғ: "g", қ: "q", ң: "n", ө: "o", ұ: "u", ү: "u", і: "i", һ: "h",
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .split("")
    .map((char) => cyrillicToLatin[char] ?? char)
    .join("")
    .replace(/[^a-z0-9-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

async function uploadPhoto(
  file: File,
  token: string,
  generateUploadUrl: (args: { token: string }) => Promise<string>
) {
  const preparedFile = await prepareImageForUpload(file);
  const uploadUrl = await generateUploadUrl({ token });
  const response = await fetch(uploadUrl, {
    method: "POST",
    headers: {
      "Content-Type": preparedFile.type || "image/jpeg",
    },
    body: preparedFile,
  });

  if (!response.ok) {
    throw new Error(`Photo upload failed with status ${response.status}`);
  }

  const body = await response.json() as { storageId: Id<"_storage"> };

  return body.storageId;
}

function isSupportedImageFile(file: File) {
  return supportedImageTypes.has(file.type) || /\.(jpe?g|png|webp)$/i.test(file.name);
}

async function prepareImageForUpload(file: File) {
  if (!isSupportedImageFile(file)) {
    throw new Error("Выберите изображение в формате JPG, PNG или WEBP.");
  }

  const image = await loadImage(file);
  const largestEdge = Math.max(image.naturalWidth, image.naturalHeight);
  const scale = Math.min(1, MAX_UPLOAD_IMAGE_EDGE / largestEdge);
  const width = Math.max(1, Math.round(image.naturalWidth * scale));
  const height = Math.max(1, Math.round(image.naturalHeight * scale));
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  if (!context) {
    throw new Error("Не удалось подготовить фото для загрузки.");
  }

  canvas.width = width;
  canvas.height = height;
  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, width, height);
  context.drawImage(image, 0, 0, width, height);

  return await new Promise<Blob>((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (blob) {
          resolve(blob);
          return;
        }

        reject(new Error("Не удалось подготовить фото для загрузки."));
      },
      "image/jpeg",
      UPLOAD_JPEG_QUALITY
    );
  });
}

async function loadImage(file: File) {
  const objectUrl = URL.createObjectURL(file);
  const image = new Image();

  try {
    const loadedImage = await new Promise<HTMLImageElement>((resolve, reject) => {
      image.onload = () => resolve(image);
      image.onerror = () => reject(new Error("Не удалось прочитать файл изображения."));
      image.src = objectUrl;
    });

    return loadedImage;
  } finally {
    URL.revokeObjectURL(objectUrl);
  }
}

function getErrorMessage(error: unknown) {
  return error instanceof Error ? error.message : "Непредвиденная ошибка";
}
