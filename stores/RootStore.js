import { types } from 'mobx-state-tree';
import { AsyncStorage } from 'react-native';
import { AuthStore } from './Auth/AuthStore';
import { ViewerStore } from './ViewerStore';
import { LatestProductsStore } from './Products/LatestProductsStore';
import Api from '../Api';
import { EntitiesStore } from './EntitiesStore';
import { NavigationService } from '../services';

export const RootStore = types
  .model('RootStore', {
    auth: types.optional(AuthStore, {}),
    viewer: types.optional(ViewerStore, {}),
    latestProducts: types.optional(LatestProductsStore, {}),
    entities: types.optional(EntitiesStore, {}),
  })
  .actions((store) => {
    return {
      async bootstrap() {
        try {
          const token = await AsyncStorage.getItem('___token');

          if (!token) {
            NavigationService.navigateToAuth();
            return;
          }

          await Api.Auth.setToken(token);

          const res = await Api.Account.getUser();

          store.viewer.setViewer(res.data);

          store.auth.setIsLoggedIn(true);

          NavigationService.navigateToApp();
        } catch (err) {
          NavigationService.navigateToAuth();
        }
      },
    };
  });
