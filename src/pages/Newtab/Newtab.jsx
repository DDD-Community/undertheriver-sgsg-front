import React, { useState } from 'react';
import './Newtab.css';
import './Newtab.scss';
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import GNB from './components/GNB';
import Card from './components/Card';

const contentWrapper = css`
  display: flex;
  height: 100vh;
  max-width: 1280px;
  margin: auto;
`;

const asideWrapper = css`
  width: 15%;
  height: 100%;
`;

const cardListWrapper = css`
  flex-grow: 1;
`;


const Newtab = () => {
  const [cards, setCards] = useState([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 }
  ])
  const cardList = cards.map(card => <li key={card.id}><Card /></li>)
  return (
    <>
      <GNB/>
      <main className="wrapper">
        <section css={contentWrapper}>
          <aside css={asideWrapper}>
            aside menu
          </aside>
          <section css={cardListWrapper}>
            <ul className="card-list">
              {cardList}
            </ul>
          </section>
        </section>
      </main>
    </>
  );
};

export default Newtab;
