import { EventsList } from './components/events/events-list.tsx';
import { Stack, Typography } from '@mui/material';

function App() {
  return (
    <Stack
      gap={2}
      sx={{
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant={'h3'} mt={3}>
        See Tickets{' '}
      </Typography>
      <EventsList />
    </Stack>
  );
}

export default App;
