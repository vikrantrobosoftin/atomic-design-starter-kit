/* eslint-disable import/no-anonymous-default-export */
import ContentList from "./ContentList";

const contentListData = {
  title: "Watch and Learn",
  actionText: "View all",
  data: [
    {
      src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTBV6ZN9-ebaXJxuSNBNj5ySxVPL7V5CUNhg&usqp=CAU",
    },
    {
      src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTBV6ZN9-ebaXJxuSNBNj5ySxVPL7V5CUNhg&usqp=CAU",
    },
    {
      src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTBV6ZN9-ebaXJxuSNBNj5ySxVPL7V5CUNhg&usqp=CAU",
    },
    {
      src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTBV6ZN9-ebaXJxuSNBNj5ySxVPL7V5CUNhg&usqp=CAU",
    },
    {
      src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTBV6ZN9-ebaXJxuSNBNj5ySxVPL7V5CUNhg&usqp=CAU",
    },
  ],
};
export const Default = () => <ContentList data={contentListData} />;

export default { title: "Organisms/ContentList", component: ContentList };
