import React, { FC, useReducer } from 'react';
import { UIContext, uiReducer } from './';

export interface UIState {
    sidemenuOpen: boolean;
    isAddingEntry: boolean;
    isDraggind: boolean;
}

const UI_INITIAL_STATE: UIState = {
    sidemenuOpen: false,
    isAddingEntry: false,
    isDraggind: false,

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

    const startDragging = () => {
        dispatch({ type: 'UI - Start Dragging' });
    };

    const endDragging = () => {
        dispatch({ type: 'UI - End Dragging' });
    };

    return (
        <UIContext.Provider
            value={{
                ...state,
                // Methods
                closeSideMenu,
                openSideMenu,

                setIsAddingentry,

                startDragging,
                endDragging,
            }}
        >
            {children}
        </UIContext.Provider>
    );
};
