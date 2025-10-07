import { DeliveryMethod, Settings } from '../../types/settings.ts';
import {
  Checkbox,
  FormControlLabel,
  IconButton,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { Field, FieldArray, FormikErrors, FormikTouched } from 'formik';
import { Add, Delete } from '@mui/icons-material';

type Props = {
  values: DeliveryMethod[];
  touched: FormikTouched<Settings>;
  errors: FormikErrors<Settings>;
  handleSetField: (values: DeliveryMethod[]) => void;
};

export const DeliveryMethodsInput = ({
  values,
  touched,
  errors,
  handleSetField,
}: Props) => {
  return (
    <FieldArray name={'deliveryMethods'}>
      {({ push, remove }) => (
        <Stack>
          <Stack direction={'row'} alignItems={'center'}>
            <Typography>Delivery Methods</Typography>
            <IconButton
              onClick={() =>
                push({
                  name: '',
                  enum: '',
                  order: values.length + 1,
                  isDefault: false,
                  selected: false,
                })
              }
            >
              <Add />
            </IconButton>
          </Stack>
          <Stack>
            {values.length > 0 &&
              values.map((_method, index) => (
                <Stack key={index}>
                  <Field
                    name={`deliveryMethods.[${index}].name`}
                    as={TextField}
                    label={'Name'}
                    variant={'standard'}
                    sx={{ maxWidth: '80%' }}
                    error={
                      touched.deliveryMethods?.[index]?.name &&
                      Boolean(errors.deliveryMethods?.[index]?.name)
                    }
                    helperText={
                      touched?.deliveryMethods?.[index]?.name &&
                      errors?.deliveryMethods?.[index]?.name
                    }
                  />
                  <Field
                    name={`deliveryMethods.[${index}].enum`}
                    as={TextField}
                    label={'Enum'}
                    variant={'standard'}
                    sx={{ maxWidth: '80%' }}
                    error={
                      touched.deliveryMethods?.[index]?.enum &&
                      Boolean(errors.deliveryMethods?.[index]?.enum)
                    }
                    helperText={
                      touched.deliveryMethods?.[index]?.enum &&
                      errors.deliveryMethods?.[index]?.enum
                    }
                  />
                  <Field
                    name={`deliveryMethods.[${index}].order`}
                    style={{ display: 'none' }}
                  />
                  <Stack direction={'row'}>
                    <FormControlLabel
                      control={
                        <Field
                          name={`deliveryMethods.[${index}].isDefault`}
                          as={Checkbox}
                          checked={values[index].isDefault}
                        />
                      }
                      label={'Default'}
                    />
                    <FormControlLabel
                      control={
                        <Field
                          name={`deliveryMethods.[${index}].selected`}
                          as={Checkbox}
                          checked={values[index].selected}
                        />
                      }
                      label={'Selected'}
                    />
                    <IconButton
                      onClick={() => {
                        remove(index);
                        const newItems = values
                          .filter((_, i) => i !== index)
                          .map((it, i) => ({ ...it, order: i + 1 }));
                        handleSetField(newItems);
                      }}
                    >
                      <Delete />
                    </IconButton>
                  </Stack>
                </Stack>
              ))}
          </Stack>
        </Stack>
      )}
    </FieldArray>
  );
};
