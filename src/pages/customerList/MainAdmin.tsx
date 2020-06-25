import React, { Fragment } from "react";
import {
  useModal,
  JDbutton,
  JDalign,
  JDselect,
  JDradioButton,
  useRadioButton,
} from "@janda-com/front";
import "./MainAdmin.scss";
import CustomerCard from "./components/CustomerCard";
import { IHouse, IUser } from "../../types/interface";
import ControlModalWrap from "./components/ControlModalWrap";
import { TControlModalInfo } from "./components/ControlModal";
import DetailViewModal, { IDetailViewInfo } from "./components/DetailViewModal";
import { IRadiosOps } from "@janda-com/front/build/components/radioButton/RadioButton";
import { JDpageInfo } from "@janda-com/front/build/types/interface";

const viewOption: IRadiosOps[] = [
  {
    label: "업소별 보기",
    value: "HOUSE",
    iconProp: {
      icon: "addCircle",
    },
  },
  {
    label: "회원별 보기",
    value: "PERSON",
    iconProp: {
      icon: "addCircle",
    },
  },
];

interface IProps {
  houseData: IHouse[];
  userData: IUser[];
  housePageInfo: JDpageInfo;
  userPageInfo: JDpageInfo;
}

const MainAdmin: React.FC<IProps> = ({ houseData, userData }) => {
  const radioButtonHook = useRadioButton(["HOUSE"], viewOption);
  const detailModalHook = useModal<IDetailViewInfo>();
  const controlModalHook = useModal<TControlModalInfo>();

  const handleManageBtn = (data: IHouse | IUser) => {
    controlModalHook.openModal({
      data,
    });
  };

  const handleDetailBtn = (data: IHouse | IUser) => {
    detailModalHook.openModal({
      data,
    });
  };

  return (
    <div className="superMain">
      <div className="container container--full">
        <div className="docs-section">
          <Fragment>
            <div className="docs-section__box">
              <div>
                <JDalign
                  flex={{
                    between: true,
                  }}
                >
                  <div>
                    <JDbutton label={"결제내역"} />
                    <JDbutton
                      label={"단체알림"}
                      iconProp={{
                        icon: "bell",
                      }}
                    />
                  </div>
                  <JDalign flex>
                    <JDselect mr="normal" z={2} />
                    <JDradioButton only mode="gather" {...radioButtonHook} />
                  </JDalign>
                </JDalign>
                {houseData.map((hd: IHouse) => (
                  <CustomerCard
                    key={hd._id}
                    handleManageBtn={handleManageBtn}
                    handleDetailBtn={handleDetailBtn}
                    data={hd}
                  />
                ))}
                {userData.map((ud: IUser) => (
                  <CustomerCard
                    key={ud._id}
                    handleManageBtn={handleManageBtn}
                    handleDetailBtn={handleDetailBtn}
                    data={ud}
                  />
                ))}
              </div>
            </div>
          </Fragment>
        </div>
      </div>
      <ControlModalWrap modalHook={controlModalHook} />
      <DetailViewModal modalHook={detailModalHook} />
    </div>
  );
};

export default MainAdmin;
