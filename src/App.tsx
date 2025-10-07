import { EventsList } from './components/events/events-list.tsx';
import { Stack, Typography } from '@mui/material';
import { SettingsFab } from './components/settings/settings-fab.tsx';

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
      <SettingsFab />
    </Stack>
  );
}

export default App;
