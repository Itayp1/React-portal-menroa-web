import React from "react";
const tabOption = { true: "_blank", false: "_self" };

const ApplicationList = ({ applicationListDetails }) => {
  return (
    <>
      <div className="application-border fixed-bottom ">
        <ul className="list-group list-group-horizontal-sm wide">
          <li className="list-group-item">
            <h4>
              פעולות
              <br />
              נפוצות
            </h4>
          </li>
          {applicationListDetails.length == 0 ? null : aplication(applicationListDetails)}
        </ul>
      </div>

      <style jsx>{`
        .list-group-horizontal-sm {
          border-radius: 5px;
          justify-content: center;
          background-color: white;
          display: inline-flex;
          padding: 20px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }
        .application-border {
          bottom: 5vh;
        }
        .list-group-item {
          border: 2px solid rgba(0, 0, 0, 0.125);
          border-right: none;
          border-top: none;
          border-bottom: none;
          margin: auto;
        }

        @media only screen and (max-height: 700px) and (max-width: 575px), (max-height: 400px) {
          .fixed-bottom {
            position: static;
            margin-top: 22px;
          }
        }

        @media only screen and (max-width: 575px) {
          .list-group-item {
            border-left: none;
            border-bottom: 2px solid rgba(0, 0, 0, 0.125);
          }
        }
      `}</style>
    </>
  );
};

const aplication = (applicationList) => {
  const applicationListArr = applicationList.map(({ icon, text, link, openInNewTab }, key) => (
    <div key={key.toString()}>
      <li
        onClick={() => {
          window.open(link, tabOption[openInNewTab]);
        }}
        className="list-group-item"
      >
        <img src={icon} />
        <p>{text}</p>
      </li>
      <style jsx>{`
        .list-group-item {
          border: 0px;
        }
        .list-group-item:hover {
          cursor: pointer;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }
        .list-group-item:active {
          background-color: #dedcda;
        }
      `}</style>
    </div>
  ));

  return applicationListArr;
};

export default ApplicationList;
