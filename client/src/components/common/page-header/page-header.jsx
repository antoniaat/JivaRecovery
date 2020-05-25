import "./page-header.scss";

import React from "react";
import { string } from "prop-types";

const PageHeader = ({ title, subtitle }) => (
  <div className="page-header">
    <h1 className="page-header-title">{title}</h1>
    {subtitle ? <h3 className="page-header-subtitle">{subtitle}</h3> : null}
  </div>
);

PageHeader.defaultProps = {
  subtitle: "",
};

PageHeader.propTypes = {
  title: string.isRequired,
  subtitle: string,
};

export default PageHeader;
