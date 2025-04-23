import { createContext, useState, ReactNode, SetStateAction } from "react";
import { MongoDbData } from "./MongoDbClone";

type operation = {
  name: string;
  stTime: number;
};

type descriptionObject = {
  name: string;
  value: string;
};

export type attributeObject = {
  name: string;
  value: string;
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

export type subPiece = {
  _id: number;
  partName: string;
  partStTime: number;
  pieces: [];
  attributes: attributeObject[];
  descriptions: descriptionObject[];
  operations: operation[];
  __v: number;
};

export type model = {
  partName: string;
  partStTime: number;
  pieces: piece[];
  subPieces: subPiece[];
  attribute: attributeObject;
  description: descriptionObject;
  operation: operation;
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
  MongoDbData: any;
};

type ChildrenProps = {
  children: ReactNode;
};
const contextDefaultValues: ProductionContextState = {
  dbObject: null,
  setDbObject: () => {},

  MongoDbData: null,
};

export const ProductionContext =
  createContext<ProductionContextState>(contextDefaultValues);

export const ProductionProvider = ({ children }: ChildrenProps) => {
  const [dbObject, setDbObject] = useState<model | null>(null);

  return (
    <ProductionContext.Provider value={{ dbObject, setDbObject, MongoDbData }}>
      {children}
    </ProductionContext.Provider>
  );
};

export default ProductionProvider;
