import React, { useContext } from 'react';
import { Box, useTheme } from '@mui/material';
import { ModalContext } from '../../Context/modalStore';

interface ModalProps {
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
  const theme = useTheme();

  const { isOpen, onClose } = useContext(ModalContext);
  return (
    <>
      {isOpen && (
        <>
          <Box
            sx={{
              backgroundColor: theme.palette.background.paper,
              position: 'fixed',
              top: 0,
              left: 0,
              minWidth: '100vw',
              minHeight: '100vh',
            }}
            onClick={onClose}
          ></Box>
          <Box
            sx={{
              borderRadius: '24px 10px',
              backgroundColor: theme.palette.secondary.main,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {React.Children.map(children, (child) => {
              return React.cloneElement(child as React.ReactElement<any>);
            })}
          </Box>
        </>
      )}
    </>
  );
};

export default Modal;
