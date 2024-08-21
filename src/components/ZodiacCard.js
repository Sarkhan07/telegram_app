import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function ZodiacCard({ sign, period}) {
  const navigate = useNavigate(); 
  const { t } = useTranslation();

  const handleClick = () => {
    navigate(`/detail/${sign}`);
  };

  return (
    <div className="zodiac-card" onClick={handleClick}>
      <h3>{t(`zodiac.${sign}`)}</h3>
      <p>{period}</p>
    </div>
  );
}

export default ZodiacCard;
