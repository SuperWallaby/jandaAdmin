import gql from "graphql-tag";

export const F_PAGE_INFO = gql`
  fragment FpageInfo on PageInfoOffsetBase {
    currentPage
    totalPage
    rowCount
  }
`;

export const F_IMG = gql`
  fragment Fimg on JdFile {
    url
    filename
    mimeType
    tags {
      Key
      Value
    }
  }
`;

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
            _id
            name
            productType {
              _id
            }
          }
        }
        pageInfo {
          ...FpageInfo
        }
      }
    }
  }
  ${F_IMG}
  ${F_PAGE_INFO}
`;

// 유저 :: 이메일 로그인
export const EMAIL_SIGN_IN = gql`
  query emailSignIn($email: EmailAddress!, $password: Password!) {
    EmailSignIn(email: $email, password: $password) {
      ok
      error
      token
    }
  }
`;
