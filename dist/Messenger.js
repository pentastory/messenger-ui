"use strict";
exports.__esModule = true;
var Header = function () { return "\n  <header>\n    <h4>Messenger</h4>\n  </header>\n"; };
var InputArea = function () { return "\n  <form>\n    <input>\n    <button>&gt;</button>\n  </form>\n"; };
var Messenger = /** @class */ (function () {
    function Messenger(element, options) {
        this.element = element;
        this.header = this.createHeader();
        this.header.innerHTML = Header();
        this.messageListArea = this.createMessageListArea();
        this.inputArea = this.createInputArea();
        this.inputArea.innerHTML = InputArea();
    }
    Messenger.prototype.createHeader = function () {
        var header = document.createElement('div');
        this.element.appendChild(header);
        return header;
    };
    Messenger.prototype.createMessageListArea = function () {
        var messageListArea = document.createElement('div');
        this.element.appendChild(messageListArea);
        return messageListArea;
    };
    Messenger.prototype.createInputArea = function () {
        var inputArea = document.createElement('div');
        this.element.appendChild(inputArea);
        return inputArea;
    };
    return Messenger;
}());
exports["default"] = Messenger;
//# sourceMappingURL=Messenger.js.map