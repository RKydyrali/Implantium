import { t as cn } from "./utils-DVvWhTIj.js";
import { g as Button, t as isConvexConfigured } from "../entry-server.js";
import { o as api, t as AdminDoctorListSkeleton } from "./DoctorSkeletons-BGIYgWVM.js";
import { n as useSeo } from "./useSeo-BpLXIewB.js";
import { t as services } from "./services-D-OeEqLJ.js";
import { t as Badge } from "./badge-DifIX8yv.js";
import * as React from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowDown, ArrowUp, Eye, EyeSlash, FloppyDisk, ImageSquare, Plus, SignOut, Trash, UploadSimple } from "@phosphor-icons/react";
import { useMutation, useQuery_experimental } from "convex/react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
//#region src/components/ui/input.tsx
var Input = React.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ jsx("input", {
		type,
		className: cn("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
//#endregion
//#region src/components/ui/textarea.tsx
var Textarea = React.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ jsx("textarea", {
		className: cn("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
//#endregion
//#region src/components/ui/tabs.tsx
var Tabs = TabsPrimitive.Root;
var TabsList = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(TabsPrimitive.List, {
	ref,
	className: cn("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground", className),
	...props
}));
TabsList.displayName = TabsPrimitive.List.displayName;
var TabsTrigger = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(TabsPrimitive.Trigger, {
	ref,
	className: cn("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm", className),
	...props
}));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
var TabsContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(TabsPrimitive.Content, {
	ref,
	className: cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className),
	...props
}));
TabsContent.displayName = TabsPrimitive.Content.displayName;
//#endregion
//#region src/pages/Admin.tsx
var ADMIN_TOKEN_KEY = "implantium_admin_token";
var MAX_UPLOAD_IMAGE_EDGE = 1800;
var UPLOAD_JPEG_QUALITY = .86;
var supportedImageTypes = new Set([
	"image/jpeg",
	"image/png",
	"image/webp"
]);
function Admin() {
	const [token, setToken] = useState(() => typeof localStorage !== "undefined" ? localStorage.getItem(ADMIN_TOKEN_KEY) ?? "" : "");
	const [password, setPassword] = useState("");
	const [loginError, setLoginError] = useState("");
	const [selectedId, setSelectedId] = useState(null);
	const [editor, setEditor] = useState(() => createBlankDoctor());
	const [activeLanguage, setActiveLanguage] = useState("ru");
	const [photoFile, setPhotoFile] = useState(null);
	const [photoPreview, setPhotoPreview] = useState("");
	const [formErrors, setFormErrors] = useState([]);
	const [saveStatus, setSaveStatus] = useState("idle");
	const [statusMessage, setStatusMessage] = useState("");
	const loadedEditorKey = useRef(null);
	const login = useMutation(api.admin.login);
	const logout = useMutation(api.admin.logout);
	const createDoctor = useMutation(api.doctors.createDoctor);
	const updateDoctor = useMutation(api.doctors.updateDoctor);
	const hideDoctor = useMutation(api.doctors.hideDoctor);
	const deleteDoctor = useMutation(api.doctors.deleteDoctor);
	const reorderDoctors = useMutation(api.doctors.reorderDoctors);
	const generateDoctorPhotoUploadUrl = useMutation(api.doctors.generateDoctorPhotoUploadUrl);
	const viewer = useQuery_experimental({
		query: api.admin.viewer,
		args: isConvexConfigured && token ? { token } : "skip"
	});
	const doctorsResult = useQuery_experimental({
		query: api.doctors.listAllDoctors,
		args: isConvexConfigured && token ? { token } : "skip"
	});
	const doctors = useMemo(() => {
		if (doctorsResult.status !== "success") return [];
		return doctorsResult.data.slice().sort((left, right) => left.sortOrder - right.sortOrder);
	}, [doctorsResult]);
	const isSessionInvalid = viewer.status === "success" && !viewer.data.isAdmin;
	const isAdminLoading = Boolean(token) && (viewer.status === "pending" || doctorsResult.status === "pending");
	useSeo({
		title: "Управление врачами | IMPLANTIUM",
		description: "Внутренний раздел управления врачами стоматологической клиники IMPLANTIUM.",
		path: "/admin",
		noindex: true
	});
	useEffect(() => {
		if (viewer.status === "success" && !viewer.data.isAdmin) {
			if (typeof localStorage !== "undefined") localStorage.removeItem(ADMIN_TOKEN_KEY);
			setToken("");
			setLoginError("Сессия истекла. Войдите снова.");
		}
	}, [viewer]);
	useEffect(() => {
		if (doctors.length === 0 || selectedId !== null) return;
		setSelectedId(doctors[0]._id);
	}, [doctors, selectedId]);
	useEffect(() => {
		if (selectedId === "new") {
			if (loadedEditorKey.current === "new") return;
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
			if (loadedEditorKey.current === selectedDoctor._id) return;
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
	async function handleLogin(event) {
		event.preventDefault();
		setLoginError("");
		try {
			const result = await login({ password });
			if (!result.ok) {
				setLoginError(result.error);
				return;
			}
			if (typeof localStorage !== "undefined") localStorage.setItem(ADMIN_TOKEN_KEY, result.token);
			setToken(result.token);
			setPassword("");
		} catch (error) {
			setLoginError(getErrorMessage(error));
		}
	}
	async function handleLogout() {
		try {
			if (token) await logout({ token });
		} finally {
			if (typeof localStorage !== "undefined") localStorage.removeItem(ADMIN_TOKEN_KEY);
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
	function handleSelectDoctor(doctor) {
		loadedEditorKey.current = doctor._id;
		setSelectedId(doctor._id);
		setEditor(toEditorState(doctor));
		setPhotoFile(null);
		setFormErrors([]);
		setSaveStatus("idle");
		setStatusMessage("");
	}
	function handlePhotoSelection(event) {
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
	async function handleSave(event) {
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
			const editorWithSlug = {
				...editor,
				slug: finalSlug
			};
			const photoStorageId = photoFile ? await uploadPhoto(photoFile, token, generateDoctorPhotoUploadUrl) : editor.photoStorageId;
			const doctorPayload = buildDoctorPayload(editorWithSlug, photoStorageId);
			if (editor.recordId) await updateDoctor({
				token,
				doctorId: editor.recordId,
				doctor: doctorPayload
			});
			else {
				const newDoctorId = await createDoctor({
					token,
					doctor: doctorPayload
				});
				setEditor((current) => ({
					...current,
					recordId: newDoctorId,
					photoStorageId: photoStorageId ?? void 0
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
	async function handleVisibility(doctor) {
		await hideDoctor({
			token,
			doctorId: doctor._id,
			visible: !doctor.visible
		});
	}
	async function handleDelete(doctor) {
		if (!window.confirm(`Удалить врача «${doctor.name.ru}»?`)) return;
		await deleteDoctor({
			token,
			doctorId: doctor._id
		});
		if (selectedId === doctor._id) setSelectedId(null);
	}
	async function handleMove(doctor, direction) {
		const currentIndex = doctors.findIndex((item) => item._id === doctor._id);
		const nextIndex = currentIndex + direction;
		if (currentIndex < 0 || nextIndex < 0 || nextIndex >= doctors.length) return;
		const nextDoctors = doctors.slice();
		const [movingDoctor] = nextDoctors.splice(currentIndex, 1);
		nextDoctors.splice(nextIndex, 0, movingDoctor);
		await reorderDoctors({
			token,
			orderedIds: nextDoctors.map((item) => item._id)
		});
	}
	if (!isConvexConfigured) return /* @__PURE__ */ jsx(AdminShell, { children: /* @__PURE__ */ jsxs("div", {
		className: "rounded-[1.5rem] border border-[#D8E2EA] bg-white p-6 shadow-sm",
		children: [/* @__PURE__ */ jsx("h1", {
			className: "text-2xl font-bold text-[#15233A]",
			children: "Convex не настроен"
		}), /* @__PURE__ */ jsx("p", {
			className: "mt-3 max-w-2xl text-sm leading-7 text-[#52657B]",
			children: "Добавьте переменную `VITE_CONVEX_URL` и настройте Convex-проект, чтобы использовать редактор врачей."
		})]
	}) });
	if (!token || isSessionInvalid) return /* @__PURE__ */ jsx(AdminShell, { children: /* @__PURE__ */ jsxs("form", {
		onSubmit: handleLogin,
		className: "mx-auto max-w-md rounded-[1.5rem] border border-[#D8E2EA] bg-white p-6 shadow-[0_20px_70px_rgba(39,64,95,0.08)]",
		children: [
			/* @__PURE__ */ jsx("h1", {
				className: "text-2xl font-bold text-[#15233A]",
				children: "Вход в панель управления"
			}),
			/* @__PURE__ */ jsx("p", {
				className: "mt-2 text-sm leading-6 text-[#52657B]",
				children: "Введите пароль администратора клиники для редактирования врачей."
			}),
			/* @__PURE__ */ jsxs("label", {
				className: "mt-6 flex flex-col gap-2 text-sm font-bold text-[#15233A]",
				children: ["Пароль", /* @__PURE__ */ jsx(Input, {
					value: password,
					onChange: (event) => setPassword(event.target.value),
					type: "password",
					autoComplete: "current-password",
					className: "h-12 rounded-xl border-[#DDE3E7] bg-[#FAFBFC]"
				})]
			}),
			loginError && /* @__PURE__ */ jsx("p", {
				className: "mt-3 rounded-xl border border-destructive/20 bg-destructive/5 px-3 py-2 text-sm font-semibold text-destructive",
				children: loginError
			}),
			/* @__PURE__ */ jsx(Button, {
				type: "submit",
				className: "mt-5 h-12 w-full rounded-xl bg-primary font-bold text-white",
				children: "Войти"
			})
		]
	}) });
	return /* @__PURE__ */ jsxs(AdminShell, { children: [
		/* @__PURE__ */ jsxs("div", {
			className: "mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between",
			children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h1", {
				className: "text-3xl font-bold tracking-tight text-[#15233A]",
				children: "Управление врачами"
			}), /* @__PURE__ */ jsx("p", {
				className: "mt-2 text-sm text-[#52657B]",
				children: "Фото, локализация, порядок и видимость профилей врачей."
			})] }), /* @__PURE__ */ jsxs("div", {
				className: "flex flex-wrap gap-2",
				children: [/* @__PURE__ */ jsxs(Button, {
					type: "button",
					onClick: handleAddDoctor,
					className: "rounded-xl bg-primary font-bold text-white",
					children: [/* @__PURE__ */ jsx(Plus, {
						weight: "bold",
						className: "size-4"
					}), "Добавить врача"]
				}), /* @__PURE__ */ jsxs(Button, {
					type: "button",
					variant: "outline",
					onClick: handleLogout,
					className: "rounded-xl",
					children: [/* @__PURE__ */ jsx(SignOut, { className: "size-4" }), "Выйти"]
				})]
			})]
		}),
		doctorsResult.status === "error" && /* @__PURE__ */ jsx("div", {
			className: "mb-5 rounded-2xl border border-destructive/20 bg-destructive/5 px-4 py-3 text-sm font-semibold text-destructive",
			children: doctorsResult.error.message
		}),
		/* @__PURE__ */ jsxs("div", {
			className: "grid gap-6 xl:grid-cols-[0.95fr_1.35fr]",
			children: [/* @__PURE__ */ jsxs("section", {
				className: "min-w-0",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "mb-3 flex items-center justify-between",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "text-lg font-bold text-[#15233A]",
						children: "Врачи"
					}), /* @__PURE__ */ jsx(Badge, {
						variant: "secondary",
						className: "rounded-full px-3 py-1",
						children: doctors.length
					})]
				}), isAdminLoading ? /* @__PURE__ */ jsx(AdminDoctorListSkeleton, {}) : doctors.length > 0 ? /* @__PURE__ */ jsx("div", {
					className: "grid gap-3",
					children: doctors.map((doctor, index) => /* @__PURE__ */ jsx(DoctorListRow, {
						doctor,
						isSelected: selectedId === doctor._id,
						canMoveUp: index > 0,
						canMoveDown: index < doctors.length - 1,
						onSelect: () => handleSelectDoctor(doctor),
						onMoveUp: () => handleMove(doctor, -1),
						onMoveDown: () => handleMove(doctor, 1),
						onVisibility: () => handleVisibility(doctor),
						onDelete: () => handleDelete(doctor)
					}, doctor._id))
				}) : /* @__PURE__ */ jsxs("div", {
					className: "rounded-[1.5rem] border border-dashed border-[#C3D2DF] bg-white p-6 text-center",
					children: [/* @__PURE__ */ jsx("p", {
						className: "font-bold text-[#15233A]",
						children: "Врачей пока нет"
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-2 text-sm text-[#52657B]",
						children: "Добавьте врача, чтобы создать первый профиль."
					})]
				})]
			}), /* @__PURE__ */ jsx("section", {
				className: "min-w-0 rounded-[1.5rem] border border-[#D8E2EA] bg-white p-5 shadow-[0_20px_70px_rgba(39,64,95,0.07)] md:p-6",
				children: /* @__PURE__ */ jsxs("form", {
					onSubmit: handleSave,
					className: "grid gap-6",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex flex-col gap-3 md:flex-row md:items-start md:justify-between",
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
								className: "text-xl font-bold text-[#15233A]",
								children: editor.recordId ? "Редактирование" : "Новый врач"
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-1 text-sm text-[#52657B]",
								children: "Все поля необходимо заполнить на русском и казахском языках."
							})] }), /* @__PURE__ */ jsxs("label", {
								className: "flex items-center gap-2 text-sm font-bold text-[#15233A]",
								children: [/* @__PURE__ */ jsx("input", {
									checked: editor.visible,
									onChange: (event) => setEditor((current) => ({
										...current,
										visible: event.target.checked
									})),
									type: "checkbox",
									className: "size-4 accent-primary"
								}), "Видимый"]
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "grid gap-5 lg:grid-cols-[0.72fr_1.28fr]",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "grid content-start gap-4",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "overflow-hidden rounded-[1.25rem] border border-[#D8E2EA] bg-[#F4F8FB]",
										children: /* @__PURE__ */ jsx("div", {
											className: "flex aspect-[4/3.5] items-center justify-center overflow-hidden",
											children: currentPhoto ? /* @__PURE__ */ jsx("img", {
												src: currentPhoto,
												alt: "Фото врача",
												className: "size-full object-cover"
											}) : /* @__PURE__ */ jsxs("div", {
												className: "flex flex-col items-center gap-3 text-[#6B7C90]",
												children: [/* @__PURE__ */ jsx(ImageSquare, { className: "size-12" }), /* @__PURE__ */ jsx("span", {
													className: "text-sm font-semibold",
													children: "Нет фото"
												})]
											})
										})
									}),
									/* @__PURE__ */ jsxs("label", {
										className: "inline-flex h-11 cursor-pointer items-center justify-center gap-2 rounded-xl border border-[#D8E2EA] bg-white px-4 text-sm font-bold text-[#15233A] transition-colors hover:border-primary/30",
										children: [
											/* @__PURE__ */ jsx(UploadSimple, { className: "size-4" }),
											"Выбрать фото",
											/* @__PURE__ */ jsx("input", {
												type: "file",
												accept: "image/png,image/jpeg,image/jpg,image/webp,.png,.jpg,.jpeg,.webp",
												className: "sr-only",
												onChange: handlePhotoSelection
											})
										]
									}),
									photoFile && /* @__PURE__ */ jsx("p", {
										className: "rounded-xl border border-primary/15 bg-primary/5 px-3 py-2 text-xs font-semibold leading-5 text-primary",
										children: "Фото выбрано. Оно будет оптимизировано и загружено при сохранении."
									}),
									/* @__PURE__ */ jsx(Button, {
										type: "button",
										variant: "outline",
										onClick: () => {
											setPhotoFile(null);
											setEditor((current) => ({
												...current,
												photo: "",
												photoStorageId: void 0
											}));
										},
										className: "rounded-xl",
										children: "Удалить фото"
									})
								]
							}), /* @__PURE__ */ jsxs("div", {
								className: "grid gap-4",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "grid gap-4 sm:grid-cols-2",
										children: [/* @__PURE__ */ jsx(Field, {
											label: "Стаж (лет)",
											children: /* @__PURE__ */ jsx(Input, {
												value: editor.experienceYears,
												onChange: (event) => setEditor((current) => ({
													...current,
													experienceYears: Number(event.target.value)
												})),
												type: "number",
												min: 0,
												className: inputClassName
											})
										}), /* @__PURE__ */ jsx(Field, {
											label: "Порядок",
											children: /* @__PURE__ */ jsx(Input, {
												value: editor.sortOrder,
												onChange: (event) => setEditor((current) => ({
													...current,
													sortOrder: Number(event.target.value)
												})),
												type: "number",
												min: 0,
												className: inputClassName
											})
										})]
									}),
									/* @__PURE__ */ jsx(Tabs, {
										value: activeLanguage,
										onValueChange: (value) => setActiveLanguage(value),
										children: /* @__PURE__ */ jsxs(TabsList, {
											className: "grid w-full grid-cols-2 rounded-xl bg-[#F4F8FB]",
											children: [/* @__PURE__ */ jsx(TabsTrigger, {
												value: "ru",
												className: "rounded-lg font-bold",
												children: "Русский"
											}), /* @__PURE__ */ jsx(TabsTrigger, {
												value: "kk",
												className: "rounded-lg font-bold",
												children: "Қазақша"
											})]
										})
									}),
									/* @__PURE__ */ jsx(LocalizedFields, {
										language: activeLanguage,
										editor,
										onChange: setEditor
									}),
									/* @__PURE__ */ jsx(Field, {
										label: "Услуги",
										children: /* @__PURE__ */ jsx("div", {
											className: "grid gap-2 sm:grid-cols-2",
											children: services.map((service) => /* @__PURE__ */ jsxs("label", {
												className: cn("flex cursor-pointer items-start gap-2 rounded-xl border px-3 py-3 text-sm font-semibold transition-colors", editor.serviceIds.includes(service.id) ? "border-primary/35 bg-[#F4E7E4]/55 text-[#15233A]" : "border-[#D8E2EA] bg-[#FAFBFC] text-[#52657B] hover:border-[#C3D2DF]"),
												children: [/* @__PURE__ */ jsx("input", {
													type: "checkbox",
													checked: editor.serviceIds.includes(service.id),
													onChange: () => {
														setEditor((current) => ({
															...current,
															serviceIds: toggleService(current.serviceIds, service.id)
														}));
													},
													className: "mt-1 size-4 accent-primary"
												}), /* @__PURE__ */ jsx("span", { children: service.title.ru })]
											}, service.id))
										})
									})
								]
							})]
						}),
						formErrors.length > 0 && /* @__PURE__ */ jsx("div", {
							className: "rounded-2xl border border-destructive/20 bg-destructive/5 px-4 py-3 text-sm font-semibold text-destructive",
							children: formErrors.join(" ")
						}),
						statusMessage && /* @__PURE__ */ jsx("div", {
							className: cn("rounded-2xl border px-4 py-3 text-sm font-semibold", saveStatus === "error" ? "border-destructive/20 bg-destructive/5 text-destructive" : "border-primary/20 bg-primary/5 text-primary"),
							children: statusMessage
						}),
						/* @__PURE__ */ jsxs(Button, {
							type: "submit",
							disabled: saveStatus === "saving",
							className: "h-12 rounded-xl bg-primary font-bold text-white",
							children: [/* @__PURE__ */ jsx(FloppyDisk, {
								weight: "bold",
								className: "size-4"
							}), saveStatus === "saving" ? "Сохранение..." : "Сохранить врача"]
						})
					]
				})
			})]
		})
	] });
}
function AdminShell({ children }) {
	return /* @__PURE__ */ jsx("main", {
		className: "min-h-screen bg-[#F4F8FB] px-4 py-8 text-[#15233A] md:px-8",
		children: /* @__PURE__ */ jsx("div", {
			className: "mx-auto max-w-[1360px]",
			children
		})
	});
}
function DoctorListRow({ doctor, isSelected, canMoveUp, canMoveDown, onSelect, onMoveUp, onMoveDown, onVisibility, onDelete }) {
	return /* @__PURE__ */ jsxs("article", {
		className: cn("grid gap-3 rounded-2xl border bg-white p-4 shadow-sm transition-colors sm:grid-cols-[4rem_1fr_auto] sm:items-center", isSelected ? "border-primary/45" : "border-[#D8E2EA]"),
		children: [
			/* @__PURE__ */ jsx("button", {
				type: "button",
				onClick: onSelect,
				className: "size-16 overflow-hidden rounded-2xl bg-[#F4F8FB] text-[#6B7C90]",
				children: doctor.photo ? /* @__PURE__ */ jsx("img", {
					src: doctor.photo,
					alt: "",
					className: "size-full object-cover"
				}) : /* @__PURE__ */ jsx("span", {
					className: "flex size-full items-center justify-center text-sm font-bold",
					children: doctor.name.ru.slice(0, 1)
				})
			}),
			/* @__PURE__ */ jsxs("button", {
				type: "button",
				onClick: onSelect,
				className: "min-w-0 text-left",
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "block truncate text-sm font-bold text-[#15233A]",
						children: doctor.name.ru
					}),
					/* @__PURE__ */ jsx("span", {
						className: "mt-1 block truncate text-xs font-semibold text-[#52657B]",
						children: doctor.specialty.ru
					}),
					/* @__PURE__ */ jsx("span", {
						className: "mt-2 inline-flex rounded-full bg-[#F4F8FB] px-2.5 py-1 text-[11px] font-bold text-[#52657B]",
						children: doctor.visible ? "Виден" : "Скрыт"
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex flex-wrap gap-2 sm:justify-end",
				children: [
					/* @__PURE__ */ jsx(IconButton, {
						label: "Переместить вверх",
						onClick: onMoveUp,
						disabled: !canMoveUp,
						children: /* @__PURE__ */ jsx(ArrowUp, { className: "size-4" })
					}),
					/* @__PURE__ */ jsx(IconButton, {
						label: "Переместить вниз",
						onClick: onMoveDown,
						disabled: !canMoveDown,
						children: /* @__PURE__ */ jsx(ArrowDown, { className: "size-4" })
					}),
					/* @__PURE__ */ jsx(IconButton, {
						label: doctor.visible ? "Скрыть" : "Показать",
						onClick: onVisibility,
						children: doctor.visible ? /* @__PURE__ */ jsx(EyeSlash, { className: "size-4" }) : /* @__PURE__ */ jsx(Eye, { className: "size-4" })
					}),
					/* @__PURE__ */ jsx(IconButton, {
						label: "Удалить",
						onClick: onDelete,
						children: /* @__PURE__ */ jsx(Trash, { className: "size-4" })
					})
				]
			})
		]
	});
}
function IconButton({ label, disabled, onClick, children }) {
	return /* @__PURE__ */ jsx("button", {
		type: "button",
		disabled,
		onClick,
		title: label,
		"aria-label": label,
		className: "flex size-9 items-center justify-center rounded-xl border border-[#D8E2EA] bg-white text-[#52657B] transition-colors hover:border-primary/30 hover:text-primary disabled:cursor-not-allowed disabled:opacity-40",
		children
	});
}
function Field({ label, children }) {
	return /* @__PURE__ */ jsxs("label", {
		className: "flex flex-col gap-2 text-sm font-bold text-[#15233A]",
		children: [label, children]
	});
}
function LocalizedFields({ language, editor, onChange }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "grid gap-4",
		children: [
			/* @__PURE__ */ jsx(Field, {
				label: language === "ru" ? "Имя (рус)" : "Аты (қаз)",
				children: /* @__PURE__ */ jsx(Input, {
					value: editor.name[language],
					onChange: (event) => updateLocalized(onChange, "name", language, event.target.value),
					className: inputClassName
				})
			}),
			/* @__PURE__ */ jsx(Field, {
				label: language === "ru" ? "Специальность (рус)" : "Мамандығы (қаз)",
				children: /* @__PURE__ */ jsx(Input, {
					value: editor.specialty[language],
					onChange: (event) => updateLocalized(onChange, "specialty", language, event.target.value),
					className: inputClassName
				})
			}),
			/* @__PURE__ */ jsx(Field, {
				label: language === "ru" ? "Описание (рус)" : "Сипаттама (қаз)",
				children: /* @__PURE__ */ jsx(Textarea, {
					value: editor.description[language],
					onChange: (event) => updateLocalized(onChange, "description", language, event.target.value),
					className: "min-h-32 resize-none rounded-xl border-[#DDE3E7] bg-[#FAFBFC]"
				})
			})
		]
	});
}
var inputClassName = "h-12 rounded-xl border-[#DDE3E7] bg-[#FAFBFC]";
function updateLocalized(onChange, field, language, value) {
	onChange((current) => ({
		...current,
		[field]: {
			...current[field],
			[language]: value
		}
	}));
}
function createBlankDoctor(sortOrder = 0) {
	return {
		slug: "",
		name: {
			ru: "",
			kk: ""
		},
		specialty: {
			ru: "",
			kk: ""
		},
		description: {
			ru: "",
			kk: ""
		},
		experienceYears: 0,
		serviceIds: [],
		photo: "",
		visible: true,
		sortOrder
	};
}
function toEditorState(doctor) {
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
		sortOrder: doctor.sortOrder
	};
}
function validateEditor(editor) {
	const errors = [];
	if (!editor.name.ru.trim() || !editor.name.kk.trim()) errors.push("Имя обязательно на обоих языках.");
	if (!editor.specialty.ru.trim() || !editor.specialty.kk.trim()) errors.push("Специальность обязательна на обоих языках.");
	if (!editor.description.ru.trim() || !editor.description.kk.trim()) errors.push("Описание обязательно на обоих языках.");
	if (editor.serviceIds.length === 0) errors.push("Выберите хотя бы одну услугу.");
	return errors;
}
function buildDoctorPayload(editor, photoStorageId) {
	return {
		slug: editor.slug.trim(),
		name: trimLocalized(editor.name),
		specialty: trimLocalized(editor.specialty),
		description: trimLocalized(editor.description),
		experienceYears: Number.isFinite(editor.experienceYears) ? editor.experienceYears : 0,
		serviceIds: editor.serviceIds,
		photoStorageId: photoStorageId ?? null,
		visible: editor.visible,
		sortOrder: Number.isFinite(editor.sortOrder) ? editor.sortOrder : 0
	};
}
function trimLocalized(text) {
	return {
		ru: text.ru.trim(),
		kk: text.kk.trim()
	};
}
function toggleService(serviceIds, serviceId) {
	return serviceIds.includes(serviceId) ? serviceIds.filter((item) => item !== serviceId) : [...serviceIds, serviceId];
}
var cyrillicToLatin = {
	а: "a",
	б: "b",
	в: "v",
	г: "g",
	д: "d",
	е: "e",
	ё: "yo",
	ж: "zh",
	з: "z",
	и: "i",
	й: "y",
	к: "k",
	л: "l",
	м: "m",
	н: "n",
	о: "o",
	п: "p",
	р: "r",
	с: "s",
	т: "t",
	у: "u",
	ф: "f",
	х: "kh",
	ц: "ts",
	ч: "ch",
	ш: "sh",
	щ: "shch",
	ъ: "",
	ы: "y",
	ь: "",
	э: "e",
	ю: "yu",
	я: "ya",
	ә: "a",
	ғ: "g",
	қ: "q",
	ң: "n",
	ө: "o",
	ұ: "u",
	ү: "u",
	і: "i",
	һ: "h"
};
function slugify(value) {
	return value.toLowerCase().split("").map((char) => cyrillicToLatin[char] ?? char).join("").replace(/[^a-z0-9-]+/g, "-").replace(/^-+|-+$/g, "").replace(/-{2,}/g, "-");
}
async function uploadPhoto(file, token, generateUploadUrl) {
	const preparedFile = await prepareImageForUpload(file);
	const uploadUrl = await generateUploadUrl({ token });
	const response = await fetch(uploadUrl, {
		method: "POST",
		headers: { "Content-Type": preparedFile.type || "image/jpeg" },
		body: preparedFile
	});
	if (!response.ok) throw new Error(`Photo upload failed with status ${response.status}`);
	return (await response.json()).storageId;
}
function isSupportedImageFile(file) {
	return supportedImageTypes.has(file.type) || /\.(jpe?g|png|webp)$/i.test(file.name);
}
async function prepareImageForUpload(file) {
	if (!isSupportedImageFile(file)) throw new Error("Выберите изображение в формате JPG, PNG или WEBP.");
	const image = await loadImage(file);
	const largestEdge = Math.max(image.naturalWidth, image.naturalHeight);
	const scale = Math.min(1, MAX_UPLOAD_IMAGE_EDGE / largestEdge);
	const width = Math.max(1, Math.round(image.naturalWidth * scale));
	const height = Math.max(1, Math.round(image.naturalHeight * scale));
	const canvas = document.createElement("canvas");
	const context = canvas.getContext("2d");
	if (!context) throw new Error("Не удалось подготовить фото для загрузки.");
	canvas.width = width;
	canvas.height = height;
	context.fillStyle = "#ffffff";
	context.fillRect(0, 0, width, height);
	context.drawImage(image, 0, 0, width, height);
	return await new Promise((resolve, reject) => {
		canvas.toBlob((blob) => {
			if (blob) {
				resolve(blob);
				return;
			}
			reject(/* @__PURE__ */ new Error("Не удалось подготовить фото для загрузки."));
		}, "image/jpeg", UPLOAD_JPEG_QUALITY);
	});
}
async function loadImage(file) {
	const objectUrl = URL.createObjectURL(file);
	const image = new Image();
	try {
		return await new Promise((resolve, reject) => {
			image.onload = () => resolve(image);
			image.onerror = () => reject(/* @__PURE__ */ new Error("Не удалось прочитать файл изображения."));
			image.src = objectUrl;
		});
	} finally {
		URL.revokeObjectURL(objectUrl);
	}
}
function getErrorMessage(error) {
	return error instanceof Error ? error.message : "Непредвиденная ошибка";
}
//#endregion
export { Admin as default };
