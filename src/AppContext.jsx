import { createContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [language, setLanguage] = useState('fi-FI');

  const handleShowContactForm = () => document.getElementById('my_modal_1').showModal()
  const handleHideContactForm = () => document.getElementById('my_modal_1').close()
  const handleHideNavMenu = () => document.getElementById('dropdown-nav').close();

  return (
    <AppContext.Provider value={{ language, setLanguage, handleShowContactForm, handleHideContactForm, handleHideNavMenu }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
export { AppProvider };