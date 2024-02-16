export const validateEmail = (email) => {
  const regex = /^[a-zA-Z0-9]+@[a-z]+\.(ru|com)$/i;
  return regex.test(String(email));
};
