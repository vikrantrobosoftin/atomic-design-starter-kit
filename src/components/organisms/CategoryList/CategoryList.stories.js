/* eslint-disable import/no-anonymous-default-export */
import CategoryList from "./CategoryList";

const cardData = [
  {
    src:
      "https://ap2-prod-images.disco-api.com/2020/2/24/a38afaf2-2cf7-4615-ad19-e24e85f572e0.jpg",
    text: "Category 1",
  },
  {
    src:
      "https://ap2-prod-images.disco-api.com/2020/2/24/a38afaf2-2cf7-4615-ad19-e24e85f572e0.jpg",
    text: "Category 2",
  },
  {
    src:
      "https://ap2-prod-images.disco-api.com/2020/2/24/a38afaf2-2cf7-4615-ad19-e24e85f572e0.jpg",
    text: "Category 3",
  },
  {
    src:
      "https://ap2-prod-images.disco-api.com/2020/2/24/a38afaf2-2cf7-4615-ad19-e24e85f572e0.jpg",
    text: "Category 4",
  },
  {
    src:
      "https://ap2-prod-images.disco-api.com/2020/2/24/a38afaf2-2cf7-4615-ad19-e24e85f572e0.jpg",
    text: "Category 5",
  },
];
export const Default = () => <CategoryList data={cardData} />;

export default {
  title: "Organisms/CategoryList",
  component: CategoryList,
};
