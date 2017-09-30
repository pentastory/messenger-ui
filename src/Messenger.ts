import Header from './components/Header';
import InputArea from './components/InputArea';
import Message from './components/Message';
export default class Messenger {
  private element: Element;
  private header: Element;
  private messageListArea: Element;
  private inputArea: Element;

  constructor(element: Element, options) {
    this.element = element;
    this.header = this.createHeader();
    this.header.innerHTML = Header();
    this.messageListArea = this.createMessageListArea();
    this.inputArea = this.createInputArea();
  }

  private createHeader() {
    const header = document.createElement('div');
    this.element.appendChild(header);
    return header;
  }

  private createMessageListArea() {
    const messageListArea = document.createElement('div');
    this.element.appendChild(messageListArea);
    return messageListArea;
  }

  private createInputArea() {
    const inputArea = document.createElement('div');
    inputArea.innerHTML = InputArea();
    this.element.appendChild(inputArea);

    // Add submit event listener
    const form = inputArea.querySelector('form');
    form.addEventListener('submit', event => this.onSubmit(event));

    return inputArea;
  }

  private onSubmit(event: Event) {
    event.preventDefault();

    const input = this.inputArea.querySelector('input');
    const text = input.value;
    input.value = '';

    if (text === '') return;

    this.addMessage({ author: '', content: text, date: Date(), isMe: true });
  }

  addMessage(data) {
    const message = document.createElement('div');
    message.innerHTML = Message(data);
    this.messageListArea.appendChild(message);
  }
}
