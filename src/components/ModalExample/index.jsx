import React, { useState } from 'react';
import styled from '@emotion/styled/macro';
import Modal from './Modal';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Button = styled.button`
  width: 280px;
  height: 68px;
  border-radius: 12px;
  color: #fff;
  background-color: #3d6afe;
  margin: 0;
  border: none;
  font-size: 24px;
  &:active {
    opacity: 0.8;
  }
`;

const ModalBody = styled.div`
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
  max-height: calc(100vh - 16px);
  overflow: hidden auto;
  position: relative;
  padding-block: 12px;
  padding-inline: 24px;
`;

const ModalExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <Container>
      <Button onClick={handleOpen}>OPEN</Button>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalBody>
          <h2>Title</h2>
          <p>Description</p>
        </ModalBody>
      </Modal>
    </Container>
  );
};

export default ModalExample;
