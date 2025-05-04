export type operation = {
  name: string;
  stTime: number;
};

export type description = {
  name: string;
  value: string;
};

export type attribute = {
  name: string;
  value: string;
};

export type piece = {
  partName: string;
  partStTime: number;
  attribute: attribute;
  description: description;
  operation: operation;
};

export type subPiece = {
  partName: string;
  partStTime: number;
  pieces: piece[];
  attribute: attribute;
  description: description;
  operation: operation;
};

export type model = {
  partName: string;
  partStTime: number;
  pieces: piece[];
  subPieces: subPiece[];
  attribute: attribute;
  description: description;
  operation: operation;
};

export type DbObject = {
  attributes: attribute[];
  descriptions: description[];
  pieces: piece[];
  subpieces: subPiece[];
  models: model[];
};

export interface Message {
  type: "info" | "error" | "warning" | "success";
  message: string;
}
