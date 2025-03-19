# 🚀 Task Management Frontend (Next.js)

This is a Next.js frontend application for managing tasks, integrated with the Task Management API. It provides an intuitive user interface for users to authenticate, manage their tasks, and interact with the backend API.

# 📋 Features

-   User Authentication (login & register) with JWT
-   Task CRUD (Create, Read, Update, Delete) with soft delete support
-   Token-based session management using Zustand
-   Optimistic UI updates and data caching with React-Query
-   Responsive design with Material UI
-   Fully typed with TypeScript

## 🛠️ Tech Stack

-   Next.js (React Framework)
-   Material UI (MUI) for UI components
-   Zustand for state management (lightweight and modern)
-   React Query for server state & API caching
-   TypeScript
-   Vercel

## 📁 Folder Breakdown

| **Folder**             | **Purpose**                                                        |
| ---------------------- | ------------------------------------------------------------------ |
| `app/`                 | Next.js app directory (routes or App Router structure)             |
| `components/`          | Reusable React components organized by feature and layout          |
| `components/features/` | Feature-specific components (e.g., `auth`, `tasks`)                |
| `components/layout/`   | Layout components like `header`, `footer`, and shared `common` UI  |
| `hooks/`               | Custom React hooks (e.g., `use-dialog.ts`)                         |
| `services/`            | API service modules for interacting with backend (`auth`, `tasks`) |
| `stores/`              | Zustand state stores for session and tasks                         |
| `providers/`           | App-wide context providers (e.g., React Query provider)            |
| `types/`               | TypeScript interfaces and types (e.g., `task.ts`, `user.ts`)       |
| `utils/`               | Helper utility functions used across the project                   |
| `cypress/`             | End-to-end testing setup with Cypress                              |
| `cypress/e2e/`         | Cypress E2E test specs                                             |
| `cypress/support/`     | Custom Cypress commands and global setup                           |
| `public/`              | Static assets like images, icons, etc.                             |

## ⚙️ Environment Variables

Create a .env.local file in the root of your project:

```bash
API_URL=http://localhost:8000/api
```

# 🚀 Getting Started

1️⃣ Install dependencies:

```bash
 npm install
# or
yarn install
# or
pnpm install
```

2️⃣ Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Visit:
http://localhost:3000

## 🔐 Auth Strategy

-   Uses Zustand to store user session and JWT token.
-   Adds JWT token to all API requests via fetch (server actions).

## 💡 Notes

-   Fully integrated with the Task Management API backend.
-   React Query automatically handles API caching, refetching, and optimistic updates.
-   Designed with Material UI for a clean and responsive user experience.
-   Uses TypeScript across the app for safer code.

## 📦 Build for Production

```bash
npm run build
npm run start
```
