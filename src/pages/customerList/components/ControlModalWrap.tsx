import React from "react";
import { useMutation } from "react-apollo";
import {
  doBillPayCancelProduct,
  DoBillPayProductInput,
  PayCancelProductInput,
  doBillPayCancelProductVariables,
  doBillPayProduct,
  doBillPayProductVariables,
  updateProductForSU,
  updateProductForSUVariables,
  UpdateProductForSUInput,
} from "../../../types/api";
import {
  UPDATE_PRODUCT_FOR_SU,
  DO_BILL_PAY_PRODUCT,
  DO_BILL_PAY_CANCEL_PRODUCT,
} from "../../../apollo/main.qr";
import client from "../../../apollo/apolloClient";
import ControlModal, { IControlModalProp } from "./ControlModal";

interface Iprop extends IControlModalProp {}

export type TController = {
  billPayFn: (param: DoBillPayProductInput) => void;
  billPayCancelFn: (param: PayCancelProductInput) => void;
  updateUserFn: (param: UpdateProductForSUInput) => void;
};

const ControlModalWrap: React.FC<Iprop> = ({ modalHook }) => {
  const [updateUserForSuMu, { loading: updateUserLoading }] = useMutation<
    updateProductForSU,
    updateProductForSUVariables
  >(UPDATE_PRODUCT_FOR_SU, {
    client,
  });

  const [billPayMu, { loading: doBillLoading }] = useMutation<
    doBillPayProduct,
    doBillPayProductVariables
  >(DO_BILL_PAY_PRODUCT, {
    client,
  });

  const [billPayCancelMu, { loading: cancelLoading }] = useMutation<
    doBillPayCancelProduct,
    doBillPayCancelProductVariables
  >(DO_BILL_PAY_CANCEL_PRODUCT, {
    client,
  });

  const updateUserFn = (param: UpdateProductForSUInput) => {
    updateUserForSuMu({
      variables: {
        param,
      },
    });
  };

  const billPayFn = (param: DoBillPayProductInput) => {
    billPayMu({
      variables: {
        param,
      },
    });
  };

  const billPayCancelFn = (param: PayCancelProductInput) => {
    billPayCancelMu({
      variables: {
        param,
      },
    });
  };

  const controller: TController = {
    billPayFn,
    billPayCancelFn,
    updateUserFn,
  };

  return <ControlModal controller={controller} modalHook={modalHook} />;
};

export default ControlModalWrap;
