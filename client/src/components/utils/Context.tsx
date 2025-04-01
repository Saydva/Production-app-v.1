type operation = {
  name: string;
  stTime: number;
};

type descriptionObject = {
  _id: string;
  name: string;
  value: string;
  __v: number;
};

type description = descriptionObject[];

type attributeObject = {
  _id: string;
  name: string;
  value: string;
  __v: number;
};

type attribute = attributeObject[];

type piece = {
  _id: string;
  partName: string;
  partStTime: number;
  attribute: attributeObject[];
  description: descriptionObject[];
  operation: operation[];
  __v: number;
};

type subPiece = {
  _id: number;
  partName: string;
  partStTime: number;
  piecec: [];
  attribute: attributeObject[];
  description: descriptionObject[];
  operation: operation[];
  __v: number;
};

type model = {
  _id: number;
  partName: string;
  partStTime: number;
  piecec: piece[];
  subPiecec: subPiece[];
  attribute: attributeObject[];
  description: descriptionObject[];
  operation: operation[];
  __v: number;
};
