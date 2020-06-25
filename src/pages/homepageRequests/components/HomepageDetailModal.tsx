import React from 'react';
import { JDmodal, IUseModal } from '@janda-com/front';
import { LabelValue } from '../../../atom/LabelValue';
import moment from 'moment';

interface IHomepageDetailModalInfo {}

interface Iprop {
	modalHook: IUseModal<IHomepageDetailModalInfo>;
}

const HomePageDetailModal: React.FC<Iprop> = ({ modalHook }) => {
	const commonAlignProp = {
		align: {
			flex: {
				between: true
			}
		}
	};

	return (
		<JDmodal
			pannel={{
				buttons: [
					{ label: '생성하기' },
					{ label: 'SMS 보내기' },
					{
						label: '닫기',
						onClick: () => {
							modalHook.closeModal();
						}
					}
				]
			}}
			{...modalHook}
		>
			<LabelValue mb="normal" label="신청일자" value={moment().format('YYYY-MM-DD HH:MM:SS')} {...commonAlignProp} />
			<LabelValue mb="normal" label="신청자" value={'김민재'} {...commonAlignProp} />
			<LabelValue label="도메인 주소" value="Asdasdasd" {...commonAlignProp} />
		</JDmodal>
	);
};

export default HomePageDetailModal;
