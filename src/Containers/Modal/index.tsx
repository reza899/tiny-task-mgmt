import React from 'react';
import { Box, useTheme } from '@mui/material';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const theme = useTheme();
  return (
   <>
   <Box></Box>
    <Box
      sx={{
        borderRadius: '24px 10px',
        backgroundColor: theme.palette.secondary.main,
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center'
      }}
      >
      {React.Children.map(children, (child) => {
        return React.cloneElement(child as React.ReactElement<any>);
      })}
    </Box>
      </>
  );
};

export default Modal;
