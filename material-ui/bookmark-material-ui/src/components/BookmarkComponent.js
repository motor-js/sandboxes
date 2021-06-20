import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Skeleton from "@material-ui/lab/Skeleton";
import { useBookmark } from "@motor-js/engine";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Popover from "@material-ui/core/Popover";
import IconButton from "@material-ui/core/IconButton";
import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import BookmarkDialogComponent from "./BookmarkDialogComponent";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const BookmarComponent = ({ anchorEl, open, handleClose }) => {
  const {
    bookmarkList,
    bookmarks,
    getBookmark,
    updateBookmark,
    getBookmarkLayout,
    applyBookmark,
    createBookmark,
    destroyBookmark,
  } = useBookmark();

  // const [openSnackbar, setSnackbarOpen] = React.useState(true);
  const [showDialog, setSHowDialog] = useState(false);
  const [dialogTitle, setDialogTitle] = useState("");
  const [bookmarkId, setBookmarkId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [mode, setMode] = useState("");

  const handleCloseDialog = () => {
    setSHowDialog(false);
  };

  const classes = useStyles();

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledIconButton = withStyles((theme) => ({
    root: {
      color: theme.palette.common.white,
    },
  }))(IconButton);

  // const TableRow = withStyles((theme) => ({
  //   root: {
  //     // "&:nth-of-type(odd)": {
  //     //   backgroundColor: theme.palette.action.hover,
  //     // },
  //   },
  // }))(TableRow);

  const id = open ? "simple-popover" : undefined;

  const handleClick = (e, id) => {
    applyBookmark(id);
    handleClose();
  };

  const deleteBookmark = async (e, id) => {
    const destroyed = await destroyBookmark(id);
  };

  const handleCreateBookmarkDialog = () => {
    setDialogTitle("Create Bookmark");
    setTitle(null);
    setDescription(null);
    setMode("Create");
    setSHowDialog(true);
  };

  const handleCreateBookmark = (id, name, description) => {
    createBookmark(name, description);
    setSHowDialog(false);
  };

  const handleUpdateBookmark = (id, name, description) => {
    updateBookmark(id, name, description);
    setSHowDialog(false);
  };

  const handleEditBookmark = async (e, id) => {
    setDialogTitle("Edit Bookmark");

    const currentbookmark = await getBookmarkLayout(id);
    setBookmarkId(id);
    setTitle(currentbookmark.qMeta.title);
    setDescription(currentbookmark.qMeta.description);
    setMode("Save");
    setSHowDialog(true);
  };

  // const handleCSnackbarClose = () => {
  //   setSnackbarOpen(false);
  // };

  return (
    <>
      {/* <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCSnackbarClose}
      >
        <Alert severity="error">This is an error alert — check it out!</Alert>
      </Snackbar> */}
      <BookmarkDialogComponent
        dialogTitle={dialogTitle}
        isOpen={showDialog}
        handleClose={handleCloseDialog}
        method={mode === "Create" ? handleCreateBookmark : handleUpdateBookmark}
        bookmarkId={bookmarkId}
        title={title}
        description={description}
        mode={mode}
      />
      {bookmarkList && (
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h5" component="h2">
                Bookmarks
              </Typography>
            </CardContent>
            <TableContainer component={Paper}>
              <Table
                stickyHeader
                className={classes.table}
                aria-label="simple table"
              >
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Ttile</StyledTableCell>
                    <StyledTableCell>Modified On</StyledTableCell>
                    <StyledTableCell align="right" width="10%">
                      <StyledIconButton style={{ padding: 8 }}>
                        <Edit fontSize="small" />
                      </StyledIconButton>
                    </StyledTableCell>
                    <StyledTableCell align="right" width="10%">
                      <StyledIconButton style={{ padding: 8 }}>
                        <Delete fontSize="small" />
                      </StyledIconButton>
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {bookmarkList.map((row, id) => (
                    <TableRow key={id} hover>
                      <TableCell
                        component="th"
                        scope="row"
                        onClick={(event) => handleClick(event, row.id)}
                      >
                        {row.title}
                      </TableCell>
                      <StyledTableCell
                        onClick={(event) => handleClick(event, row.id)}
                      >
                        {new Date(
                          Math.round((row.modifiedDate - 25569) * 86400 * 1000)
                        )
                          .toDateString()
                          .split(" ")
                          .slice(1)
                          .join(" ")}
                      </StyledTableCell>
                      <StyledTableCell align="right" width="10%">
                        <IconButton
                          style={{ padding: 8 }}
                          onClick={(event) => handleEditBookmark(event, row.id)}
                        >
                          <Edit fontSize="small" />
                        </IconButton>
                      </StyledTableCell>
                      <StyledTableCell align="right" width="10%">
                        <IconButton
                          style={{ padding: 8 }}
                          onClick={(event) => deleteBookmark(event, row.id)}
                        >
                          <Delete fontSize="small" />
                        </IconButton>
                      </StyledTableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <CardActions style={{ width: "100%", justifyContent: "center" }}>
              {/* <Button size="small">Learn More</Button> */}
              <AddCircleIcon
                fontSize="large"
                onClick={handleCreateBookmarkDialog}
              />
            </CardActions>
          </Card>
        </Popover>
      )}
    </>
  );
};

export default BookmarComponent;
