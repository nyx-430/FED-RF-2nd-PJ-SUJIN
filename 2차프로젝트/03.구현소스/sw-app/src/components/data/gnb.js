/// SW19 GNB 메뉴 데이터 ///

export const menu = [
  {
    txt: "HOME",
    link: "/",
  },
  {
    txt: "STORY",
    link: "/story",
  },
  {
    txt: "SHOP",
    link: "/shop",
    sub: [
      {
        txt: "All Products",
        link: "/shop",
      },
      {
        txt: "Promotion",
        link: "/shop/promotion",
      },
      {
        txt: "Perfume",
        link: "/shop/perfume",
      },
      {
        txt: "Body Care",
        link: "/shop/bodycare",
      },
      {
        txt: "Hand Care",
        link: "/shop/handcare",
      },
      {
        txt: "Home Fragrance",
        link: "/shop",
      },
      {
        txt: "Gift Set",
        link: "/shop/giftset",
      },
    ],
  },
  {
    txt: "MEMBER SHIP",
    link: "/membership",
  },
  {
    txt: "Q&A",
    link: "/board",
  },
];
