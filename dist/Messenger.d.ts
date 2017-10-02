export default class Messenger {
    private element;
    private header;
    private messageListArea;
    private inputArea;
    constructor(element: Element, options?: {});
    private createHeader();
    private createMessageListArea();
    private createInputArea(options);
    private onSubmit(event);
    addMessage(data: any): void;
}
