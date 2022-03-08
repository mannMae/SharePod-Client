import React from 'react';
import Modal from './Modal';
import styled from 'styled-components';

const ModalWrapper = ({ children, handleModal }) => {
  return (
    <Modal>
      <Overlay className="close-btn" onClick={handleModal}>
        {children}
      </Overlay>
    </Modal>
  );
};

const Overlay = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 999;
`;
export default ModalWrapper;
