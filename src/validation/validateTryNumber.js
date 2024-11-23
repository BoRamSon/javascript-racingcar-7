import validateEmpty from "./functions/validateEmpty.js";
import validateLimitNumber from "./functions/validateLimitNumber.js";
import validateRegEx from "./functions/validateRegEx.js";

const validateTryNumber = (validationTarget) => {
  validateEmpty(validationTarget);
  const regExPattern = /^\d{1,2}$/;
  validateRegEx(validationTarget, regExPattern);
  validateLimitNumber(validationTarget);
  return true;
};

export default validateTryNumber;
