/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React  from "react";

const Button = (props) => {
  const { children } = props;
  return (
    <>
      <div className="text-center my-5">
        <button className="btn btn-primary">{children}</button>
      </div>
    </>
  );
};

export default Button;
