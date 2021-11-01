import React from "react";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

const AlertDialog = ({ isModelOpen, setIsModalOpen, errorMsg }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={isModelOpen}
        onClose={() => setIsModalOpen(false)}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>{errorMsg}</DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AlertDialog;
