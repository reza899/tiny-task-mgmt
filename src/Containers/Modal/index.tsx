import React, { useContext } from "react";
import { Box } from "@mui/material";
import { ModalContext } from "../../Context/modalStore";

const Modal: React.FC = () => {
  // const theme = useTheme();

  const { isOpen, onClose, renderComponent } = useContext(ModalContext);
  return (
    <>
      {isOpen && (
        <>
          <Box
            sx={{
              backgroundColor: "#FFF",
              position: "fixed",
              top: 0,
              left: 0,
              minWidth: "100vw",
              minHeight: "100vh",
            }}
            onClick={onClose}
          />
          <Box
            sx={{
              borderRadius: "48px",
              backgroundColor: "#EDEDED",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              zIndex: 1,
              padding: "36px",
              gap: "8px",
              maxWidth: "50vw",
              maxHeight: "500px",
              margin: "auto",
            }}
          >
            {renderComponent}
          </Box>
        </>
      )}
    </>
  );
};

export default Modal;
