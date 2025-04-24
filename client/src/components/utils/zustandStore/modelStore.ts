import {create} from "zustand"
import { model } from "../Context"

type ModelStoreType = {initModel:model}

type ModelAction = {
    selectModel : (model:ModelStoreType[`initModel`])=>void
  
}
export const initModel={
    partName:"",
    partStTime:0,
    pieces: [],
    subPieces: [],
    attribute: {name:"", value:""},
    description: {name:"", value:""},
    operation: {name:"", stTime:0}
}

export const useModelStore= create<ModelStoreType & ModelAction>((set)=>({initModel:initModel,
    selectModel: (model) => set(() => ({ initModel:model })),    
}))