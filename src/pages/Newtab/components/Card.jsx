import React from 'react';
import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

const cardWrapper = css`
  width: 18.875rem;
  height: 18.875rem;
  padding: 0.375rem;
  background: white;
  box-shadow: 0px 8px 8px rgba(222, 218, 209, 0.5);
  border-radius: 2px;
`;

const innerCardWrapper = css`
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(165, 170, 178, 0.3);
  box-sizing: border-box;
  border-radius: 2px;
  width: 18.125rem;
  height: 18.125rem;
  padding: 1rem;
`;
const headerSection = css`
  height: 3rem;
  display: flex;
  justify-content: space-between;
`;

const bodySection = css`
  height: 13.25rem;
`;

const tagSection = css`
  height: 1.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const Card = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box css={cardWrapper}>
      <div css={innerCardWrapper}>
        <div css={headerSection}>
          <span>header</span>
          <Menu>
            <MenuButton aria-label="Options" size="xs" variant="outline">
              menu
            </MenuButton>
            <MenuList>
              <MenuItem>New Window</MenuItem>
              <MenuItem>Open Closed Tab</MenuItem>
              <MenuItem>Open File</MenuItem>
            </MenuList>
          </Menu>
        </div>
        <div css={bodySection} onClick={onOpen}>
          body
        </div>
        <div css={tagSection}>tag</div>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <p>test</p>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </Box>
  );
};

export default Card;
