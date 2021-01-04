/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import CardComponent from "./CardComponent";

const src = "https://i.ytimg.com/vi/oBKdbkHo9_g/hqdefault.jpg";
const src2 =
  "https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg";

export const Default = () => <CardComponent src={src} />;

export const WithText = () => <CardComponent src={src2} text={"sample text"} />;

export default {
  title: "Molecules/CardComponent",
  component: CardComponent,
};
