import {
  getHousesForSU_GetHousesForSU_result_houses,
  getUserRequests_GetUserRequests_result_userRequests,
  getUsers_GetUsers_result_users,
} from "./api";

export interface IHouse extends getHousesForSU_GetHousesForSU_result_houses {}
export interface IRequest
  extends getUserRequests_GetUserRequests_result_userRequests {}
export interface IUser extends getUsers_GetUsers_result_users {}
