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

  const openModalHandler = () => {
    setOpenModal(true);
  };

  return (
    <ModalContext.Provider
      value={{
        isOpen: openModal,
        onClose: closeModalHandler,
        setOpen: openModalHandler,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
