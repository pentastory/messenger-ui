"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Messenger_1 = require("./Messenger");
var MessengerChatWidget = /** @class */ (function (_super) {
    __extends(MessengerChatWidget, _super);
    function MessengerChatWidget(options) {
        var _this = this;
        var element = document.createElement('div');
        element.classList.add('messenger-ui--chat-widget');
        document.body.appendChild(element);
        _this = _super.call(this, element, options) || this;
        return _this;
    }
    return MessengerChatWidget;
}(Messenger_1["default"]));
exports["default"] = MessengerChatWidget;
//# sourceMappingURL=MessengerChatWidget.js.map