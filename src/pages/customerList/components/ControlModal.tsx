import React, { useState } from "react";
import {
  JDmodal,
  IUseModal,
  JDdayPicker,
  useDayPicker,
  JDselect,
  JDswitch,
  useInput,
  useSwitch,
  useSelect,
  JDbutton,
} from "@janda-com/front";
import { TController } from "./ControlModalWrap";
import { IHouse, IUser } from "../../../types/interface";
import "./ControlModal.scss";
import { InputText } from "@janda-com/front";
import { SELECT_PRODUCT_TYPE_OP } from "../../../types/const";

export interface TControlModalInfo {
  data: IHouse | IUser;
}

export interface IControlModalProp {
  modalHook: IUseModal<TControlModalInfo>;
}

interface IWrapFrom {
  controller: TController;
}

export const openForSupport = () => {
  const w = window.open("https://booking.stayjanda.cloud/#/", "JD-support");
  w?.localStorage.setItem("jwt", window.localStorage.getItem("jwt") || "");
};

const ControlModal: React.FC<IControlModalProp & IWrapFrom> = ({
  modalHook,
  controller,
}) => {
  // const {info} = modalHook;
  // const {houseData} = info;
  // const {product} = houseData;
  // const {name,productType} = product!;
  // const statusHook = useSwitch();
  // const memoHook = useInput();
  // const priceHook = useInput();
  // const productHook = useSelect();
  // const expireDateHook = useDayPicker();

  // return (
  // 	<JDmodal
  //         className="controlModal"
  // 		pannel={{
  // 			buttons: [
  // 				{
  //                     toggle:true,
  //                     label: '상품조정'
  // 				},
  // 				{
  //                     label: '원격접속',
  //                     onClick: () => {
  //                         openForSupport();
  //                     }
  // 				},
  // 				{
  //                     label: '닫기',
  //                     onClick: () => {
  //                         modalHook.closeModal();
  //                     }
  // 				}
  // 			]
  // 		}}
  // 		foot={
  // 			<div>
  // 				<JDbutton label="변경하기" />
  // 			</div>
  // 		}
  // 		{...modalHook}
  // 	>

  // 		<div>
  // 		<JDdayPicker isRange={false} mode="input" {...expireDateHook} />
  // 		<JDselect label="상품타입" {...productHook} options={SELECT_PRODUCT_TYPE_OP} />
  // 		<JDswitch label="상태" {...HouseStatusHook} />
  // 		<InputText label="월별가격" {...priceHook} />
  // 		<InputText label="관리자메모" textarea {...memoHook} />
  // 		</div>
  //         </JDmodal>
  // );
  return <div></div>;
};

export default ControlModal;
