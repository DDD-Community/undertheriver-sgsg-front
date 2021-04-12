import React, { useState } from 'react';

/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import GNB from './components/GNB';
import Card from './components/Card';
import Folder from './components/Folder';

const pageWrapper = css`
  background: #f9f7f2;
  height: 100%;
  .content-wrapper {
    display: flex;
    max-width: 1280px;
    margin: auto;
    justify-content: space-between;
    height: 100%;
    padding-bottom: 13.75rem;
  }
  .aside-wrapper {
    min-width: 15%;
    height: 100%;
    margin-top: 9.5rem;
    flex-shrink: 0;
  }
  .right-section {
    flex-grow: 1;
    margin-top: 3.5rem;
    margin-left: 5%;
    .folder-name {
      display: inline;
      color: #3c3a37;
      font-size: 2.5rem;
      line-height: 3.625rem;
      font-weight: bold;
      margin-right: 1rem;
    }
    .folder-count {
      display: inline;
      font-size: 2.5rem;
      line-height: 3.625rem;
      color: #3c3a37;
    }
  }
`;

const cardListWrapper = css`
  .card-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(302px, auto));
    gap: 1.5rem;
    margin-top: 3rem;
  }
`;

const Newtab = () => {
  const [cards, setCards] = useState([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
  ]);
  const cardList = cards.map((card) => (
    <li key={card.id}>
      <Card />
    </li>
  ));
  return (
    <>
      <GNB />
      <main css={pageWrapper}>
        <section className="content-wrapper">
          <aside className="aside-wrapper">
            폴더
            <Folder color={'#2DA5D7'} />
          </aside>
          <div className="right-section">
            <h2 className="folder-name">전체</h2>
            <h2 className="folder-count">{cardList.length}</h2>
            <article css={cardListWrapper}>
              <ul className="card-list">{cardList}</ul>
            </article>
          </div>
        </section>
      </main>
    </>
  );
};

export default Newtab;
