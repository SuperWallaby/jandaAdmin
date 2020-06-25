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
import HomePageDetailModal from './components/HomepageDetailModal';

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

	const handleDetailBtn = () => {
		detailModalHook.openModal();
	};

	return (
		<JDcontainer verticalPadding size={WindowSize.full}>
			<JDalign
				mb="normal"
				flex={{
					end: true
				}}
			>
				<JDselect {...sortHook} />
			</JDalign>
			<JDalign grid>
				{queryLoading && Array(3).fill(null).map((a,i) => <div key={`homepageCardLoading${i}`} className="homepageCard--loading" />)}
				{requests.map(rq => {
					return (
						<JDalign
							key={rq._id}
							col={{
								full: 6,
								md: 12
							}}
						>
							<HomePageCard
								updateUserRequestFn={updateUserRequestFn}
								request={rq}
								onDetailBtnClick={handleDetailBtn}
							/>
						</JDalign>
					);
				})}
				{/* 더미 */}
				<JDalign
					col={{
						full: 6,
						md: 12
					}}
				>
					<HomePageCard
						updateUserRequestFn={updateUserRequestFn}
						onDetailBtnClick={handleDetailBtn}
						request={DUMMY_REQUEST}
					/>
				</JDalign>
			</JDalign>
			<JDpagination {...DEFAULT_PAGINATION_SETTING} pageCount={pageInfo.totalPage} {...paginationHook} />
			<JDpreloader floating loading={totalLoading} />
			<HomePageDetailModal modalHook={detailModalHook} />
		</JDcontainer>
	);
};

export default HomePageRequest;
