import { Domain } from "../types";

export const domains: Domain[] = [
  {
    id: "telephone",
    title: "Using Telephone",
    icons: "📞",
    questions: [
      {
        id: 1,
        text: "You can look up and dial phone numbers independently.",
        score: 1,
      },
      {
        id: 2,
        text: "You can dial a few well-known numbers.",
        score: 1,
      },
      {
        id: 3,
        text: "You can answer phone but does not dial.",
        score: 1,
      },
      {
        id: 4,
        text: "Does not use telephone at all.",
        score: 0,
      },
    ],
  },
  {
    id: "shopping",
    title: "Shopping",
    icons: "🛒",
    questions: [
      {
        id: 1,
        text: "Takes care of all shopping independently.",
        score: 1,
      },
      {
        id: 2,
        text: "Shops independently for small purchases.",
        score: 0,
      },
      {
        id: 3,
        text: "Needs to be accompanied on shopping trips.",
        score: 0,
      },
      {
        id: 4,
        text: "Completely unable to shop.",
        score: 0,
      },
    ],
  },
  {
    id: "meals",
    title: "Food Preparation",
    icons: "🍳",
    questions: [
      {
        id: 1,
        text: "Plans, prepares, and serves meals independently.",
        score: 1,
      },
      { id: 2, text: "Prepares meals if supplied with ingredients.", score: 0 },
      { id: 3, text: "Heats and serves prepared meals.", score: 0 },
      { id: 4, text: "Needs meals prepared and served.", score: 0 },
    ],
  },
  {
    id: "housekeeping",
    title: "Housekeeping",
    icons: "🏠",
    questions: [
      {
        id: 1,
        text: "Maintains house alone with occasional help for heavy work.",
        score: 1,
      },
      {
        id: 2,
        text: "Performs light daily tasks like dishwashing, bed making.",
        score: 1,
      },
      {
        id: 3,
        text: "Performs light tasks but cannot maintain cleanliness.",
        score: 1,
      },
      { id: 4, text: "Needs help with all home maintenance.", score: 1 },
      { id: 5, text: "Does not participate in housekeeping.", score: 0 },
    ],
  },
  {
    id: "laundry",
    title: "Laundry",
    icons: "👕",
    questions: [
      { id: 1, text: "Does personal laundry completely.", score: 1 },
      { id: 2, text: "Launders small items like socks.", score: 1 },
      { id: 3, text: "All laundry must be done by others.", score: 0 },
    ],
  },
  {
    id: "transportation",
    title: "Transportation",
    icons: "🚗",
    questions: [
      {
        id: 1,
        text: "Travels independently on public transport or drives",
        score: 1,
      },
      { id: 2, text: "Arranges own travel via taxi.", score: 1 },
      { id: 3, text: "Travels on public transport when assisted.", score: 1 },
      { id: 4, text: "Travel limited to taxi/car with assistance.", score: 0 },
      { id: 5, text: "Does not travel at all", score: 0 },
    ],
  },
  {
    id: "medications",
    title: "Managing Medications",
    icons: "💊",
    questions: [
      {
        id: 1,
        text: "Takes medications correctly and on time independently.",
        score: 1,
      },
      { id: 2, text: "Takes medications if prepared in advance.", score: 0 },
      { id: 3, text: "Not capable of managing own medication.", score: 0 },
    ],
  },
  {
    id: "finances",
    title: "Handling Finances",
    icons: "💰",
    questions: [
      { id: 1, text: "Manages all financial matters independently.", score: 1 },
      {
        id: 2,
        text: "Manages daily purchases but needs help with banking.",
        score: 1,
      },
      { id: 3, text: "Incapable of handling money.", score: 0 },
    ],
  },
];
