import Messenger from './Messenger';

export default class MessengerChatWidget extends Messenger {
  constructor(options) {
    const element = document.createElement('div');
    super(element, options);

    element.classList.add('messenger-ui--chat-widget');
    document.body.appendChild(element);

    this.header.addEventListener('click', this.onHeaderClick);
  }

  onHeaderClick(event: Event) {
    this.header.classList.toggle('messenger-ui--is-open');
  }
}
