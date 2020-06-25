import React from 'react';
import {
	JDalign,
	useModal,
	JDpagination,
	IusePagination,
	DEFAULT_PAGINATION_SETTING,
	JDcontainer,
	WindowSize,
	JDmodal,
	JDpreloader,
	JDselect,
	IUseSelect
} from '@janda-com/front';
import HomePageCard from './components/HomepageCard';
import { IRequest } from '../../types/interface';
import { DUMMY_REQUEST } from '../../types/const';
import { JDpageInfo } from '@janda-com/front/build/types/interface';
import { UpdateUserRequestInput } from '../../types/api';

interface Iprop {
	requests: IRequest[];
	pageInfo: JDpageInfo;
	updateUserRequestFn: (param: UpdateUserRequestInput) => void;
	paginationHook: IusePagination;
	totalLoading: boolean;
	queryLoading: boolean;
	sortHook: IUseSelect<string>;
}

const HomePageRequest: React.FC<Iprop> = ({
	requests,
	pageInfo,
	paginationHook,
	updateUserRequestFn,
	queryLoading,
	totalLoading,
	sortHook
}) => {
	const detailModalHook = useModal();

	const handleDetailBtn = () => {};

	return <JDcontainer verticalPadding size={WindowSize.full} />;
};

export default HomePageRequest;
