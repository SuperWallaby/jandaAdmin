import React from "react";
import {
  JDmodal,
  IUseModal,
  JDtabs,
  TabList,
  Tab,
  TabPanel,
  instanceOfA,
} from "@janda-com/front";
import { IHouse, IUser } from "../../../types/interface";
import { LabelValue } from "../../../atom/LabelValue";
import { JDphotoFrame } from "@janda-com/front";
import "./DetailViewModal.scss";
import { IMG_REPO } from "./CustomerCard";

export interface IDetailViewInfo {
  data: IHouse | IUser;
}

interface Iprop {
  modalHook: IUseModal<IDetailViewInfo>;
}

const DetailViewModal: React.FC<Iprop> = ({ modalHook }) => {
  if (!modalHook.isOpen) return <div />;
  if (!modalHook.info) return <div />;

  const Shell: React.FC = ({ children }) => (
    <JDmodal {...modalHook} visibleOverflow className="detailViewModal">
      <div className="detailViewModal__imgWrap">
        <JDphotoFrame
          unStyle
          src={`${IMG_REPO}/infographic/market.png`}
          className="detailViewModal__img"
        />
      </div>
      {children}
    </JDmodal>
  );

  const {
    info: { data },
  } = modalHook;

  const sharedProp = {
    align: {
      flex: {
        between: true,
      },
    },
  };
  if (instanceOfA<IHouse>(data, "houseType")) {
    const {
      name,
      houseType,
      product,
      user,
      location,
      createdAt,
      updatedAt,
    } = data;

    return (
      <Shell>
        <JDtabs mb="large">
          <TabList>
            <Tab>기본정보</Tab>
            <Tab>결제정보</Tab>
            <Tab>통계정보</Tab>
            <Tab>기타정보</Tab>
          </TabList>
          <TabPanel>
            <LabelValue {...sharedProp} label="123" value="12333333" />
            <LabelValue {...sharedProp} label="123" value="12333333" />
            <LabelValue {...sharedProp} label="123" value="12333333" />
          </TabPanel>
          <TabPanel>
            <LabelValue {...sharedProp} label="123" value="12333333" />
            <LabelValue {...sharedProp} label="123" value="12333333" />
            <LabelValue {...sharedProp} label="123" value="12333333" />
          </TabPanel>
          <TabPanel>
            <LabelValue {...sharedProp} label="123" value="12333333" />
            <LabelValue {...sharedProp} label="123" value="12333333" />
            <LabelValue {...sharedProp} label="123" value="12333333" />
          </TabPanel>
          <TabPanel>
            <LabelValue {...sharedProp} label="123" value="12333333" />
            <LabelValue {...sharedProp} label="123" value="12333333" />
            <LabelValue {...sharedProp} label="123" value="12333333" />
          </TabPanel>
        </JDtabs>
      </Shell>
    );
  } else {
    return (
      <Shell>
        <JDtabs mb="large">
          <TabList>
            <Tab>기본정보</Tab>
            <Tab>결제정보</Tab>
            <Tab>통계정보</Tab>
            <Tab>기타정보</Tab>
          </TabList>
          <TabPanel>
            <LabelValue {...sharedProp} label="123" value="12333333" />
            <LabelValue {...sharedProp} label="123" value="12333333" />
            <LabelValue {...sharedProp} label="123" value="12333333" />
          </TabPanel>
          <TabPanel>
            <LabelValue {...sharedProp} label="123" value="12333333" />
            <LabelValue {...sharedProp} label="123" value="12333333" />
            <LabelValue {...sharedProp} label="123" value="12333333" />
          </TabPanel>
          <TabPanel>
            <LabelValue {...sharedProp} label="123" value="12333333" />
            <LabelValue {...sharedProp} label="123" value="12333333" />
            <LabelValue {...sharedProp} label="123" value="12333333" />
          </TabPanel>
          <TabPanel>
            <LabelValue {...sharedProp} label="123" value="12333333" />
            <LabelValue {...sharedProp} label="123" value="12333333" />
            <LabelValue {...sharedProp} label="123" value="12333333" />
          </TabPanel>
        </JDtabs>
      </Shell>
    );
  }
};

export default DetailViewModal;
