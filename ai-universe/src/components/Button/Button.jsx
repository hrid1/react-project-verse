/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React  from "react";

const Button = (props) => {
  const { children } = props;
  return (
    <>
      <div className="flex justify-center items-center my-5 mx-auto">
        <button className="btn btn-primary">{children}</button>
      </div>
    </>
  );
};

export default Button;
