export interface ModalStore {
  isOpen: boolean;
  setOpen: () => void;
  onClose: () => void;
}
