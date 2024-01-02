import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AppContext from '../AppContext';
import { client } from '../client';
import { formatDate } from '../utils/utils';
import DOMPurify from 'dompurify';

function Article() {
  const { language } = useContext(AppContext);
  const { articleId } = useParams();

  const [article, setArticle] = useState();

  // Fetch article by ID
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await client.getEntry(articleId, { locale: language })
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

    // Initialize the content array
    const renderedContent = blocks.map((block, index) => {
      if (index % 2 === 0) {
        const linkRegex = /\[(.*?)\]\((.*?)\)/g;
        const hasLink = linkRegex.test(block);
  
        if (hasLink) {
          const sanitizedText = DOMPurify.sanitize(block); // Sanitize the text
          const parts = sanitizedText.split(linkRegex); // Split text into parts
  
          const elements = parts.map((part, partIndex) => {
            if (partIndex % 3 === 0) {
              // Text block
              return <span key={partIndex} className="text-gray-700">{part}</span>;
            } else if (partIndex % 3 === 1) {
              // Link text
              const text = DOMPurify.sanitize(decodeURIComponent(part)); // Decode and sanitize link text
              return (
                <a key={partIndex} href={parts[partIndex + 1]} target="_blank" rel="noopener noreferrer" className="text-sky-500 underline" style={{wordWrap:"break-word"}}>
                  {text}
                </a>
              );
            }
            return null; // Ignore link URLs
          });
  
          return (
            <p key={index} className="text-base">
              {elements}
            </p>
          );
        } else {
          return (
            <p key={index} className="text-base text-gray-700">
              {DOMPurify.sanitize(block)}
            </p>
          );
        }
      } else {
        return (
          <img 
            key={index} 
            src={block} 
            alt={`Image ${index}`} 
            className='max-h-96 my-5'
          />
        );
      }
    });
  
    return renderedContent;
  };

  return (
    <div className='mt-5 mb-10 mx-12 max-w-7xl'>
      {article &&
        <div>
          <h1 className='font-lexend font-extrabold text-2xl lg:text-4xl mb-3'>{article.title}</h1>
          <h3 className='mb-4 text-light-gray font-semibold'>{formatDate(article.date)} - {article.authorName}</h3>
          <hr />
          <div className='my-4'>{parseContent(article.content)}</div>
        </div>
      }
    </div>
  )
}

export default Article;
