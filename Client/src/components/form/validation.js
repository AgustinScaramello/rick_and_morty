export default function validation(userData) {
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const regexIncludesNumber = /\d/;

  const errors = {};

  if (!regexEmail.test(userData.email)) errors.email = "Debe ser un email";

  if (!userData.email) errors.email = "No puede estar vacio";

  if (userData.email.length > 35)
    errors.email = "No puede tener mas de 35 caracteres";

  if (!regexIncludesNumber.test(userData.password))
    errors.password = "Debe tener al menos un numero";

  if (userData.password.length < 6 || userData.password.length > 10)
    errors.password = "Debe tener entre 6 y 10 caracteres";

  return errors;
}
