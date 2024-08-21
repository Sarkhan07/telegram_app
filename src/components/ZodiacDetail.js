import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { Button } from 'react-bootstrap';

function ZodiacDetail() {
  const { sign } = useParams(); 
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.post('https://poker247tech.ru/get_horoscope/', {
          sign,
          language: i18n.language === 'ru' ? 'original' : 'translated',
          period: 'today',
        });
        setDescription(response.data.horoscope);
      } catch (error) {
        console.error('Error fetching zodiac description:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [sign, i18n.language]);

  useEffect(() => {
    const tg = window.Telegram.WebApp;
    tg.MainButton.setText(t('back'));
    tg.MainButton.show();
    tg.MainButton.onClick(() => navigate(-1));

    return () => {
      tg.MainButton.hide();
    };
  }, [navigate, t]);

  if (loading) {
    return <div>{t('loading')}</div>;
  }

  return (
    <div className="container zodiac-detail">
    <Button variant="primary" onClick={() => navigate('/')}>{t('backToHome')}</Button>
      <h2 className="mt-4">{t(`zodiac.${sign}`)}</h2>
      <p>{description}</p>
    </div>
  );
}

export default ZodiacDetail;