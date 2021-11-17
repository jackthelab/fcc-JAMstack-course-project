const axios = require('axios');
require('dotenv').config();
const countries = require("./countries.json");

const getHeadlines = async (country) => {

  const topNewsReqURL = `${process.env.BASE_URL_NEWS}?country=${country}${process.env.API_KEY_NEWS}&pageSize=3`;

  try {

    const response = await axios.get(topNewsReqURL);
    console.log('This is individual response data: ', response.data.totalResults);
    return {
      "country": country,
      "articles": response.data.articles
    };

  } catch (e) {

    console.error(e);

  }

};



module.exports = async function() {
  
  const newsHeadlines = countries.map(
    country => getHeadlines(country)
  );

  // getHeadlines is returning promises
  return Promise.all(newsHeadlines).then( newsObjects => {
    console.log('newsObjects: ', newsObjects);
    return [].concat.apply([], newsObjects);
  })
  
}