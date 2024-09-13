// const express = require('express');
// const axios = require('axios');
// const cors = require('cors');
// require('dotenv').config();

// const app = express();
// const PORT = process.env.PORT || 5000;
// const GNEWS_API_KEY = process.env.GNEWS_API_KEY;
// app.use(cors());
// app.use(express.json());

// const getNewsEndpoint = (category) => {
//   return category ? 'https://gnews.io/api/v4/top-headlines' : 'https://gnews.io/api/v4/search';
// };

// app.get('/news/api', async (req, res) => {

//   const {
//     keyword = '',
//     page = 1,
//     category = '',
//     country = '',
//     language = 'en'
//   } = req.query;

//   const articlesPerPage = 10;

//   try {
//     const endpoint = getNewsEndpoint(category);
//     const response = await axios.get(endpoint, {
//       params: {
//         q: keyword || 'latest',
//         token: GNEWS_API_KEY,
//         lang: language,
//         max: articlesPerPage,
//         page: page,
//         country: country,
//         category: category
//       }
//     });
//     const { articles, totalArticles } = response.data;
//     res.json({
//       currentPage: Number(page),
//       articles: articles,
//       totalArticles: totalArticles,
//       totalPages: Math.ceil(totalArticles / articlesPerPage)
//     });
//   } catch (error) {
//     console.error('Error fetching news:', error.message);
//     res.status(500).json({
//       error: 'Failed to fetch news',
//       message: error.message
//     });
//   }
// });
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const GNEWS_API_KEY = process.env.GNEWS_API_KEY;

app.use(cors());
app.use(express.json());

const getNewsEndpoint = (category) => {
  return category ? 'https://gnews.io/api/v4/top-headlines' : 'https://gnews.io/api/v4/search';
};

app.get('/news/api', async (req, res) => {
  const {
    keyword = '',
    page = 1,
    category = '',
    country = '',
    language = 'en'
  } = req.query;

  const articlesPerPage = 10;
  const maxPages = 30; // Maximum number of pages allowed

  try {
    const endpoint = getNewsEndpoint(category);
    const response = await axios.get(endpoint, {
      params: {
        q: keyword || 'latest',
        token: GNEWS_API_KEY,
        lang: language,
        max: articlesPerPage,
        page: page,
        country: country,
        category: category
      }
    });

    const { articles, totalArticles } = response.data;
    const totalPages = Math.min(Math.ceil(totalArticles / articlesPerPage), maxPages);

    res.json({
      currentPage: Number(page),
      articles: articles,
      totalArticles: totalArticles,
      totalPages: totalPages
    });
  } catch (error) {
    console.error('Error fetching news:', error.message);
    res.status(500).json({
      error: 'Failed to fetch news',
      message: error.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
