import { create } from "zustand";
import { attribute } from "../myTypes";

type ModelStoreType = {
  Attribute: attribute;
};

type AttributeAction = {
  updateAttribute: (newOne: ModelStoreType["Attribute"]) => void;
  changeName: (text: string) => void;
  changeValue: (text: string) => void;
};

export const initAttribute: attribute = {
  name: "",
  value: "",
};

export const useAttributeStore = create<ModelStoreType & AttributeAction>(
  (set) => ({
    Attribute: initAttribute,
    updateAttribute: (newOne) => set(() => ({ Attribute: newOne })),
    changeName: (text) =>
      set((state) => ({ Attribute: { ...state.Attribute, name: text } })),
    changeValue: (text) =>
      set((state) => ({ Attribute: { ...state.Attribute, value: text } })),
  })
);
