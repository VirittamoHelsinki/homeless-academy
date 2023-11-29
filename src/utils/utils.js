// Helper functions

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const formatDate = (dateString) => {
  const inputDate = new Date(dateString);

  const day = inputDate.getDate().toString().padStart(2, '0');
  const month = (inputDate.getMonth() + 1).toString().padStart(2, '0');
  const year = inputDate.getFullYear();

  const formattedDate = `${day}.${month}.${year}`;
  return formattedDate;
};

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

export const ScrollToTopWhenNavigating = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};