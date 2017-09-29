import Messenger from './Messenger';

export default class MessengerChatWidget extends Messenger {
  constructor(options) {
    const element = document.createElement('div');
    document.body.appendChild(element);
    super(element, options);
  }
}
