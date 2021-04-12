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
import Tag from './Tag';

const cardWrapper = css`
  padding-top: 100%;
  box-sizing: border-box;
  position: relative;
  background: white;
  box-shadow: 0 8px 8px rgba(222, 218, 209, 0.5);
  border-radius: 2px;

  .content {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    padding: 0.375rem;
  }
`;

const innerCardWrapper = css`
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(165, 170, 178, 0.3);
  box-sizing: border-box;
  border-radius: 2px;
  padding-top: 100%;
`;
const headerSection = css`
  height: 3rem;
  display: flex;
  justify-content: space-between;
  padding-left: 1rem;
  .date {
    align-self: center;
  }
`;

const bodySection = css`
  height: calc(100% - 4.5rem);
  padding-left: 1rem;
`;

const tagSection = css`
  height: 1.5rem;
  margin-top: -1rem;
`;

const Card = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box css={cardWrapper}>
      <div className="content">
        <div css={innerCardWrapper}>
          <div className="content">
            <div css={headerSection}>
              <span className="date">header</span>
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
            <div css={tagSection}>
              <Tag tagColor={'rgba(45, 165, 215, 0.2)'} textColor={'#2DA5D7'} text={'test'} />
            </div>
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
        </div>
      </div>
    </Box>
  );
};

export default Card;
