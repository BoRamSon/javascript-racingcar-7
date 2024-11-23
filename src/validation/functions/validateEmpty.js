import ERROR_MESSAGES from "../../constants/errorMessages.js";

const validateEmpty = (value) => {
  if (value == "") {
    throw new Error(ERROR_MESSAGES.VALIDATE_EMPTY);
  }

  return true;
};

export default validateEmpty;