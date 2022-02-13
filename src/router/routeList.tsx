import { ReactElement } from "react";
import { Finalize, Main, NotFound, Results } from "../page";

export enum RouteNames {
  HOME = '/',
  NOT_FOUND = '/*',
  RESULTS = '/results',
  FINALIZE = '/finalize',
}

export interface IRoute {
  title: string;
  path: string;
  component: ReactElement;
}

export const routeList: IRoute[] = [
  {
    title: "Dashboard",
    path: RouteNames.HOME,
    component: <Main />,
  },
  {
    title: "Results",
    path: RouteNames.RESULTS + '/:testId',
    component: <Results />,
  },
  {
    title: "Finalize",
    path: RouteNames.FINALIZE + '/:testId',
    component: <Finalize />,
  },
  {
    title: "Страница не найдена",
    path: RouteNames.NOT_FOUND,
    component: <NotFound />,
  },
];
