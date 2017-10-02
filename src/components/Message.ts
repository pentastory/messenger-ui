const Message = ({ author, content, date, isMe }) => `
  <div class="messenger-ui__message ${isMe ? 'messenger-ui__message--me' : ''}">
    ${content}
  </div>
`

export default Message;
