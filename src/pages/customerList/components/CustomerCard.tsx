import React, { Fragment } from 'react';
import './CustomerCard.scss';
import { JDalign, JDtypho, JDsplinter, JDbutton, JDbadge, JDphotoFrame } from '@janda-com/front';
import moment from 'moment';
interface Iprop {}

export const IMG_REPO = 'https://s3.ap-northeast-2.amazonaws.com/booking.stayjanda.files/booking_app';

const CustomerCard: React.FC<Iprop> = () => {
	const LavelValue = ({ label, value }: { label: string; value: string }) => (
		<Fragment>
			<JDtypho weight={600} color="grey5" mr="tiny">
				{label}
			</JDtypho>
			<JDtypho weight={300} color="grey4">
				{value}
			</JDtypho>
		</Fragment>
	);

	return (
		<div className="customerCard">
			<JDalign
				flex={{
					between: true
				}}
			>
				<JDalign
					flex={{
						vCenter: true
					}}
				>
					<JDphotoFrame
						mr="large"
						unStyle
						className="customerCard__img"
						src={`${IMG_REPO}/infographic/market.png`}
					/>
					<div>
						<JDalign
							mb="tiny"
							flex={{
								vCenter: true
							}}
						>
							<JDtypho size="h6" />
							<JDbadge thema={'primary'}>사장님</JDbadge>
							<JDbadge thema={'primary'}>VVIP</JDbadge>
							<JDbadge mr="small" thema={'grey4'}>
								숙박
							</JDbadge>
							<JDtypho color="grey4" size="small">
								최근접속일 {moment().format('YYYY.MM.DD hh:mm')}
							</JDtypho>
						</JDalign>

						<JDalign flex>
							<LavelValue label={'휴대전화'} value={'--- --- ---'} />
							<JDsplinter />
							<LavelValue label={'저번달 수익'} value={'--- --- ---'} />
							<JDsplinter />
							<LavelValue label={'저번달 예약'} value={'---'} />
							<JDsplinter />
							<LavelValue label={'상점수'} value={'-'} />
							<JDsplinter />
							<LavelValue label={'홈페이지'} value={'-'} />
						</JDalign>
					</div>
				</JDalign>
				<div className="customerCard__manageBtn">
					<div className="customerCard__manageBtnIn">Manage</div>
				</div>
			</JDalign>
		</div>
	);
};

export default CustomerCard;
