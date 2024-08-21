import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ZodiacGrid from './components/ZodiacGrid';
import ZodiacDetail from './components/ZodiacDetail';
import { useTranslation } from 'react-i18next';

function App() {
  const { i18n } = useTranslation();
  
  useEffect(() => {
    const tg = window.Telegram.WebApp;
    tg.ready();
    tg.expand();  

    const userLanguage = tg?.initDataUnsafe?.user?.language_code;
    const language = userLanguage === 'ru' ? 'ru' : 'en';
    i18n.changeLanguage(language);

    tg.MainButton.text = "Back";
    tg.MainButton.onClick(() => {
      tg.close();
    });
    
    return () => {
      tg.close();  
    };
  }, [i18n]);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<ZodiacGrid />} />
          <Route path="/detail/:sign" element={<ZodiacDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
