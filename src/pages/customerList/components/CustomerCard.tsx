import React, { Fragment } from "react";
import "./CustomerCard.scss";
import {
  JDalign,
  JDtypho,
  JDsplinter,
  JDbadge,
  JDphotoFrame,
  JDavatar,
} from "@janda-com/front";
import moment from "moment";
import { IHouse, IUser } from "../../../types/interface";
import { LabelValue, ILabelValueProp } from "../../../atom/LabelValue";
import { autoHypen } from "@janda-com/front";
import { instanceOfA } from "@janda-com/front";

interface Iprop {
  handleDetailBtn: (data: IHouse | IUser) => void;
  handleManageBtn: (data: IHouse | IUser) => any;
  data: IHouse | IUser;
}

export const IMG_REPO =
  "https://s3.ap-northeast-2.amazonaws.com/booking.stayjanda.files/booking_app";

const CustomerCard: React.FC<Iprop> = ({
  data,
  handleManageBtn,
  handleDetailBtn,
}) => {
  const Shell = ({
    Up,
    Down,
    img,
    handleManageBtn,
  }: {
    Up: JSX.Element;
    Down: JSX.Element;
    img: string;
    handleManageBtn: (data: IHouse | IUser) => void;
  }) => (
    <div className="CustomerCard">
      <JDalign
        flex={{
          between: true,
        }}
      >
        <JDalign
          flex={{
            vCenter: true,
          }}
        >
          <JDphotoFrame
            mr="large"
            unStyle
            onClick={() => {
              handleDetailBtn(data);
            }}
            className="CustomerCard__img"
            src={img}
          />
          <div>
            <JDalign
              mb="tiny"
              flex={{
                vCenter: true,
              }}
            >
              {Up}
            </JDalign>
            <JDalign flex>{Down}</JDalign>
          </div>
        </JDalign>
        <div
          onClick={() => {
            handleManageBtn(data);
          }}
          className="CustomerCard__manageBtn"
        >
          <div className="CustomerCard__manageBtnIn">Manage</div>
        </div>
      </JDalign>
    </div>
  );

  if (instanceOfA<IHouse>(data, "houseType")) {
    const { name, houseType, user } = data;
    const { phoneNumber } = user;

    const commonAlignProp: ILabelValueProp = {
      align: {
        flex: true as true,
      },
    };

    const MarketImg = `${IMG_REPO}/infographic/market.png`;

    return (
      <Shell
        handleManageBtn={handleManageBtn}
        Up={
          <Fragment>
            <JDtypho weight={600} mb="no" color={"grey5"} size="h6">
              {name}
            </JDtypho>
            <JDbadge thema={"point"}>{houseType}</JDbadge>
            <JDbadge thema={"point"}>VVIP</JDbadge>
            <JDbadge mr="small" thema={"grey4"}>
              숙박
            </JDbadge>
            <JDtypho color="grey4" size="small">
              최근접속일 {moment().format("YYYY.MM.DD hh:mm")}
            </JDtypho>
          </Fragment>
        }
        img={MarketImg}
        Down={
          <Fragment>
            <LabelValue
              {...commonAlignProp}
              label={"휴대전화"}
              value={autoHypen(phoneNumber)}
            />
            <JDsplinter />
            <LabelValue
              {...commonAlignProp}
              label={"저번달 수익"}
              value={"--- --- ---"}
            />
            <JDsplinter />
            <LabelValue
              {...commonAlignProp}
              label={"저번달 예약"}
              value={"---"}
            />
            <JDsplinter />
            <LabelValue {...commonAlignProp} label={"상점수"} value={"-"} />
            <JDsplinter />
            <LabelValue {...commonAlignProp} label={"홈페이지"} value={"-"} />
          </Fragment>
        }
      />
    );
  } else {
    const {
      _id,
      name,
      email,
      phoneNumber,
      createdAt,
      profileImg,
      userRoles,
      isPhoneVerified,
      houses,
    } = data;

    const commonAlignProp: ILabelValueProp = {
      align: {
        flex: true as true,
      },
    };

    const MarketImg = `${IMG_REPO}/infographic/market.png`;

    return (
      <Shell
        handleManageBtn={handleManageBtn}
        Up={
          <Fragment>
            <JDtypho weight={600} mb="no" color={"grey5"} size="h6">
              {name}
            </JDtypho>
            <JDbadge thema={"point"}>{email}</JDbadge>
            <JDbadge thema={"point"}>
              <JDavatar size="small" img={profileImg?.url} />
            </JDbadge>
            {userRoles?.map((r, i) => (
              <JDbadge key={r + i + _id} mr="small" thema={"grey4"}>
                {r}
              </JDbadge>
            ))}
            <JDtypho color="grey4" size="small">
              생성일 {moment(createdAt).format("YYYY.MM.DD hh:mm")}
            </JDtypho>
          </Fragment>
        }
        img={MarketImg}
        Down={
          <Fragment>
            <LabelValue
              {...commonAlignProp}
              label={"휴대전화"}
              value={autoHypen(phoneNumber)}
            />
            <JDsplinter />
            <LabelValue
              {...commonAlignProp}
              label={"저번달 수익"}
              value={"--- --- ---"}
            />
            <JDsplinter />
            <LabelValue
              {...commonAlignProp}
              label={"저번달 예약"}
              value={"---"}
            />
            <JDsplinter />
            <LabelValue {...commonAlignProp} label={"상점수"} value={"-"} />
            <JDsplinter />
            <LabelValue {...commonAlignProp} label={"홈페이지"} value={"-"} />
          </Fragment>
        }
      />
    );
  }
};

export default CustomerCard;
