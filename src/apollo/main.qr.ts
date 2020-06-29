import {
	F_IMG,
	F_PAGE_INFO,
	F_USER_REQUEST,
	F_HOMEPAGE_REQUEST,
	F_HOEMPAGE,
	F_CONTEXT,
	F_PRODUCT,
	F_PRODUCT_TYPE
} from './frame.qr';
import gql from 'graphql-tag';

export const GET_HOUSES_FOR_SU = gql`
  query getHousesForSU($param: GetHousesForSUInput!) {
    GetHousesForSU(param: $param) {
      ok
      error
      result {
        houses {
          _id
          name
          houseType
          user {
            _id
            phoneNumber
            profileImg {
              ...Fimg
            }
          }
          location {
            address
            addressDetail
          }
          createdAt
          updatedAt
          product {
            ...Fproduct
            productType {
              ...FproductType
            }
          }
        }
        pageInfo {
          ...FpageInfo
        }
      }
    }
  }
  ${F_PRODUCT_TYPE}
  ${F_PRODUCT}
  ${F_IMG}
  ${F_PAGE_INFO}
`;

// 유저 :: 이메일 로그인
export const EMAIL_SIGN_IN = gql`
	query emailSignIn($email: EmailAddress!, $password: String!) {
		EmailSignIn(email: $email, password: $password) {
			ok
			error
			token
		}
	}
`;

export const GET_HOMEPAGES = gql`
  query getHomepages($param: GetHomepagesInput!) {
    GetHomepages(param: $param) {
      ok
      error
      result {
        homepages {
          ...Fhomepage
          user {
            _id
            name
          }
          house {
            _id
            name
          }
        }
        pageInfo {
          ...FpageInfo
        }
      }
    }
  }
  ${F_PAGE_INFO}
  ${F_HOEMPAGE}
`;

// 유저 :: 이메일 로그인
export const GET_USER_REQUESTS = gql`
  query getUserRequests($param: GetUserRequestsInput!) {
    GetUserRequests(param: $param) {
      ok
      error
      result {
        pageInfo {
          ...FpageInfo
        }
        userRequests {
          ...FuserRequest
          homepageInfo {
            ...FhomepageRequest
          }
        }
      }
    }
  }
  ${F_PAGE_INFO}
  ${F_USER_REQUEST}
  ${F_HOMEPAGE_REQUEST}
`;

export const CREATE_HOME_PAGE = gql`
	mutation createHomePage($param: CreateHomepageInput!) {
		CreateHomepage(param: $param) {
			ok
			error
		}
	}
`;

export const UPDATE_HOME_PAGE = gql`
	mutation updateHomePage($param: UpdateHomepageInput!) {
		UpdateHomepage(param: $param) {
			ok
			error
		}
	}
`;

export const UPDATE_USER_REQUEST = gql`
	mutation updateUserRequest($param: UpdateUserRequestInput!) {
		UpdateUserRequest(param: $param) {
			ok
			error
		}
	}
`;

export const DO_BILL_PAY_PRODUCT = gql`
	mutation doBillPayProduct($param: DoBillPayProductInput!) {
		DoBillPayProduct(param: $param) {
			ok
			error
		}
	}
`;

export const DO_BILL_PAY_CANCEL_PRODUCT = gql`
	mutation doBillPayCancelProduct($param: PayCancelProductInput!) {
		DoBillPayCancelProduct(param: $param) {
			ok
			error
		}
	}
`;

export const GET_USER_LIST = gql`
	query getUsers($param: GetUsersInput!) {
		GetUsers(param: $param) {
			ok
			error
			result {
				users {
					_id
					name
					userId
					phoneNumber
					password
					cardRates
					email
					profileImg {
						url
					}
					isPhoneVerified
					userRoles
					checkPrivacyPolicy
					paymentInfos {
						authDate
						billKey
						cardName
						cardNo
						cardCl
						card
						cardCode
						cardNoHashed
						isLive
					}
					houses {
						name
					}
					createdAt
					updatedAt
				}
				pageInfo {
					currentPage
					totalPage
					rowCount
					totalCount
				}
			}
		}
	}
`;

export const GET_USER_FOR_SU = gql`
  query getUserForSU($userId: ID!) {
    GetUserForSU(userId: $userId) {
      ok
      error
      user {
        ...Fcontext
      }
    }
  }
  ${F_CONTEXT}
`;
export const GET_SUPER_PROFILE = gql`
  query getMyProfile {
    GetMyProfile {
      user {
        ...Fcontext
      }
    }
  }
  ${F_CONTEXT}
`;

export const UPDATE_PRODUCT_FOR_SU = gql`
	mutation updateProductForSU($param: UpdateProductForSUInput!) {
		UpdateProductForSU(param: $param) {
			ok
			error
		}
	}
`;
