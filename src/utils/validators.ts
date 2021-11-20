export const isValidEmail = (email: string) => {
  const format = new RegExp(
    "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$",
    'gi'
  );
  return format.test(email);
};
