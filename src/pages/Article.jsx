import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AppContext from '../AppContext';
import { client } from '../client';
import { formatDate } from '../utils/utils';

function Article() {
  const { language } = useContext(AppContext);
  const { articleId } = useParams();

  const [article, setArticle] = useState();

  // Fetch article by ID
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await client.getEntry(articleId, {locale: language})
        setArticle(response.fields)
      } catch (error) {
        console.log('Error fetching individual article from Contentful:', error);
      }
    }
    fetchData()
  }, [language])

  const parseContent = (content) => {
    // Split content into text and image blocks
    const blocks = content.split(/!\[.*\]\((.*?)\)/);
  
    // Map over the blocks and render accordingly
    const renderedContent = blocks.map((block, index) => {
      if (index % 2 === 0) {
        // Text block
        return <p key={index}>{block}</p>;
      } else {
        // Image block
        return <img 
          key={index} 
          src={block} 
          alt={`Image ${index}`} 
          className='max-h-96 my-5'
        />;
      }
    });
  
    return renderedContent
  };

  return (
    <div className='mt-5 mb-10 mx-12 max-w-7xl'>
      {article &&
        <div>
          <h1 className='font-lexend font-extrabold text-2xl lg:text-4xl mb-3'>{article.title}</h1>
          <h3 className='mb-4 text-light-gray font-semibold'>{formatDate(article.date)} - {article.authorName}</h3>
          <hr />
          <p className='my-4'>{parseContent(article.content)}</p>
        </div>
      }
    </div>
  )
}

export default Article;
