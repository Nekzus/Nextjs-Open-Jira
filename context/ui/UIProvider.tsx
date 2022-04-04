import React, { FC, useReducer } from 'react';
import { UIContext, uiReducer } from './';

export interface UIState {
    sidemenuOpen: boolean;
    isAddingEntry: boolean;
}

const UI_INITIAL_STATE: UIState = {
    sidemenuOpen: false,
    isAddingEntry: false,
};

export const UIProvider: FC = ({ children }) => {

    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

    const openSideMenu = () => {
        dispatch({ type: 'UI - Open Sidebar' });
    };

    // closeSideMenu
    const closeSideMenu = () => dispatch({ type: 'UI - Close Sidebar' });

    const setIsAddingentry = (isAdding: boolean) => {
        dispatch({ type: 'UI - Set isAddingEntry', payload: isAdding })
    };
    

    return (
        <UIContext.Provider
        value={{
            ...state,
            // Methods
            closeSideMenu,
            openSideMenu,
            
            setIsAddingentry,
        }}
        >
            {children}
        </UIContext.Provider>
    );
};
