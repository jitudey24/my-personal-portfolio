
import project1 from "../assets/projects/projects-1.png";
import project2 from "../assets/projects/projects-2.png";
const fitLogPreview = "https://raw.githubusercontent.com/jitudey24/B-14-A06-Fit-Log/main/src/assets/banner.png";

const projects = [
  {
    id: 1,
    title: "Bazar Dor - Market Price Tracker",
    image: project1,
    category: "Full Stack Next.js Application",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "HeroUI",
      "Better Auth",
      "MongoDB",
      "REST API",
      "React Hot Toast"
    ],
    description:
      "A responsive market price tracking web application built with Next.js. It helps users explore essential product prices in Bangladesh, compare daily price changes, browse products by category, and view market-specific pricing information. Includes authentication, protected product details, user profile management, dynamic routing, loading skeletons, and responsive UI.",
    live: "https://b-14-a-7-bazar-dor.vercel.app",
    github: "https://github.com/jitudey24/B-14-A07-Bazar-Dor",
    challenges: [
      "Integrating REST APIs with Next.js server and client components",
      "Implementing authentication and protected routes using Better Auth",
      "Handling dynamic routing, asynchronous data fetching, and production build requirements"
    ],
    future: [
      "Add interactive price history charts and market comparisons",
      "Implement personalized product price alerts",
      "Add advanced product search and filtering"
    ],
  },
  {
    id: 2,
    title: "Payoo Banking - Transaction UI",
    image: null,
    category: "JavaScript Banking Interface",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "DOM Manipulation",
      "Event Handling",
      "Responsive UI"
    ],
    description:
      "A beginner-friendly banking interface project for practicing DOM manipulation, event handling, and interactive transaction UI flows.",
    live: "https://jitudey24.github.io/payoo-banking/",
    github: "https://github.com/jitudey24/payoo-banking",
    challenges: [
      "Handling user interactions with DOM events",
      "Updating interface values based on transaction actions",
      "Building a clear responsive interface"
    ],
    future: [
      "Improve form validation and transaction feedback",
      "Add a transaction history view",
      "Refine accessibility and mobile interactions"
    ],
  },
  {
    id: 3,
    title: "FitLog - Workout Planner",
    image: fitLogPreview,
    category: "Fitness & Productivity Web Application",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "DaisyUI",
      "React Context API",
      "React Toastify",
      "Next.js Image"
    ],
    description:
      "A modern fitness web application built with Next.js that helps users discover workouts and organize daily exercise plans. Features include a workout library, detailed workout pages, save-for-later functionality, workout completion tracking, sorting by duration, calories, or rating, and plan statistics for exercises, workout minutes, and calories burned.",
    live: "https://b-14-a06-fit-log.vercel.app/",
    github: "https://github.com/jitudey24/B-14-A06-Fit-Log",
    challenges: [
      "Managing shared workout and saved-item state with React Context API",
      "Keeping workout statistics and navigation counters synchronized",
      "Building responsive library, workout details, and My Plan pages"
    ],
    future: [
      "Add user accounts and cloud-synced workout plans",
      "Build weekly fitness progress charts and goal tracking",
      "Introduce personalized workout recommendations"
    ],
  },
];

export default projects;
