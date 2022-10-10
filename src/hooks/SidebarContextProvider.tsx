import React, {FC, ReactNode, useReducer, useState} from 'react';
import SidebarContext from './SidebarContext';


type IProps = {
    children: ReactNode
}

type StateType = {
    isOpen: boolean
}


const initial: StateType = {
    isOpen: true
}

const SidebarReducer = (state: StateType, action: { type: string, payload: boolean }) => {
    switch (action.type) {
        case 'TOGGLE':
            return {
                ...state, isOpen: action.payload
            }

        default:
            return state;
    }
}

const SidebarContextProvider: FC<IProps> = ({children}): JSX.Element => {
    const [state, dispatch] = useReducer(SidebarReducer, initial)

    const isOpen = state.isOpen

    const toggleSide = () => {
        dispatch({type: 'TOGGLE', payload: !state.isOpen})
    }

    return (
        <>
            <SidebarContext.Provider value={{isOpen, setIsOpen: toggleSide}}>
                {children}
            </SidebarContext.Provider>
        </>
    );
};

export default SidebarContextProvider;