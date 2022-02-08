import { PureComponent, useState } from 'react';
import { AppContext, defaultObject } from './AppContext';

import UserInfo from './UserInfo';
import Button from './Button';
import UserInfoFunc from './UserInfoFunction';
import ButtonFunction from './ButtonFunction';

import './App.css';

const App = () => {
  const [isUserLogged, setIsUserLogged] = useState(defaultObject.isUserLogged);

  const handleToggleStateIsLogged = () =>
    setIsUserLogged((prevValue) => !prevValue);

  return (
    <div>
      <AppContext.Provider
        value={{
          isUserLogged: isUserLogged,
          togleLoggedState: handleToggleStateIsLogged,
        }}
      >
        <UserInfo />
        <Button />
      </AppContext.Provider>

      <AppContext.Provider
        value={{
          isUserLogged: isUserLogged,
          togleLoggedState: handleToggleStateIsLogged,
        }}
      >
        <UserInfoFunc />
        <ButtonFunction />
      </AppContext.Provider>
    </div>
  );
};

export default App;
