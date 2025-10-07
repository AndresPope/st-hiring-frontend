import {Event} from "../types/event.ts"
import { BASE_URL } from './config.ts';

export const listEvents = async () => {
    const response = await fetch(`${BASE_URL}/events`)
    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }
    return await response.json() as Event[];

}