import { n as useLanguage, t as LanguageProvider } from "./assets/useLanguage-D1hkxYkq.js";
import { t as cn } from "./assets/utils-DVvWhTIj.js";
import * as React from "react";
import { StrictMode, Suspense, lazy, useEffect, useState } from "react";
import { renderToString } from "react-dom/server";
import { Link, Outlet, Route, Routes, StaticRouter, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { jsx, jsxs } from "react/jsx-runtime";
import { Clock, InstagramLogo, List, MapPin, Phone, WhatsappLogo, X } from "@phosphor-icons/react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X as X$1 } from "lucide-react";
import { ConvexProvider, ConvexReactClient } from "convex/react";
//#region src/assets/implantium-logo-cropped.png
var implantium_logo_cropped_default = "/assets/implantium-logo-cropped-DrnpNZVq.png";
//#endregion
//#region src/data/content.ts
var content = {
	ru: {
		nav: {
			home: "Главная",
			services: "Услуги",
			doctors: "Врачи",
			about: "О клинике",
			location: "Адрес",
			reviews: "Отзывы",
			contact: "Контакты"
		},
		common: {
			bookConsultation: "Записаться",
			call: "Позвонить",
			learnMore: "Подробнее",
			viewServices: "Посмотреть услуги",
			relatedServices: "Похожие услуги",
			notFoundTitle: "Страница не найдена",
			notFoundText: "К сожалению, мы не смогли найти страницу, которую вы ищете.",
			backToHome: "Вернуться на главную",
			allDoctors: "Все специалисты",
			ourDoctors: "Наши врачи",
			clinicName: "IMPLANTIUM",
			logoAlt: "Логотип IMPLANTIUM",
			openMenu: "Открыть меню",
			closeMenu: "Закрыть меню",
			languageRu: "Рус",
			languageKk: "Қаз",
			linkPending: "Ссылка будет добавлена",
			unavailableAction: "Скоро будет доступно"
		},
		hero: {
			badge: "Премиальная стоматология в Актау",
			headline: "Восстановите улыбку с уверенностью",
			subheadline: "Имплантация, ортодонтия, протезирование и лечение зубов в современной клинике с индивидуальным подходом.",
			trustBadges: [
				"Импланты Швейцарии и Южной Кореи",
				"Скидки до 40% на имплантацию",
				"Индивидуальный план лечения",
				"Комфортный и бережный подход"
			],
			floatingCards: {
				freeConsult: "Бесплатная консультация",
				discount: "До 40% скидка",
				experience: "10+ лет"
			},
			visualTitle: "Цифровая диагностика",
			visualText: "План лечения строится на точной картине и понятных этапах."
		},
		beforeAfter: {
			title: "До и после",
			subtitle: "Иллюстративный пример эстетического результата",
			label: "Иллюстративный пример",
			before: "До",
			after: "После",
			beforeText: "Исходная эстетическая ситуация",
			afterText: "Возможный визуальный результат после плана лечения"
		},
		patientJourney: {
			title: "Путь к здоровой улыбке",
			steps: [
				{
					title: "Консультация",
					desc: "Знакомство, жалобы и первичный осмотр"
				},
				{
					title: "Диагностика",
					desc: "Снимок, анализ и понятная клиническая картина"
				},
				{
					title: "План лечения",
					desc: "Этапы, материалы и ориентир по стоимости"
				},
				{
					title: "Процедура",
					desc: "Бережное лечение с комфортной анестезией"
				},
				{
					title: "Контроль результата",
					desc: "Осмотр, рекомендации и сопровождение"
				}
			]
		},
		whyChooseUs: {
			title: "Почему пациенты выбирают IMPLANTIUM",
			cards: [
				{
					title: "Современная диагностика",
					desc: "Точная оценка ситуации помогает выбрать спокойный и предсказуемый путь лечения."
				},
				{
					title: "Индивидуальный план",
					desc: "Врач объясняет этапы, сроки и материалы до начала процедур."
				},
				{
					title: "Надежные материалы",
					desc: "Подбираем решения с учетом нагрузки, эстетики и долгого срока службы."
				},
				{
					title: "Комфортный подход",
					desc: "Спокойная атмосфера и внимательная коммуникация снижают тревогу перед приемом."
				}
			]
		},
		about: {
			eyebrow: "С 2017 года",
			text: "IMPLANTIUM — стоматологическая клиника в Актау, работающая с 2017 года. Лечением занимается слаженная команда врачей: от диагностики и составления плана до проведения процедур и контроля результата.",
			trustTitle: "Осознанный подход к лечению",
			trustCards: [
				"Современная диагностика",
				"Индивидуальный план",
				"Надежные материалы",
				"Комфортный подход"
			],
			stats: [
				{
					value: "10+ лет",
					label: "Срок службы имплантов"
				},
				{
					value: "до 40%",
					label: "Скидка на имплантацию"
				},
				{
					value: "30–40 мин",
					label: "Профессиональная чистка"
				},
				{
					value: "10:00–22:00",
					label: "График работы"
				}
			]
		},
		doctors: {
			fallbackName: "Имя специалиста",
			fallbackDescription: "Информация о враче будет добавлена",
			fallbackPhoto: "Фото врача",
			chooseDoctor: "Записаться к специалисту"
		},
		location: {
			title: "Ждем вас в клинике",
			addressLabel: "Адрес",
			hoursLabel: "Режим работы",
			phoneLabel: "Телефон",
			address: "13 микрорайон, дом 39, стоматологическая клиника IMPLANTIUM",
			hours: [
				"Понедельник – суббота: 10:00–22:00",
				"Воскресенье: 10:00–14:00",
				"Имплантолог и ортодонт принимают до 19:00"
			],
			open2gis: "Открыть в 2GIS",
			buildRoute: "Построить маршрут",
			mapPending: "Карта будет добавлена",
			mapHint: "Схема проезда появится после подключения карты"
		},
		reviews: {
			title: "Ваше впечатление помогает другим пациентам",
			text: "Если вы уже были в IMPLANTIUM, отзыв в 2GIS поможет новым пациентам спокойнее выбрать клинику.",
			btn: "Оставить отзыв в 2GIS",
			placeholders: [
				"Можно поделиться впечатлением о консультации",
				"Можно отметить атмосферу и отношение команды",
				"Можно рассказать, насколько понятным был план лечения"
			]
		},
		booking: {
			title: "Запишитесь на прием",
			name: "Имя",
			nameErr: "Введите имя",
			phone: "Номер телефона",
			phoneErr: "Введите номер телефона",
			service: "Услуга",
			serviceSelect: "Выберите услугу",
			serviceErr: "Выберите услугу",
			date: "Желаемая дата",
			comment: "Комментарий",
			submit: "Отправить заявку",
			submitting: "Отправка...",
			success: "Спасибо! Клиника свяжется с вами в ближайшее время.",
			ctaText: "Запишитесь на консультацию — врач проведет диагностику и подберет подходящий план лечения.",
			sendAgain: "Отправить еще раз",
			messengerCta: "Написать в мессенджер",
			phoneCta: "Позвонить",
			trustList: [
				"Бесплатная консультация",
				"Индивидуальный план",
				"Свяжемся в ближайшее время"
			]
		},
		footer: {
			rights: "Все права защищены.",
			socials: "Социальные сети"
		},
		serviceDetail: {
			heroKicker: "Услуга клиники",
			priceLabel: "Ориентир по стоимости",
			timelineLabel: "Сроки лечения",
			benefitsTitle: "Что дает лечение",
			processTitle: "Как проходит процедура",
			doctorsTitle: "Специалисты по этой услуге",
			bookDoctor: "Записаться к врачу",
			faqTitle: "Частые вопросы",
			readyTitle: "Готовы записаться?",
			visualTitle: "План лечения",
			visualText: "Врач объяснит этапы, сроки и подходящие материалы после диагностики."
		}
	},
	kk: {
		nav: {
			home: "Басты бет",
			services: "Қызметтер",
			doctors: "Дәрігерлер",
			about: "Клиника туралы",
			location: "Орналасуы",
			reviews: "Пікірлер",
			contact: "Байланыс"
		},
		common: {
			bookConsultation: "Жазылу",
			call: "Қоңырау шалу",
			learnMore: "Толығырақ",
			viewServices: "Қызметтерді көру",
			relatedServices: "Ұқсас қызметтер",
			notFoundTitle: "Бет табылмады",
			notFoundText: "Кешіріңіз, сіз іздеген бетті таба алмадық.",
			backToHome: "Басты бетке оралу",
			allDoctors: "Барлық мамандар",
			ourDoctors: "Біздің дәрігерлер",
			clinicName: "IMPLANTIUM",
			logoAlt: "IMPLANTIUM логотипі",
			openMenu: "Мәзірді ашу",
			closeMenu: "Мәзірді жабу",
			languageRu: "Рус",
			languageKk: "Қаз",
			linkPending: "Сілтеме кейін қосылады",
			unavailableAction: "Жақында қолжетімді болады"
		},
		hero: {
			badge: "Ақтаудағы премиум стоматология",
			headline: "Күлкіңізді сенімді түрде қалпына келтіріңіз",
			subheadline: "Имплантация, ортодонтия, протездеу және тіс емдеу — заманауи клиникада жеке тәсілмен.",
			trustBadges: [
				"Швейцария және Оңтүстік Корея импланттары",
				"Имплантацияға 40%-ға дейін жеңілдік",
				"Жеке емдеу жоспары",
				"Жайлы әрі ұқыпты тәсіл"
			],
			floatingCards: {
				freeConsult: "Тегін консультация",
				discount: "40%-ға дейін жеңілдік",
				experience: "10+ жыл"
			},
			visualTitle: "Цифрлық диагностика",
			visualText: "Емдеу жоспары нақты көрініске және түсінікті кезеңдерге негізделеді."
		},
		beforeAfter: {
			title: "Дейін және кейін",
			subtitle: "Эстетикалық нәтижеге арналған иллюстрациялық мысал",
			label: "Иллюстрациялық мысал",
			before: "Дейін",
			after: "Кейін",
			beforeText: "Бастапқы эстетикалық жағдай",
			afterText: "Емдеу жоспарынан кейінгі ықтимал визуалды нәтиже"
		},
		patientJourney: {
			title: "Сау күлкіге апарар жол",
			steps: [
				{
					title: "Кеңес",
					desc: "Танысу, шағымдар және алғашқы тексеру"
				},
				{
					title: "Диагностика",
					desc: "Сурет, талдау және нақты клиникалық көрініс"
				},
				{
					title: "Емдеу жоспары",
					desc: "Кезеңдер, материалдар және құн бағдары"
				},
				{
					title: "Процедура",
					desc: "Жайлы анестезиямен ұқыпты емдеу"
				},
				{
					title: "Нәтижені бақылау",
					desc: "Тексеру, ұсыныстар және сүйемелдеу"
				}
			]
		},
		whyChooseUs: {
			title: "Неліктен пациенттер IMPLANTIUM таңдайды",
			cards: [
				{
					title: "Заманауи диагностика",
					desc: "Жағдайды дәл бағалау емдеудің тыныш әрі болжамды жолын таңдауға көмектеседі."
				},
				{
					title: "Жеке жоспар",
					desc: "Дәрігер процедураға дейін кезеңдерді, мерзімді және материалдарды түсіндіреді."
				},
				{
					title: "Сенімді материалдар",
					desc: "Шешімдер жүктемеге, эстетикаға және ұзақ қызметке қарай таңдалады."
				},
				{
					title: "Жайлы тәсіл",
					desc: "Тыныш атмосфера және мұқият байланыс қабылдау алдындағы уайымды азайтады."
				}
			]
		},
		about: {
			eyebrow: "2017 жылдан бері",
			text: "IMPLANTIUM — Ақтаудағы стоматологиялық клиника, 2017 жылдан бері жұмыс істеп келеді. Емді білікті дәрігерлер командасы жүргізеді: диагностикадан және ем жоспарын құрудан бастап, процедуралар мен нәтижені бақылауға дейін.",
			trustTitle: "Емдеуге саналы көзқарас",
			trustCards: [
				"Заманауи диагностика",
				"Жеке жоспар",
				"Сенімді материалдар",
				"Жайлы тәсіл"
			],
			stats: [
				{
					value: "10+ жыл",
					label: "Имплант қызметі"
				},
				{
					value: "40%-ға дейін",
					label: "Имплантацияға жеңілдік"
				},
				{
					value: "30–40 мин",
					label: "Кәсіби тазалау"
				},
				{
					value: "10:00–22:00",
					label: "Жұмыс уақыты"
				}
			]
		},
		doctors: {
			fallbackName: "Маманның аты",
			fallbackDescription: "Дәрігер туралы ақпарат кейін қосылады",
			fallbackPhoto: "Дәрігер фотосы",
			chooseDoctor: "Маманға жазылу"
		},
		location: {
			title: "Сізді клиникада күтеміз",
			addressLabel: "Мекенжай",
			hoursLabel: "Жұмыс уақыты",
			phoneLabel: "Телефон",
			address: "13 шағын аудан, 39 үй, IMPLANTIUM стоматологиялық клиникасы",
			hours: [
				"Дүйсенбі – сенбі: 10:00–22:00",
				"Жексенбі: 10:00–14:00",
				"Имплантолог және ортодонт 19:00-ге дейін қабылдайды"
			],
			open2gis: "2GIS-та ашу",
			buildRoute: "Бағыт құру",
			mapPending: "Карта кейін қосылады",
			mapHint: "Карта қосылғаннан кейін бағыт сызбасы көрсетіледі"
		},
		reviews: {
			title: "Сіздің әсеріңіз басқа пациенттерге көмектеседі",
			text: "Егер сіз IMPLANTIUM клиникасында болған болсаңыз, 2GIS-тағы пікір жаңа пациенттерге сенімді таңдау жасауға көмектеседі.",
			btn: "2GIS-та пікір қалдыру",
			placeholders: [
				"Консультация туралы әсермен бөлісуге болады",
				"Атмосфера мен команда қарым-қатынасын атап өтуге болады",
				"Емдеу жоспары қаншалықты түсінікті болғанын айтуға болады"
			]
		},
		booking: {
			title: "Қабылдауға жазылу",
			name: "Атыңыз",
			nameErr: "Атыңызды енгізіңіз",
			phone: "Телефон нөмірі",
			phoneErr: "Телефон нөмірін енгізіңіз",
			service: "Қызмет түрі",
			serviceSelect: "Қызметті таңдаңыз",
			serviceErr: "Қызметті таңдаңыз",
			date: "Қалаған күн",
			comment: "Пікіріңіз",
			submit: "Өтінім жіберу",
			submitting: "Жіберілуде...",
			success: "Рақмет! Клиника сізбен жақын уақытта байланысады.",
			ctaText: "Кеңеске жазылыңыз — дәрігер диагностика жасап, сізге қолайлы емдеу жоспарын ұсынады.",
			sendAgain: "Тағы жіберу",
			messengerCta: "Мессенджерге жазу",
			phoneCta: "Қоңырау шалу",
			trustList: [
				"Тегін консультация",
				"Жеке жоспар",
				"Жақын уақытта хабарласамыз"
			]
		},
		footer: {
			rights: "Барлық құқықтар қорғалған.",
			socials: "Әлеуметтік желілер"
		},
		serviceDetail: {
			heroKicker: "Клиника қызметі",
			priceLabel: "Баға бағдары",
			timelineLabel: "Емдеу мерзімі",
			benefitsTitle: "Емдеу не береді",
			processTitle: "Процедура қалай өтеді",
			doctorsTitle: "Осы қызмет бойынша мамандар",
			bookDoctor: "Дәрігерге жазылу",
			faqTitle: "Жиі қойылатын сұрақтар",
			readyTitle: "Жазылуға дайынсыз ба?",
			visualTitle: "Емдеу жоспары",
			visualText: "Дәрігер диагностикадан кейін кезеңдерді, мерзімді және қолайлы материалдарды түсіндіреді."
		}
	}
};
//#endregion
//#region src/data/landing.ts
var landingCopy = {
	ru: {
		hero: {
			eyebrow: "Стоматология в Актау",
			lineOne: "Современная",
			lineTwo: "стоматология",
			accent: "для здоровой улыбки",
			lineThree: "в Актау",
			subheadline: "Наша миссия — совершенное лечение там, где постоянное развитие.",
			primaryCta: "Записаться на прием",
			secondaryCta: "Узнать больше",
			imageAlt: "3D визуализация зубного импланта и коронок на светлом подиуме"
		},
		trustBadges: [
			"Безопасное лечение",
			"Опытные специалисты",
			"Индивидуальный подход",
			"Прозрачные цены"
		],
		services: {
			title: "Выберите услугу",
			allServices: "Все услуги",
			panelLabel: "Направление",
			specialistsTitle: "Специалисты по направлению",
			pricesTitle: "Ориентир по стоимости",
			faqTitle: "Часто задаваемые вопросы",
			consultationNote: "Только консультация бесплатная, 3D рентген платный",
			book: "Записаться на консультацию",
			details: "Подробнее об услуге",
			promptTitle: "Есть вопросы по лечению?",
			promptText: "Запишитесь на консультацию, врач подскажет подходящий план."
		},
		contact: {
			title: "Мы находимся в Актау",
			address: "13 мкр., дом 39, стоматологическая клиника IMPLANTIUM",
			phonePending: "Телефон будет добавлен",
			whatsappPending: "WhatsApp будет добавлен",
			hoursWeek: "Понедельник - суббота: 10:00 - 22:00",
			hoursSunday: "Воскресенье: 10:00 - 14:00",
			hoursDoctors: "Имплантолог и ортодонт принимают до 19:00",
			mapLabel: "IMPLANTIUM, 13 мкр., дом 39"
		},
		reviews: {
			rating: "4.8+",
			basedOn: "выбранные 5-звездочные отзывы пациентов из 2GIS",
			source: "2GIS",
			title: "Отзывы помогают новым пациентам выбрать клинику спокойнее",
			selectedLabel: "350+ отзывов",
			starsLabel: "Пять звезд",
			viewAll: "Смотреть все отзывы в 2GIS",
			openSource: "Открыть отзыв"
		},
		footer: {
			tagline: "Здоровая улыбка - наша работа и ваша уверенность.",
			privacy: "Политика конфиденциальности"
		}
	},
	kk: {
		hero: {
			eyebrow: "Ақтаудағы стоматология",
			lineOne: "Ақтаудағы",
			lineTwo: "заманауи стоматология",
			accent: "Сау әрі әдемі күлкіге",
			lineThree: "сенімді қадам.",
			subheadline: "Біздің миссия — мүлтіксіз ем, үздіксіз дамуда.",
			primaryCta: "Қабылдауға жазылу",
			secondaryCta: "Толығырақ білу",
			imageAlt: "Ашық подиумдағы тіс импланты мен тістердің 3D көрінісі"
		},
		trustBadges: [
			"Қауіпсіз емдеу",
			"Тәжірибелі мамандар",
			"Жеке тәсіл",
			"Ашық баға"
		],
		services: {
			title: "Қызметті таңдаңыз",
			allServices: "Барлық қызметтер",
			panelLabel: "Бағыт",
			specialistsTitle: "Осы бағыттағы мамандар",
			pricesTitle: "Баға бағдары",
			faqTitle: "Жиі қойылатын сұрақтар",
			consultationNote: "Тек кеңес алу тегін, 3D рентген ақылы",
			book: "Кеңеске жазылу",
			details: "Қызмет туралы толығырақ",
			promptTitle: "Сұрақтарыңыз бар ма?",
			promptText: "Кеңеске жазылыңыз, дәрігер сізге қолайлы ем жоспарын ұсынады."
		},
		contact: {
			title: "Біз Ақтауда орналасқанбыз",
			address: "13 шағын аудан, 39 үй, IMPLANTIUM стоматологиялық клиникасы",
			phonePending: "Телефон кейін қосылады",
			whatsappPending: "WhatsApp кейін қосылады",
			hoursWeek: "Дүйсенбі - сенбі: 10:00 - 22:00",
			hoursSunday: "Жексенбі: 10:00 - 14:00",
			hoursDoctors: "Имплантолог пен ортодонт 19:00-ге дейін қабылдайды",
			mapLabel: "IMPLANTIUM, 13 шағын аудан, 39 үй"
		},
		reviews: {
			rating: "4.8+",
			basedOn: "2GIS-тен таңдалған 5 жұлдызды пациент пікірлері",
			source: "2GIS",
			title: "Пікірлер жаңа пациенттерге клиниканы сеніммен таңдауға көмектеседі.",
			selectedLabel: "350+ пікір",
			starsLabel: "Бес жұлдыз",
			viewAll: "2GIS-тегі барлық пікірлерді көру",
			openSource: "Пікірді оқу"
		},
		footer: {
			tagline: "Сау күлкі - біздің жұмысымыз және сіздің сенімділігіңіз.",
			privacy: "Құпиялылық саясаты"
		}
	}
};
var landingServices = [
	{
		id: "implants-panel",
		serviceId: "implants",
		iconName: "Tooth",
		shortTitle: {
			ru: "Имплантация",
			kk: "Имплантация"
		},
		title: {
			ru: "Имплантация зубов",
			kk: "Тіс имплантациясы"
		},
		summary: {
			ru: "Надежное решение для восстановления утраченных зубов. Имплант выглядит и ощущается как собственный зуб.",
			kk: "Жоғалған тістерді қалпына келтірудің сенімді жолы. Имплант табиғи тіс сияқты көрінеді және сезіледі."
		},
		bullets: {
			ru: [
				"Импортные импланты базового и премиум-класса",
				"Подбор системы под кость, нагрузку и бюджет",
				"Коронка устанавливается после приживления",
				"Гарантия на импланты и работу"
			],
			kk: [
				"Базалық және премиум кластағы импорттық импланттар",
				"Сүйекке, жүктемеге және бюджетке сай таңдау",
				"Қаптама имплант біткеннен кейін орнатылады",
				"Имплант пен жұмысқа кепілдік"
			]
		},
		prices: [
			{
				label: {
					ru: "Импланты",
					kk: "Импланттар"
				},
				value: {
					ru: "от 89 000 до 500 000 тг",
					kk: "89 000-нан 500 000 тг дейін"
				}
			},
			{
				label: {
					ru: "Коронка на имплант, металлокерамика",
					kk: "Имплантқа қаптама, металлокерамика"
				},
				value: {
					ru: "80 000 тг",
					kk: "80 000 тг"
				}
			},
			{
				label: {
					ru: "Коронка на имплант, циркон",
					kk: "Имплантқа қаптама, циркон"
				},
				value: {
					ru: "90 000 тг",
					kk: "90 000 тг"
				}
			},
			{
				label: {
					ru: "Абатменты",
					kk: "Абатменттер"
				},
				value: {
					ru: "от 25 000 тг",
					kk: "25 000 тг бастап"
				}
			}
		],
		specialists: [{
			title: {
				ru: "Имплантолог",
				kk: "Имплантолог"
			},
			description: {
				ru: "Диагностика, план установки и контроль приживления.",
				kk: "Диагностика, орнату жоспары және бітуін бақылау."
			}
		}, {
			title: {
				ru: "Хирург-стоматолог",
				kk: "Хирург-стоматолог"
			},
			description: {
				ru: "Подготовка костной ткани и бережная хирургия.",
				kk: "Сүйек тінін дайындау және ұқыпты хирургия."
			}
		}],
		faqs: [
			{
				question: {
					ru: "Больно ли устанавливать имплант?",
					kk: "Имплант орнату ауырта ма?"
				},
				answer: {
					ru: "Процедура проходит под местной анестезией, поэтому боли быть не должно.",
					kk: "Процедура жергілікті анестезиямен өтеді, сондықтан ауырсыну сезілмейді."
				}
			},
			{
				question: {
					ru: "Сколько длится установка импланта?",
					kk: "Имплант орнату қанша уақыт алады?"
				},
				answer: {
					ru: "Установка одного импланта обычно занимает от 15 минут до часа. Если имплантов несколько, процедура длится от часа.",
					kk: "Бір имплант орнату әдетте 15 минуттан 1 сағатқа дейін. Импланттар бірнеше болса, процедура 1 сағаттан басталады."
				}
			},
			{
				question: {
					ru: "Когда ставится коронка?",
					kk: "Қаптама қашан қойылады?"
				},
				answer: {
					ru: "Постоянная коронка обычно ставится после приживления импланта.",
					kk: "Тұрақты қаптама әдетте имплант біткеннен кейін қойылады."
				}
			}
		]
	},
	{
		id: "crowns-panel",
		serviceId: "crowns",
		iconName: "Smiley",
		shortTitle: {
			ru: "Коронки",
			kk: "Қаптамалар"
		},
		title: {
			ru: "Коронки на зубы",
			kk: "Тіс қаптамалары"
		},
		summary: {
			ru: "Коронки восстанавливают форму, функцию и эстетику зуба, если он разрушен или изменил цвет.",
			kk: "Қаптамалар тіс бұзылғанда немесе түсі өзгергенде оның пішінін, қызметін және эстетикасын қалпына келтіреді."
		},
		bullets: {
			ru: [
				"Металлокерамика - надежный доступный вариант",
				"Циркон - прочный и эстетичный материал",
				"Съемные протезы и виниры",
				"Подбор цвета под естественную улыбку",
				"Средний срок службы 10-15 лет"
			],
			kk: [
				"Металлокерамика - сенімді әрі қолжетімді нұсқа",
				"Циркон - берік және эстетикалық материал",
				"Кәдімгі протездер мен винирлер",
				"Түсті табиғи күлкіге сай таңдау",
				"Орташа қызмет мерзімі 10-15 жыл"
			]
		},
		prices: [
			{
				label: {
					ru: "Металлокерамика",
					kk: "Металлокерамика"
				},
				value: {
					ru: "45 000 тг",
					kk: "45 000 тг"
				}
			},
			{
				label: {
					ru: "Циркон",
					kk: "Циркон"
				},
				value: {
					ru: "80 000 тг",
					kk: "80 000 тг"
				}
			},
			{
				label: {
					ru: "Виниры",
					kk: "Винирлер"
				},
				value: {
					ru: "от 100 000 тг",
					kk: "100 000 тг бастап"
				}
			}
		],
		specialists: [{
			title: {
				ru: "Ортопед",
				kk: "Ортопед"
			},
			description: {
				ru: "Подбирает материал, оттенок и конструкцию коронки.",
				kk: "Қаптаманың материалы, түсі және құрылымын таңдайды."
			}
		}, {
			title: {
				ru: "Терапевт-стоматолог",
				kk: "Стоматолог-терапевт"
			},
			description: {
				ru: "Готовит зуб к восстановлению, если требуется лечение.",
				kk: "Қажет болса, тісті қалпына келтіруге дайындайды."
			}
		}],
		faqs: [
			{
				question: {
					ru: "Чем коронка отличается от винира?",
					kk: "Қаптама винирден несімен ерекшеленеді?"
				},
				answer: {
					ru: "Коронка полностью покрывает зуб и подходит при сильном разрушении или после лечения каналов. Винир — тонкая накладка на переднюю поверхность, её чаще выбирают для эстетики передних зубов.",
					kk: "Қаптама тісті толығымен жабады және қатты бұзылған немесе түбір емделген жағдайда қолданылады. Винир — алдыңғы бетке қойылатын жұқа қабат, көбіне алдыңғы тістердің эстетикасы үшін таңдалады."
				}
			},
			{
				question: {
					ru: "Что лучше для передних зубов — коронка или винир?",
					kk: "Алдыңғы тістерге қаптама ма, винир ме жақсы?"
				},
				answer: {
					ru: "Если зуб здоров и нужно улучшить форму или цвет — чаще подходят виниры. Если зуб сильно разрушен или ослаблен — надёжнее коронка. Окончательное решение принимает врач после осмотра.",
					kk: "Тіс сау болса және пішіні мен түсін жақсарту керек болса — жиі винир таңдалады. Тіс қатты бұзылған немесе әлсіреген болса — қаптама сенімдірек. Соңғы шешімді дәрігер тексеруден кейін қабылдайды."
				}
			},
			{
				question: {
					ru: "Чем отличается циркон от металлокерамики?",
					kk: "Циркон металлокерамикадан несімен ерекшеленеді?"
				},
				answer: {
					ru: "Циркон эстетичнее и прочнее, металлокерамика обычно доступнее по цене.",
					kk: "Циркон әдемірек әрі берік, металлокерамика көбіне бағасы қолжетімді."
				}
			},
			{
				question: {
					ru: "Как выбрать материал?",
					kk: "Материал қалай таңдалады?"
				},
				answer: {
					ru: "На консультации врач покажет варианты и подберет решение под зуб, нагрузку и бюджет.",
					kk: "Кеңесте дәрігер нұсқаларды көрсетіп, тіс, жүктеме және бюджетке сай шешім ұсынады."
				}
			}
		]
	},
	{
		id: "dentures-panel",
		serviceId: "dentures",
		iconName: "Smiley",
		shortTitle: {
			ru: "Протезы",
			kk: "Тіс протездері"
		},
		title: {
			ru: "Съёмные и несъёмные протезы",
			kk: "Алмалы және тұрақты протездер"
		},
		summary: {
			ru: "Протезы восстанавливают утраченные зубы — снова удобно жевать и уверенно улыбаться. Есть съёмные и фиксированные на имплантах решения.",
			kk: "Тіс протездері жоғалған тістерді қалпына келтіреді — қайта ыңғайлы шайнауға және сенімді күлуге көмектеседі. Алмалы және импланттағы тұрақты шешімдер бар."
		},
		bullets: {
			ru: [
				"Акриловый, бюгельный, Valplast и вакуумный протез",
				"Несъёмные протезы на имплантах",
				"Подбор под количество зубов и бюджет",
				"Коррекция посадки для комфорта"
			],
			kk: [
				"Акрил, бюгель, Valplast және вакуумды протез",
				"Импланттағы тұрақты протездер",
				"Тіс саны мен бюджетке сай таңдау",
				"Ыңғайлылық үшін отыруын түзету"
			]
		},
		prices: [
			{
				label: {
					ru: "Съёмный протез на одну челюсть",
					kk: "Бір жаққа алмалы протез"
				},
				value: {
					ru: "от 50 000 тг",
					kk: "50 000 тг бастап"
				}
			},
			{
				label: {
					ru: "Бюгельный протез",
					kk: "Бюгельді протез"
				},
				value: {
					ru: "от 120 000 тг",
					kk: "120 000 тг бастап"
				}
			},
			{
				label: {
					ru: "Протез на имплантах",
					kk: "Импланттағы протез"
				},
				value: {
					ru: "индивидуально",
					kk: "жеке есеп"
				}
			}
		],
		specialists: [{
			title: {
				ru: "Ортопед",
				kk: "Ортопед"
			},
			description: {
				ru: "Подбирает тип протеза, материал и план лечения.",
				kk: "Протез түрі, материал және ем жоспарын таңдайды."
			}
		}],
		faqs: [{
			question: {
				ru: "Чем отличается съёмный протез от несъёмного?",
				kk: "Алмалы протез тұрақты протезден несімен ерекшеленеді?"
			},
			answer: {
				ru: "Съёмный можно снимать для ухода, несъёмный фиксируется на имплантах. Врач подскажет, что подойдёт именно вам.",
				kk: "Алмалыны күтім үшін шешуге болады, тұрақтысы имплантқа бекітіледі. Дәрігер сізге қайсысы қолайлы екенін айтады."
			}
		}, {
			question: {
				ru: "Сколько длится изготовление протеза?",
				kk: "Протез жасау қанша уақыт алады?"
			},
			answer: {
				ru: "Обычно 2–3 недели: слепки, примерка и коррекция посадки.",
				kk: "Әдетте 2–3 апта: қалып алу, өлшеп көру және отыруын түзету."
			}
		}]
	},
	{
		id: "treatment-panel",
		serviceId: "treatment",
		iconName: "Heartbeat",
		shortTitle: {
			ru: "Лечение зубов",
			kk: "Тіс емдеу"
		},
		title: {
			ru: "Лечение кариеса и каналов",
			kk: "Кариес пен түбір өзектерін емдеу"
		},
		summary: {
			ru: "Восстанавливаем поврежденный зуб и помогаем остановить дальнейшее разрушение.",
			kk: "Зақымдалған тісті қалпына келтіріп, әрі қарай бұзылуын тоқтатуға көмектесеміз."
		},
		bullets: {
			ru: [
				"Диагностика и снимок перед лечением",
				"Анестезия для комфортной процедуры",
				"Качественные материалы для пломб",
				"Понятный план до начала лечения"
			],
			kk: [
				"Емге дейін диагностика және рентген",
				"Жайлы процедура үшін анестезия",
				"Пломбаға сапалы материалдар",
				"Ем басталғанға дейін түсінікті жоспар"
			]
		},
		prices: [
			{
				label: {
					ru: "Поверхностный кариес",
					kk: "Беткей тіс жегісі"
				},
				value: {
					ru: "от 20 000 тг",
					kk: "20 000 тг бастап"
				}
			},
			{
				label: {
					ru: "Глубокий кариес",
					kk: "Терең тіс жегісі"
				},
				value: {
					ru: "от 30 000 тг",
					kk: "30 000 тг бастап"
				}
			},
			{
				label: {
					ru: "Пульпит",
					kk: "Пульпит"
				},
				value: {
					ru: "от 35 000 тг",
					kk: "35 000 тг бастап"
				}
			},
			{
				label: {
					ru: "Периодонтит",
					kk: "Периодонтит"
				},
				value: {
					ru: "от 40 000 тг",
					kk: "40 000 тг бастап"
				},
				note: {
					ru: "Цена зависит от сложности лечения",
					kk: "Баға емдеу күрделілігіне байланысты"
				}
			}
		],
		specialists: [{
			title: {
				ru: "Терапевт-стоматолог",
				kk: "Стоматолог-терапевт"
			},
			description: {
				ru: "Лечит кариес, каналы и восстанавливает форму зуба.",
				kk: "Кариес, түбір өзектерін емдеп, тіс пішінін қалпына келтіреді."
			}
		}],
		faqs: [{
			question: {
				ru: "Когда нужно лечить кариес?",
				kk: "Кариесті қашан емдеу керек?"
			},
			answer: {
				ru: "Лучше обращаться при первых признаках дискомфорта, реакции на холодное или сладкое.",
				kk: "Ыңғайсыздық, суыққа немесе тәттіге сезімталдық пайда болса, ертерек келген дұрыс."
			}
		}, {
			question: {
				ru: "Всегда ли нужен снимок?",
				kk: "Әрқашан рентген керек пе?"
			},
			answer: {
				ru: "Врач решает после осмотра, но снимок помогает увидеть глубину проблемы.",
				kk: "Дәрігер тексеруден кейін шешеді, бірақ рентген мәселенің тереңдігін көруге көмектеседі."
			}
		}]
	},
	{
		id: "extraction-panel",
		serviceId: "tooth-extraction",
		iconName: "FirstAidKit",
		shortTitle: {
			ru: "Удаление",
			kk: "Жұлу"
		},
		title: {
			ru: "Удаление зубов",
			kk: "Тіс жұлу"
		},
		summary: {
			ru: "Бережное удаление под анестезией, когда зуб невозможно сохранить или он мешает лечению.",
			kk: "Тісті сақтау мүмкін болмағанда немесе емге кедергі келтірсе, анестезиямен ұқыпты жұлу."
		},
		bullets: {
			ru: [
				"Процедура проводится под анестезией",
				"Врач дает рекомендации по восстановлению",
				"Подходит для проблемных зубов мудрости",
				"Обычно дискомфорт проходит за несколько дней"
			],
			kk: [
				"Процедура анестезиямен жасалады",
				"Дәрігер қалпына келу бойынша ұсыныс береді",
				"Проблемалы ақыл тістерге де қолайлы",
				"Әдетте ыңғайсыздық бірнеше күнде азаяды"
			]
		},
		prices: [{
			label: {
				ru: "Удаление зуба",
				kk: "Тіс жұлу"
			},
			value: {
				ru: "от 18 000 тг",
				kk: "18 000 тг бастап"
			},
			note: {
				ru: "Цена зависит от сложности удаления",
				kk: "Баға жұлу күрделілігіне байланысты"
			}
		}],
		specialists: [{
			title: {
				ru: "Хирург-стоматолог",
				kk: "Хирург-стоматолог"
			},
			description: {
				ru: "Проводит удаление и контролирует восстановление.",
				kk: "Жұлуды жүргізіп, қалпына келуді бақылайды."
			}
		}],
		faqs: [{
			question: {
				ru: "Будет ли больно?",
				kk: "Ауырта ма?"
			},
			answer: {
				ru: "Во время процедуры работает анестезия, пациент обычно чувствует только давление.",
				kk: "Процедура кезінде анестезия әсер етеді, пациент көбіне тек қысымды сезеді."
			}
		}, {
			question: {
				ru: "Сколько длится восстановление?",
				kk: "Қалпына келу қанша уақыт алады?"
			},
			answer: {
				ru: "Легкий дискомфорт обычно держится 3-5 дней, полное заживление занимает 1-2 недели.",
				kk: "Жеңіл ыңғайсыздық әдетте 3-5 күн, толық жазылу 1-2 апта болады."
			}
		}]
	},
	{
		id: "cleaning-panel",
		serviceId: "cleaning",
		iconName: "ShieldCheck",
		shortTitle: {
			ru: "Чистка",
			kk: "Тазалау"
		},
		title: {
			ru: "Профессиональная чистка",
			kk: "Кәсіби тіс тазалау"
		},
		summary: {
			ru: "Удаление зубного камня и налета, полировка и фторирование для свежего дыхания и профилактики.",
			kk: "Тіс тасын және қақты кетіру, жылтырату және фторлау - таза тыныс пен профилактика үшін."
		},
		bullets: {
			ru: [
				"Снятие зубных отложений ультразвуковым аппаратом",
				"Снятие зубного налета с аппаратом «Air Flow»",
				"Полировка зубов специальной пастой"
			],
			kk: [
				"Ультрадыбыстық аппаратпен тіс қалдықтарын алу",
				"«Air Flow» аппаратымен тіс қағын кетіру",
				"Тістерді арнайы пастамен жылтырату"
			]
		},
		prices: [{
			label: {
				ru: "Профессиональная гигиена (3 этапа)",
				kk: "Кәсіби гигиена (3 кезең)"
			},
			value: {
				ru: "30 000 тг",
				kk: "30 000 тг"
			}
		}],
		specialists: [{
			title: {
				ru: "Терапевт-стоматолог",
				kk: "Стоматолог-терапевт"
			},
			description: {
				ru: "Проводит осмотр, чистку и профилактические рекомендации.",
				kk: "Тексеру, тазалау және профилактикалық ұсыныстар береді."
			}
		}],
		faqs: [{
			question: {
				ru: "Сколько длится чистка?",
				kk: "Тіс тазалау қанша уақыт алады?"
			},
			answer: {
				ru: "Обычно процедура занимает 30-40 минут.",
				kk: "Әдетте процедура 30-40 минут алады."
			}
		}, {
			question: {
				ru: "Это больно?",
				kk: "Бұл ауырта ма?"
			},
			answer: {
				ru: "Профессиональная чистка обычно проходит без боли.",
				kk: "Кәсіби тазалау әдетте ауырсынусыз өтеді."
			}
		}]
	},
	{
		id: "braces-panel",
		serviceId: "braces",
		iconName: "Smiley",
		shortTitle: {
			ru: "Брекеты",
			kk: "Брекеттер"
		},
		title: {
			ru: "Брекеты на одну челюсть",
			kk: "Бір жаққа брекет"
		},
		summary: {
			ru: "Исправление прикуса и выравнивание зубов с подбором системы под клиническую ситуацию.",
			kk: "Клиникалық жағдайға сай жүйе таңдап, тістемді түзету және тістерді тегістеу."
		},
		bullets: {
			ru: [
				"Металлические и самолигирующие системы",
				"Индивидуальный план ортодонта",
				"Регулярные коррекции по графику",
				"Есть акционные цены на металлические брекеты"
			],
			kk: [
				"Металл және өздігінен байланатын жүйелер",
				"Ортодонттың жеке жоспары",
				"Кесте бойынша тұрақты түзету",
				"Металл брекеттерге акция бағалары бар"
			]
		},
		prices: [
			{
				label: {
					ru: "Металлические, Китай",
					kk: "Металл, Қытай"
				},
				value: {
					ru: "100 000 тг",
					kk: "100 000 тг"
				},
				note: {
					ru: "со скидкой 70 000 тг",
					kk: "жеңілдікпен 70 000 тг"
				}
			},
			{
				label: {
					ru: "Металлические, США",
					kk: "Металл, АҚШ"
				},
				value: {
					ru: "140 000 тг",
					kk: "140 000 тг"
				},
				note: {
					ru: "со скидкой 100 000 тг",
					kk: "жеңілдікпен 100 000 тг"
				}
			},
			{
				label: {
					ru: "Коррекция",
					kk: "Түзету"
				},
				value: {
					ru: "5 000-10 000 тг",
					kk: "5 000-10 000 тг"
				}
			},
			{
				label: {
					ru: "Самолигирующие Damon",
					kk: "Өздігінен байланатын Damon"
				},
				value: {
					ru: "300 000 тг",
					kk: "300 000 тг"
				}
			},
			{
				label: {
					ru: "Коррекция Damon",
					kk: "Damon түзету"
				},
				value: {
					ru: "25 000 тг",
					kk: "25 000 тг"
				}
			}
		],
		specialists: [{
			title: {
				ru: "Ортодонт",
				kk: "Ортодонт"
			},
			description: {
				ru: "Планирует лечение, установку системы и регулярные коррекции.",
				kk: "Ем жоспарын, жүйені орнатуды және түзетулерді жүргізеді."
			}
		}],
		faqs: [{
			question: {
				ru: "Какие брекеты выбрать?",
				kk: "Қандай брекет таңдаған дұрыс?"
			},
			answer: {
				ru: "Ортодонт подбирает систему после осмотра, снимков и оценки прикуса.",
				kk: "Ортодонт тексеру, рентген және тістемді бағалаудан кейін жүйені таңдайды."
			}
		}, {
			question: {
				ru: "Как часто нужна коррекция?",
				kk: "Түзету қаншалықты жиі керек?"
			},
			answer: {
				ru: "График зависит от системы и плана лечения, врач объяснит его на консультации.",
				kk: "Кесте жүйе мен ем жоспарына байланысты, дәрігер кеңесте түсіндіреді."
			}
		}]
	}
];
//#endregion
//#region src/components/ui/button.tsx
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-[0.99] disabled:pointer-events-none disabled:opacity-50 motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:active:translate-y-0 motion-reduce:active:scale-100 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
			outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-10 px-4 py-2",
			sm: "h-9 rounded-md px-3",
			lg: "h-11 rounded-md px-8",
			icon: "h-10 w-10"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ jsx(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
//#endregion
//#region src/components/ui/dialog.tsx
var Dialog = DialogPrimitive.Root;
var DialogTrigger = DialogPrimitive.Trigger;
var DialogPortal = DialogPrimitive.Portal;
var DialogOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(DialogPrimitive.Overlay, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
var defaultDialogMotion = "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg";
var bookingDialogMotion = "booking-dialog-content fixed bottom-0 left-1/2 z-50 grid w-[calc(100%-0.75rem)] max-w-md gap-4 border border-border/70 bg-background p-5 shadow-[0_24px_70px_rgba(31,37,40,0.16)] sm:bottom-auto sm:top-1/2 sm:p-6";
var DialogContent = React.forwardRef(({ className, children, motionPreset = "default", overlayClassName, closeLabel = "Close", ...props }, ref) => /* @__PURE__ */ jsxs(DialogPortal, { children: [/* @__PURE__ */ jsx(DialogOverlay, { className: overlayClassName }), /* @__PURE__ */ jsxs(DialogPrimitive.Content, {
	ref,
	className: cn(motionPreset === "booking" ? bookingDialogMotion : defaultDialogMotion, className),
	...props,
	children: [children, /* @__PURE__ */ jsxs(DialogPrimitive.Close, {
		"aria-label": closeLabel,
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ jsx(X$1, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", {
			className: "sr-only",
			children: closeLabel
		})]
	})]
})] }));
DialogContent.displayName = DialogPrimitive.Content.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsx("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ jsx("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(DialogPrimitive.Title, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
var DialogDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(DialogPrimitive.Description, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogPrimitive.Description.displayName;
//#endregion
//#region src/data/clinicContact.ts
var WHATSAPP_MESSAGE = {
	ru: "Здравствуйте! 👋 Хочу записаться на консультацию в стоматологию IMPLANTIUM. Подскажите, пожалуйста, какое время свободно на этой неделе?",
	kk: "Сәлеметсіз бе! 👋 IMPLANTIUM стоматологиясына консультацияға жазылғым келеді. Осы аптада қандай уақыт бос екенін айтып жібере аласыз ба?"
};
var clinicContact = {
	phoneDisplay: "+7 (702) 713-39-39, +7 (707) 362-13-39",
	phoneHref: "tel:+77027133939",
	whatsappUrl: "https://wa.me/77027133939",
	instagramUrl: "https://www.instagram.com/implantium.aktau",
	twoGisUrl: "https://2gis.kz/aktau/firm/70000001038002984/tab/reviews"
};
/**
* Returns a WhatsApp deep-link URL with a pre-filled localized booking message.
* Falls back to the bare whatsappUrl if the contact is not configured.
*/
function getWhatsAppUrl(language) {
	const base = clinicContact.whatsappUrl;
	if (!hasContactValue(base) || !base) return void 0;
	return `${base}?text=${encodeURIComponent(WHATSAPP_MESSAGE[language])}`;
}
function hasContactValue(value) {
	return Boolean(value && !value.includes("_HERE"));
}
//#endregion
//#region src/components/sections/BookingModal.tsx
function BookingModal({ children, open, onOpenChange }) {
	const { language } = useLanguage();
	const copy = {
		ru: {
			title: "Записаться на прием",
			description: "Выберите удобный способ связи, и мы ответим вам в ближайшее время.",
			whatsapp: "Написать в WhatsApp",
			close: "Закрыть окно записи"
		},
		kk: {
			title: "Қабылдауға жазылу",
			description: "Өзіңізге ыңғайлы байланыс тәсілін таңдаңыз, біз сізге жақын арада жауап береміз.",
			whatsapp: "WhatsApp-қа жазу",
			close: "Жазылу терезесін жабу"
		}
	}[language];
	return /* @__PURE__ */ jsxs(Dialog, {
		open,
		onOpenChange,
		children: [children ? /* @__PURE__ */ jsx(DialogTrigger, {
			asChild: true,
			children
		}) : null, /* @__PURE__ */ jsxs(DialogContent, {
			motionPreset: "booking",
			overlayClassName: "bg-[#1F2528]/45 backdrop-blur-[2px]",
			className: "rounded-t-[1.75rem] rounded-b-none sm:rounded-[1.5rem]",
			closeLabel: copy.close,
			children: [/* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsx(DialogTitle, {
				className: "font-display text-2xl text-center",
				children: copy.title
			}) }), /* @__PURE__ */ jsxs("div", {
				className: "flex flex-col gap-3 py-4",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "mb-2 text-center text-sm text-[#606A70]",
						children: copy.description
					}),
					/* @__PURE__ */ jsxs("a", {
						href: getWhatsAppUrl(language),
						target: "_blank",
						rel: "noopener noreferrer",
						className: "flex items-center justify-center gap-3 rounded-2xl bg-[#25D366] p-4 font-semibold text-white shadow-sm transition-colors hover:bg-[#20bd5a]",
						children: [/* @__PURE__ */ jsx(WhatsappLogo, {
							weight: "fill",
							className: "size-6"
						}), copy.whatsapp]
					}),
					/* @__PURE__ */ jsxs("a", {
						href: clinicContact.phoneHref,
						className: "flex items-center justify-center gap-3 rounded-2xl bg-[#EEF2F4] p-4 font-semibold text-[#1F2528] transition-colors hover:bg-[#DDE3E7]",
						children: [/* @__PURE__ */ jsx(Phone, {
							weight: "fill",
							className: "size-6 text-primary"
						}), "+7 (702) 713-39-39"]
					}),
					/* @__PURE__ */ jsxs("a", {
						href: "tel:+77073621339",
						className: "flex items-center justify-center gap-3 rounded-2xl bg-[#EEF2F4] p-4 font-semibold text-[#1F2528] transition-colors hover:bg-[#DDE3E7]",
						children: [/* @__PURE__ */ jsx(Phone, {
							weight: "fill",
							className: "size-6 text-primary"
						}), "+7 (707) 362-13-39"]
					})
				]
			})]
		})]
	});
}
//#endregion
//#region src/components/layout/Header.tsx
function Header() {
	const { language, setLanguage } = useLanguage();
	const t = content[language];
	const landing = landingCopy[language];
	const reduceMotion = useReducedMotion();
	const [scrolled, setScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 18);
		handleScroll();
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	const navLinks = [
		{
			name: t.nav.services,
			href: "/#services"
		},
		{
			name: t.nav.doctors,
			href: "/doctors"
		},
		{
			name: t.nav.about,
			href: "/#about"
		},
		{
			name: t.nav.reviews,
			href: "/#reviews"
		},
		{
			name: t.nav.location,
			href: "/#location"
		}
	];
	return /* @__PURE__ */ jsxs("header", {
		className: cn("fixed inset-x-0 top-0 z-50 transition-all duration-300", scrolled ? "border-b border-[#DDE3E7] bg-white py-1.5 shadow-[0_14px_42px_rgba(31,37,40,0.06)]" : "border-b border-[#ECEFF1] bg-white py-2"),
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mx-auto flex max-w-[1360px] items-center justify-between gap-4 px-4 md:px-8",
			children: [
				/* @__PURE__ */ jsx(Link, {
					to: "/",
					className: "group flex h-14 w-[10rem] items-center md:h-16 md:w-[11.5rem]",
					"aria-label": t.common.clinicName,
					children: /* @__PURE__ */ jsx("img", {
						src: implantium_logo_cropped_default,
						alt: t.common.clinicName,
						className: "size-full object-contain object-left transition-transform duration-300 group-hover:-translate-y-0.5"
					})
				}),
				/* @__PURE__ */ jsx("nav", {
					className: "hidden items-center gap-7 lg:flex xl:gap-9",
					children: navLinks.map((link) => /* @__PURE__ */ jsx("a", {
						href: link.href,
						className: "text-sm font-semibold text-[#606A70] transition-colors hover:text-primary",
						children: link.name
					}, link.name))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "hidden items-center gap-3 lg:flex",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center rounded-full border border-[#DDE3E7] bg-white p-1 text-[13px] font-bold",
						children: [/* @__PURE__ */ jsx("button", {
							type: "button",
							onClick: () => setLanguage("ru"),
							className: cn("rounded-full px-4 py-1.5 transition-all duration-200", language === "ru" ? "bg-primary text-white shadow-md" : "text-[#6E7B83] hover:text-[#1F2528]"),
							children: "Рус"
						}), /* @__PURE__ */ jsx("button", {
							type: "button",
							onClick: () => setLanguage("kk"),
							className: cn("rounded-full px-4 py-1.5 transition-all duration-200", language === "kk" ? "bg-primary text-white shadow-md" : "text-[#6E7B83] hover:text-[#1F2528]"),
							children: "Қаз"
						})]
					}), /* @__PURE__ */ jsx("button", {
						type: "button",
						onClick: () => setMobileMenuOpen(true),
						className: "flex size-12 items-center justify-center rounded-full border border-[#DDE3E7] bg-white text-[#1F2528] shadow-sm transition-all hover:bg-slate-50",
						"aria-label": t.common.openMenu,
						children: /* @__PURE__ */ jsx(List, { className: "size-6" })
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2 lg:hidden",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center rounded-full border border-[#DDE3E7] bg-white p-1 text-[12px] font-bold shadow-sm",
						children: [/* @__PURE__ */ jsx("button", {
							type: "button",
							onClick: () => setLanguage("ru"),
							className: cn("rounded-full px-3 py-1.5 transition-all duration-200", language === "ru" ? "bg-primary text-white" : "text-[#6E7B83]"),
							children: "Рус"
						}), /* @__PURE__ */ jsx("button", {
							type: "button",
							onClick: () => setLanguage("kk"),
							className: cn("rounded-full px-3 py-1.5 transition-all duration-200", language === "kk" ? "bg-primary text-white" : "text-[#6E7B83]"),
							children: "Қаз"
						})]
					}), /* @__PURE__ */ jsx("button", {
						type: "button",
						onClick: () => setMobileMenuOpen(true),
						className: "flex size-11 items-center justify-center rounded-full border border-[#DDE3E7] bg-white text-[#1F2528] shadow-sm",
						"aria-label": t.common.openMenu,
						children: /* @__PURE__ */ jsx(List, { className: "size-6" })
					})]
				})
			]
		}), /* @__PURE__ */ jsx(AnimatePresence, { children: mobileMenuOpen && /* @__PURE__ */ jsxs(motion.div, {
			initial: reduceMotion ? { opacity: 0 } : {
				opacity: 0,
				y: -16
			},
			animate: {
				opacity: 1,
				y: 0
			},
			exit: reduceMotion ? { opacity: 0 } : {
				opacity: 0,
				y: -16
			},
			transition: { duration: reduceMotion ? .12 : .22 },
			className: "fixed inset-0 z-50 flex min-h-[100dvh] flex-col bg-[#F5F7F8]",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-between border-b border-[#DDE3E7] bg-white p-4",
				children: [/* @__PURE__ */ jsx(Link, {
					to: "/",
					onClick: () => setMobileMenuOpen(false),
					className: "flex h-14 w-[10rem] items-center",
					children: /* @__PURE__ */ jsx("img", {
						src: "/assets/implantium-logo-cropped-DrnpNZVq.png",
						alt: t.common.clinicName,
						className: "size-full object-contain object-left"
					})
				}), /* @__PURE__ */ jsx("button", {
					type: "button",
					onClick: () => setMobileMenuOpen(false),
					className: "flex size-11 items-center justify-center rounded-full border border-[#DDE3E7] bg-white text-[#1F2528]",
					"aria-label": t.common.closeMenu,
					children: /* @__PURE__ */ jsx(X, { className: "size-6" })
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "flex flex-1 flex-col gap-6 overflow-y-auto p-5",
				children: [/* @__PURE__ */ jsx("nav", {
					className: "grid gap-3",
					children: navLinks.map((link) => /* @__PURE__ */ jsx("a", {
						href: link.href,
						onClick: () => setMobileMenuOpen(false),
						className: "rounded-2xl border border-[#DDE3E7] bg-white px-5 py-4 text-lg font-semibold text-[#1F2528] shadow-sm transition-colors hover:text-primary",
						children: link.name
					}, link.name))
				}), /* @__PURE__ */ jsxs("div", {
					className: "mt-auto rounded-[1.5rem] border border-[#DDE3E7] bg-white p-5 shadow-[0_18px_50px_rgba(31,37,40,0.06)]",
					children: [/* @__PURE__ */ jsx("p", {
						className: "mb-4 text-sm font-semibold leading-relaxed text-[#606A70]",
						children: landing.contact.address
					}), /* @__PURE__ */ jsx(BookingModal, { children: /* @__PURE__ */ jsx(Button, {
						className: "h-12 w-full rounded-2xl bg-primary text-sm font-bold text-white hover:bg-[#8F2F25]",
						children: landing.hero.primaryCta
					}) })]
				})]
			})]
		}) })]
	});
}
//#endregion
//#region src/components/layout/Footer.tsx
function Footer() {
	const { language } = useLanguage();
	const t = content[language];
	const landing = landingCopy[language];
	return /* @__PURE__ */ jsx("footer", {
		className: "border-t border-[#DDE3E7] bg-[#FAFBFC] px-4 py-10 md:px-8 md:py-14",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-[1360px]",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "grid gap-10 md:grid-cols-2 lg:grid-cols-[1.25fr_0.75fr_0.85fr_1.05fr]",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex flex-col gap-5",
						children: [
							/* @__PURE__ */ jsx(Link, {
								to: "/",
								className: "flex h-14 w-44 items-center",
								"aria-label": t.common.clinicName,
								children: /* @__PURE__ */ jsx("img", {
									src: implantium_logo_cropped_default,
									alt: t.common.logoAlt,
									className: "size-full object-contain object-left mix-blend-multiply"
								})
							}),
							/* @__PURE__ */ jsx("p", {
								className: "max-w-sm text-sm leading-7 text-[#606A70]",
								children: landing.footer.tagline
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ jsx(FooterIcon, {
									href: clinicContact.instagramUrl,
									label: "Instagram",
									children: /* @__PURE__ */ jsx(InstagramLogo, {
										weight: "fill",
										className: "size-5"
									})
								}), /* @__PURE__ */ jsx(FooterIcon, {
									href: getWhatsAppUrl(language),
									label: "WhatsApp",
									children: /* @__PURE__ */ jsx(WhatsappLogo, {
										weight: "fill",
										className: "size-5"
									})
								})]
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
						className: "font-display mb-4 text-xl font-normal text-[#1F2528]",
						children: language === "ru" ? "Клиника" : "Клиника"
					}), /* @__PURE__ */ jsxs("nav", {
						className: "grid gap-2.5",
						children: [
							/* @__PURE__ */ jsx("a", {
								href: "/#about",
								className: "footer-link",
								children: t.nav.about
							}),
							/* @__PURE__ */ jsx("a", {
								href: "/doctors",
								className: "footer-link",
								children: t.nav.doctors
							}),
							/* @__PURE__ */ jsx("a", {
								href: "/#services",
								className: "footer-link",
								children: t.nav.services
							}),
							/* @__PURE__ */ jsx("a", {
								href: "/#reviews",
								className: "footer-link",
								children: t.nav.reviews
							}),
							/* @__PURE__ */ jsx("a", {
								href: "/#location",
								className: "footer-link",
								children: t.nav.contact
							})
						]
					})] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
						className: "font-display mb-4 text-xl font-normal text-[#1F2528]",
						children: t.nav.services
					}), /* @__PURE__ */ jsx("nav", {
						className: "grid gap-2.5",
						children: landingServices.map((service) => /* @__PURE__ */ jsx(Link, {
							to: `/services/${service.serviceId}`,
							className: "footer-link",
							children: service.shortTitle[language]
						}, service.id))
					})] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
						className: "font-display mb-4 text-xl font-normal text-[#1F2528]",
						children: t.nav.contact
					}), /* @__PURE__ */ jsxs("ul", {
						className: "grid gap-3",
						children: [
							/* @__PURE__ */ jsxs("li", {
								className: "footer-contact-line",
								children: [/* @__PURE__ */ jsx(MapPin, {
									weight: "fill",
									className: "mt-0.5 size-5 shrink-0 text-primary"
								}), /* @__PURE__ */ jsx("span", { children: landing.contact.address })]
							}),
							/* @__PURE__ */ jsxs("li", {
								className: "footer-contact-line",
								children: [/* @__PURE__ */ jsx(Phone, {
									weight: "fill",
									className: "mt-0.5 size-5 shrink-0 text-primary"
								}), hasContactValue(clinicContact.phoneHref) ? /* @__PURE__ */ jsx("a", {
									href: clinicContact.phoneHref,
									className: "transition-colors hover:text-primary",
									children: clinicContact.phoneDisplay
								}) : /* @__PURE__ */ jsx("span", { children: landing.contact.phonePending })]
							}),
							/* @__PURE__ */ jsxs("li", {
								className: "footer-contact-line",
								children: [/* @__PURE__ */ jsx(WhatsappLogo, {
									weight: "fill",
									className: "mt-0.5 size-5 shrink-0 text-primary"
								}), hasContactValue(clinicContact.whatsappUrl) ? /* @__PURE__ */ jsx("a", {
									href: getWhatsAppUrl(language),
									target: "_blank",
									rel: "noopener noreferrer",
									className: "transition-colors hover:text-primary",
									children: clinicContact.phoneDisplay
								}) : /* @__PURE__ */ jsx("span", { children: landing.contact.whatsappPending })]
							}),
							/* @__PURE__ */ jsxs("li", {
								className: "footer-contact-line",
								children: [/* @__PURE__ */ jsx(Clock, {
									weight: "fill",
									className: "mt-0.5 size-5 shrink-0 text-primary"
								}), /* @__PURE__ */ jsxs("span", { children: [
									landing.contact.hoursWeek,
									/* @__PURE__ */ jsx("br", {}),
									landing.contact.hoursSunday,
									/* @__PURE__ */ jsx("br", {}),
									landing.contact.hoursDoctors
								] })]
							})
						]
					})] })
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "mt-10 flex flex-col justify-between gap-3 border-t border-[#DDE3E7] pt-6 text-xs text-[#8A949B] md:flex-row md:items-center",
				children: [/* @__PURE__ */ jsxs("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" IMPLANTIUM. ",
					t.footer.rights
				] }), /* @__PURE__ */ jsx("span", { children: landing.footer.privacy })]
			})]
		})
	});
}
function FooterIcon({ href, label, children }) {
	if (hasContactValue(href)) return /* @__PURE__ */ jsx("a", {
		href,
		className: "flex size-10 items-center justify-center rounded-full border border-[#DDE3E7] bg-white text-primary transition-all hover:-translate-y-0.5 hover:border-primary/35 hover:bg-[#F4E7E4]/60",
		"aria-label": label,
		children
	});
	return /* @__PURE__ */ jsx("button", {
		type: "button",
		disabled: true,
		className: "flex size-10 cursor-not-allowed items-center justify-center rounded-full border border-[#DDE3E7] bg-white text-[#AEBBC2]",
		"aria-label": label,
		title: label,
		children
	});
}
//#endregion
//#region src/components/layout/StickyCTA.tsx
function StickyCTA() {
	const { language } = useLanguage();
	const t = content[language];
	const landing = landingCopy[language];
	const hasPhone = hasContactValue(clinicContact.phoneHref);
	const hasWhatsapp = hasContactValue(clinicContact.whatsappUrl);
	return /* @__PURE__ */ jsxs("div", {
		className: "fixed bottom-0 left-0 right-0 z-40 flex items-center gap-2 border-t border-border/80 bg-white/92 p-3 shadow-[0_-16px_45px_rgba(68,45,34,0.10)] backdrop-blur-xl md:hidden",
		children: [
			/* @__PURE__ */ jsx(BookingModal, { children: /* @__PURE__ */ jsx("button", {
				type: "button",
				className: "inline-flex h-12 min-h-12 flex-1 items-center justify-center rounded-full bg-primary px-4 text-sm font-semibold leading-none text-white shadow-[0_12px_30px_rgba(164,58,40,0.22)] transition-colors hover:bg-primary/90",
				children: t.common.bookConsultation
			}) }),
			hasWhatsapp ? /* @__PURE__ */ jsx("a", {
				href: getWhatsAppUrl(language),
				className: "flex size-12 shrink-0 items-center justify-center rounded-full border border-primary/15 bg-secondary text-primary shadow-sm transition-colors hover:bg-secondary/80",
				"aria-label": "WhatsApp",
				target: "_blank",
				rel: "noopener noreferrer",
				children: /* @__PURE__ */ jsx(WhatsappLogo, {
					weight: "fill",
					className: "size-5"
				})
			}) : /* @__PURE__ */ jsx("button", {
				type: "button",
				disabled: true,
				title: landing.contact.whatsappPending,
				className: "flex size-12 shrink-0 cursor-not-allowed items-center justify-center rounded-full border border-primary/15 bg-secondary text-primary/70 shadow-sm",
				"aria-label": landing.contact.whatsappPending,
				children: /* @__PURE__ */ jsx(WhatsappLogo, {
					weight: "fill",
					className: "size-5"
				})
			}),
			hasPhone ? /* @__PURE__ */ jsx("a", {
				href: clinicContact.phoneHref,
				className: "flex size-12 shrink-0 items-center justify-center rounded-full border border-primary/15 bg-secondary text-primary shadow-sm transition-colors hover:bg-secondary/80",
				"aria-label": t.common.call,
				children: /* @__PURE__ */ jsx(Phone, {
					weight: "fill",
					className: "size-5"
				})
			}) : /* @__PURE__ */ jsx("button", {
				type: "button",
				disabled: true,
				title: t.common.linkPending,
				className: "flex size-12 shrink-0 cursor-not-allowed items-center justify-center rounded-full border border-primary/15 bg-secondary text-primary/70 shadow-sm",
				"aria-label": t.common.linkPending,
				children: /* @__PURE__ */ jsx(Phone, {
					weight: "fill",
					className: "size-5"
				})
			})
		]
	});
}
//#endregion
//#region src/components/layout/ScrollToTop.tsx
function ScrollToTop() {
	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	return null;
}
//#endregion
//#region src/components/motion/MotionPrimitives.tsx
var clinicalEase = [
	.16,
	1,
	.3,
	1
];
var routeTransition = {
	duration: .32,
	ease: clinicalEase
};
var revealViewport = {
	once: true,
	amount: .18,
	margin: "0px 0px -80px 0px"
};
function MotionPage({ children, className }) {
	const reduceMotion = useReducedMotion();
	return /* @__PURE__ */ jsx(motion.div, {
		className: cn("flex min-w-0 flex-1 flex-col", className),
		initial: reduceMotion ? { opacity: 0 } : {
			opacity: 0,
			y: 10
		},
		animate: {
			opacity: 1,
			y: 0
		},
		exit: reduceMotion ? { opacity: 0 } : {
			opacity: 0,
			y: -8
		},
		transition: reduceMotion ? { duration: .12 } : routeTransition,
		children
	});
}
function Reveal({ children, className, delay = 0 }) {
	const reduceMotion = useReducedMotion();
	return /* @__PURE__ */ jsx(motion.div, {
		className,
		initial: reduceMotion ? { opacity: 0 } : {
			opacity: 0,
			y: 18
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: revealViewport,
		transition: {
			duration: reduceMotion ? .12 : .44,
			delay: reduceMotion ? 0 : delay,
			ease: clinicalEase
		},
		children
	});
}
function TextReveal({ children, className, delay = 0, as = "div" }) {
	const reduceMotion = useReducedMotion();
	return /* @__PURE__ */ jsx(as === "span" ? motion.span : motion.div, {
		className,
		initial: reduceMotion ? { opacity: 0 } : {
			opacity: 0,
			y: 12
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: revealViewport,
		transition: {
			duration: reduceMotion ? .1 : .38,
			delay: reduceMotion ? 0 : delay,
			ease: clinicalEase
		},
		children
	});
}
function Stagger({ children, className }) {
	const reduceMotion = useReducedMotion();
	return /* @__PURE__ */ jsx(motion.div, {
		className,
		initial: "hidden",
		whileInView: "show",
		viewport: revealViewport,
		variants: {
			hidden: {},
			show: { transition: { staggerChildren: reduceMotion ? 0 : .055 } }
		},
		children
	});
}
function StaggerItem({ children, className }) {
	const reduceMotion = useReducedMotion();
	return /* @__PURE__ */ jsx(motion.div, {
		className,
		variants: {
			hidden: reduceMotion ? { opacity: 0 } : {
				opacity: 0,
				y: 14
			},
			show: {
				opacity: 1,
				y: 0,
				transition: {
					duration: reduceMotion ? .12 : .36,
					ease: clinicalEase
				}
			}
		},
		children
	});
}
function MotionListItem({ children, className, index = 0, interactive = false, layout = true }) {
	const reduceMotion = useReducedMotion();
	return /* @__PURE__ */ jsx(motion.div, {
		layout,
		className: cn(interactive && "will-change-transform", className),
		initial: reduceMotion ? { opacity: 0 } : {
			opacity: 0,
			y: 12
		},
		animate: {
			opacity: 1,
			y: 0
		},
		exit: reduceMotion ? { opacity: 0 } : {
			opacity: 0,
			y: -8
		},
		whileHover: !reduceMotion && interactive ? {
			y: -4,
			transition: {
				type: "spring",
				stiffness: 320,
				damping: 26
			}
		} : void 0,
		whileTap: !reduceMotion && interactive ? {
			y: -1,
			scale: .992,
			transition: {
				type: "spring",
				stiffness: 360,
				damping: 28
			}
		} : void 0,
		transition: {
			duration: reduceMotion ? .12 : .28,
			delay: reduceMotion ? 0 : Math.min(index * .035, .18),
			ease: clinicalEase
		},
		children
	});
}
//#endregion
//#region src/App.tsx
var Home = lazy(() => import("./assets/Home-Dt2DMy-x.js"));
var Doctors = lazy(() => import("./assets/Doctors-aa6lpWdI.js"));
var ServiceDetail = lazy(() => import("./assets/ServiceDetail-BBUHkOSU.js"));
var NotFound = lazy(() => import("./assets/NotFound-RznLx3N4.js"));
var Admin = lazy(() => import("./assets/Admin-BP0QFqJV.js"));
var Visitka = lazy(() => import("./assets/Visitka-CWngYSAd.js"));
var Visitka2 = lazy(() => import("./assets/Visitka2-D04EfiWr.js"));
function Layout() {
	const location = useLocation();
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen flex flex-col font-sans bg-background text-foreground selection:bg-primary/20",
		children: [
			/* @__PURE__ */ jsx(ScrollToTop, {}),
			/* @__PURE__ */ jsx(Header, {}),
			/* @__PURE__ */ jsx(Suspense, {
				fallback: null,
				children: /* @__PURE__ */ jsx(AnimatePresence, {
					mode: "wait",
					initial: false,
					children: /* @__PURE__ */ jsx(MotionPage, { children: /* @__PURE__ */ jsx(Outlet, {}) }, location.pathname)
				})
			}),
			/* @__PURE__ */ jsx(Footer, {}),
			/* @__PURE__ */ jsx(StickyCTA, {})
		]
	});
}
function AdminRoute() {
	return /* @__PURE__ */ jsx(Suspense, {
		fallback: null,
		children: /* @__PURE__ */ jsx(Admin, {})
	});
}
function App() {
	return /* @__PURE__ */ jsx(LanguageProvider, { children: /* @__PURE__ */ jsxs(Routes, { children: [
		/* @__PURE__ */ jsx(Route, {
			path: "/admin",
			element: /* @__PURE__ */ jsx(AdminRoute, {})
		}),
		/* @__PURE__ */ jsx(Route, {
			path: "/visitka",
			element: /* @__PURE__ */ jsx(Suspense, {
				fallback: null,
				children: /* @__PURE__ */ jsx(Visitka, {})
			})
		}),
		/* @__PURE__ */ jsx(Route, {
			path: "/visitka2",
			element: /* @__PURE__ */ jsx(Suspense, {
				fallback: null,
				children: /* @__PURE__ */ jsx(Visitka2, {})
			})
		}),
		/* @__PURE__ */ jsxs(Route, {
			path: "/",
			element: /* @__PURE__ */ jsx(Layout, {}),
			children: [
				/* @__PURE__ */ jsx(Route, {
					index: true,
					element: /* @__PURE__ */ jsx(Home, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "doctors",
					element: /* @__PURE__ */ jsx(Doctors, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "services/:id",
					element: /* @__PURE__ */ jsx(ServiceDetail, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "*",
					element: /* @__PURE__ */ jsx(NotFound, {})
				})
			]
		})
	] }) });
}
var isConvexConfigured = Boolean(void 0);
var convexClient = new ConvexReactClient("https://placeholder.convex.cloud");
//#endregion
//#region src/providers/AppConvexProvider.tsx
function AppConvexProvider({ children }) {
	return /* @__PURE__ */ jsx(ConvexProvider, {
		client: convexClient,
		children
	});
}
//#endregion
//#region src/entry-server.tsx
function render(url) {
	return renderToString(/* @__PURE__ */ jsx(StrictMode, { children: /* @__PURE__ */ jsx(AppConvexProvider, { children: /* @__PURE__ */ jsx(StaticRouter, {
		location: url,
		children: /* @__PURE__ */ jsx(App, {})
	}) }) }));
}
//#endregion
export { landingCopy as _, StaggerItem as a, clinicContact as c, Dialog as d, DialogContent as f, Button as g, DialogTitle as h, Stagger as i, getWhatsAppUrl as l, DialogHeader as m, MotionListItem as n, TextReveal as o, DialogDescription as p, Reveal as r, render, BookingModal as s, isConvexConfigured as t, hasContactValue as u, landingServices as v, content as y };
