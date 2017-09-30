declare const Message: ({author, content, date, isMe}: {
    author: any;
    content: any;
    date: any;
    isMe: any;
}) => string;
export default Message;
