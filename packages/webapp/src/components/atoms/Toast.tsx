import * as React from "react";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";
import MuiAlert, { AlertColor, AlertProps } from "@mui/material/Alert";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

type ToastProps = {
  open?: boolean;
  severity?: AlertColor;
  onClose?: (
    event: React.SyntheticEvent<any> | Event,
    reason: SnackbarCloseReason
  ) => void;
  children: string;
};

export const Toast = ({
  open = false,
  severity = "info",
  onClose,
  children,
}: ToastProps) => (
  <Snackbar open={open} autoHideDuration={6000} onClose={onClose}>
    <Alert severity={severity} sx={{ width: "100%" }}>
      {children}
    </Alert>
  </Snackbar>
);
