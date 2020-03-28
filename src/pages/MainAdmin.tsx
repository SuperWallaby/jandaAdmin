import React, { Fragment, useState } from "react";
import { JDbutton } from "@janda-com/front";
import "@janda-com/front/build/scss/all.scss";
import "./MainAdmin.scss";

// interface Iprops {
//   houses:,
//   tickes:
// }

const MainAdmin: React.FC<any> = ({}) => {
  return (
    <div className="superMain">
      <div className="container container--full">
        <div className="docs-section">
          <Fragment>
            <div className="docs-section__box">
              <div>
                <JDbutton label={"결제내역"} />
              </div>
            </div>
          </Fragment>
        </div>
      </div>
    </div>
  );
};

export default MainAdmin;
