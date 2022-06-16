export interface ModalStore {
  isOpen: boolean;
  setOpen: (renderComponent: React.ReactNode) => void;
  onClose: () => void;
  renderComponent: React.ReactNode | null;
}
