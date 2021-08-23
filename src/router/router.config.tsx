import React from "react";
import BalanceTableContainer from "../containers/BalanceTableContainer/BalanceTableContainer";
import LoginPage from "../components/LoginPage/LoginPage";

export interface IRoute {
  path: string;
  exact: boolean;
  component?: React.ReactNode;
  routes?: IRoute[];
  redirect?: string;
  private?: boolean;
}

export const routes: IRoute[] = [
  {
    path: "/",
    redirect: "/balance",
    exact: true,
    private: true,
  },
  {
    path: "/login",
    component: LoginPage,
    exact: false,
    private: false,
  },
  {
    path: "/balance",
    component: BalanceTableContainer,
    exact: false,
    private: true,
  },
];
