import React from "react";
import Header from "../shared/Header";
import Navbar from "../shared/Navbar";
import { useParams } from "react-router-dom";
import RightsideNav from "../shared/RightsideNav";

const NewsPage = () => {
  const { id } = useParams();
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>

      <div className="grid grid-cols-3">
        <div className=" col-span-2">
          
            <h2 className="text-3xl">News Details</h2>
            <p> {id} </p>
          
        </div>

        <div className=" col-span-1">
          <RightsideNav></RightsideNav>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
