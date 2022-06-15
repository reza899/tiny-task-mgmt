import React, { useCallback, useMemo } from "react";
import { ModalStore } from "../Models/Modal.model";

const initialState = {
  isOpen: false,
  onClose: () => {},
  setOpen: () => {},
};

export const ModalContext = React.createContext<ModalStore>(initialState);

const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [openModal, setOpenModal] = React.useState<boolean>(false);

  const closeModalHandler = useCallback(() => {
    setOpenModal(false);
  }, []);

  const openModalHandler = useCallback(() => {
    setOpenModal(true);
  }, []);

  const modalContextValue = useMemo(
    () => ({
      isOpen: openModal,
      onClose: closeModalHandler,
      setOpen: openModalHandler,
    }),
    [closeModalHandler, openModal, openModalHandler],
  );

  return (
    <ModalContext.Provider value={modalContextValue}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
