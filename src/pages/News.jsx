import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Search from '../components/Search';
import AppContext from '../AppContext';
import { client } from '../client';

function News() {
  const navigate = useNavigate();
  const { language } = useContext(AppContext);

  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await client.getEntries({
        content_type: 'article',
        locale: language,
      })
      console.log('response', response.items)
      const entries = response.items
      
      // Sort entries by date
      const sortedEntries = entries.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB - dateA;
      });

      setArticles(sortedEntries)
      setFilteredArticles(sortedEntries)
    }
    fetchData()
  }, [language])

  const handleSearch = (event) => {
    setFilteredArticles(
      articles.filter((article) =>
        article.fields.title.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };

  const formatDate = (dateString) => {
    const inputDate = new Date(dateString);
  
    const day = inputDate.getDate().toString().padStart(2, '0');
    const month = (inputDate.getMonth() + 1).toString().padStart(2, '0');
    const year = inputDate.getFullYear();
  
    const formattedDate = `${day}.${month}.${year}`;
    return formattedDate;
  };

  return (
    <div className='m-4 flex flex-col gap-5'>
      <div className='flex flex-col gap-3 lg:flex-row lg:justify-between'>
        <h1 className='font-lexend font-extrabold text-3xl lg:text-5xl'>{language === 'en-US' ? 'News' : 'Ajankohtaista'}</h1>
        <Search handleSearch={handleSearch} />
      </div>

      {/* Article cards */}
      <div className='flex flex-col gap-5 md:flex-row md:flex-wrap'>
        {filteredArticles.map(article => (
          <div key={article.sys.id} className='card bg-base-100 shadow-xl md:w-[48%] lg:w-[31%] 2xl:w-[24%]'>
            <figure><img src={article.fields.headerImage.fields.file.url} alt='Header image' /></figure>
            <div className='card-body'>
              <p>{formatDate(article.fields.date)} - {article.fields.authorName}</p>
              <h2 className='card-title'>{article.fields.title}</h2>
              <div className='card-actions justify-end'>
                <button 
                  onClick={() => navigate(`${article.sys.id}`)} 
                  className='px-4 py-2 mt-2 rounded-3xl bg-blue text-lg font-semibold text-white'>
                    {language === 'en-US' ? 'Read more' : 'Lue lisää'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default News;
