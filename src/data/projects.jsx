
import project1 from "../assets/projects/projects-1.png";
import project2 from "../assets/projects/projects-2.png";
import project3 from "../assets/projects/projects-3.png";

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
    title: "Dev Stack - Developer Technology Stack",
    image: project2,
    category: "Frontend Web Application",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "DaisyUI",
      "React Hooks",
      "React Toastify"
    ],
    description:
      "A responsive developer-focused application that lets users explore different technologies and build a personalized technology stack. Users can add and remove technologies, manage selected items through React state, and view an empty-state message when their stack has no items.",
    live: "https://b14-a05-dev-stack-omega.vercel.app",
    github: "https://github.com/jitudey24/B14-A05-Dev-Stack",
    challenges: [
      "Managing selected technology IDs with React useState",
      "Loading JSON data and rendering dynamic technology lists",
      "Implementing conditional rendering and responsive layouts"
    ],
    future: [
      "Save selected technologies using localStorage",
      "Add search, sorting, and technology category filters",
      "Allow users to export or share their technology stack"
    ],
  },
  {
    id: 3,
    title: "FitLog - Workout Planner",
    image: project3,
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
    live: "https://b-14-a06-fit-log.vercel.app",
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
