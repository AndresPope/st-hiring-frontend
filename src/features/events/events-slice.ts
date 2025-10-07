import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Event} from "../../types/event.ts"

export interface EventsState {
    events: Event[];
}

const initialState: EventsState = {
    events: [],
}

const eventsSlice = createSlice({
    name: "events-list",
    initialState,
    reducers: {
        setEvents: (state, action: PayloadAction<Event[]>) => {
            state.events = action.payload;
        }
    }
})

export const {setEvents} = eventsSlice.actions;

export default eventsSlice.reducer;