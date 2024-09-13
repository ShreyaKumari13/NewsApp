# AcoNews: News Aggregation Web Application

**AcoNews** is a modern news aggregation platform that fetches the latest articles using the GNews.io API. The app allows users to search for news by keyword, filter articles based on country, language, and category, and navigate through paginated results.

## Features

- 🔍 **Dynamic Search**: Easily search for news articles using keywords.
- 🌍 **Filter by Country & Language**: Narrow down results by choosing a country and language.
- 🗂️ **Category Filtering**: View articles categorized by specific topics (e.g., sports, technology).
- 📄 **Paginated Results**: Displays up to 10 articles per page, ensuring smooth navigation.
- 🖥️ **Backend with Express.js & Axios**: Backend integration to handle API requests efficiently.
- 📱 **Responsive UI**: Built with Tailwind CSS for a seamless experience on mobile, tablet, and desktop.
- ⏳ **Loading Skeleton**: Shows a skeleton loader while articles are being fetched.
- 🌐 **Deployment**: Frontend hosted on Firebase, backend hosted on Vercel.

## Tech Stack

- **Frontend**: React (Vite), Tailwind CSS
- **Backend**: Node.js, Express, Axios
- **Deployment**: Firebase Hosting (Frontend), Vercel (Backend)

## Setup Instructions

### Frontend

1. **Clone the repository**:
   ```bash
   git clone https://github.com/YasinMakandar/Aconews_Repo.git
   cd frontend

2. **Install dependencies**:

   ```bash
   npm install

3. **Run the development server**:
   ```bash
   npm run dev

4. **Build the production files:**:
   ```bash
   npm run build

### Tailwind CSS Setup

1. Install Tailwind CSS:

    ```bash
    npm install -D tailwindcss postcss autoprefixer
    ```

2. Generate Tailwind configuration files:

    ```bash
    npx tailwindcss init -p
    ```

3. Configure `tailwind.config.js`:

    ```js
    /** @type {import('tailwindcss').Config} */
    module.exports = {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    ```

4. Include Tailwind in your CSS:

    ```css
    /* src/index.css */
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```


### Backend

1. **Navigate to the backend folder**:
   ```bash
   cd backend

2. **Install dependencies:**:
   ```bash
   npm install

3. **Create a .env file**:
   ```bash
   GNEWS_API_KEY=your_api_key_here

4. **Start the backend server:**:
   ```bash
   npm start

   ## Challenges Faced

- **Pagination and Filtering**: Handling the GNews.io API’s pagination and category filtering required different endpoints, adding complexity.
- **Backend Deployment**: Deploying the backend on Vercel required careful configuration to ensure seamless execution of serverless functions.


## Live Project

You can access the live project here:

- **Frontend**: [https://newsapp-587c0.web.app](https://newsapp-587c0.web.app)
- **Backend**: [https://backend-app-news.vercel.app/news/api](https://backend-app-news.vercel.app/news/api)







