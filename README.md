# Lynxa

**Lynxa** is a modern web interface designed with performance, scalability, and visual clarity in mind. This project serves as a solid foundation for future applications with well-structured architecture, theme switching (light/dark), and clean component separation.

## ✨ Features

- 🌓 Theme toggle (light/dark) using Zustand and Tailwind CSS
- ⚡ Built with Vite + React + TypeScript
- 🎨 Custom CSS variables for full theme control
- 🔍 Atomic components with global styling
- 🧪 Unit testing configured with Vitest + Testing Library
- 📁 Modular and scalable folder structure

## 🚀 Technologies Used

- React 18
- TypeScript
- Zustand (State Management)
- Tailwind CSS
- Vitest + React Testing Library
- Vite

## 📁 Project Structure

src/
├── assets/ # Static assets (SVGs, images, etc.)
├── components/ # Reusable UI components (e.g. Button, Header, Footer)
├── layouts/ # Page layout components (DefaultLayout)
├── modules/ # Feature-based structure (e.g. hero section)
├── routes/ # Routing system
├── stores/ # Zustand stores (themeStore)
├── styles/ # Tailwind and CSS variables
├── types/ # Global shared types
├── utils/ # Utility functions (e.g. theme manager)
├── AppRoot.tsx # Application root
└── main.tsx # Entry point

▶️ Running the App
Start the development server:
npm run dev
Open your browser and go to http://localhost:5173.

🧪 Running Tests
Run the test suite with:
npm run test

📦 Build for Production
To build the project:
npm run build