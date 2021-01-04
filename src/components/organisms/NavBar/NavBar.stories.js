/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import NavBar from "./NavBar";

const data = {
  logo:
    "https://static.wikia.nocookie.net/logopedia/images/b/b9/Discovery_Plus_Icon.png",
  navData: ["Home", "Explore", "Shorts", "Mindblown", "Premium"],
  buttonText: "SignIn",
};

export const Default = () => <NavBar data={data} />;

export default {
  title: "Organisms/NavBar",
  component: NavBar,
};
