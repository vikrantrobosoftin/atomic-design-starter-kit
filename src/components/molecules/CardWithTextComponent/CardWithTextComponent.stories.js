/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import CardWithTextComponent from "./CardWithTextComponent";

export const Default = () => (
  <CardWithTextComponent
    // src={"https://i.ytimg.com/vi/oBKdbkHo9_g/hqdefault.jpg"}
    src={"https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg"}
    title={"Tales of Valour"}
    subTitle={
      "Revisit the history of India's wars and learn about some of the untold tales of..."
    }
    label1={"Best of 2020"}
    label2={"Trending"}
  />
);

export default {
  title: "Molecules/CardWithTextComponent",
  component: CardWithTextComponent,
};
