import React from 'react';

const SubTitle = (props) => (
    <>
        <h1>{props.text || "מה תרצה לעשות היום ?"}</h1>

        <style jsx>{`
            h1 {
      
                color: ${props.fontColor || '#37374e'};
                font-size: ${props.fontSize || '50px'};

            }
        `}</style>
    </>
);

export default SubTitle;