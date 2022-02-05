import { createContext } from 'react';

export const defaultObject = {
  isUserLogged: false,
  togleLoggedState: () => {},
};

export const AppContext = createContext(defaultObject);
