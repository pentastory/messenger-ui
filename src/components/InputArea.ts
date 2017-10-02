const InputArea = ({ sendButtonHtml }) => `
  <form class="messenger-ui__input-area">
    <input>
    <button>${sendButtonHtml || 'Send'}</button>
  </form>
`;

export default InputArea;
