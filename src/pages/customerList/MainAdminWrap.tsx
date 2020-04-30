import React, { useState } from 'react';
import MainAdmin from './MainAdmin';
import { useQuery } from 'react-apollo';
import { GET_HOUSES_FOR_SU } from '../../apollo/queries';
import { getHousesForSU, getHousesForSUVariables } from '../../types/api';
import { utills } from '@janda-com/front';
const { queryDataFormater, getFromResult } = utills;

interface IProps {}

const MainAdminWrap: React.FC<IProps> = () => {
	const [ page, setPage ] = useState(1);

	const { data } = useQuery<getHousesForSU, getHousesForSUVariables>(GET_HOUSES_FOR_SU, {
		variables: {
			param: {
				paging: {
					selectedPage: page,
					count: 20
				}
			}
		}
	});

	const result = queryDataFormater(data, 'GetHousesForSU', 'result', undefined);
	const { pageInfo, data: houseData } = getFromResult(result, 'houses', undefined) || undefined;

	return <MainAdmin />;
};

export default MainAdminWrap;
