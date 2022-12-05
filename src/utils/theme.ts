const theme: object = {
  colors: {
    accent: {
      primary: "#330031",
      secondery: "#FFCCFD",
      primaryHover: "#FF66FA",
    },
    background: {
      primary: "background-color: #FFFFFF;",
      secondery: "background-color: #330031;",
      primaryButton: "background-color: #330031;",
      seconderyButton: "background-color: #000000;",
    },
    text: {
      primaryTitle: "color: #330031;",
      seconderyTitle: "color: #FFFFFF;",
      primary: "color: #FFFFFF;",
      secondery: "color: #000000;",
      primaryButton: "color: #FFFFFF;",
      seconderyButton: "color: #FFCCFD;",
    },
    icons: {
      primary: "#FF66FA",
    },
  },
  borders: {
    links: {
      primary: "border: solid 1px #000000;",
    },
  },
  paddings: {
    section: {
      top: "padding-top: 128px;",
      bot: "padding-bottom: 128px;",
    },
  },
  media: {
    mob: "@media screen and (min-width: 480px)",
    tablet: "@media screen and (min-width: 768px)",
    desk: "@media screen and (min-width: 1280px)",
    onlyDesk: "@media screen and (max-width: 1280px)",
  },
};

export { theme };
