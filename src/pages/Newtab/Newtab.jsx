import React, { useState } from 'react';

/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import GNB from './components/GNB';
import Card from './components/Card';
import Folder from './components/Folder';
import NewMemoBtn from '../../assets/img/newMemo.svg';

const pageWrapper = css`
  background: #f9f7f2;
  height: 100%;
  .content-wrapper {
    display: flex;
    max-width: 1280px;
    min-height: 100vh;
    height: 100%;
    margin: auto;
    justify-content: space-between;
    padding-top: 5rem;
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
    .header {
      display: flex;
      justify-content: space-between;
      .folder-name {
        display: inline;
        color: #3c3a37;
        font-size: 2.5rem;
        line-height: 3.625rem;
        font-weight: bold;
      }
      .folder-count {
        display: inline;
        font-size: 2.5rem;
        line-height: 3.625rem;
        color: #3c3a37;
        margin-left: 1rem;
      }
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
            <Folder color={'#2DA5D7'} />
          </aside>
          <div className="right-section">
            <div className="header">
              <h2 className="folder-name">
                전체
                <span className="folder-count">{cardList.length}</span>
              </h2>
              <figure>
                <img src={NewMemoBtn} alt="Button too add new notes" />
              </figure>
            </div>
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
