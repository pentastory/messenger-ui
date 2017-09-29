const Header = () => `
  <header>
    <h4>Messenger</h4>
  </header>
`;

const InputArea = () => `
  <form>
    <input>
    <button>&gt;</button>
  </form>
`;

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
    this.inputArea.innerHTML = InputArea();
  }

  createHeader() {
    const header = document.createElement('div');
    this.element.appendChild(header);
    return header;
  }

  createMessageListArea() {
    const messageListArea = document.createElement('div');
    this.element.appendChild(messageListArea);
    return messageListArea;
  }

  createInputArea() {
    const inputArea = document.createElement('div');
    this.element.appendChild(inputArea);
    return inputArea;
  }
}

