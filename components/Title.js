import React from "react";

const Title = ({ pageTitleDetails: { text, fontColor, fontSize } }) => (
  <>
    <h1>{text || "מבטחים"}</h1>

    <style jsx>{`
      h1 {
        color: ${fontColor || "blue"};
        font-size: ${fontSize || "17px"};
      }
    `}</style>
  </>
);

export default Title;
