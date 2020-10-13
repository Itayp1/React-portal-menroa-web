import React from "react";
const tabOption = { true: "_blank", false: "_self" };

const ApplicationList = (props) => {
  const {
    applicationList = [
      { icon: "https://cdn.menoramivt.co.il/public/images/l79zlyk6oud7zf-documents.svg", text: "תביעות", link: "https://www.menoramivt.co.il/list/claims-lobby", openInNewTab: true },
      { icon: "https://cdn.menoramivt.co.il/public/images/l79zlyk6oud7zf-documents.svg", text: "תביעות", link: "https://www.menoramivt.co.il/list/claims-lobby", openInNewTab: false },
    ],
  } = props;

  const aplication = (props, key) => {
    const { icon, text, link, openInNewTab } = props;
    return (
      <>
        <li
          onClick={() => {
            window.open(link, tabOption[openInNewTab]);
          }}
          className="list-group-item"
          key={key.toString()}
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
      </>
    );
  };

  return (
    <>
      <div className="application-border fixed-bottom">
        <ul className="list-group list-group-horizontal ">
          <li className="list-group-item">
            <h4>
              {" "}
              פעולות <br /> נפוצות
            </h4>
          </li>
          {applicationList.length == 0 ? null : applicationList.map((props, key) => aplication(props, key))}
        </ul>
      </div>

      <style jsx>{`
        .list-group-horizontal {
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
        }
      `}</style>
    </>
  );
};

export default ApplicationList;
