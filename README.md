# Mindora

Mindora is an anonymous mental wellness chat application built with a React frontend and an Express backend. It gives users a calm space to start a private conversation, explore supportive prompts, and receive AI-assisted guidance.

## Live Demo

[Open Mindora](https://mindora-ai-chi.vercel.app/)

## Features

- Anonymous chat experience
- Landing page based on the Mindora Figma design
- Suggested conversation prompts
- AI-powered support through the backend chat API
- Separate frontend and backend folders
- Environment variables kept out of GitHub for API safety

## Project Structure

```text
Mindora Project/
├── Backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env.example
│   ├── package.json
│   └── server.js
├── Frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── vite.config.ts
└── README.md
```

## Tech Stack

Frontend:

- React
- TypeScript
- Vite
- Tailwind CSS
- Lucide React icons

Backend:

- Node.js
- Express
- Groq SDK
- MongoDB/Mongoose setup

## Getting Started

Clone the project:

```bash
git clone https://github.com/lawalolamide48-cell/Mindora.git
cd Mindora
```

Install frontend dependencies:

```bash
cd Frontend
npm install
```

Install backend dependencies:

```bash
cd ../Backend
npm install
```

## Environment Variables

Create a `.env` file inside the `Backend` folder using `Backend/.env.example` as a guide:

```env
GROQ_API_KEY=your_groq_api_key_here
MONGODB_URI=your_mongodb_connection_string_here
PORT=5000
```

Do not upload your real `.env` file to GitHub.

## Running The App

Start the backend:

```bash
cd Backend
npm run dev
```

Start the frontend in a second terminal:

```bash
cd Frontend
npm run dev
```

The frontend usually runs on:

```text
http://localhost:5173
```

The backend usually runs on:

```text
http://localhost:5000
```

## API Safety

This project uses a backend server to protect API keys. The frontend should call the backend endpoint instead of calling Groq directly from the browser.

The real API key should only exist in:

```text
Backend/.env
```

The `.gitignore` file should keep `.env` and `node_modules` out of GitHub.

## GitHub Workflow

After making changes:

```bash
git add .
git commit -m "Describe your changes"
git push
```

## Disclaimer

Mindora is an AI companion and is not a substitute for professional mental health care. If someone is in immediate danger or experiencing a crisis, they should contact local emergency services or a trusted person immediately.
