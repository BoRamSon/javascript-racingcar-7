import ERROR_MESSAGES from "../../constants/errorMessages.js";

const validateLimitNumber = (value) => {
  const numberValue = Number(value);
  if(numberValue > 20)
    throw new Error(ERROR_MESSAGES.VALIDATE_LIMIT_NUMBER);

  return true;
}

export default validateLimitNumber;