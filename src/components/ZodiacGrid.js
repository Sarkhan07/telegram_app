import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const zodiacSigns = [
  { sign: 'aries', period: 'March 21 - April 19' },
  { sign: 'taurus', period: 'April 20 - May 20' },
  { sign: 'gemini', period: 'May 21 - June 20' },
  { sign: 'cancer', period: 'June 21 - July 22' },
  { sign: 'leo', period: 'July 23 - August 22' },
  { sign: 'virgo', period: 'August 23 - September 22' },
  { sign: 'libra', period: 'September 23 - October 22' },
  { sign: 'scorpio', period: 'October 23 - November 21' },
  { sign: 'sagittarius', period: 'November 22 - December 21' },
  { sign: 'capricorn', period: 'December 22 - January 19' },
  { sign: 'aquarius', period: 'January 20 - February 18' },
  { sign: 'pisces', period: 'February 19 - March 20' }
];

function ZodiacGrid() {
  const { t } = useTranslation();
  return (
    <div className="container">
      <Row>
        {zodiacSigns.map(({ sign, period }) => (
          <Col md={4} sm={6} key={sign}>
            <Card className="zodiac-card" as={Link} to={`/detail/${sign}`}>
              <Card.Body>
              <Card.Title>{t(`zodiac.${sign}`)}</Card.Title>
                <Card.Text>{period}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ZodiacGrid;
