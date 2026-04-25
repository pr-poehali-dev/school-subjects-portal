import { useState } from "react";
import Icon from "@/components/ui/icon";

type ExamType = "oge" | "ege";

interface Task {
  title: string;
  url: string;
}

interface Subject {
  id: string;
  name: string;
  emoji: string;
  color: string;
  oge: Task[];
  ege: Task[];
}

const SUBJECTS: Subject[] = [
  {
    id: "math",
    name: "Математика",
    emoji: "📐",
    color: "#EEF3FF",
    oge: [
      { title: "Задание 1 — Арифметика", url: "#" },
      { title: "Задание 2 — Уравнения", url: "#" },
      { title: "Задание 3 — Геометрия", url: "#" },
      { title: "Задание 4 — Статистика", url: "#" },
    ],
    ege: [
      { title: "Задание 1 — Степени и корни", url: "#" },
      { title: "Задание 2 — Уравнения", url: "#" },
      { title: "Задание 3 — Неравенства", url: "#" },
      { title: "Задание 4 — Функции и графики", url: "#" },
      { title: "Задание 5 — Тригонометрия", url: "#" },
    ],
  },
  {
    id: "russian",
    name: "Русский язык",
    emoji: "📝",
    color: "#FFF4EE",
    oge: [
      { title: "Задание 1 — Сжатое изложение", url: "#" },
      { title: "Задание 2 — Синтаксический анализ", url: "#" },
      { title: "Задание 3 — Пунктуационный анализ", url: "#" },
    ],
    ege: [
      { title: "Задание 1 — Информационная обработка текста", url: "#" },
      { title: "Задание 2 — Средства связи предложений", url: "#" },
      { title: "Задание 3 — Лексическое значение", url: "#" },
      { title: "Задание 4 — Орфоэпические нормы", url: "#" },
    ],
  },
  {
    id: "physics",
    name: "Физика",
    emoji: "⚛️",
    color: "#F0FDF4",
    oge: [
      { title: "Задание 1 — Механика", url: "#" },
      { title: "Задание 2 — Термодинамика", url: "#" },
      { title: "Задание 3 — Электричество", url: "#" },
    ],
    ege: [
      { title: "Задание 1 — Кинематика", url: "#" },
      { title: "Задание 2 — Динамика", url: "#" },
      { title: "Задание 3 — Законы сохранения", url: "#" },
      { title: "Задание 4 — Колебания и волны", url: "#" },
    ],
  },
  {
    id: "chemistry",
    name: "Химия",
    emoji: "🧪",
    color: "#FEFCE8",
    oge: [
      { title: "Задание 1 — Атомы и молекулы", url: "#" },
      { title: "Задание 2 — Химические реакции", url: "#" },
      { title: "Задание 3 — Неорганические вещества", url: "#" },
    ],
    ege: [
      { title: "Задание 1 — Строение атома", url: "#" },
      { title: "Задание 2 — Химическая связь", url: "#" },
      { title: "Задание 3 — Окислительно-восстановительные реакции", url: "#" },
    ],
  },
  {
    id: "history",
    name: "История",
    emoji: "📜",
    color: "#FFF1F2",
    oge: [
      { title: "Задание 1 — Хронология", url: "#" },
      { title: "Задание 2 — Исторические личности", url: "#" },
      { title: "Задание 3 — Карты и схемы", url: "#" },
    ],
    ege: [
      { title: "Задание 1 — Работа с текстом", url: "#" },
      { title: "Задание 2 — Хронологические задачи", url: "#" },
      { title: "Задание 3 — Работа с картой", url: "#" },
    ],
  },
  {
    id: "biology",
    name: "Биология",
    emoji: "🌿",
    color: "#F0FFF4",
    oge: [
      { title: "Задание 1 — Клетка", url: "#" },
      { title: "Задание 2 — Организмы", url: "#" },
      { title: "Задание 3 — Экосистемы", url: "#" },
    ],
    ege: [
      { title: "Задание 1 — Биология как наука", url: "#" },
      { title: "Задание 2 — Клетка и её строение", url: "#" },
      { title: "Задание 3 — Генетика", url: "#" },
    ],
  },
  {
    id: "geography",
    name: "География",
    emoji: "🌍",
    color: "#F0F9FF",
    oge: [
      { title: "Задание 1 — Топографические карты", url: "#" },
      { title: "Задание 2 — Природа России", url: "#" },
    ],
    ege: [
      { title: "Задание 1 — Источники географической информации", url: "#" },
      { title: "Задание 2 — Природа Земли", url: "#" },
    ],
  },
  {
    id: "english",
    name: "Английский язык",
    emoji: "🇬🇧",
    color: "#F5F3FF",
    oge: [
      { title: "Задание 1 — Аудирование", url: "#" },
      { title: "Задание 2 — Чтение", url: "#" },
      { title: "Задание 3 — Грамматика", url: "#" },
    ],
    ege: [
      { title: "Задание 1 — Аудирование", url: "#" },
      { title: "Задание 2 — Чтение", url: "#" },
      { title: "Задание 3 — Грамматика и лексика", url: "#" },
    ],
  },
];

const staggerClass = (i: number) =>
  ["stagger-1", "stagger-2", "stagger-3", "stagger-4", "stagger-5", "stagger-6", "stagger-7", "stagger-8"][i] ?? "";

export default function Index() {
  const [activeSubject, setActiveSubject] = useState<Subject | null>(null);
  const [examTab, setExamTab] = useState<ExamType>("oge");

  const openSubject = (s: Subject) => {
    setActiveSubject(s);
    setExamTab("oge");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const tasks = activeSubject ? activeSubject[examTab] : [];

  return (
    <div className="min-h-screen bg-[#F7F8FA]" style={{ fontFamily: "'Golos Text', sans-serif" }}>
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <button
            onClick={() => setActiveSubject(null)}
            className="flex items-center gap-2 font-semibold text-[#1a1a2e] text-lg hover:opacity-70 transition-opacity"
          >
            <span className="text-[#1D6FE8]">◆</span>
            <span>ЕГЭ&ОГЭ Помощник</span>
          </button>
          {activeSubject && (
            <button
              onClick={() => setActiveSubject(null)}
              className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-800 transition-colors"
            >
              <Icon name="ChevronLeft" size={16} />
              Все предметы
            </button>
          )}
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-10">
        {!activeSubject ? (
          <>
            {/* Hero */}
            <div className="mb-12 animate-fade-in">
              <div className="inline-block bg-[#EEF3FF] text-[#1D6FE8] text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-wide uppercase">
                Подготовка к экзаменам
              </div>
              <h1 className="text-4xl font-black text-[#1a1a2e] leading-tight mb-3">
                Решения заданий<br />
                <span className="text-[#1D6FE8]">ОГЭ и ЕГЭ</span>
              </h1>
              <p className="text-gray-500 text-lg max-w-lg">
                Выбери предмет — найди разбор нужного задания и готовься уверенно.
              </p>
            </div>

            {/* Subject grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {SUBJECTS.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => openSubject(s)}
                  className={`animate-fade-in ${staggerClass(i)} opacity-0 rounded-2xl p-5 text-left hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 border border-transparent hover:border-gray-200`}
                  style={{ backgroundColor: s.color }}
                >
                  <span className="text-3xl block mb-3">{s.emoji}</span>
                  <span className="font-semibold text-[#1a1a2e] text-sm leading-tight">{s.name}</span>
                  <div className="mt-2 flex gap-1">
                    <span className="text-[10px] bg-white/70 text-gray-600 rounded-full px-2 py-0.5">ОГЭ</span>
                    <span className="text-[10px] bg-white/70 text-gray-600 rounded-full px-2 py-0.5">ЕГЭ</span>
                  </div>
                </button>
              ))}
            </div>
          </>
        ) : (
          <div className="animate-fade-in opacity-0">
            {/* Subject header */}
            <div className="flex items-center gap-4 mb-8">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                style={{ backgroundColor: activeSubject.color }}
              >
                {activeSubject.emoji}
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-0.5">Предмет</p>
                <h2 className="text-3xl font-black text-[#1a1a2e]">{activeSubject.name}</h2>
              </div>
            </div>

            {/* Exam tabs */}
            <div className="flex gap-2 mb-6">
              {(["oge", "ege"] as ExamType[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setExamTab(tab)}
                  className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                    examTab === tab
                      ? "bg-[#1D6FE8] text-white shadow-sm"
                      : "bg-white text-gray-500 hover:bg-gray-50 border border-gray-200"
                  }`}
                >
                  {tab === "oge" ? "ОГЭ (9 класс)" : "ЕГЭ (11 класс)"}
                </button>
              ))}
            </div>

            {/* Tasks list */}
            <div className="space-y-2">
              {tasks.map((task, i) => (
                <a
                  key={i}
                  href={task.url}
                  className={`animate-fade-in opacity-0 ${staggerClass(i)} flex items-center justify-between bg-white rounded-xl px-5 py-4 border border-gray-100 hover:border-[#1D6FE8] hover:shadow-sm transition-all group`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#EEF3FF] flex items-center justify-center flex-shrink-0">
                      <span className="text-[#1D6FE8] font-bold text-xs">{i + 1}</span>
                    </div>
                    <span className="text-[#1a1a2e] font-medium text-sm">{task.title}</span>
                  </div>
                  <Icon
                    name="ArrowRight"
                    size={16}
                    className="text-gray-300 group-hover:text-[#1D6FE8] group-hover:translate-x-0.5 transition-all"
                  />
                </a>
              ))}
            </div>

            {/* Empty state */}
            {tasks.length === 0 && (
              <div className="text-center py-16 text-gray-400">
                <Icon name="BookOpen" size={40} className="mx-auto mb-3 opacity-30" />
                <p>Заданий пока нет</p>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-gray-100 py-6">
        <div className="max-w-5xl mx-auto px-4 text-center text-xs text-gray-400">
          Сайт для подготовки к ОГЭ и ЕГЭ — добавляйте ссылки на решения заданий
        </div>
      </footer>
    </div>
  );
}
