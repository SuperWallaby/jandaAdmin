import React from 'react';
import HomePageRequest from './HomepageRequest';
import { useQuery, useMutation } from 'react-apollo';
import { GET_USER_REQUESTS, GET_HOMEPAGES, UPDATE_USER_REQUEST } from '../../apollo/main.qr';
import { getUserRequests, getUserRequestsVariables, UserReqeustType, updateUserRequest, updateUserRequestVariables, UpdateUserRequestInput } from '../../types/api';
import { getFromResult,queryDataFormater, useSelect } from '@janda-com/front';
import { usePagination } from '@janda-com/front';
import client from "../../apollo/apolloClient"
import { SORT_OPTIONS } from '../../types/const';

interface Iprop {}

const HomepageRequestWrap: React.FC<Iprop> = () => {
	const paginationHook = usePagination(1);
	const sortHook = useSelect(SORT_OPTIONS[0],SORT_OPTIONS)
	

	const {data, loading:queryLoading} = useQuery<getUserRequests, getUserRequestsVariables>(GET_USER_REQUESTS, {
		variables: {
			param: {
				paging: {
					count: 20,
					selectedPage: paginationHook?.page
				},
				filter: { type: UserReqeustType.HOMEPAGE }
			}
		}
	});

	const [updateUserRequestMu, {loading:updateLoading}] = useMutation<updateUserRequest,updateUserRequestVariables>(UPDATE_USER_REQUEST,{
		client
	})

	const result = queryDataFormater(data,"GetUserRequests","result",undefined) || undefined;
	const userReuqests = getFromResult(result,"userRequests",[]);
	const {data:requestData, pageInfo} = userReuqests;

	const updateUserRequestFn = (param: UpdateUserRequestInput) => {
		updateUserRequestMu({
			variables:{
				param
			}
		})
	}

	const totalLoading = queryLoading && updateLoading;

	return <HomePageRequest sortHook={sortHook} totalLoading={totalLoading} queryLoading={queryLoading}  updateUserRequestFn={updateUserRequestFn} paginationHook={paginationHook}  pageInfo={pageInfo} requests={requestData || []} />;
};

export default HomepageRequestWrap;
 