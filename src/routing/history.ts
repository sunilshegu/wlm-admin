import { createBrowserHistory  } from 'history';

export const browserRoutingHistory = createBrowserHistory();

export const changeRoute = (routeUrl: string) => {
  browserRoutingHistory.push(routeUrl);
};

export const goBackRoute = () => {
  browserRoutingHistory.goBack();
};

export const getRoutesLength = () => {
  return browserRoutingHistory.length;
};

export const getCurrentRoute = () => browserRoutingHistory.location.pathname;
