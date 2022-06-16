import React, { useCallback, useMemo } from "react";
import { ModalStore } from "../Models/Modal.model";

const initialState = {
  isOpen: false,
  onClose: () => {},
  setOpen: () => {},
  renderComponent: null,
};

export const ModalContext = React.createContext<ModalStore>(initialState);

const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const [renderComponent, setRenderComponent] =
    React.useState<React.ReactNode | null>(null);

  const closeModalHandler = useCallback(() => {
    setOpenModal(false);
  }, []);

  const openModalHandler = useCallback((renderComp: React.ReactNode) => {
    setRenderComponent(renderComp);
    setOpenModal(true);
  }, []);

  const modalContextValue = useMemo(
    () => ({
      isOpen: openModal,
      onClose: closeModalHandler,
      setOpen: openModalHandler,
      renderComponent,
    }),
    [closeModalHandler, openModal, openModalHandler, renderComponent],
  );

  return (
    <ModalContext.Provider value={modalContextValue}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
