import React from 'react';
import { useNavigate } from 'react-router-dom';

const news = [
    { id: 1, title: 'Новость 1', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s', description: 'Краткое описание новости 1' },
    { id: 2, title: 'Новость 2', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quaerat dicta aliquid debitis adipisci beatae dolorem consectetur earum magnam fugit odio officia, impedit consequuntur ratione ad, error amet possimus. Fugiat quo, odio consequatur sint fugit inventore optio quos delectus at? Numquam omnis vel, repellendus maxime nostrum corporis? Optio cumque praesentium voluptate sit deserunt sed. Odio error culpa animi sequi, eos laudantium iusto totam tempora a aperiam, qui nulla sint quasi illum consequatur labore. Vero laudantium pariatur consequatur tempora illo earum corporis et voluptatibus odio sint incidunt amet aperiam dicta nobis fugiat soluta, suscipit debitis maxime eligendi, sunt nesciunt. Voluptate, quisquam.' },
    // Добавьте больше новостей по необходимости
];

function NewsList() {
    const navigate = useNavigate();

    const handleImageClick = (id) => {
        navigate(`/news/${id}`);
    };

    return (
        <div>
            {news.map(item => (
                <div key={item.id} className="news-item">
                    <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="news-image"
                        onClick={() => handleImageClick(item.id)}
                    />
                    <p>{item.description}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default NewsList;




