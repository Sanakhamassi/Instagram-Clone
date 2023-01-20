import { friends } from "./friends";

export const posts = [
  {
    imageurl: "https://www.enjpg.com/img/2020/aesthetic-47.jpg",
    user: friends[0].name,
    likes: 1070,
    caption: "Sunflower is a heal <3",
    profilepicture: friends[0].image,
    comments: [
      {
        user: "hamma shrab",
        comment: "agreaa vghvhycc chcvnvh cyhfcvh,b;jad",
      },
    ],
  },
  {
    imageurl:
      "https://cdn6.aptoide.com/imgs/8/9/3/89399480e154eb115c533da3c51fc5fb_screen.jpg?h=500",
    user: friends[3].name,
    likes: 3500,
    caption: "DEEP",
    profilepicture: friends[3].image,
    comments: [
      {
        user: "hamma shrab",
        comment: "agreaaad",
      },
      {
        user: "Wissem lemsi",
        comment: "Yeah whatever",
      },
    ],
  },
];
