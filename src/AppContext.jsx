import { createContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [language, setLanguage] = useState('FI');

  const handleShowContactForm = () => document.getElementById('my_modal_1').showModal()

  return (
    <AppContext.Provider value={{ language, setLanguage, handleShowContactForm }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
export { AppProvider };