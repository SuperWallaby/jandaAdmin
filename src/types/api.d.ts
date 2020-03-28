/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getHousesForSU
// ====================================================

export interface getHousesForSU_GetHousesForSU_result_houses_user_profileImg_tags {
  __typename: "JdTag";
  Key: string;
  Value: string;
}

export interface getHousesForSU_GetHousesForSU_result_houses_user_profileImg {
  __typename: "JdFile";
  url: any;
  filename: string;
  mimeType: string;
  tags: getHousesForSU_GetHousesForSU_result_houses_user_profileImg_tags[] | null;
}

export interface getHousesForSU_GetHousesForSU_result_houses_user {
  __typename: "User";
  _id: string;
  phoneNumber: any;
  profileImg: getHousesForSU_GetHousesForSU_result_houses_user_profileImg | null;
}

export interface getHousesForSU_GetHousesForSU_result_houses_location {
  __typename: "Location";
  address: string;
  addressDetail: string | null;
}

export interface getHousesForSU_GetHousesForSU_result_houses_product_productType {
  __typename: "ProductType";
  _id: string;
}

export interface getHousesForSU_GetHousesForSU_result_houses_product {
  __typename: "Product";
  _id: string;
  /**
   * 제품 이름
   */
  name: string;
  /**
   * 상품 만료까지 남은 일수
   */
  productType: getHousesForSU_GetHousesForSU_result_houses_product_productType;
}

export interface getHousesForSU_GetHousesForSU_result_houses {
  __typename: "House";
  _id: string;
  name: string;
  houseType: HouseType;
  user: getHousesForSU_GetHousesForSU_result_houses_user;
  location: getHousesForSU_GetHousesForSU_result_houses_location;
  createdAt: any;
  updatedAt: any | null;
  product: getHousesForSU_GetHousesForSU_result_houses_product | null;
}

export interface getHousesForSU_GetHousesForSU_result_pageInfo {
  __typename: "PageInfoOffsetBase";
  /**
   * 현제 보고있는 페이지
   */
  currentPage: number;
  /**
   * 전체 페이지 수
   */
  totalPage: number;
  /**
   * 현재 페이지 데이터 수
   */
  rowCount: number;
}

export interface getHousesForSU_GetHousesForSU_result {
  __typename: "GetHousesForSUResultData";
  houses: getHousesForSU_GetHousesForSU_result_houses[] | null;
  pageInfo: getHousesForSU_GetHousesForSU_result_pageInfo;
}

export interface getHousesForSU_GetHousesForSU {
  __typename: "GetHousesForSUResponse";
  ok: boolean;
  error: string | null;
  result: getHousesForSU_GetHousesForSU_result | null;
}

export interface getHousesForSU {
  /**
   * 슈퍼계정으로 모든 집들을 가져옴.
   */
  GetHousesForSU: getHousesForSU_GetHousesForSU;
}

export interface getHousesForSUVariables {
  param: GetHousesForSUInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: emailSignIn
// ====================================================

export interface emailSignIn_EmailSignIn {
  __typename: "EmailSignInResponse";
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface emailSignIn {
  EmailSignIn: emailSignIn_EmailSignIn;
}

export interface emailSignInVariables {
  email: any;
  password: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FpageInfo
// ====================================================

export interface FpageInfo {
  __typename: "PageInfoOffsetBase";
  /**
   * 현제 보고있는 페이지
   */
  currentPage: number;
  /**
   * 전체 페이지 수
   */
  totalPage: number;
  /**
   * 현재 페이지 데이터 수
   */
  rowCount: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fimg
// ====================================================

export interface Fimg_tags {
  __typename: "JdTag";
  Key: string;
  Value: string;
}

export interface Fimg {
  __typename: "JdFile";
  url: any;
  filename: string;
  mimeType: string;
  tags: Fimg_tags[] | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum HouseType {
  GUEST_HOUSE = "GUEST_HOUSE",
  HOSTEL = "HOSTEL",
  HOTEL = "HOTEL",
  MOTEL = "MOTEL",
  PENSION = "PENSION",
  YOUTH_HOSTEL = "YOUTH_HOSTEL",
}

export interface GetHousesForSUInput {
  paging: OffsetPagingInput;
}

export interface OffsetPagingInput {
  selectedPage: number;
  count: number;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
