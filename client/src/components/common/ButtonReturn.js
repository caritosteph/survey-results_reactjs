import React from "react";
import { Link } from "react-router";

const ButtonReturn = () => {
  return (
    <div className = "button-return">
      <Link to = "/"><i className = "fa fa-hand-o-left"> Back</i></Link>
    </div>
  );
};

export default ButtonReturn;
