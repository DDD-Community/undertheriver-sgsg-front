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
  max-width: 37.5rem;
  width: 37.5rem;
  height: 26.25rem;
  padding: 2rem;
  .body {
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      font-weight: bold;
      font-size: 1.5rem;
      line-height: 35px;
      margin-bottom: 5.625rem;
    }
  }
  .edit-btn {
    margin-top: 4.75rem;
    align-self: center;
    color: #a5aab2;
    text-decoration: underline;
  }
`;

export default function PasswordInputModal({ visible, onChange }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    if (visible) onOpen();
    else onClose();
  }, [visible]);
  useEffect(() => {
    if (visible !== isOpen) onChange(isOpen);
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent css={ModalWrapper}>
        <ModalHeader className="header"></ModalHeader>
        <ModalCloseButton mt={6} mr={6} />
        <ModalBody className="body">
          <h3 className="title">현재 비밀번호를 입력해주세요</h3>
          <PasswordInput />
          <button onClick={onClose} className="edit-btn">
            비밀번호를 잊어버렸어요! 😭
          </button>
        </ModalBody>
        <ModalFooter className="footer"></ModalFooter>
      </ModalContent>
    </Modal>
  );
}
