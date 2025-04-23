import { create } from "zustand";

type PieceStoreType = {
    name:string
    secondName:string
}

export const useName = create<PieceStoreType>(()=>
({name:"dodoZustand",
    secondName:"Hekules"
}))