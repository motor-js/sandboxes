import React, { useRef } from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const BookmarkDialogComponent = ({
  isOpen,
  handleClose,
  dialogTitle,
  method,
  title,
  description,
  bookmarkId,
  mode,
}) => {
  const nameRef = useRef("");
  const descriptionRef = useRef("");
  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">{dialogTitle}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="title"
          label="Title"
          type="text"
          fullWidth
          inputRef={nameRef}
          defaultValue={title}
        />
        <TextField
          margin="dense"
          id="description"
          label="Description (Optional)"
          type="text"
          fullWidth
          multiline
          inputRef={descriptionRef}
          defaultValue={description}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button
          onClick={() =>
            method(
              bookmarkId,
              nameRef.current.value,
              descriptionRef.current.value
            )
          }
          color="primary"
        >
          {mode}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BookmarkDialogComponent;
