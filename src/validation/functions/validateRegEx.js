import ERROR_MESSAGES from "../../constants/errorMessages.js";

const validateRegEx = (inputProducts, regExPattern) => {
  const validInclusion = regExPattern.test(inputProducts);

  if (!validInclusion) {
    throw new Error(ERROR_MESSAGES.VALIDATE_NOT_CORRECT_REGEX);
  }
  return true;
};

export default validateRegEx;
