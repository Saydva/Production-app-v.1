import {create} from "zustand";
import {DbObject} from "../myTypes";

type dbObjectType = {
    dbObject: DbObject;
}

export const initDbObject: DbObject = {
   attributes: [],
   descriptions: [],
   pieces: [],
   subpieces: [],
   models: [],
};

type DbObjectAction = {
   setDbObject: (newOne: DbObject) => void;
   addAttribute: (newOne: DbObject["attributes"]) => void;
   addDescription: (newOne: DbObject["descriptions"]) => void;
   addPiece: (newOne: DbObject["pieces"]) => void;
   addSubPiece: (newOne: DbObject["subpieces"]) => void;
   addModel: (newOne: DbObject["models"]) => void;
};

export const useDbObjectStore = create<dbObjectType & DbObjectAction>((set) => ({
   dbObject: initDbObject,
   setDbObject: (newOne) => set(() => ({dbObject:newOne})),
   addAttribute: (newOne) =>
      set((state) => ({dbObject:{...state.dbObject, attributes: [...newOne]}})), // Fix this line to correctly add the new attribute
   addDescription: (newOne) =>
      set((state) => ({dbObject:{...state.dbObject, descriptions: [...newOne]}})),
   addPiece: (newOne) =>
      set((state) => ({dbObject:{...state.dbObject, pieces:[...newOne]}})),
   addSubPiece: (newOne) =>
      set((state) => ({dbObject:{...state.dbObject, subpieces: [...newOne]}})),
   addModel: (newOne) =>
      set((state) => ({dbObject:{...state.dbObject, models: [...newOne]}})),
}));




