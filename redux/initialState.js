const ileInitialState = {
  pageTitle: {
    text: "מנורה",
    fontSize: "70px",
    fontColor: "#37374e",
  },
  pageSubTitle: {
    text: "מה תרצה לעשות היום ?",
    fontSize: "40px",
    fontColor: "#37374e",
  },
  searchBar: {
    engineSearch: "https://bing.com",
    placeHolder: "הקלד מלל לחיפוש",
  },
  applicationList: [
    {
      icon: "https://cdn.menoramivt.co.il/public/images/l79zlyk6oud7zf-documents.svg",
      text: "תביעות",
      link: "https://www.menoramivt.co.il/list/claims-lobby",
      openInNewTab: true,
    },
    {
      icon: "https://cdn.menoramivt.co.il/public/images/l79zlyk6oud7zf-documents.svg",
      text: "בריאות",
      link: "https://www.menoramivt.co.il/list/claims-lobby",
      openInNewTab: false,
    },
  ],
};

export default ileInitialState;
