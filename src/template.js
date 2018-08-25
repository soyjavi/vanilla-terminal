export default ({ prompt, separator }) => (`
  <div class="container">
    <output></output>
    <table class="command">
      <tr>
        <td nowrap>
          <div class="prompt">${prompt}${separator}</div>
        </td>
        <td width="100%"><input class="input" spellcheck="false" autofocus /></td>
      </tr>
    </table>
  </div>
`);
