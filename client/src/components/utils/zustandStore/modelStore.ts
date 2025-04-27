import {create} from "zustand"
import { model } from "../myTypes"

type ModelStoreType = {
    Model:model           
}

type ModelAction = {
    updateModel : (model:ModelStoreType[`Model`])=>void
    changeName : (text:string)=>void
    changeAttributeName : (text:string)=>void
    changeAttributeValue : (text:string)=>void
    changeDescriptionName : (text:string)=>void
    changeDescriptionValue : (text:string)=>void
    changeOperationName : (text:string)=>void
    changeOperationValue : (num:number)=>void
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
    changeName: (text) => set((state)=>({Model:{...state.Model, partName:text } })),
    changeAttributeName: (text) => set((state)=>({Model:{...state.Model,attribute:{...state.Model.attribute, name:text}}})),
    changeAttributeValue: (text) => set((state)=>({Model:{...state.Model,attribute:{...state.Model.attribute, value:text}}})),
    changeDescriptionName:(text) =>set((state)=>({Model:{...state.Model, description:{...state.Model.description, name:text}}})),
    changeDescriptionValue:(text) =>set((state)=>({Model:{...state.Model, description:{...state.Model.description, value:text}}})),
    changeOperationName:(text) =>set((state)=>({Model:{...state.Model, operation:{...state.Model.operation, name:text}}})),
    changeOperationValue:(num) =>set((state)=>({Model:{...state.Model, operation:{...state.Model.operation, stTime:num}}}))
}))

