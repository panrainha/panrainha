/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="index"
          color="transparent"
          target="_self"
          className={classes.navLink}
        >
          <Icon className={classes.icons}>home</Icon> Inicio
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="about"
          color="transparent"
          target="_self"
          className={classes.navLink}
        >
          <Icon className={classes.icons}>info</Icon> Conheça
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
        <Button
            href="tel:8141092960"
            target="_self"
            color="transparent"
            className={classes.navLink}
          >
            <Icon className={classes.icons}>call</Icon> Ligue!
        </Button>

      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Curta a Pan Rainha no Facebook"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/panrainham1"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Siga a Pan Rainha no instagram"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/panrainham1/"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
