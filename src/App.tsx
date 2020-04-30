import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import client from './apollo/apolloClient';
import MainAdminWrap from './pages/customerList/MainAdminWrap';
import Login from './pages/login/Login';
import './App.scss';
import { Toast, JDtabs, TabList, Tab, TabPanel, JDlogo, JDcontainer, WindowSize } from '@janda-com/front';
import './component/MainTab.scss';

function App() {
	return (
		<div className="App">
			<ApolloProvider client={client}>
				<JDcontainer size={WindowSize.full}>
					<JDlogo className="App__logo" />
				</JDcontainer>
				<Router>
					<Switch>
						<Route path="/login" render={() => <Login />} />
						<Route
							path="/"
							render={prop => (
								<div>
									<JDtabs className="TabList">
										<TabList>
											<Tab>고객 리스트</Tab>
											<Tab>통계 정보</Tab>
											<Tab>히스토리</Tab>
											<Tab>홈페이지 신청</Tab>
										</TabList>
										<TabPanel>
											<MainAdminWrap {...prop} />
										</TabPanel>
										<TabPanel />
										<TabPanel />
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
