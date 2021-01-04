/* eslint-disable import/no-anonymous-default-export */
import Home from "./home";
import data from "./data.json";

export const Default = () => <Home data={data} />;

export default {
  title: "Pages/Home",
  component: Home,
};
