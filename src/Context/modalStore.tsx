import React from 'react';
import { ModalStore } from '../Models/Modal.model';

const initialState = {
  isOpen: false,
  onClose: () => {},
  setOpen: () => {},
};

export const ModalContext = React.createContext<ModalStore>(initialState);

const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [openModal, setOpenModal] = React.useState<boolean>(false);

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  return (
    <ModalContext.Provider
      value={{
        isOpen: openModal,
        onClose: closeModalHandler,
        setOpen: setOpenModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
