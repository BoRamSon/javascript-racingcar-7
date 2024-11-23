import validateEmpty from "./functions/validateEmpty";
import validateFiveLength from "./functions/validateFiveLength";
import validateRegEx from "./functions/validateRegEx";

const validateCarNames = (validateTarget) => { 
  validateEmpty(validateTarget);
  const regExPattern = /^(\w+)(,\w+)*$/;
  validateRegEx(validateTarget, regExPattern);
  validateFiveLength(validateTarget);
  return true;
}

export default validateCarNames;