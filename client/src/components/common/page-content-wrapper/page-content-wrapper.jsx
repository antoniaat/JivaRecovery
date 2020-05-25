import '../page-content-wrapper/page-content-wrapper.scss';

import React from "react";
import { string, element, oneOfType, arrayOf } from "prop-types";

const PageContentWrapper = ({ children, className }) => (
  <div className={`page-content-wrapper ${className}`}>{children}</div>
);

PageContentWrapper.propTypes = {
  className: string,
  children: oneOfType([element, arrayOf(element)]).isRequired,
};

PageContentWrapper.defaultProps = { className: "" };

export default PageContentWrapper;
