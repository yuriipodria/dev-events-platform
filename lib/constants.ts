export interface Event {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
}

export const events: Event[] = [
  {
    title: "Frontend Dev Workshop",
    image: "/images/event1.png",
    slug: "frontend-dev-workshop",
    location: "New York, USA",
    date: "2025-12-15",
    time: "18:00 - 20:00",
  },
  {
    title: "UI/UX Design Meetup",
    image: "/images/event2.png",
    slug: "ui-ux-design-meetup",
    location: "Paris, France",
    date: "2025-12-20",
    time: "10:00 - 20:00",
  },
  {
    title: "Tech Conference 2026",
    image: "/images/event3.png",
    slug: "tech-conference-2026",
    location: "San Francisco, USA",
    date: "2026-01-10",
    time: "09:00 - 20:00",
  },
  {
    title: "JavaScript Hackathon",
    image: "/images/event4.png",
    slug: "javascript-hackathon",
    location: "London, UK",
    date: "2026-01-25",
    time: "12:00 - 20:00",
  },
  {
    title: "AI & Machine Learning Summit",
    image: "/images/event5.png",
    slug: "ai-ml-summit",
    location: "Berlin, Germany",
    date: "2026-02-05",
    time: "07:00 - 20:00",
  },
  {
    title: "Open Source Networking Night",
    image: "/images/event6.png",
    slug: "open-source-networking-night",
    location: "Los Angeles, USA",
    date: "2026-02-15",
    time: "20:00 - 22:30",
  },
];
