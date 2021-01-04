/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Text from "./Text";
import { action } from "@storybook/addon-actions";

export const Default = () => <Text text={"Default"} />;
export const boldText = () => (
  <Text text={"<b>Bold text</b>"} onClick={action("onClick")} />
);

export default { title: "Atoms/Text", component: Text };
