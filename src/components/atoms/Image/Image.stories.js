/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Image from "./Image";

const logo =
  "https://static.wikia.nocookie.net/logopedia/images/b/b9/Discovery_Plus_Icon.png";

export const Default = () => <Image src={logo} width={100} height={100} />;

export default {
  title: "Atoms/Image",
  component: Image,
};
