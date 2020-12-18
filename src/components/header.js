import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import LanderNav from './landerNav'

const Header = ({ siteTitle }) => (
<>
<LanderNav />

</>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
