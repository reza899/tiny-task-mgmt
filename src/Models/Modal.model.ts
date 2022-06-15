export interface ModalStore {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onClose: () => void;
}
