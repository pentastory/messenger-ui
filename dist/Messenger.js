"use strict";
exports.__esModule = true;
var Header_1 = require("./components/Header");
var InputArea_1 = require("./components/InputArea");
var Message_1 = require("./components/Message");
var Messenger = /** @class */ (function () {
    function Messenger(element, options) {
        this.element = element;
        this.header = this.createHeader();
        this.header.innerHTML = Header_1["default"]();
        this.messageListArea = this.createMessageListArea();
        this.inputArea = this.createInputArea();
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
        var _this = this;
        var inputArea = document.createElement('div');
        inputArea.innerHTML = InputArea_1["default"]();
        this.element.appendChild(inputArea);
        // Add submit event listener
        var form = inputArea.querySelector('form');
        form.addEventListener('submit', function (event) { return _this.onSubmit(event); });
        return inputArea;
    };
    Messenger.prototype.onSubmit = function (event) {
        event.preventDefault();
        var input = this.inputArea.querySelector('input');
        var text = input.value;
        input.value = '';
        if (text === '')
            return;
        this.addMessage({ author: '', content: text, date: Date(), isMe: true });
    };
    Messenger.prototype.addMessage = function (data) {
        var message = document.createElement('div');
        message.innerHTML = Message_1["default"](data);
        this.messageListArea.appendChild(message);
    };
    return Messenger;
}());
exports["default"] = Messenger;
//# sourceMappingURL=Messenger.js.map