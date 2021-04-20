import React from 'react';
import { Box } from '@chakra-ui/react';

/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import Card from './Card';

const menuWrapper = css`
  position: absolute;
  width: 12.5rem;
  height: 13.75rem;
  background: white;
  box-shadow: 10px 10px 16px rgba(211, 207, 197, 0.7);
  border-radius: 4px;
  right: 0;
  margin-right: 20px;
  z-index: 10;
  padding: 1.5rem;
`;

const CardMenu = ({ menu }) => {
  const menuList = menu.map((d) => <li key={d.label}>{d.label}</li>);
  return <Box css={menuWrapper}>{menuList}</Box>;
};

export default CardMenu;
