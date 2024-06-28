import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import RandomNews from './RandomNews';

function ArticleDetail() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [likeCount, setLikeCount] = useState(0);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get('/news.json');
        const article = response.data.articles.find(article => article.id === parseInt(id));
        setArticle(article);
      } catch (error) {
        console.error('Error fetching article data:', error);
      }
    };

    fetchArticle();
  }, [id]);

  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    setComments([...comments, comment]);
    setComment('');
  };

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4 w-full">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <img src={article.imageUrl} alt={article.title} className="w-full h-64 object-cover" />
        <div className="p-6">
          <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
          <p className="text-gray-700 text-lg mb-4">{article.fullText}</p>

          {article.additionalImages && (
            <div className="grid gap-4 grid-cols-2 mb-4">
              {article.additionalImages.map((img, index) => (
                <img key={index} src={img} alt={`Additional ${index}`} className="w-full h-48 object-cover" />
              ))}
            </div>
          )}

          <button onClick={handleLike} className="bg-blue-500 text-white px-4 py-2 rounded">
            Like ({likeCount})
          </button>

          <div className="mt-6">
            <h2 className="text-2xl font-bold mb-4">Комментарии</h2>
            <form onSubmit={handleCommentSubmit} className="mb-4">
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mb-2"
                placeholder="Оставить комментарий"
                rows="4"
              />
              <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
                Отправить
              </button>
            </form>
            {comments.map((com, index) => (
              <div key={index} className="border-b border-gray-300 py-2">
                {com}
              </div>
            ))}
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-8 mb-4">Случайные новости</h2>
      <RandomNews />
    </div>
  );
}

export default ArticleDetail;
