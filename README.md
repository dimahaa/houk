# houk01 Monorepo

This repository contains both the frontend (Next.js) and backend (NestJS) applications for the houk01 project.

## Project Structure

- `frontend/` — Next.js application (React)
- `backend/` — NestJS application (Node.js/TypeScript)
- `docs/` — Documentation and guides

## Getting Started

### Prerequisites
- Node.js (LTS recommended)
- npm or yarn

### Setup

#### 1. Install dependencies
```
cd frontend && npm install
cd ../backend && npm install
```

#### 2. Running the apps
- **Frontend:**
  ```
  cd frontend
  npm run dev
  ```
- **Backend:**
  ```
  cd backend
  npm run start:dev
  ```

#### 3. Environment Variables
- Copy `.env.example` to `.env` in both frontend and backend and fill in required values.

## Contributing

- Use feature branches: `feature/your-feature-name`
- Write clear commit messages
- Open pull requests for review

## License
MIT
