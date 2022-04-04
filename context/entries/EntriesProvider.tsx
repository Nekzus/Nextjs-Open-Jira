import React, { FC, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Entry } from '../../interfaces';
import { EntriesContext, entriesReducer } from './';

export interface EntriesState {
    entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
    entries: [
        {
            _id: uuidv4(),
            description: 'Pendiente: Pariatur voluptate cillum enim eu est excepteur exercitation velit ut irure officia officia et et.',
            status: 'pending',
            createdAt: Date.now(),
        },
        {
            _id: uuidv4(),
            description: 'En-progreso: Qui occaecat ipsum sit veniam adipisicing non eiusmod.',
            status: 'in-progress',
            createdAt: Date.now() - 1000000,
        },
        {
            _id: uuidv4(),
            description: 'Terminadas: Adipisicing reprehenderit culpa nulla aute aliqua do tempor est amet et ea anim non sit.',
            status: 'finished',
            createdAt: Date.now() - 100000,
        }
    ],
};

export const EntriesProvider: FC = ({ children }) => {

    const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

    const addNewEntry = (description: string) => {
        const newEntry: Entry = {
            _id: uuidv4(),
            description,
            createdAt: Date.now(),
            status: 'pending'
        }
        dispatch({ type: '[Entry] Add-Entry', payload: newEntry });
    }


    return (
        <EntriesContext.Provider
            value={{
                ...state,

                // Methods
                addNewEntry,
            }}
        >
            {children}
        </EntriesContext.Provider>
    );
};