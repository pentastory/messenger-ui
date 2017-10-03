export default class Messenger {
    protected element: Element;
    protected header: Element;
    protected messageListArea: Element;
    protected inputArea: Element;
    constructor(element: Element, options?: {});
    private createHeader();
    private createMessageListArea();
    private createInputArea(options);
    private onSubmit(event);
    addMessage(data: any): void;
}
