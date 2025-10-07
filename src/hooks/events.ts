import {useCallback, useEffect, useState} from "react";
import {listEvents} from "../api/events.ts";
import {setEvents} from "../features/events/events-slice.ts";
import {useAppDispatch} from "./store.ts";


export const useGetEvents = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<Error | null>(null);
    const dispatch = useAppDispatch();


    const getEventsFunc = useCallback(async () => {
        setLoading(true)
        try {
            const events = await listEvents()
            dispatch(setEvents(events))
        } catch (e) {
            if (e instanceof Error) {
                setError(e)
            } else {
                setError(new Error("Something went wrong"))
            }
        } finally {
            setLoading(false)
        }
    }, [dispatch])


    useEffect(() => {
        getEventsFunc()
    }, [getEventsFunc])

    return {loading, error, refetch: getEventsFunc}

}