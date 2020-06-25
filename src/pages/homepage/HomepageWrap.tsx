import React from 'react';
import Homepage from './Homepage';
import { useQuery, useMutation } from 'react-apollo';
import { GET_USER_REQUESTS, GET_HOMEPAGES, UPDATE_USER_REQUEST } from '../../apollo/main.qr';
import {
	updateUserRequest,
	updateUserRequestVariables,
	UpdateUserRequestInput,
	getHomepages,
	getHomepagesVariables
} from '../../types/api';
import { getFromResult, queryDataFormater, useSelect } from '@janda-com/front';
import { usePagination } from '@janda-com/front';
import client from '../../apollo/apolloClient';
import { SORT_OPTIONS } from '../../types/const';

interface Iprop {}

const HomepageWrap: React.FC<Iprop> = () => {
	const paginationHook = usePagination(1);
	const sortHook = useSelect(SORT_OPTIONS[0], SORT_OPTIONS);

	const { data, loading: queryLoading } = useQuery<getHomepages, getHomepagesVariables>(GET_HOMEPAGES, {
		variables: {
			param: {
				paging: {
					count: 20,
					selectedPage: 1
				}
			}
		}
	});

	const [ updateUserRequestMu, { loading: updateLoading } ] = useMutation<
		updateUserRequest,
		updateUserRequestVariables
	>(UPDATE_USER_REQUEST, {
		client
	});

	const result = queryDataFormater(data, 'GetHomepages', 'result', undefined) || undefined;
	const homepages = getFromResult(result, 'homepages', []);
	const { data: homepageData, pageInfo } = homepages;

	const updateUserRequestFn = (param: UpdateUserRequestInput) => {
		updateUserRequestMu({
			variables: {
				param
			}
		});
	};

	const totalLoading = queryLoading && updateLoading;

	// 그냥 신청부분에 불리언으로 처리 하는게 좋겠음!
	// 공통적인  UI요소가 너무 많음
	return <div />;
};

export default HomepageWrap;
