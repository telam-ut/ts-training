export function codeBlock(...lines: string[]) {
  return `<code class="code-block"> ${lines.join('<br>')} </code>`;
}
export function code(line: string) {
  return `<code>${line}</code>`;
}
