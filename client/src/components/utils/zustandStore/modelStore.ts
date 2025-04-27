import {create} from "zustand"
import { model } from "../myTypes"

type ModelStoreType = {
    Model:model           
}

type ModelAction = {
    updateModel : (model:ModelStoreType[`Model`])=>void
    changeName : (text:string)=>void
}

export const initModel :model={
    partName:"",
    partStTime:0,
    pieces:[],
    subPieces: [],
    attribute: {name:"", value:""},
    description: {name:"", value:""},
    operation: {name:"", stTime:0}
}

export const useModelStore = create <ModelStoreType & ModelAction > ((set)=>({
    Model:initModel,  
    updateModel: (newOne) => set(() => ({ Model:newOne })),
    changeName: (text) => set((state)=>({Model:{...state.Model, partName:text} }))
}))

