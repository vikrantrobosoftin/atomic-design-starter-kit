/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import HamburgerMenu from "./HamburgerMenu";

export const Default = () => (
  <HamburgerMenu width={100} height={100} color={"black"} />
);

export default {
  title: "Atoms/HamburgerMenu",
  component: HamburgerMenu,
};
