import { DeliveryMethod, Settings } from '../../types/settings.ts';
import { Field, Form, Formik } from 'formik';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { settingsSchema } from '../../features/settings/settings-schema.ts';
import { useUpdateSettings } from '../../hooks/settings/use-update-settings.ts';
import { DeliveryMethodsInput } from './delivery-methods-form-input.tsx';

type Props = {
  settings: Settings;
};

export const UpdateSettingsForm = ({ settings }: Props) => {
  const { handleSubmit } = useUpdateSettings(settings.clientId);
  return (
    <Formik
      initialValues={settings}
      validationSchema={settingsSchema}
      onSubmit={handleSubmit}
    >
      {({ values, touched, errors, setFieldValue }) => (
        <Form>
          <Typography sx={{ mt: 2 }} variant={'h6'}>
            Update Settings Form
          </Typography>
          <DeliveryMethodsInput
            values={values.deliveryMethods}
            touched={touched}
            errors={errors}
            handleSetField={(values: DeliveryMethod[]) =>
              setFieldValue('deliveryMethods', values)
            }
          />
          <Stack gap={2}>
            <Stack>
              <Typography>Fulfilment Format</Typography>
              <Box>
                <FormControlLabel
                  control={
                    <Field
                      name={'fulfillmentFormat.rfid'}
                      as={Checkbox}
                      checked={values.fulfillmentFormat.rfid}
                    />
                  }
                  label={'RFID'}
                />
                <FormControlLabel
                  control={
                    <Field
                      name={'fulfillmentFormat.print'}
                      as={Checkbox}
                      checked={values.fulfillmentFormat.print}
                    />
                  }
                  label={'Print'}
                />
              </Box>
            </Stack>
            <Field
              as={TextField}
              name={'printer.id'}
              label={'Printer Id'}
              type={'number'}
              variant={'standard'}
              sx={{ maxWidth: '80%' }}
            />
            <Stack>
              <Typography>Printing Format</Typography>
              <Box>
                <FormControlLabel
                  control={
                    <Field
                      name={'printingFormat.formatA'}
                      as={Checkbox}
                      checked={values.printingFormat.formatA}
                    />
                  }
                  label={'Format A'}
                />
                <FormControlLabel
                  control={
                    <Field
                      name={'printingFormat.formatB'}
                      as={Checkbox}
                      checked={values.printingFormat.formatB}
                    />
                  }
                  label={'Format B'}
                />
              </Box>
            </Stack>
            <Stack>
              <Typography>Scanning</Typography>
              <Box>
                <FormControlLabel
                  control={
                    <Field
                      name={'scanning.scanManually'}
                      as={Checkbox}
                      checked={values.scanning.scanManually}
                    />
                  }
                  label={'Manually'}
                />
                <FormControlLabel
                  control={
                    <Field
                      name={'scanning.scanWhenComplete'}
                      as={Checkbox}
                      checked={values.scanning.scanWhenComplete}
                    />
                  }
                  label={'When Complete'}
                />
              </Box>
            </Stack>
            <Stack>
              <Typography>Payment Methods</Typography>
              <Box>
                <FormControlLabel
                  control={
                    <Field
                      name={'paymentMethods.cash'}
                      as={Checkbox}
                      checked={values.paymentMethods.cash}
                    />
                  }
                  label={'Cash'}
                />
                <FormControlLabel
                  control={
                    <Field
                      name={'paymentMethods.cash'}
                      as={Checkbox}
                      checked={values.paymentMethods.creditCard}
                    />
                  }
                  label={'Credit Card'}
                />
                <FormControlLabel
                  control={
                    <Field
                      name={'paymentMethods.comp'}
                      as={Checkbox}
                      checked={values.paymentMethods.comp}
                    />
                  }
                  label={'Comp'}
                />
              </Box>
            </Stack>
            <Stack>
              <Typography>Ticket Display</Typography>
              <Box>
                <FormControlLabel
                  control={
                    <Field
                      name={'ticketDisplay.leftInAllotment'}
                      as={Checkbox}
                      checked={values.ticketDisplay.leftInAllotment}
                    />
                  }
                  label={'Left In Allotment'}
                />
                <FormControlLabel
                  control={
                    <Field
                      name={'ticketDisplay.soldOut'}
                      as={Checkbox}
                      checked={values.ticketDisplay.soldOut}
                    />
                  }
                  label={'Sold Out'}
                />
              </Box>
            </Stack>
            <Stack>
              <Typography>Customer Info</Typography>
              <Box>
                <FormControlLabel
                  control={
                    <Field
                      name={'customerInfo.active'}
                      as={Checkbox}
                      checked={values.customerInfo.active}
                    />
                  }
                  label={'Active'}
                />
                <FormControlLabel
                  control={
                    <Field
                      name={'customerInfo.basicInfo'}
                      as={Checkbox}
                      checked={values.customerInfo.basicInfo}
                    />
                  }
                  label={'Basic Info'}
                />
                <FormControlLabel
                  control={
                    <Field
                      name={'customerInfo.addressInfo'}
                      as={Checkbox}
                      checked={values.customerInfo.addressInfo}
                    />
                  }
                  label={'Address Info'}
                />
              </Box>
            </Stack>
            <Button variant={'contained'} size={'small'} type={'submit'}>
              Actualizar
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};
