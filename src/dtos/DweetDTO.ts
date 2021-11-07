export interface Dweet {
  this: string;
  by: string;
  the: string;
  with: With[];
}

export interface With {
  thing: string;
  created: string;
  content: Content;
}

export interface Content {
  expression: string;
}
