'use server';

import { profileSchema } from './schemas';

export const createProfileAction = async (
  prevState: any,
  formData: FormData
) => {
  try {
    const rawData = Object.fromEntries(formData);
    const validateFields = profileSchema.parse(rawData);

    console.log(validateFields);
  } catch (error) {
    console.log(error);
    return { message: 'there was an error...' };
  }
};
