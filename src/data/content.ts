/* Cinematic, editorial photography. Sourced from Unsplash, unified with a warm
   duotone wash in CSS so the collection feels hand-graded rather than stock. */

export const IMAGES = {
  hero: "/images/hero.jpg",
  arrival: "/images/arrival.jpg",
  ritual: "/images/ritual.jpg",
  hands: "/images/hands.jpg",
  shared: "/images/shared.jpg",
  table: "/images/table.jpg",
  craft: "/images/craft.jpg",
  beans: "/images/beans.jpg",
  lateNight: "/images/lateNight.jpg",
  window: "/images/window.jpg",
  g1: "/images/g1.jpg",
  g2: "/images/g2.jpg",
  g3: "/images/g3.jpg",
  g4: "/images/g4.jpg",
  g5: "/images/g5.jpg",
  g6: "/images/g6.jpg",
};

export const CHAPTERS = [
  {
    id: "arrival",
    index: "Chapter One",
    title: ["Every story", "begins somewhere."],
    body:
      "It starts with a door. A small bell. The smell of something warm that you didn't know you needed. You came in for a few minutes. You left with a chapter you didn't plan to write.",
    image: IMAGES.arrival,
    caption: "Morning, before the city wakes.",
  },
  {
    id: "ritual",
    index: "Chapter Two",
    title: ["The ritual", "is the point."],
    body:
      "We don't rush the pour. The water finds the grounds the way a thought finds the right words — slowly, then all at once. Some people come for coffee. Most stay for the moments between the cups.",
    image: IMAGES.ritual,
    caption: "A hand, a cup, a quiet minute.",
  },
  {
    id: "shared",
    index: "Chapter Three",
    title: ["Shared", "moments."],
    body:
      "First dates become anniversaries here. Business ideas are born over a second refill. Friends stop being strangers. The conversations stay long after the coffee is gone.",
    image: IMAGES.shared,
    caption: "Two chairs. One long afternoon.",
  },
  {
    id: "craft",
    index: "Chapter Four",
    title: ["Crafted", "with care."],
    body:
      "Walnut, linen, ceramic fired by hand. Beans chosen the way you choose a record — by feel, not by the label. Nothing here is accidental. Everything is loved into place.",
    image: IMAGES.craft,
    caption: "Made by people who notice the details.",
  },
];

export const MENU = [
  {
    name: "Spanish Latte",
    note: "The cup chosen by people who never planned to stay this long.",
  },
  {
    name: "Slow Pour, Single Origin",
    note: "For the ones who arrived early and have nowhere else to be.",
  },
  {
    name: "Honey Cinnamon Cold Brew",
    note: "What quiet afternoons taste like when you stop checking the time.",
  },
  {
    name: "The Last Espresso",
    note: "Ordered by those who know the night is almost over, and want it to last.",
  },
];

export const GALLERY = [
  { src: IMAGES.g1, caption: "Light, around ten.", tall: true },
  { src: IMAGES.g2, caption: "The corner table.", tall: false },
  { src: IMAGES.g3, caption: "Steam, unhurried.", tall: true },
  { src: IMAGES.g4, caption: "An empty chair, waiting.", tall: false },
  { src: IMAGES.g5, caption: "Conversations, off-frame.", tall: true },
  { src: IMAGES.g6, caption: "The last light of the day.", tall: false },
];
