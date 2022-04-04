import { DragEvent, FC, useContext, useMemo } from "react";
import { List, Paper } from "@mui/material"

import { EntriesContext } from "../../context/entries";
import { EntryStatus } from "../../interfaces"
import { EntryCard } from "./"

interface Props {
    status: EntryStatus;
}
export const EntryList: FC<Props> = ({ status }) => {

    const { entries } = useContext(EntriesContext);

    const entriesByStatus = useMemo(() => entries.filter(entry => entry.status === status), [entries]);

    const allowDrop = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    }


    const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
        const id = event.dataTransfer.getData("text");
        console.log({ id });
    }


    return (
        //TODO: aquí haremos drop
        <div
            onDrop={onDropEntry}
            onDragOver={allowDrop}

        >
            <Paper sx={{ height: 'calc(100vh - 180px)', overflow: 'scroll', backgroundColor: 'transparent', padding: '1px 5px' }}>

                {/* TODO: cambiara dependiendo si estoy haciendo drag o no */}
                <List sx={{ opacity: 1 }}>
                    {entriesByStatus.map(entry => (
                        <EntryCard key={entry._id} entry={entry} />
                    ))}
                </List>

            </Paper>
        </div>
    )
}
