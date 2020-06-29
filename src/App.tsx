import React from 'react';
import { ApolloProvider, useQuery } from 'react-apollo';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import client from './apollo/apolloClient';
import { getMyProfile } from './types/api';
import MainAdminWrap from './pages/customerList/MainAdminWrap';
import Login from './pages/login/Login';
import './App.scss';
import { Toast, JDtabs, TabList, Tab, TabPanel, JDlogo, JDcontainer, WindowSize, JDavatar, JDtypho, JDalign, JDpreloader } from '@janda-com/front';
import './component/MainTab.scss';
import HomepageRequestWrap from './pages/homepageRequests/HomepageRequestWrap';
import HomepageWrap from './pages/homepage/HomepageWrap';
import { GET_SUPER_PROFILE } from './apollo/main.qr';
import { DEFAULT_USER } from './types/const';


function App() {
	const jwt = localStorage.getItem('jwt');
	const { data: administerInfo, loading } = useQuery<getMyProfile>(GET_SUPER_PROFILE, {
		skip: !jwt,
		client,
	});
 
	const {name, profileImg} = administerInfo?.GetMyProfile?.user || DEFAULT_USER;

	if(loading) {
		return <JDpreloader page/>
	}


	return (
		<div className="App">
			<ApolloProvider client={client}>
				<JDcontainer size={WindowSize.full}>
					<JDalign flex={{
						between:true
					}}>
					<JDlogo className="App__logo" />
					<JDalign flex>
						<JDtypho mr="large" color="white">{name}</JDtypho>
						<JDavatar img={profileImg?.url || undefined} />
					</JDalign>
					</JDalign>
				</JDcontainer>
				<Router>
					{administerInfo ?  <span/> : <Redirect to="/login" />}
					<Switch>
						<Route path="/login" render={(props) => <Login {...props} />} />
						<Route
							path="/"
							render={(prop) => (
								<div>
									<JDtabs className="TabList">
										<TabList>
											<Tab>고객 리스트</Tab>
											<Tab>통계 정보</Tab>
											<Tab>히스토리</Tab>
											<Tab>홈페이지</Tab>
											<Tab>홈페이지 신청</Tab>
										</TabList>
										<TabPanel>
											<MainAdminWrap {...prop} />
										</TabPanel>
										<TabPanel />
										<TabPanel />
										<TabPanel>
											<HomepageWrap />
										</TabPanel>
										<TabPanel>
											<HomepageRequestWrap />
										</TabPanel>
									</JDtabs>
								</div>
							)}
						/>
					</Switch>
				</Router>
			</ApolloProvider>
			<Toast />
		</div>
	);
}

export default App;
