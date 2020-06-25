import gql from 'graphql-tag';

export const F_HOUSE = gql`
	fragment Fhouse on House {
		_id
		name
		houseType
		status
		publicKey
		createdAt
		updatedAt
	}
`;

export const F_LOCATION = gql`
	fragment Flocation on Location {
		address
		addressDetail
		lat
		lng
	}
`;

export const F_CARD_INFO = gql`
	fragment FcardInfo on PaymentInfo {
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
`;

// 상품 관련 프레임
export const F_PRODUCT_TYPE = gql`
	fragment FproductType on ProductType {
		_id
		name
		price
		roomCount
		key
		roomCountExtraCharge
		bookingCount
		bookingCountExtraCharge
		description
		canHaveHostApp
		createdAt
		updatedAt
	}
`;

// 상품 관련 프레임
export const F_PRODUCT = gql`
	fragment Fproduct on Product {
		_id
		name
		price
		daysLeftToExpire
		billKey
		status {
			isContinue
			discontinueDate
		}
		discountedPrice
		roomCount
		roomCountExtraCharge
		bookingCount
		bookingCountExtraCharge
		expireDate
		isExpired
		description
		createdAt
		updatedAt
	}
`;

export const F_HOEMPAGE = gql`
	fragment Fhomepage on Homepage {
		_id
		siteName
		url
		managerName
		contact
		eamil
		design
		options
		requestId
	}
`;

export const F_HOMEPAGE_REQUEST = gql`
	fragment FhomepageRequest on RequestHomepageType {
		siteName
		url
		managerName
		contact
		eamil
		design
		options {
			price
			key
		}
		houseId
	}
`;

export const F_USER_REQUEST = gql`
fragment FuserRequest on UserRequest {
    _id
    type
    userMsg
    status {
        confrim
        doneAt
        status
    }
    userId
}
    ${F_HOMEPAGE_REQUEST}
`;

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

// 유저 기본적인 정보 프레임
export const F_USER = gql`
  fragment Fuser on User {
    _id
    name
    phoneNumber
    password
    email
    profileImg {
      ...Fimg
    }
    bankAccountInfo {
      bankName
      accountNum
      accountHolder
    }
    isPhoneVerified
    checkPrivacyPolicy
    userRole
    createdAt
    updatedAt
  }
  ${F_IMG}
`;

export const F_CONTEXT = gql`
  fragment Fcontext on User {
    ...Fuser
    houses {
      ...Fhouse
      smsInfo {
        _id
      }
      roomTypes {
        _id
        roomCount
      }
      product {
        ...Fproduct
        productType {
          ...FproductType
        }
      }
      location {
        ...Flocation
      }
    }
    paymentInfos {
      ...FcardInfo
    }
  }
  ${F_HOUSE}
  ${F_USER}
  ${F_PRODUCT}
  ${F_PRODUCT_TYPE}
  ${F_CARD_INFO}
  ${F_LOCATION}
`;
