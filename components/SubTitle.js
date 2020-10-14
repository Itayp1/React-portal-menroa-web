import React from "react";

const SubTitle = ({ pageSubTitleDetails: { text, fontColor, fontSize } }) => (
  <>
    <h1>{text || "שלום לקוח"}</h1>

    <style jsx>{`
      h1 {
        color: ${fontColor || "blue"};
        font-size: ${fontSize || "10px"};
      }
    `}</style>
  </>
);

export default SubTitle;
