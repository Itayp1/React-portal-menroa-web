import React from "react";

const Title = (props) => (
  <>
    <h1>{props.text || "מנורה"}</h1>

    <style jsx>{`
      h1 {
        color: ${props.fontColor || "#37374e"};
        font-size: ${props.fontSize || "70px"};
      }
    `}</style>
  </>
);

export default Title;
