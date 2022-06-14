import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child as React.ReactElement<any>);
      })}
    </>
  );
};

export default Modal;
