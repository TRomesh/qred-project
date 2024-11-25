# 🛠️ React Project

This demo React project showcases state management using Redux Toolkit (RTK) and integrates with jsonplaceholder.typicode.com for seamless API prototyping.

## 🌟 Features

- **Vite + React**: Enjoy instant hot module replacement and a snappy development experience.
- **Express Backend**: Set up a scalable backend with minimal effort.

## 🛠️ Tools used

- **Tailwind**: For styling
- **Schadcn**: For components
- **Redux RTK + Query**: For state management and data fetching
- **Axios**: Fetch alternative
- **Supertoken**: Manage auth with Supertokens

## 📁 Project Structure

```
project-root/
├── backend/            # Express backend
│   ├── .env
│   ├── package.json
│   └── src/
├── frontend/           # Vite React frontend
│   ├── .env
│   ├── package.json
│   └── src/
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or newer)
- **npm** or **yarn**

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/TRomesh/qred-project.git
   cd qred-project
   ```

2. **Install dependencies**

   - **Backend**

     ```bash
     cd backend
     npm install
     # or
     yarn install
     ```

   - **Frontend**

     ```bash
     cd frontend
     npm install
     # or
     yarn install
     ```

### Configuration

#### Backend Environment Variables

Create a `.env` file in the `backend/` directory with the following variables:

```env
API_DOMAIN_PORT=
API_DOMAIN_URL=
WEB_DOMAIN_PORT=
WEB_DOMAIN_URL=
```

- **API_DOMAIN_PORT**: Port number for the backend server (e.g., `8080`).
- **API_DOMAIN_URL**: URL for the backend server (e.g., `http://localhost`).
- **WEB_DOMAIN_PORT**: Port number for the frontend server (e.g., `5173`).
- **WEB_DOMAIN_URL**: URL for the frontend server (e.g., `http://localhost`).

#### Frontend Environment Variables

Create a `.env` file in the `frontend/` directory with the following variables:

```env
VITE_BASE_URL=https://jsonplaceholder.typicode.com
VITE_API_DOMAIN=http://localhost:8080
VITE_WEB_DOMAIN=http://localhost:5173
```

- **VITE_BASE_URL**: Base URL for external API requests.
- **VITE_API_DOMAIN**: URL of your backend API.
- **VITE_WEB_DOMAIN**: URL where your frontend app runs.

### Running the Application

#### Start the Backend Server

```bash
cd backend
npm start
# or
yarn start
```

#### Start the Frontend Server

```bash
cd frontend
npm run dev
# or
yarn dev
```

#### Open the App

Navigate to `http://localhost:5173` (or your specified `WEB_DOMAIN_URL` and `WEB_DOMAIN_PORT`) in your browser to see the application in action.

## 🛠️ Building for Production

To create production builds:

- **Backend**

  ```bash
  cd backend
  npm run build
  # or
  yarn build
  ```

- **Frontend**

  ```bash
  cd frontend
  npm run build
  # or
  yarn build
  ```
