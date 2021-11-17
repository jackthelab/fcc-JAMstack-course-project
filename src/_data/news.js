const axios = require('axios');
require('dotenv').config();

const topNewsReqURL = `${process.env.BASE_URL_NEWS}?country=us${process.env.API_KEY_NEWS}&pageSize=5`;

const getHeadlines = async () => {
  try {
    const response = await axios.get(topNewsReqURL);
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.error(e);
  }

}

module.exports = getHeadlines;