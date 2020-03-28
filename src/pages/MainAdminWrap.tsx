import React, { useState } from "react";
import MainAdmin from "./MainAdmin";
import { useQuery } from "react-apollo";
import { tclient } from "../apollo/apolloClient";
import { GET_HOUSES_FOR_SU } from "../apollo/queries";
import { getHousesForSU, getHousesForSUVariables } from "../types/api";
import { utills } from "@janda-com/front";
const { queryDataFormater, getFromResult } = utills;

interface IProps {}

const MainAdminWrap: React.FC<IProps> = () => {
  const [page, setPage] = useState(1);

  // @ts-ignore
  const { data, loading } = useQuery<getHousesForSU, getHousesForSUVariables>(
    GET_HOUSES_FOR_SU,
    {
      variables: {
        param: {
          paging: {
            selectedPage: page,
            count: 20
          }
        }
      }
    }
  );
  // @ts-ignore
  const { data, loading } = useQuery<getHousesForSU, getHousesForSUVariables>(
    GET_HOUSES_FOR_SU,
    {
      client: tclient,
      variables: {
        param: {
          paging: {
            selectedPage: page,
            count: 20
          }
        }
      }
    }
  );

  const result = queryDataFormater(data, "GetHousesForSU", "result", undefined);
  const { pageInfo, data: houseData } =
    getFromResult(result, "houses", undefined) || undefined;

  return <MainAdmin />;
};

export default MainAdminWrap;
