import React, { useState } from "react";
import MainAdmin from "./MainAdmin";
import { useQuery } from "react-apollo";
import { GET_HOUSES_FOR_SU, GET_USER_LIST } from "../../apollo/main.qr";
import {
  getHousesForSU,
  getHousesForSUVariables,
  getUsers,
  getUsersVariables,
} from "../../types/api";
import { queryDataFormater, getFromResult } from "@janda-com/front";

interface IProps {}

const MainAdminWrap: React.FC<IProps> = () => {
  const [page, setPage] = useState(1);

  const { data: houseInfo } = useQuery<getHousesForSU, getHousesForSUVariables>(
    GET_HOUSES_FOR_SU,
    {
      variables: {
        param: {
          paging: {
            selectedPage: page,
            count: 20,
          },
        },
      },
    }
  );

  const { data: userInfo } = useQuery<getUsers, getUsersVariables>(
    GET_USER_LIST,
    {
      variables: {
        param: {
          paging: {
            selectedPage: page,
            count: 20,
          },
        },
      },
    }
  );

  const houseResult = queryDataFormater(
    houseInfo,
    "GetHousesForSU",
    "result",
    undefined
  );
  const userResult = queryDataFormater(
    userInfo,
    "GetUsers",
    "result",
    undefined
  );

  const { pageInfo: housePageInfo, data: houseData } =
    getFromResult(houseResult, "houses", undefined) || undefined;
  const { pageInfo: userPageInfo, data: userData } =
    getFromResult(userResult, "users", undefined) || undefined;

  return (
    <MainAdmin
      housePageInfo={housePageInfo}
      userPageInfo={userPageInfo}
      houseData={houseData || []}
      userData={userData || []}
    />
  );
};

export default MainAdminWrap;
