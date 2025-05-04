import { JSX } from "react";
import { create } from "zustand";

type RenderStoreType = {
    element:JSX.Element | null
    
}

type Action = {
    setElement: (element: RenderStoreType[`element`]) => void    
  }

export const useRender = create<RenderStoreType & Action>((set)=>
    ({
    element:null,
    setElement: (element) => set(() => ({ element:element })),
}))