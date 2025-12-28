# 📝 Modern Task Manager

A full-stack Todo application built with a focus on type safety and modern UI/UX.

## 🚀 Tech Stack

- **Backend:** [NestJS](https://nestjs.com/) (Node.js framework)
- **Validation:** [Zod](https://zod.dev/) via `nestjs-zod`
- **Frontend:** HTML5, Modern CSS (Glassmorphism), and Vanilla JavaScript
- **Icons:** [FontAwesome](https://fontawesome.com/)

## 🛠️ Features

- **CRUD Operations:** Create, Read, Update (Toggle Status), and Delete tasks.
- **Real-time Re-indexing:** When a task is deleted, IDs are re-calculated to maintain a clean sequence (1, 2, 3...).
- **Zod Validation:** Strict schema validation on the backend to ensure data integrity.
- **Responsive Design:** Beautiful, mobile-friendly interface with hover effects and smooth transitions.

## 📂 Project Structure

```text
.
├── backend/
│   ├── src/
│   │   ├── tasks/
│   │   │   ├── dto/            # Zod-powered DTOs
│   │   │   ├── tasks.controller.ts
│   │   │   └── tasks.service.ts # Logic for re-indexing IDs
│   │   └── main.ts             # CORS enabled here
└── frontend/
    └── index.html              # The single-file beautiful UI
```

## ⚙️ Setup Instructions

### 1. Backend Setup
```bash
cd backend
npm install
npm install nestjs-zod zod
npm run start:dev
```

### 2. Frontend Setup
Simply open `index.html` in your browser or use a VS Code extension like **Live Server**.

## 🔌 API Endpoints

| Method | Endpoint      | Description            |
| :----- | :------------ | :--------------------- |
| GET    | `/tasks`      | Fetch all tasks        |
| POST   | `/tasks`      | Create a new task      |
| PATCH  | `/tasks/:id`  | Toggle task completion |
| DELETE | `/tasks/:id`  | Delete and re-index    |

