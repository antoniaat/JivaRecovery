import React from "react";
import "./PageHeader.scss";
import Breadcrumbs from "../navigation/breadcrumbs/Breadcrumbs.js";

const PageHeader = ({ img, title }) => {
  return (
    <div className="page-header">
      <img src={img} alt="logo"></img>
      <h1>{title}</h1>
      <div className="breadcrumbs">
        <Breadcrumbs></Breadcrumbs>
      </div>
    </div>
  );
};

export default PageHeader;
