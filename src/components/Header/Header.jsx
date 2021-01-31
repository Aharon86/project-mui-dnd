import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";
import style from "./Header.module.scss";

const Header = ({ title }) => {
  return (
    <header className={style.header}>
      <Typography
        component="h1"
        variant="h3"
        color="inherit"
        align="center"
        noWrap
      >
        {title}
      </Typography>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
