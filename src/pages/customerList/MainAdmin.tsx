import React, { Fragment } from 'react';
import { JDbutton, JDalign, JDselect, JDradioButton, useRadioButton } from '@janda-com/front';
import './MainAdmin.scss';
import CustomerCard from './components/CustomerCard';

const viewOption = [
	{
		label: '업소별 보기',
		value: 'HOUSE',
		iconProp: {
			icon: 'addCircle'
		}
	},
	{
		label: '회원별 보기',
		value: 'PERSON',
		iconProp: {
			icon: 'addCircle'
		}
	}
];

const MainAdmin: React.FC<any> = ({}) => {
	const radioButtonHook = useRadioButton([ 'HOUSE' ], viewOption);
	return (
		<div className="superMain">
			<div className="container container--full">
				<div className="docs-section">
					<Fragment>
						<div className="docs-section__box">
							<div>
								<JDalign
									flex={{
										between: true
									}}
								>
									<div>
										<JDbutton label={'결제내역'} />
										<JDbutton
											label={'단체알림'}
											iconProp={{
												icon: 'bell'
											}}
										/>
									</div>
									<JDselect z={2} />
									<JDradioButton {...radioButtonHook} />
								</JDalign>
								<CustomerCard />
								<CustomerCard />
								<CustomerCard />
							</div>
						</div>
					</Fragment>
				</div>
			</div>
		</div>
	);
};

export default MainAdmin;
