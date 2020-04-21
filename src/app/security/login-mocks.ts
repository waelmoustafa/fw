import { AppUserAuth } from './app-user-auth';
export const LOGIN_MOCKS: AppUserAuth[] = [
  {
    userName: 'waelmoustafa',
    bearerToken: 'abi393kdkd9393ikd',
    isAuthenticated: true,
    canAccessProducts: true,
    canAddProduct: true,
    canSaveProduct: true,
    canAccessCategories: true,
    canAddCategory: false,
  },
  {
    userName: 'karimwael',
    bearerToken: 'sd9f923k3kdmcjkhd',
    isAuthenticated: true,
    canAccessProducts: false,
    canAddProduct: false,
    canSaveProduct: false,
    canAccessCategories: true,
    canAddCategory: true,
  },
];
