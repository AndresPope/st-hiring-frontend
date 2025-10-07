import {Event} from "../types/event.ts"

const BASE_URL = import.meta.env.VITE_APP_API || "http://localhost:3000"

export const listEvents = async () => {
    const response = await fetch(`${BASE_URL}/events`)
    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }
    return await response.json() as Event[];

}