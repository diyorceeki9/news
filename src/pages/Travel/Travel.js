import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const kyrgyzstanPlaces = [
  {
    id: 1,
    title: "Ала-Арча",
    description: "Национальный парк недалеко от Бишкека.",
    imageUrl: "https://i.natgeofe.com/n/91c4071e-ba4d-4f05-a002-71e63355eb13/kyrgyzstan-kol-suu.jpg",
  },
  {
    id: 2,
    title: "Озера Ысык-Көл",
    description: "Одно из больших озер мира..",
    imageUrl: "https://happylove.top/uploads/posts/2023-08/1692946674_happylove-top-p-ozero-isik-kol-issik-kul-krasivo-1.jpg",
  },
  {
    id: 3,
    title: "Пик Ленина",
    description: "Одно из высоких гор мира",
    imageUrl: "https://iskatel.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/09/pik-lenina-1-1120x500-1.jpg.webp",
  },
  {
    id: 4,
    title: "Бунара Мунарасы",
    description: "Бунара Мунарасы",
    imageUrl: "https://img.tourister.ru/files/2/5/4/4/3/1/2/6/original.jpg",
  },
  {
    id: 5,
    title: "Сары-Челек",
    description: "Биосферный заповедник Сары-Челек",
    imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/e6/7a/34/sary-chelek-nature-reserve.jpg?w=1200&h=-1&s=1",
  },
  {
    id: 6,
    title: "Арсланбаб",
    description: "Крупный ореховый лес",
    imageUrl: "https://www.advantour.com/img/kyrgyzstan/images/arslanbob.jpg",
  },
  {
    id: 7,
    title: "Чатыр-Көл",
    description: "бессточное озеро в Внутреннем Тянь-Шане, Кыргызстан.",
    imageUrl: "https://dwc.kg/wp-content/uploads/2023/05/1647363922_10-vsegda-pomnim-com-p-ozero-chatir-kul-foto-11-optimized.jpg",
  },
  {
    id: 8,
    title: "Каньон Сказка",
    description: " небольшое ущелье на южном берегу Иссык-Куля",
    imageUrl: "https://avatars.dzeninfra.ru/get-zen_doc/1582279/pub_62fbc52ea6f61d33951ede7e_62fd0beba316be0a40170010/scale_1200",
  },
  {
    id: 9,
    title: "Сулайман-Тоо",
    description: "священная гора в городе Ош на юге Кыргызстана.",
    imageUrl: "https://sputnik.kg/img/07e6/04/05/1063408319_457:0:3188:2048_1920x0_80_0_0_fe593ece4cfa2b01fb33685d8d1b1692.jpg",
  },
  {
    id: 10,
    title: "Каракол",
    description: " город, который находится в окружении восхитительных белоснежных гор Тянь-Шаня",
    imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/af/1c/37/caption.jpg?w=1200&h=-1&s=1",
  },
  // Добавьте больше мест по необходимости
];

const Travel = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const apiKey = 'b8e816e9923b4dde968a63aeb411dac9';
    const apiUrl = `https://newsapi.org/v2/top-headlines?category=travel&country=us&apiKey=${apiKey}`;

    axios.get(apiUrl)
      .then(response => {
        setNews(response.data.articles);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="travel-news p-4">
      {/* <h1 className="text-3xl font-bold mb-4 text-center">Путешествия</h1> */}
      <ul>
        {news.map((article, index) => (
          <li key={index} className="mb-4 max-w-sm rounded overflow-hidden shadow-lg" >
            <div className="article flex flex-col md:flex-row items-start">
              {article.urlToImage && (
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="w-full md:w-1/4 h-auto mb-2 md:mb-0 "
                />
              )}
              <div className="article-content md:ml-4 ">
                <h2 className="text-xl font-semibold">{article.title}</h2>
                <p>{article.description}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500">Читать далее</a>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <h2 className="text-3xl font-bold mt-8 mb-4 text-center">Лучшие места для путешествия в Кыргызстане</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {kyrgyzstanPlaces.map(place => (
          <div key={place.id} className="relative">
            <Link to={`/travel/${place.id}`}>
              <img src={place.imageUrl} alt={place.title} className="w-full h-64 object-cover rounded-lg shadow-md" />
              <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4 w-full rounded-b-lg">
                <h3 className="text-xl font-semibold">{place.title}</h3>
                <p>{place.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Travel;
