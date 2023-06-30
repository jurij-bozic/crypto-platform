export const cryptoApi = {
  coins: {
    baseURL: 'https://coinranking1.p.rapidapi.com',
    url: '/coins',
    headers: {
      'X-RapidAPI-Key': '2f0f950d60msh31af0633bec8b10p1716dfjsn3a3342ed2a1f',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
  },
  news: {
    baseURL: 'https://bing-news-search1.p.rapidapi.com',
    url: '/news/search?q=crypto&safeSearch=Off&textFormat=Raw&freshness=Day&count=10',
    headers: {
      'Accept-Language': 'english',
      'X-BingApis-SDK': 'true',
      'X-RapidAPI-Key': '2f0f950d60msh31af0633bec8b10p1716dfjsn3a3342ed2a1f',
      'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
    }
  }
}




