
export const maxValidtions = 16;
export const emailMaxValidtions = 32;
export const minValidtions = 4;
const EmailVirfy = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
const PasswordVirfy = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm

export const UserValid = (value, Valid) => {
  if (value.length >= minValidtions && value.length <= maxValidtions) {
    return Valid.isValidUser = false
  } else {
    return Valid.isValidUser = true
  }
};
export const LastNameValid = (value, Valid) => {
  if (value.length >= minValidtions && value.length <= maxValidtions ) {
    return Valid.isValidLastName = false
  } else {
    return Valid.isValidLastName = true
  }
};

export const EmailValid = (value, Valid) => {
  if (value.length >= minValidtions && value.length <= emailMaxValidtions && EmailVirfy.test(value)) {
    return Valid.isValidEmail = false
  } else {
    return Valid.isValidEmail = true
  }
};
export const PasswordValid = (value, Valid) => {
  if (value.length >= minValidtions && value.length <= maxValidtions && PasswordVirfy.test(value)) {
    return Valid.isValidPassword = false
  } else {
    return Valid.isValidPassword = true
  }
};

