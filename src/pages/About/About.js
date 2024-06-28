// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function About() {
//   const [news, setNews] = useState([]);

//   useEffect(() => {
//     const apiKey = 'b8e816e9923b4dde968a63aeb411dac9';
//     const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

//     axios.get(apiUrl)
//       .then(response => {
//         setNews(response.data.articles);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   return (
//     <div className="App">
//       <h1>Новости мира</h1>
//       <ul>
//         {news.map((article, index) => (
//           <li key={index}>
//             <h2>{article.title}</h2>
//             <p>{article.description}</p>
//             <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default About;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function About() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const apiKey = 'b8e816e9923b4dde968a63aeb411dac9';
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    axios.get(apiUrl)
      .then(response => {
        setNews(response.data.articles);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="App container">
      <h1 className='text-center'>Новости мира</h1>
      <ul>
        {news.map((article, index) => (
          <li key={index}>
            <div className="article">
              {article.urlToImage && <img src={article.urlToImage} alt={article.title} />}
              <div className="article-content">
                <h2>{article.title}</h2>
                <p>{article.description}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer">Читать далее</a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default About;

