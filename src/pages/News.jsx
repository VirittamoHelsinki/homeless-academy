import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Search from '../components/Search';
import Pagination from '../components/Pagination';
import AppContext from '../AppContext';
import { client } from '../client';
import { formatDate } from '../utils/utils';

function News() {
  const navigate = useNavigate();
  const { language } = useContext(AppContext);

  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);

  // Fetch all articles
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await client.getEntries({
          content_type: 'article',
          locale: language,
        })
        const entries = response.items

        // Sort entries by date
        const sortedEntries = entries.sort((a, b) => {
          const dateA = new Date(a.fields.date);
          const dateB = new Date(b.fields.date);
          return dateB - dateA;
        });

        setArticles(sortedEntries)
        setFilteredArticles(sortedEntries)
      } catch (error) {
        console.log('Error fetching all articles from Contentful:', error);
      }
    }
    fetchData()
  }, [language])

  const handleSearch = (event) => {
    setFilteredArticles(
      articles.filter((article) =>
        article.fields.title.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
    setCurrentPage(1)
  };

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 9;

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (filteredArticles.length === 0) {
    return <div className='m-10 font-lexend font-extrabold text-3xl'>Loading...</div>;
  }

  return (
    <div className='m-6 mb-10 flex flex-col gap-5'>
      <div className='flex flex-col gap-3 lg:flex-row lg:justify-between'>
        <h1 className='font-lexend font-extrabold text-3xl lg:text-5xl'>
          {language === 'en-US' ? 'News' : 'Ajankohtaista'}
        </h1>
        <Search handleSearch={handleSearch} />
      </div>

      {/* Article cards */}
      <div className='flex flex-col gap-[2%] gap-y-6 lg:gap-y-8 md:flex-row md:flex-wrap'>
        {currentArticles.map(article => (
          <div key={article.sys.id} className='card shadow-xl md:w-[49%] xl:w-[32%]'>
            <figure className='h-60'>
              <img
                src={article.fields.headerImage.fields.file.url}
                alt='Header image'
                className='object-cover w-full h-full'
              />
            </figure>
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
      {filteredArticles.length > 9 &&
        <Pagination
          articlesPerPage={articlesPerPage}
          totalArticles={filteredArticles.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      }
    </div>
  )
}

export default News;
