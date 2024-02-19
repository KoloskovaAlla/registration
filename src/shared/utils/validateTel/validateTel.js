export const validateTel = (tel) => {
  const regex = /^(\+7|7|8)[0-9]{10}$/;
  return regex.test(String(tel));
};
