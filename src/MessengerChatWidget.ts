import Messenger from './Messenger';

export default class MessengerChatWidget extends Messenger {
  constructor(options) {
    const element = document.createElement('div');
    element.classList.add('messenger-ui--chat-widget');
    document.body.appendChild(element);
    super(element, options);
  }
}
