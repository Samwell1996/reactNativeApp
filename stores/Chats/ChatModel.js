import { types } from 'mobx-state-tree';
import { format } from 'date-fns';
import { ProductModel } from '../Products/ProductModel';
import { UserModel } from '../UserModel';
import { MessageModel } from './MessageModel';
import { asyncModel } from '../utils';
import Api from '../../Api';

export const ChatModel = types
  .model('ChatModel', {
    id: types.identifierNumber,
    productId: types.number,
    ownerId: types.number,
    createdAt: types.maybeNull(types.string),
    updatedAt: types.maybeNull(types.string),
    message: types.reference(MessageModel),
    product: types.reference(ProductModel),

    user: types.reference(UserModel),

    sendMessage: asyncModel(sendMessage),
  })

  .preProcessSnapshot((snapshot) => {
    if (typeof snapshot !== 'object') {
      return snapshot;
    }

    if (typeof snapshot.participants === 'undefined') {
      console.log(snapshot);
    }

    return {
      ...snapshot,
      product: snapshot.product || snapshot.productId,
      participants: undefined,
      user: snapshot.participants[0],
    };
  })
  .actions((store) => ({
    date() {
      return format(new Date(store.createdAt), 'd/LL/yyy');
    },
  }));

function sendMessage(text) {
  return async function sendMessageFlow(flow, store) {
    const res = await Api.Chats.sendMessages(store.id, text);
    store.messages.addMessage(res.data);
  };
}
