import { useGetEvents } from '../../hooks/events.ts';
import { useAppSelector } from '../../hooks/store.ts';
import {
  Button,
  CircularProgress,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import { EventCard } from './event-card.tsx';

export const EventsList = () => {
  const { loading, error, refetch } = useGetEvents();
  const events = useAppSelector((state) => state.events.events);

  if (loading) {
    return <CircularProgress size={50} />;
  }

  if (error) {
    return (
      <Stack gap={2}>
        <Typography>
          There was an error trying to obtain the events list, please try again.
        </Typography>
        <Button onClick={refetch} variant={'contained'} size={'small'}>
          Retry
        </Button>
      </Stack>
    );
  }

  if (events.length === 0) {
    return (
      <Stack gap={2}>
        <Typography>There is no events yet.</Typography>
        <Button onClick={refetch} variant={'contained'} size={'small'}>
          Retry
        </Button>
      </Stack>
    );
  }

  return (
    <Grid container spacing={2} sx={{ p: 2 }}>
      {events.map((event) => (
        <Grid key={event.id} item xs={12} sm={6} md={4} lg={3} display="flex">
          <EventCard event={event} />
        </Grid>
      ))}
    </Grid>
  );
};
