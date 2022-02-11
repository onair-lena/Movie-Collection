import * as React from "react";
import Modal from "@mui/material/Modal";
import Player from "./player";
import { Box } from "@mui/material";
import { SxProps, Theme } from "@mui/system";

const classes: SxProps<Theme> = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "black",
  border: "2px solid #000",
  p: 1,
};

interface DialogFormProps {
  handleClose: (value: boolean) => void;
  open: boolean;
}

const DialogForm = ({ handleClose, open }: DialogFormProps) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={classes}>
          <Player keyId="MjVmL5x2Uvc" />
        </Box>
      </Modal>
    </div>
  );
};
export default DialogForm;
