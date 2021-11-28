import * as React from "react";
import Modal from "@mui/material/Modal";

import Player from "./player";
import { Box, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Videos } from "../utils/types";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "black",
    border: "2px solid #000",
    padding: theme.spacing(1),
  },
}));

interface DialogFormProps {
  handleClose: (value: boolean) => void;
  open: boolean;
  trailer: Videos;
}

const DialogForm = ({ handleClose, open, trailer }: DialogFormProps) => {
  const classes = useStyles();

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.container}>
          <Player keyId="MjVmL5x2Uvc" width={trailer?.size} />
        </Box>
      </Modal>
    </div>
  );
};
export default DialogForm;
