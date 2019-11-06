export function define(term: string, defnition: string): string {
  return `${term.bold()}: ${defnition}`;
}
