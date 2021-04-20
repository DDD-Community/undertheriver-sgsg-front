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

const ModalWrapper = css`
  max-width: 45rem;
  width: 45rem;
  height: 36.25rem;
  padding: 2rem;
  .header {
    display: inline-flex;
    .title {
      margin-left: 1rem;
      line-height: 36px;
      align-items: center;
      font-size: 1.5rem;
    }
  }
  .body {
    .divider {
      width: 100%;
      border-bottom: 1px solid #a5aab2;
      margin-top: 1rem;
      margin-bottom: 1.5rem;
    }
  }
  .footer {
    color: #858585;
    font-size: 1rem;
    line-height: 22px;
    .edit-btn {
      margin-right: 2.5rem;
    }
  }
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
        <ModalHeader className="header">
          <Folder color={'#2DA5D7'} />
          <span className="title">DDD</span>
        </ModalHeader>
        <ModalCloseButton mt={6} mr={6} />
        <ModalBody className="body">
          <p>03.02</p>
          <hr className="divider" />
          <p>메모 내용 메모 내용</p>
        </ModalBody>
        <ModalFooter className="footer">
          <button onClick={onClose} className="edit-btn">
            수정
          </button>
          <button onClick={onClose} className="close-btn">
            삭제
          </button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
