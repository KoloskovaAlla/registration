export const validateTel = (tel) => {
  const regex = /^\+7[0-9]{10}$/;
  return regex.test(String(tel));
};
