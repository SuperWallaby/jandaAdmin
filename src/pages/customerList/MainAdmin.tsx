import React, { Fragment } from 'react';
import { JDbutton, JDalign, JDselect } from '@janda-com/front';
import '@janda-com/front/build/scss/all.scss';
import './MainAdmin.scss';
import CustomerCard from './components/CustomerCard';

const MainAdmin: React.FC<any> = ({}) => {
	return (
		<div className="superMain">
			<div className="container container--full">
				<div className="docs-section">
					<Fragment>
						<div className="docs-section__box">
							<div>
								<JDalign>
									<JDbutton label={'결제내역'} />
									<JDbutton
										label={'단체알림'}
										iconProp={{
											icon: 'bell'
										}}
									/>
									<JDselect />
									<JDmulitBox />
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
