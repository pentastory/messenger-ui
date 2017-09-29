export default class Messenger {
    private element;
    private header;
    private messageListArea;
    private inputArea;
    constructor(options: any);
    createHeader(): HTMLDivElement;
    createMessageListArea(): HTMLDivElement;
    createInputArea(): HTMLDivElement;
}
