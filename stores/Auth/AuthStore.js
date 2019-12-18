import { getRoot, types } from 'mobx-state-tree';
import { asyncModel } from '../utils';
import Api from '../../Api';

export const AuthStore = types
  .model('AuthStore', {
    login: asyncModel(loginFlow),
    isLoggedIn: false,
  })

  .actions((store) => ({
    setIsLoggedIn(value) {
      store.isLoggedIn = value;
    },

    logout() {
      store.isLoggedIn = false;
      Api.Auth.logout();
    },
  }));

function loginFlow({ password, email }) {
  return async (flow) => {
    const res = await Api.Auth.login({ password, email });

    console.log('res.data', res.data);
    Api.Auth.setToken(res.data.token);

    getRoot(flow).viewer.setViewer(res.data.user);
    getRoot(flow).auth.setIsLoggedIn(true);
  };
}
