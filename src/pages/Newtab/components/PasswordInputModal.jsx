import React, { useEffect } from 'react';
import {
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
import Folder from './Folder';
import PasswordInput from './PasswordInput';

const ModalWrapper = css`
  max-width: 45rem;
  width: 45rem;
  height: 36.25rem;
  padding: 2rem;
`;

export default function CardModal({ visible }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    if (visible) onOpen();
    else onClose();
  }, [visible]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent css={ModalWrapper}>
        <ModalHeader className="header"></ModalHeader>
        <ModalCloseButton mt={6} mr={6} />
        <ModalBody className="body">
          <PasswordInput />
        </ModalBody>
        <ModalFooter className="footer">
          <button onClick={onClose} className="edit-btn">
            비밀번호를 잊어버렸어요!
          </button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
