import React from 'react';
import { Link } from 'react-router-dom';

/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import MainLogo from '../../../assets/img/mainLogo.svg';
import ProfilePhoto from '../../../assets/img/profilePhoto.png';

const gnbWrapper = css`
  height: 80px;
  width: 100%;
  background: #f9f7f2;
  position: fixed;
  z-index: 10;
  border-bottom: 1px solid rgba(165, 170, 178, 0.3);

  .main-logo {
    margin-top: -1px;
    border-bottom: 1px solid rgba(165, 170, 178, 0.3);
  }

  .account {
    display: flex;
    align-items: center;
  }
`;

const contentWrapper = css`
  max-width: 1280px;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;

const GNB = () => {
  return (
    <nav css={gnbWrapper}>
      <div css={contentWrapper}>
        <h1 className="menu">
          <Link to="/">
            <figure>
              <img src={MainLogo} className="main-logo" alt="A logo for sagaksagak website" />
            </figure>
          </Link>
        </h1>
        <h2 className="account">
          <Link to="/setting">
            <figure>
              <img src={ProfilePhoto} className="profile-photo" alt="A photo of main profile" />
            </figure>
          </Link>
        </h2>
      </div>
    </nav>
  );
};

export default GNB;
