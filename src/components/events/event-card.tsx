import { Event } from '../../types/event.ts';
import {
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from '@mui/material';
import { CalendarMonth } from '@mui/icons-material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

type Props = {
  event: Event;
};

const getDateInText = (date: Date) =>
  `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;

export const EventCard = ({ event }: Props) => (
  <Card sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
    <CardContent sx={{ flexGrow: 1 }}>
      <Typography variant="h5" component="div">
        {event.name}
      </Typography>
      <Stack
        direction="row"
        spacing={1}
        alignItems={'center'}
        color={'text.secondary'}
      >
        <CalendarMonth fontSize={'small'} />
        <Typography color="text.secondary">
          {getDateInText(new Date(event.date))}
        </Typography>
      </Stack>
      <Typography variant="body2">{event.description}</Typography>
    </CardContent>
    <CardActions sx={{ alignItems: 'flex-end' }}>
      <Stack
        direction="row"
        spacing={1}
        alignItems={'center'}
        color={'text.secondary'}
      >
        <LocationOnIcon fontSize={'small'} />
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {event.location}
        </Typography>
      </Stack>
    </CardActions>
  </Card>
);
