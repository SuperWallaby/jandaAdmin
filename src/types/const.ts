import { LayoutDesign, UserRequestStatusValue, UserReqeustType } from './api';
import { IselectedOption } from '@janda-com/front/build/types/interface';

export const DUMMY_REQUEST = {
	__typename: 'UserRequest' as any,
	_id: '11111',
	homepageInfo: {
		__typename: 'RequestHomepageType' as any,
		contact: '111',
		design: LayoutDesign.BASIC,
		eamil: '',
		houseId: '',
		managerName: '',
		options: [ null ],
		siteName: '',
		url: [ '' ]
	},
	status: {
		__typename: 'UserRequestStatus' as any,
		confrim: false,
		status: UserRequestStatusValue.PENDING,
		doneAt: null
	},
	type: UserReqeustType.HOMEPAGE,
	userId: '',
	userMsg: ''
};

export const SORT_OPTIONS = [
	{
		label: '신청일 ↑',
		value: 'createAt'
	}
];

export const SELECT_PRODUCT_TYPE_OP: IselectedOption[] = [
	{ value: '33', label: 'JANDA33' },
	{ value: '55', label: 'JANDA55' }
];
