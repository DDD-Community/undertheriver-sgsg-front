import React, { useState, useEffect } from 'react';
import ReactLinkPreview from '@ashwamegh/react-link-preview';
import rollLoading from '../../assets/img/loading.gif';

/** @jsx jsx */
import { css, jsx } from '@emotion/react';

const linkWrapper = css`
  padding: 0 1rem;
  margin-top: 1rem;

  .linkBox {
    min-height: 52px;
    display: flex;
    align-items: center;
    background-color: #f7f7f7;
    border-radius: 2px;
    padding: 0.625rem 1rem;
  }
  .linkBox.loading {
    justify-content: center;
  }

  img {
    width: 2rem;
    height: 2rem;
    margin-right: 10px;
  }

  .title {
    font-size: 12px;
    color: #636972;
    width: 250px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .domain {
    font-size: 10px;
    color: #a5aab2;
    width: 250px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

function LinkPreview(props) {
  const [loadFlag, setLoadFlag] = useState(false);
  useEffect(() => {
    if (props.url) {
      setLoadFlag(true);
    }
    console.log(props.url);
  }, [props]);
  const CustomComponent = ({ loading, preview }) => {
    return loading ? (
      <div css={linkWrapper}>
        <div className="linkBox loading">
          <img src={rollLoading} />
        </div>
      </div>
    ) : (
      <div css={linkWrapper}>
        <div className="linkBox">
          <img height="32px" width="32px" src={preview.img} alt={preview.title} />
          <div>
            <h4 className="title">{props.title ? props.title : preview.title}</h4>
            <h4 className="domain">{preview.domain}</h4>
          </div>
        </div>
      </div>
    );
  };
  return loadFlag && props.url && <ReactLinkPreview url={props.url} render={CustomComponent} />;
}

export default LinkPreview;
