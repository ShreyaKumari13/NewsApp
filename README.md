# NewsApp
AcoNews: News Aggregation Web Application
AcoNews is a modern news aggregation platform that fetches the latest articles using the GNews.io API. The app allows users to search for news by keyword, filter articles based on country, language, and category, and navigate through paginated results.

Features
🔍 Dynamic Search: Easily search for news articles using keywords.
🌍 Filter by Country & Language: Narrow down results by choosing a country and language.
🗂️ Category Filtering: View articles categorized by specific topics (e.g., sports, technology).
📄 Paginated Results: Displays up to 10 articles per page, ensuring smooth navigation.
🖥️ Backend with Express.js & Axios: Backend integration to handle API requests efficiently.
📱 Responsive UI: Built with Tailwind CSS for a seamless experience on mobile, tablet, and desktop.
⏳ Loading Skeleton: Shows a skeleton loader while articles are being fetched.
🌐 Deployment: Frontend hosted on Firebase, backend hosted on Vercel.
Tech Stack
Frontend: React (Vite), Tailwind CSS
Backend: Node.js, Express, Axios
Deployment: Firebase Hosting (Frontend), Vercel (Backend)
Setup Instructions
Frontend
Clone the repository:

bash
Copy code
git clone https://github.com/YasinMakandar/Aconews_Repo.git
cd frontend
Install dependencies:

bash
Copy code
npm install
Run the development server:

bash
Copy code
npm run dev
Build the production files:

bash
Copy code
npm run build
Backend
Navigate to the backend folder:

bash
Copy code
cd backend
Install dependencies:

bash
Copy code
npm install
Create a .env file: In the backend folder, create a .env file and add your GNews API key:

bash
Copy code
GNEWS_API_KEY=your_api_key_here
Start the backend server:

bash
Copy code
npm start
Challenges Faced
Pagination and Filtering: Handling the GNews.io API’s pagination and category filtering required different endpoints, adding complexity.
Backend Deployment: Deploying the backend on Vercel required careful configuration to ensure seamless execution of serverless functions.
Live Demo
Frontend: AcoNews Frontend
Backend: AcoNews Backend API
