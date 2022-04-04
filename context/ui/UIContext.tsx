import { createContext } from 'react';

interface ContextProps {
    sidemenuOpen: boolean;
    isAddingEntry: boolean;
    isDraggind: boolean;

    // Methods
    closeSideMenu: () => void;
    openSideMenu: () => void;

    setIsAddingentry: (isAddingEntry: boolean) => void;

    startDragging: () => void;
    endDragging: () => void;
}

export const UIContext = createContext({} as ContextProps);