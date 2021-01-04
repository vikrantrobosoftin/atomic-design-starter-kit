/* eslint-disable import/no-anonymous-default-export */
import CardCarousel from "./CardCarousel";

const carouselData = [
  {
    src:
      "https://ap2-prod-images.disco-api.com/2020/12/07/98b9ffcc-807c-42c8-b698-bdba2b67c5a7.jpeg",

    title: "Tales of Valour",
    subTitle:
      "Revisit the history of India's wars and learn about some of the untold tales of...",
    label1: "Best of 2020",
    label2: "Trending",
  },
  {
    src:
      "https://ap2-prod-images.disco-api.com/2020/12/31/63e0eb60-dac7-4ea6-99fd-36127d7d8a84.jpeg",
    title: "Top Gear ft Clarkson, Hammond, May",
    subTitle:
      "Top Gear irreverently celebrate everything that's brilliant about cars.",
    label1: "New",
    label2: "Don't miss",
  },
  {
    src:
      "https://ap2-prod-images.disco-api.com/2020/12/31/4e319bc1-80fa-4681-8c6a-7ea30fd0ed23.jpeg",
    title: "Gold Rush",
    subTitle:
      "Hard-working gold miners that risk their lives for a chance at striking it rich",
    label1: "All time fave",
    label2: "Binge now",
  },
  {
    src:
      "https://ap2-prod-images.disco-api.com/2020/12/16/81150501-5443-4c22-bab1-bf3884047969.jpeg",
    title: "Great War Stories",
    subTitle:
      "Untold stories of those who lived through World War 1 are shared.",
    label1: "Editor's pick",
    label2: "Fresh",
  },
];
export const Default = () => <CardCarousel data={carouselData} />;

export default {
  title: "Organisms/CardCarousel",
  component: CardCarousel,
};
