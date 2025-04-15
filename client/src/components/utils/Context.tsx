import { createContext, useState, ReactNode, SetStateAction } from "react";

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

type attributeObject = {
  _id: string;
  name: string;
  value: string;
  __v: number;
};

export type piece = {
  _id: string;
  partName: string;
  partStTime: number;
  attributes: attributeObject[];
  descriptions: descriptionObject[];
  operations: operation[];
  __v: number;
};

type subPiece = {
  _id: number;
  partName: string;
  partStTime: number;
  pieces: [];
  attributes: attributeObject[];
  descriptions: descriptionObject[];
  operations: operation[];
  __v: number;
};

type model = {
  _id: number;
  partName: string;
  partStTime: number;
  pieces: piece[];
  subPieces: subPiece[];
  attribute: attributeObject[];
  description: descriptionObject[];
  operation: operation[];
  __v: number;
};

// type ProductionPlan = {
//   _id: number;
//   title: string;
//   models: model[];
//   __v: number;
// };

/// create context ===>>>

type ProductionContextState = {
  dbObject: model | null;
  setDbObject: React.Dispatch<SetStateAction<model | null>>;
};

type ChildrenProps = {
  children: ReactNode;
};
const contextDefaultValues: ProductionContextState = {
  dbObject: null,
  setDbObject: () => {},
};

export const ProductionContext =
  createContext<ProductionContextState>(contextDefaultValues);

export const ProductionProvider = ({ children }: ChildrenProps) => {
  const [dbObject, setDbObject] = useState<model | null>(null);
  return (
    <ProductionContext.Provider value={{ dbObject, setDbObject }}>
      {children}
    </ProductionContext.Provider>
  );
};

export default ProductionProvider;
