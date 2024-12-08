import React from "react";
import { Topbar } from "../headers/top-bar";
import { Navbar } from "../headers/navbar";
import { Footer } from "../footer/footer";

export const Pagelayout = ({ children }) => {
  return (
    <>
      <Topbar></Topbar>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </>
  );
};
