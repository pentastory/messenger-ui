export default class Messenger {
    private element;
    private header;
    private messageListArea;
    private inputArea;
    constructor(element: Element, options: any);
    private createHeader();
    private createMessageListArea();
    private createInputArea();
    private onSubmit(event);
    addMessage(data: any): void;
}
