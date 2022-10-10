import {createContext, Dispatch, SetStateAction} from "react";

export type Sidebar = {
    isOpen: boolean,
    setIsOpen: (b: boolean) => void
}


const SidebarContext = createContext<Sidebar>({} as Sidebar)

export default SidebarContext