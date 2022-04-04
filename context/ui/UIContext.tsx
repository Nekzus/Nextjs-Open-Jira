import { createContext } from 'react';

interface ContextProps {
    sidemenuOpen: boolean;
    isAddingEntry: boolean;

    // Methods
    closeSideMenu: () => void;
    openSideMenu: () => void;
    
    setIsAddingentry: (isAddingEntry: boolean) => void;
}

export const UIContext = createContext({} as ContextProps);