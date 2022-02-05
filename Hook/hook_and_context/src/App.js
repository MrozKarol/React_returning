import { PureComponent } from 'react';
import { AppContext, defaultObject } from './AppContext';

import UserInfo from './UserInfo';
import Button from './Button';
import UserInfoFunc from './UserInfoFunction';
import ButtonFunction from './ButtonFunction';

import './App.css';

class App extends PureComponent {
  state = {
    isUserLogged: defaultObject.isUserLogged,
  };

  render() {
    return (
      <div>
        <AppContext.Provider
          value={{
            isUserLogged: this.state.isUserLogged,
            togleLoggedState: this.handleToggleStateIsLogged,
          }}
        >
          <UserInfo />
          <Button />
        </AppContext.Provider>

        <AppContext.Provider
          value={{
            isUserLogged: this.state.isUserLogged,
            togleLoggedState: this.handleToggleStateIsLogged,
          }}
        >
          <UserInfoFunc />
          <ButtonFunction />
        </AppContext.Provider>
      </div>
    );
  }
  handleToggleStateIsLogged = () =>
    this.setState((prevState) => ({
      isUserLogged: !prevState.isUserLogged,
    }));
}

export default App;
