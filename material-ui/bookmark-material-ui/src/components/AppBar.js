import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import MenuIcon from "@material-ui/icons/Menu";
import Popover from "@material-ui/core/Popover";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import ClearAllIcon from "@material-ui/icons/ClearAll";
import { useButton } from "@motor-js/engine";

import BookmarkComponent from "./BookmarkComponent";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  typography: {
    padding: theme.spacing(2),
  },
}));

const ButtonComponent = () => {
  const { clearSelections } = useButton();
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <IconButton
            aria-label="show 17 new notifications"
            color="inherit"
            onClick={clearSelections}
          >
            <ClearAllIcon />
          </IconButton>
          <IconButton
            aria-label="show 17 new notifications"
            color="inherit"
            onClick={handleClick}
          >
            <BookmarkBorderIcon />
          </IconButton>

          <BookmarkComponent
            handleClose={handleClose}
            open={open}
            anchorEl={anchorEl}
          />

          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default ButtonComponent;
