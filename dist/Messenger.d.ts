export default class Messenger {
    private element;
    private header;
    private messageListArea;
    private inputArea;
    constructor(element: Element, options: any);
    createHeader(): HTMLDivElement;
    createMessageListArea(): HTMLDivElement;
    createInputArea(): HTMLDivElement;
}
