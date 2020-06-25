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

export interface getHousesForSU_GetHousesForSU_result_houses_product_status {
  __typename: "ProductStatus";
  /**
   * 계속 이용 여부 => false면 더이상 결제 안하고 expireDate 연장 안함
   */
  isContinue: boolean;
  /**
   * isContinue === false 인경우 생성됨
   */
  discontinueDate: any | null;
}

export interface getHousesForSU_GetHousesForSU_result_houses_product_productType {
  __typename: "ProductType";
  _id: string;
  /**
   * 제품 이름
   */
  name: string;
  /**
   * 제품 가격(월)
   */
  price: number;
  /**
   * 만들 수 있는 최대 방 / 배드 수 => -1 일때 무제한
   */
  roomCount: number;
  /**
   * ProductTypeKey
   */
  key: ProductTypeKey;
  /**
   * 방 수 추가시 추가 가격  => default: 0
   */
  roomCountExtraCharge: number;
  /**
   * 한달간 받을 수 있는 최대 예약 수 => -1 일 떄 무제한
   */
  bookingCount: number;
  /**
   * 예약 초과시 부과되는 금액 => defualt: 0
   */
  bookingCountExtraCharge: number;
  /**
   * 상세 설명
   */
  description: string | null;
  canHaveHostApp: boolean;
  createdAt: any;
  updatedAt: any | null;
}

export interface getHousesForSU_GetHousesForSU_result_houses_product {
  __typename: "Product";
  _id: string;
  /**
   * 제품 이름
   */
  name: string;
  /**
   * 제품 가격(월)
   */
  price: number | null;
  /**
   * 상품 만료일까지 남은 일 수
   */
  daysLeftToExpire: number;
  /**
   * 정기결제 키값
   */
  billKey: string | null;
  /**
   * 상품 정기결제 상태
   */
  status: getHousesForSU_GetHousesForSU_result_houses_product_status;
  /**
   * 할인된 가격
   */
  discountedPrice: number | null;
  /**
   * 만들 수 있는 최대 방 / 배드 수 => -1 일때 무제한
   */
  roomCount: number | null;
  /**
   * 방 수 추가시 추가 가격  => default: 0
   */
  roomCountExtraCharge: number | null;
  /**
   * 한달간 받을 수 있는 최대 예약 수 => -1 일 떄 무제한
   */
  bookingCount: number | null;
  /**
   * 예약 초과시 부과되는 금액 => defualt: 0
   */
  bookingCountExtraCharge: number | null;
  /**
   * 상품 만료 예정일
   */
  expireDate: any;
  /**
   * 상품이 만료된 여부
   */
  isExpired: boolean;
  /**
   * 상세 설명
   */
  description: string | null;
  createdAt: any;
  updatedAt: any | null;
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
  password: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getHomepages
// ====================================================

export interface getHomepages_GetHomepages_result_homepages_user {
  __typename: "User";
  _id: string;
  name: any;
}

export interface getHomepages_GetHomepages_result_homepages_house {
  __typename: "House";
  _id: string;
  name: string;
}

export interface getHomepages_GetHomepages_result_homepages {
  __typename: "Homepage";
  _id: string;
  siteName: string | null;
  url: string;
  managerName: string;
  contact: string;
  eamil: string;
  design: LayoutDesign;
  options: (HomepageOptionKey | null)[] | null;
  requestId: string;
  user: getHomepages_GetHomepages_result_homepages_user;
  house: getHomepages_GetHomepages_result_homepages_house | null;
}

export interface getHomepages_GetHomepages_result_pageInfo {
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

export interface getHomepages_GetHomepages_result {
  __typename: "GetHomepagesResultData";
  homepages: getHomepages_GetHomepages_result_homepages[] | null;
  pageInfo: getHomepages_GetHomepages_result_pageInfo;
}

export interface getHomepages_GetHomepages {
  __typename: "GetHomepagesResponse";
  ok: boolean;
  error: string | null;
  result: getHomepages_GetHomepages_result | null;
}

export interface getHomepages {
  GetHomepages: getHomepages_GetHomepages;
}

export interface getHomepagesVariables {
  param: GetHomepagesInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getUserRequests
// ====================================================

export interface getUserRequests_GetUserRequests_result_pageInfo {
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

export interface getUserRequests_GetUserRequests_result_userRequests_status {
  __typename: "UserRequestStatus";
  /**
   * 확인한 시간
   */
  confrim: any | null;
  doneAt: any | null;
  status: UserRequestStatusValue | null;
}

export interface getUserRequests_GetUserRequests_result_userRequests_homepageInfo_options {
  __typename: "HomepageOption";
  price: number;
  key: HomepageOptionKey;
}

export interface getUserRequests_GetUserRequests_result_userRequests_homepageInfo {
  __typename: "RequestHomepageType";
  siteName: string | null;
  url: string[] | null;
  managerName: string;
  contact: string;
  eamil: string;
  design: LayoutDesign;
  options: (getUserRequests_GetUserRequests_result_userRequests_homepageInfo_options | null)[] | null;
  houseId: string | null;
}

export interface getUserRequests_GetUserRequests_result_userRequests {
  __typename: "UserRequest";
  _id: string;
  type: UserReqeustType;
  userMsg: string | null;
  status: getUserRequests_GetUserRequests_result_userRequests_status;
  userId: string;
  homepageInfo: getUserRequests_GetUserRequests_result_userRequests_homepageInfo | null;
}

export interface getUserRequests_GetUserRequests_result {
  __typename: "GetUserRequestsResultData";
  pageInfo: getUserRequests_GetUserRequests_result_pageInfo;
  userRequests: getUserRequests_GetUserRequests_result_userRequests[] | null;
}

export interface getUserRequests_GetUserRequests {
  __typename: "GetUserRequestsResponse";
  ok: boolean;
  error: string | null;
  result: getUserRequests_GetUserRequests_result | null;
}

export interface getUserRequests {
  GetUserRequests: getUserRequests_GetUserRequests;
}

export interface getUserRequestsVariables {
  param: GetUserRequestsInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: createHomePage
// ====================================================

export interface createHomePage_CreateHomepage {
  __typename: "CreateHomepageResponse";
  ok: boolean;
  error: string | null;
}

export interface createHomePage {
  CreateHomepage: createHomePage_CreateHomepage;
}

export interface createHomePageVariables {
  param: CreateHomepageInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: updateHomePage
// ====================================================

export interface updateHomePage_UpdateHomepage {
  __typename: "UpdateHomepageResponse";
  ok: boolean;
  error: string | null;
}

export interface updateHomePage {
  UpdateHomepage: updateHomePage_UpdateHomepage;
}

export interface updateHomePageVariables {
  param: UpdateHomepageInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: updateUserRequest
// ====================================================

export interface updateUserRequest_UpdateUserRequest {
  __typename: "UpdateUserRequestResponse";
  ok: boolean;
  error: string | null;
}

export interface updateUserRequest {
  UpdateUserRequest: updateUserRequest_UpdateUserRequest;
}

export interface updateUserRequestVariables {
  param: UpdateUserRequestInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: doBillPayProduct
// ====================================================

export interface doBillPayProduct_DoBillPayProduct {
  __typename: "DoBillPayProductResponse";
  ok: boolean;
  error: string | null;
}

export interface doBillPayProduct {
  DoBillPayProduct: doBillPayProduct_DoBillPayProduct;
}

export interface doBillPayProductVariables {
  param: DoBillPayProductInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: doBillPayCancelProduct
// ====================================================

export interface doBillPayCancelProduct_DoBillPayCancelProduct {
  __typename: "DoBillPayCancelProductResponse";
  ok: boolean;
  error: string | null;
}

export interface doBillPayCancelProduct {
  DoBillPayCancelProduct: doBillPayCancelProduct_DoBillPayCancelProduct;
}

export interface doBillPayCancelProductVariables {
  param: PayCancelProductInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getUsers
// ====================================================

export interface getUsers_GetUsers_result_users_profileImg {
  __typename: "JdFile";
  url: any;
}

export interface getUsers_GetUsers_result_users_paymentInfos {
  __typename: "PaymentInfo";
  authDate: any;
  billKey: string;
  cardName: string;
  cardNo: string;
  cardCl: number;
  card: Card | null;
  cardCode: number;
  cardNoHashed: string | null;
  isLive: boolean;
}

export interface getUsers_GetUsers_result_users_houses {
  __typename: "House";
  name: string;
}

export interface getUsers_GetUsers_result_users {
  __typename: "User";
  _id: string;
  name: any;
  userId: string;
  phoneNumber: any;
  password: any | null;
  /**
   * 정산시 카드 수수료
   */
  cardRates: number;
  /**
   * 주요 관리 수단임.. 잘 관리하도록 ㅎ
   */
  email: any;
  profileImg: getUsers_GetUsers_result_users_profileImg | null;
  isPhoneVerified: boolean;
  userRoles: UserRole[] | null;
  checkPrivacyPolicy: boolean;
  paymentInfos: getUsers_GetUsers_result_users_paymentInfos[];
  houses: getUsers_GetUsers_result_users_houses[];
  createdAt: any;
  updatedAt: any | null;
}

export interface getUsers_GetUsers_result_pageInfo {
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
  /**
   * 전체 데이터 수
   */
  totalCount: number;
}

export interface getUsers_GetUsers_result {
  __typename: "GetUsersResultData";
  users: getUsers_GetUsers_result_users[] | null;
  pageInfo: getUsers_GetUsers_result_pageInfo;
}

export interface getUsers_GetUsers {
  __typename: "GetUsersResponse";
  ok: boolean;
  error: string | null;
  result: getUsers_GetUsers_result | null;
}

export interface getUsers {
  GetUsers: getUsers_GetUsers;
}

export interface getUsersVariables {
  param: GetUsersInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getUserForSU
// ====================================================

export interface getUserForSU_GetUserForSU_user_profileImg_tags {
  __typename: "JdTag";
  Key: string;
  Value: string;
}

export interface getUserForSU_GetUserForSU_user_profileImg {
  __typename: "JdFile";
  url: any;
  filename: string;
  mimeType: string;
  tags: getUserForSU_GetUserForSU_user_profileImg_tags[] | null;
}

export interface getUserForSU_GetUserForSU_user_bankAccountInfo {
  __typename: "BankAccountInfo";
  bankName: string;
  accountNum: string;
  accountHolder: string;
}

export interface getUserForSU_GetUserForSU_user_houses_smsInfo {
  __typename: "SmsInfo";
  _id: string;
}

export interface getUserForSU_GetUserForSU_user_houses_roomTypes {
  __typename: "RoomType";
  _id: string;
  roomCount: number;
}

export interface getUserForSU_GetUserForSU_user_houses_product_status {
  __typename: "ProductStatus";
  /**
   * 계속 이용 여부 => false면 더이상 결제 안하고 expireDate 연장 안함
   */
  isContinue: boolean;
  /**
   * isContinue === false 인경우 생성됨
   */
  discontinueDate: any | null;
}

export interface getUserForSU_GetUserForSU_user_houses_product_productType {
  __typename: "ProductType";
  _id: string;
  /**
   * 제품 이름
   */
  name: string;
  /**
   * 제품 가격(월)
   */
  price: number;
  /**
   * 만들 수 있는 최대 방 / 배드 수 => -1 일때 무제한
   */
  roomCount: number;
  /**
   * ProductTypeKey
   */
  key: ProductTypeKey;
  /**
   * 방 수 추가시 추가 가격  => default: 0
   */
  roomCountExtraCharge: number;
  /**
   * 한달간 받을 수 있는 최대 예약 수 => -1 일 떄 무제한
   */
  bookingCount: number;
  /**
   * 예약 초과시 부과되는 금액 => defualt: 0
   */
  bookingCountExtraCharge: number;
  /**
   * 상세 설명
   */
  description: string | null;
  canHaveHostApp: boolean;
  createdAt: any;
  updatedAt: any | null;
}

export interface getUserForSU_GetUserForSU_user_houses_product {
  __typename: "Product";
  _id: string;
  /**
   * 제품 이름
   */
  name: string;
  /**
   * 제품 가격(월)
   */
  price: number | null;
  /**
   * 상품 만료일까지 남은 일 수
   */
  daysLeftToExpire: number;
  /**
   * 정기결제 키값
   */
  billKey: string | null;
  /**
   * 상품 정기결제 상태
   */
  status: getUserForSU_GetUserForSU_user_houses_product_status;
  /**
   * 할인된 가격
   */
  discountedPrice: number | null;
  /**
   * 만들 수 있는 최대 방 / 배드 수 => -1 일때 무제한
   */
  roomCount: number | null;
  /**
   * 방 수 추가시 추가 가격  => default: 0
   */
  roomCountExtraCharge: number | null;
  /**
   * 한달간 받을 수 있는 최대 예약 수 => -1 일 떄 무제한
   */
  bookingCount: number | null;
  /**
   * 예약 초과시 부과되는 금액 => defualt: 0
   */
  bookingCountExtraCharge: number | null;
  /**
   * 상품 만료 예정일
   */
  expireDate: any;
  /**
   * 상품이 만료된 여부
   */
  isExpired: boolean;
  /**
   * 상세 설명
   */
  description: string | null;
  createdAt: any;
  updatedAt: any | null;
  /**
   * 상품 만료까지 남은 일수
   */
  productType: getUserForSU_GetUserForSU_user_houses_product_productType;
}

export interface getUserForSU_GetUserForSU_user_houses_location {
  __typename: "Location";
  address: string;
  addressDetail: string | null;
  lat: number;
  lng: number;
}

export interface getUserForSU_GetUserForSU_user_houses {
  __typename: "House";
  _id: string;
  name: string;
  houseType: HouseType;
  status: HouseStatus | null;
  publicKey: string | null;
  createdAt: any;
  updatedAt: any | null;
  smsInfo: getUserForSU_GetUserForSU_user_houses_smsInfo;
  roomTypes: getUserForSU_GetUserForSU_user_houses_roomTypes[] | null;
  product: getUserForSU_GetUserForSU_user_houses_product | null;
  location: getUserForSU_GetUserForSU_user_houses_location;
}

export interface getUserForSU_GetUserForSU_user_paymentInfos {
  __typename: "PaymentInfo";
  authDate: any;
  billKey: string;
  cardName: string;
  cardNo: string;
  cardCl: number;
  card: Card | null;
  cardCode: number;
  cardNoHashed: string | null;
  isLive: boolean;
}

export interface getUserForSU_GetUserForSU_user {
  __typename: "User";
  _id: string;
  name: any;
  phoneNumber: any;
  password: any | null;
  /**
   * 주요 관리 수단임.. 잘 관리하도록 ㅎ
   */
  email: any;
  profileImg: getUserForSU_GetUserForSU_user_profileImg | null;
  bankAccountInfo: getUserForSU_GetUserForSU_user_bankAccountInfo | null;
  isPhoneVerified: boolean;
  checkPrivacyPolicy: boolean;
  userRole: UserRole;
  createdAt: any;
  updatedAt: any | null;
  houses: getUserForSU_GetUserForSU_user_houses[];
  paymentInfos: getUserForSU_GetUserForSU_user_paymentInfos[];
}

export interface getUserForSU_GetUserForSU {
  __typename: "GetUserForSUResponse";
  ok: boolean;
  error: string | null;
  user: getUserForSU_GetUserForSU_user | null;
}

export interface getUserForSU {
  GetUserForSU: getUserForSU_GetUserForSU;
}

export interface getUserForSUVariables {
  userId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: updateProductForSU
// ====================================================

export interface updateProductForSU_UpdateProductForSU {
  __typename: "UpdateProductForSUResponse";
  ok: boolean;
  error: string | null;
}

export interface updateProductForSU {
  UpdateProductForSU: updateProductForSU_UpdateProductForSU;
}

export interface updateProductForSUVariables {
  param: UpdateProductForSUInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fhouse
// ====================================================

export interface Fhouse {
  __typename: "House";
  _id: string;
  name: string;
  houseType: HouseType;
  status: HouseStatus | null;
  publicKey: string | null;
  createdAt: any;
  updatedAt: any | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Flocation
// ====================================================

export interface Flocation {
  __typename: "Location";
  address: string;
  addressDetail: string | null;
  lat: number;
  lng: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FcardInfo
// ====================================================

export interface FcardInfo {
  __typename: "PaymentInfo";
  authDate: any;
  billKey: string;
  cardName: string;
  cardNo: string;
  cardCl: number;
  card: Card | null;
  cardCode: number;
  cardNoHashed: string | null;
  isLive: boolean;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FproductType
// ====================================================

export interface FproductType {
  __typename: "ProductType";
  _id: string;
  /**
   * 제품 이름
   */
  name: string;
  /**
   * 제품 가격(월)
   */
  price: number;
  /**
   * 만들 수 있는 최대 방 / 배드 수 => -1 일때 무제한
   */
  roomCount: number;
  /**
   * ProductTypeKey
   */
  key: ProductTypeKey;
  /**
   * 방 수 추가시 추가 가격  => default: 0
   */
  roomCountExtraCharge: number;
  /**
   * 한달간 받을 수 있는 최대 예약 수 => -1 일 떄 무제한
   */
  bookingCount: number;
  /**
   * 예약 초과시 부과되는 금액 => defualt: 0
   */
  bookingCountExtraCharge: number;
  /**
   * 상세 설명
   */
  description: string | null;
  canHaveHostApp: boolean;
  createdAt: any;
  updatedAt: any | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fproduct
// ====================================================

export interface Fproduct_status {
  __typename: "ProductStatus";
  /**
   * 계속 이용 여부 => false면 더이상 결제 안하고 expireDate 연장 안함
   */
  isContinue: boolean;
  /**
   * isContinue === false 인경우 생성됨
   */
  discontinueDate: any | null;
}

export interface Fproduct {
  __typename: "Product";
  _id: string;
  /**
   * 제품 이름
   */
  name: string;
  /**
   * 제품 가격(월)
   */
  price: number | null;
  /**
   * 상품 만료일까지 남은 일 수
   */
  daysLeftToExpire: number;
  /**
   * 정기결제 키값
   */
  billKey: string | null;
  /**
   * 상품 정기결제 상태
   */
  status: Fproduct_status;
  /**
   * 할인된 가격
   */
  discountedPrice: number | null;
  /**
   * 만들 수 있는 최대 방 / 배드 수 => -1 일때 무제한
   */
  roomCount: number | null;
  /**
   * 방 수 추가시 추가 가격  => default: 0
   */
  roomCountExtraCharge: number | null;
  /**
   * 한달간 받을 수 있는 최대 예약 수 => -1 일 떄 무제한
   */
  bookingCount: number | null;
  /**
   * 예약 초과시 부과되는 금액 => defualt: 0
   */
  bookingCountExtraCharge: number | null;
  /**
   * 상품 만료 예정일
   */
  expireDate: any;
  /**
   * 상품이 만료된 여부
   */
  isExpired: boolean;
  /**
   * 상세 설명
   */
  description: string | null;
  createdAt: any;
  updatedAt: any | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fhomepage
// ====================================================

export interface Fhomepage {
  __typename: "Homepage";
  _id: string;
  siteName: string | null;
  url: string;
  managerName: string;
  contact: string;
  eamil: string;
  design: LayoutDesign;
  options: (HomepageOptionKey | null)[] | null;
  requestId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FhomepageRequest
// ====================================================

export interface FhomepageRequest_options {
  __typename: "HomepageOption";
  price: number;
  key: HomepageOptionKey;
}

export interface FhomepageRequest {
  __typename: "RequestHomepageType";
  siteName: string | null;
  url: string[] | null;
  managerName: string;
  contact: string;
  eamil: string;
  design: LayoutDesign;
  options: (FhomepageRequest_options | null)[] | null;
  houseId: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FuserRequest
// ====================================================

export interface FuserRequest_status {
  __typename: "UserRequestStatus";
  /**
   * 확인한 시간
   */
  confrim: any | null;
  doneAt: any | null;
  status: UserRequestStatusValue | null;
}

export interface FuserRequest {
  __typename: "UserRequest";
  _id: string;
  type: UserReqeustType;
  userMsg: string | null;
  status: FuserRequest_status;
  userId: string;
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

// ====================================================
// GraphQL fragment: Fuser
// ====================================================

export interface Fuser_profileImg_tags {
  __typename: "JdTag";
  Key: string;
  Value: string;
}

export interface Fuser_profileImg {
  __typename: "JdFile";
  url: any;
  filename: string;
  mimeType: string;
  tags: Fuser_profileImg_tags[] | null;
}

export interface Fuser_bankAccountInfo {
  __typename: "BankAccountInfo";
  bankName: string;
  accountNum: string;
  accountHolder: string;
}

export interface Fuser {
  __typename: "User";
  _id: string;
  name: any;
  phoneNumber: any;
  password: any | null;
  /**
   * 주요 관리 수단임.. 잘 관리하도록 ㅎ
   */
  email: any;
  profileImg: Fuser_profileImg | null;
  bankAccountInfo: Fuser_bankAccountInfo | null;
  isPhoneVerified: boolean;
  checkPrivacyPolicy: boolean;
  userRole: UserRole;
  createdAt: any;
  updatedAt: any | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fcontext
// ====================================================

export interface Fcontext_profileImg_tags {
  __typename: "JdTag";
  Key: string;
  Value: string;
}

export interface Fcontext_profileImg {
  __typename: "JdFile";
  url: any;
  filename: string;
  mimeType: string;
  tags: Fcontext_profileImg_tags[] | null;
}

export interface Fcontext_bankAccountInfo {
  __typename: "BankAccountInfo";
  bankName: string;
  accountNum: string;
  accountHolder: string;
}

export interface Fcontext_houses_smsInfo {
  __typename: "SmsInfo";
  _id: string;
}

export interface Fcontext_houses_roomTypes {
  __typename: "RoomType";
  _id: string;
  roomCount: number;
}

export interface Fcontext_houses_product_status {
  __typename: "ProductStatus";
  /**
   * 계속 이용 여부 => false면 더이상 결제 안하고 expireDate 연장 안함
   */
  isContinue: boolean;
  /**
   * isContinue === false 인경우 생성됨
   */
  discontinueDate: any | null;
}

export interface Fcontext_houses_product_productType {
  __typename: "ProductType";
  _id: string;
  /**
   * 제품 이름
   */
  name: string;
  /**
   * 제품 가격(월)
   */
  price: number;
  /**
   * 만들 수 있는 최대 방 / 배드 수 => -1 일때 무제한
   */
  roomCount: number;
  /**
   * ProductTypeKey
   */
  key: ProductTypeKey;
  /**
   * 방 수 추가시 추가 가격  => default: 0
   */
  roomCountExtraCharge: number;
  /**
   * 한달간 받을 수 있는 최대 예약 수 => -1 일 떄 무제한
   */
  bookingCount: number;
  /**
   * 예약 초과시 부과되는 금액 => defualt: 0
   */
  bookingCountExtraCharge: number;
  /**
   * 상세 설명
   */
  description: string | null;
  canHaveHostApp: boolean;
  createdAt: any;
  updatedAt: any | null;
}

export interface Fcontext_houses_product {
  __typename: "Product";
  _id: string;
  /**
   * 제품 이름
   */
  name: string;
  /**
   * 제품 가격(월)
   */
  price: number | null;
  /**
   * 상품 만료일까지 남은 일 수
   */
  daysLeftToExpire: number;
  /**
   * 정기결제 키값
   */
  billKey: string | null;
  /**
   * 상품 정기결제 상태
   */
  status: Fcontext_houses_product_status;
  /**
   * 할인된 가격
   */
  discountedPrice: number | null;
  /**
   * 만들 수 있는 최대 방 / 배드 수 => -1 일때 무제한
   */
  roomCount: number | null;
  /**
   * 방 수 추가시 추가 가격  => default: 0
   */
  roomCountExtraCharge: number | null;
  /**
   * 한달간 받을 수 있는 최대 예약 수 => -1 일 떄 무제한
   */
  bookingCount: number | null;
  /**
   * 예약 초과시 부과되는 금액 => defualt: 0
   */
  bookingCountExtraCharge: number | null;
  /**
   * 상품 만료 예정일
   */
  expireDate: any;
  /**
   * 상품이 만료된 여부
   */
  isExpired: boolean;
  /**
   * 상세 설명
   */
  description: string | null;
  createdAt: any;
  updatedAt: any | null;
  /**
   * 상품 만료까지 남은 일수
   */
  productType: Fcontext_houses_product_productType;
}

export interface Fcontext_houses_location {
  __typename: "Location";
  address: string;
  addressDetail: string | null;
  lat: number;
  lng: number;
}

export interface Fcontext_houses {
  __typename: "House";
  _id: string;
  name: string;
  houseType: HouseType;
  status: HouseStatus | null;
  publicKey: string | null;
  createdAt: any;
  updatedAt: any | null;
  smsInfo: Fcontext_houses_smsInfo;
  roomTypes: Fcontext_houses_roomTypes[] | null;
  product: Fcontext_houses_product | null;
  location: Fcontext_houses_location;
}

export interface Fcontext_paymentInfos {
  __typename: "PaymentInfo";
  authDate: any;
  billKey: string;
  cardName: string;
  cardNo: string;
  cardCl: number;
  card: Card | null;
  cardCode: number;
  cardNoHashed: string | null;
  isLive: boolean;
}

export interface Fcontext {
  __typename: "User";
  _id: string;
  name: any;
  phoneNumber: any;
  password: any | null;
  /**
   * 주요 관리 수단임.. 잘 관리하도록 ㅎ
   */
  email: any;
  profileImg: Fcontext_profileImg | null;
  bankAccountInfo: Fcontext_bankAccountInfo | null;
  isPhoneVerified: boolean;
  checkPrivacyPolicy: boolean;
  userRole: UserRole;
  createdAt: any;
  updatedAt: any | null;
  houses: Fcontext_houses[];
  paymentInfos: Fcontext_paymentInfos[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum Card {
  AMX = "AMX",
  BC_CARD = "BC_CARD",
  CHOHUNG = "CHOHUNG",
  CHUKHYUP = "CHUKHYUP",
  CITY = "CITY",
  DINERS_CARD = "DINERS_CARD",
  GWANGJU = "GWANGJU",
  HANMI = "HANMI",
  HYUNDAI = "HYUNDAI",
  JCB = "JCB",
  JEJU_BANK = "JEJU_BANK",
  JEOCHUK = "JEOCHUK",
  JEONBOOK = "JEONBOOK",
  KAKAO_BANK = "KAKAO_BANK",
  KB_CARD = "KB_CARD",
  KDB = "KDB",
  KEB_HANA = "KEB_HANA",
  KOREA_POST = "KOREA_POST",
  K_BANK = "K_BANK",
  LOTTE_CARD = "LOTTE_CARD",
  MASTER_CARD = "MASTER_CARD",
  MG_CARD = "MG_CARD",
  NONGHYUP = "NONGHYUP",
  OK_CASH_BAG = "OK_CASH_BAG",
  SAMSUNG = "SAMSUNG",
  SAVINGS_BANK = "SAVINGS_BANK",
  SHINHAN = "SHINHAN",
  SHINSEGAE = "SHINSEGAE",
  SUHYUP = "SUHYUP",
  UNIONPAY = "UNIONPAY",
  VISA = "VISA",
  WOORI = "WOORI",
}

export enum HomepageOptionKey {
  CS_PAGE = "CS_PAGE",
  CUSTOM_DESIGN = "CUSTOM_DESIGN",
  CUSTOM_DEV = "CUSTOM_DEV",
  INSTA_PAGE = "INSTA_PAGE",
  NOTI_PAGE = "NOTI_PAGE",
  PHOTO_PAGE = "PHOTO_PAGE",
  PRICE_PAGE = "PRICE_PAGE",
  RESV_API = "RESV_API",
  RESV_PAGE = "RESV_PAGE",
  ROOM_INFO_PAGE = "ROOM_INFO_PAGE",
}

export enum HouseStatus {
  DISALBE = "DISALBE",
  ENABLE = "ENABLE",
  WAIT = "WAIT",
}

export enum HouseType {
  GUEST_HOUSE = "GUEST_HOUSE",
  HOSTEL = "HOSTEL",
  HOTEL = "HOTEL",
  MOTEL = "MOTEL",
  PENSION = "PENSION",
  YOUTH_HOSTEL = "YOUTH_HOSTEL",
}

export enum LayoutDesign {
  BASIC = "BASIC",
  RED = "RED",
}

export enum ProductTypeKey {
  DEMO = "DEMO",
  NEGOTIATION = "NEGOTIATION",
  PREMIUM = "PREMIUM",
  STANDARD = "STANDARD",
}

export enum UserReqeustType {
  HOMEPAGE = "HOMEPAGE",
}

export enum UserRequestStatusValue {
  COMPLETED = "COMPLETED",
  PENDING = "PENDING",
  PROCEEDING = "PROCEEDING",
  REFUSED = "REFUSED",
}

export enum UserRole {
  ADMIN = "ADMIN",
  AGENCY = "AGENCY",
  DEVELOPER = "DEVELOPER",
  GHOST = "GHOST",
  GUEST = "GUEST",
  HOST = "HOST",
  SUB_HOST = "SUB_HOST",
}

export interface CreateHomepageInput {
  userRequestId?: string | null;
  siteName?: string | null;
  url: string;
  managerName: string;
  contact: string;
  eamil: string;
  design: LayoutDesign;
  options?: (HomepageOptionKey | null)[] | null;
  userId: string;
  houseId?: string | null;
}

export interface DoBillPayProductInput {
  billKey?: string | null;
  productId: string;
  added: number;
  amt?: number | null;
  force: boolean;
}

export interface GetHomepagesFilterInput {
  houseId?: string | null;
  siteName?: string | null;
  contact?: string | null;
}

export interface GetHomepagesInput {
  paging: OffsetPagingInput;
  filter?: GetHomepagesFilterInput | null;
}

export interface GetHousesForSUInput {
  paging: OffsetPagingInput;
}

export interface GetUserRequestsFilterInput {
  userId?: string | null;
  type?: UserReqeustType | null;
}

export interface GetUserRequestsInput {
  paging: OffsetPagingInput;
  filter?: GetUserRequestsFilterInput | null;
}

export interface GetUsersFilterInput {
  updatedAt?: any | null;
}

export interface GetUsersInput {
  paging: OffsetPagingInput;
  filter?: GetUsersFilterInput | null;
  sort?: any[] | null;
}

export interface OffsetPagingInput {
  selectedPage: number;
  count: number;
}

export interface PayCancelInput {
  tid: string;
  cancelAmt: number;
  cancelMsg: string;
  isPartialCancel: boolean;
}

export interface PayCancelProductInput {
  payCancelInput: PayCancelInput;
  productId: string;
  decreasePeriod: number;
}

export interface UpdateHomepageInput {
  homepageId: string;
  siteName?: string | null;
  url?: string | null;
  managerName?: string | null;
  contact?: string | null;
  eamil?: string | null;
  design?: LayoutDesign | null;
  options?: (HomepageOptionKey | null)[] | null;
}

export interface UpdateProductForSUInput {
  productId: string;
  updateParams: UpdateProductInput;
}

export interface UpdateProductInput {
  canHaveHostApp?: boolean | null;
  price?: number | null;
  description?: string | null;
  expireDate?: any | null;
}

export interface UpdateUserRequestInput {
  requestId: string;
  status?: UserRequestStatusInput | null;
}

export interface UserRequestStatusInput {
  confrim?: any | null;
  doneAt?: any | null;
  status?: UserRequestStatusValue | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
