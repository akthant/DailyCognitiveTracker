import { Domain } from "../types";

export const domains = (t: any): Domain[] => [
{
    id: "telephone",
    title: t("domains.telephone.title"),
    icons: "📞",
    questions: [
      {
        id: 1,
        text: t("domains.telephone.questions.1"),
        score: 1,
      },
      {
        id: 2,
        text: t("domains.telephone.questions.2"),
        score: 1,
      },
      {
        id: 3,
        text: t("domains.telephone.questions.3"),
        score: 1,
      },
      {
        id: 4,
        text: t("domains.telephone.questions.4"),
        score: 0,
      },
    ],
  },
  {
    id: "shopping",
    title: t("domains.shopping.title"),
    icons: "🛒",
    questions: [
      {
        id: 1,
        text: t("domains.shopping.questions.1"),
        score: 1,
      },
      {
        id: 2,
        text: t("domains.shopping.questions.2"),
        score: 0,
      },
      {
        id: 3,
        text: t("domains.shopping.questions.3"),
        score: 0,
      },
      {
        id: 4,
        text: t("domains.shopping.questions.4"),
        score: 0,
      },
    ],
  },
  {
    id: "meals",
    title: t("domains.meals.title"),
    icons: "🍳",
    questions: [
      {
        id: 1,
        text: t("domains.meals.questions.1"),
        score: 1,
      },
      { id: 2, text: t("domains.meals.questions.2"), score: 0 },
      { id: 3, text: t("domains.meals.questions.3"), score: 0 },
      { id: 4, text: t("domains.meals.questions.4"), score: 0 },
    ],
  },
  {
    id: "housekeeping",
    title: t("domains.housekeeping.title"),
    icons: "🏠",
    questions: [
      {
        id: 1,
        text: t("domains.housekeeping.questions.1"),
        score: 1,
      },
      {
        id: 2,
        text: t("domains.housekeeping.questions.2"),
        score: 1,
      },
      {
        id: 3,
        text: t("domains.housekeeping.questions.3"),
        score: 1,
      },
      { id: 4, text: t("domains.housekeeping.questions.4"), score: 1 },
      { id: 5, text: t("domains.housekeeping.questions.5"), score: 0 },
    ],
  },
  {
    id: "laundry",
    title: t("domains.laundry.title"),
    icons: "👕",
    questions: [
      { id: 1, text: t("domains.laundry.questions.1"), score: 1 },
      { id: 2, text: t("domains.laundry.questions.2"), score: 1 },
      { id: 3, text: t("domains.laundry.questions.3"), score: 0 },
    ],
  },
  {
    id: "transportation",
    title: t("domains.transportation.title"),
    icons: "🚗",
    questions: [
      {
        id: 1,
        text: t("domains.transportation.questions.1"),
        score: 1,
      },
      { id: 2, text: t("domains.transportation.questions.2"), score: 1 },
      { id: 3, text: t("domains.transportation.questions.3"), score: 1 },
      { id: 4, text: t("domains.transportation.questions.4"), score: 0 },
      { id: 5, text: t("domains.transportation.questions.5"), score: 0 },
    ],
  },
  {
    id: "medications",
    title: t("domains.medications.title"),
    icons: "💊",
    questions: [
      {
        id: 1,
        text: t("domains.medications.questions.1"),
        score: 1,
      },
      { id: 2, text: t("domains.medications.questions.2"), score: 0 },
      { id: 3, text: t("domains.medications.questions.3"), score: 0 },
    ],
  },
  {
    id: "finances",
    title: t("domains.finances.title"),
    icons: "💰",
    questions: [
      { id: 1, text: t("domains.finances.questions.1"), score: 1 },
      {
        id: 2,
        text: t("domains.finances.questions.2"),
        score: 1,
      },
      { id: 3, text: t("domains.finances.questions.3"), score: 0 },
    ],
  },
];
