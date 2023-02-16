import { RouteObject } from 'react-router';
import { AppLayout } from './components';
import { getStoreTransferModuleRoutes } from './module-store-transfer/app-routes-store-transfer';

export const initRoutes = (): RouteObject[] => {
  return [
    {
      path: '/',
      element: <AppLayout />,
      children: [...getStoreTransferModuleRoutes()],
    },
  ];
};
