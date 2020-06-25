import React from 'react';
import { JDcard, JDbadge, JDalign, JDtypho, JDbutton } from '@janda-com/front';
import { JDsplinter } from '@janda-com/front';
import { LabelValue, ILabelValueProp } from '../../../atom/LabelValue';
import moment from 'moment';
import { IRequest } from '../../../types/interface';
import { UpdateUserRequestInput, UserRequestStatusValue } from '../../../types/api';
import './HomepageCard.scss';

interface Iprop {
	updateUserRequestFn: (param: UpdateUserRequestInput) => void;
	onDetailBtnClick: (request: IRequest) => any;
	request: IRequest;
}

const HomePageCard: React.FC<Iprop> = ({ onDetailBtnClick, request, updateUserRequestFn }) => {
	const { COMPLETED, PENDING, PROCEEDING, REFUSED } = UserRequestStatusValue;
	const { _id, homepageInfo, status, type, userMsg } = request;
	if (!homepageInfo) throw Error('This is Homepage Request');
	// TODO eamil => Email로 처리 Request에 신청자 이름 넣기
	// 신청자 이름은 프론트에서 직접 넣어서 날리는 걸로
	const { contact, design, eamil, houseId, managerName, options, siteName, url } = homepageInfo;
	const { status: statu } = status;

	const isProceeding = statu === PROCEEDING;
	const isRefused = statu === REFUSED;

	const handleDetailBtnClik = () => {
		onDetailBtnClick(request);
	};

	const statusBtnClick = (status: UserRequestStatusValue) => {
		updateUserRequestFn({
			requestId: _id,
			status: {
				status
			}
		});
	};

	const commonAlignProp: ILabelValueProp = {
		align: {
			className: 'homepageCard__line',
			flex: true as true
		}
	};
	return (
		<JDcard
			badges={[
				{
					mode: 'folded',
					size: 'large',
					label: '8시간전',
					thema: 'darkPrimary'
				}
			]}
			foot={{
				mode: 'fit',
				element: (
					<JDalign
						text="center"
						flex={{
							grow: true
						}}
					>
						<JDbutton
							onClick={() => {
								statusBtnClick(isProceeding ? COMPLETED : PROCEEDING);
							}}
							padding="largest"
							disabled={isRefused}
							label={isProceeding ? '완료' : '확인'}
						/>
						<JDbutton
							onClick={() => {
								statusBtnClick(isRefused ? PROCEEDING : REFUSED);
							}}
							padding="largest"
							label={isRefused ? '진행' : '거절'}
						/>
						<div>
							<JDbutton
								style={{
									width: '100%'
								}}
								onClick={handleDetailBtnClik}
								label="자세히보기"
							/>
						</div>
					</JDalign>
				)
			}}
		>
			<JDalign className="homepageCard__header" flex>
				<JDtypho size="large" color="grey5" mr="large" weight={600}>
					신청자
				</JDtypho>
				<JDtypho size="large" color="grey5">
					김민재
				</JDtypho>
				<JDbadge thema="point">VVIP</JDbadge>
				<JDbadge thema="point">잔다55</JDbadge>
			</JDalign>
			<JDalign
				className="homepageCard__body"
				flex={{
					wrap: true
				}}
			>
				<LabelValue {...commonAlignProp} value={moment().format('YYYY-MM-DD HH:MM:SS')} label="신청일" />
				<JDsplinter mb="normal" />
				<LabelValue {...commonAlignProp} value="TEMP홈피" label="홈페이지명" />
				<JDsplinter mb="normal" />
				<LabelValue {...commonAlignProp} value={'https://www.youtube.com/watch?v=O1Xx5xdUnIw'} label="도메인주소" />
				<JDsplinter mb="normal" />
				<LabelValue {...commonAlignProp} value="010-5237-4492" label="대표번호" />
			</JDalign>
			<JDalign />
		</JDcard>
	);
};

export default HomePageCard;
