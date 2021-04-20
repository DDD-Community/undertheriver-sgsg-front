import React from 'react';

/** @jsx jsx */
import { css, jsx } from '@emotion/react';

function Badge({ color }) {
  return (
    <div
      css={{
        zIndex: '5',
        width: '20px',
        height: '20px',
        background: `${color}`,
        borderRadius: '4px',
        transform: 'rotate(45deg)',
        boxShadow: '2px 4px 4px rgba(0, 0, 0, 0.1)',
        marginTop: '1rem',
      }}
    />
  );
}

export default Badge;
