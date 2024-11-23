import ERROR_MESSAGES from "../../constants/errorMessages.js";

const validateRegEx = (value, regExPattern) => {
  const validInclusion = regExPattern.test(value);

  if (!validInclusion) {
    throw new Error(ERROR_MESSAGES.VALIDATE_NOT_CORRECT_REGEX);
  }
  return true;
};

export default validateRegEx;
