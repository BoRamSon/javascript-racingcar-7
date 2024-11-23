import validateEmpty from "./functions/validateEmpty.js";
import validateFiveLength from "./functions/validateFiveLength.js";
import validateRegEx from "./functions/validateRegEx.js";

const validateCarNames = (validateTarget) => { 
  validateEmpty(validateTarget);
  const regExPattern = /^(\w+)(,\w+)*$/;
  validateRegEx(validateTarget, regExPattern);
  validateFiveLength(validateTarget);
  return true;
}

export default validateCarNames;