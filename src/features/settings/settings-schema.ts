import * as yup from 'yup';

export const settingsSchema = yup.object().shape({
  deliveryMethods: yup.array(
    yup.object().shape({
      name: yup.string().required('This value is required'),
      enum: yup.string().required('This value is required'),
      order: yup
        .number()
        .integer('The value must be an integer')
        .positive('The value must be positive')
        .required('This value is required'),
      isDefault: yup.boolean().required('This value is required'),
      selected: yup.boolean().required('This value is required'),
    })
  ),
  fulfillmentFormat: yup.object().shape({
    rfid: yup.boolean().required('This value is required'),
    print: yup.boolean().required('This value is required'),
  }),
  printer: yup.object({
    id: yup
      .number()
      .notRequired()
      .integer('The value must be an integer')
      .positive('The value must be positive'),
  }),
  printingFormat: yup.object({
    formatA: yup.boolean().required('This value is required'),
    formatB: yup.boolean().required('This value is required'),
  }),
  scanning: yup.object({
    scanManually: yup.boolean().required('This value is required'),
    scanWhenComplete: yup.boolean().required('This value is required'),
  }),
  paymentMethods: yup.object().shape({
    cash: yup.boolean().required('This value is required'),
    creditCard: yup.boolean().required('This value is required'),
    comp: yup.boolean().required('This value is required'),
  }),
  ticketDisplay: yup.object().shape({
    leftInAllotment: yup.boolean().required('This value is required'),
    soldOut: yup.boolean().required('This value is required'),
  }),
  customerInfo: yup.object().shape({
    active: yup.boolean().required('This value is required'),
    basicInfo: yup.boolean().required('This value is required'),
    addressInfo: yup.boolean().required('This value is required'),
  }),
});
