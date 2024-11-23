import ERROR_MESSAGES from "../../constants/errorMessages.js";
import makeArrayFromString from "../../utils/makeArrayFromString.js";

const validateFiveLength = (value) => {
  const carNamesArray = makeArrayFromString(value);
  carNamesArray.forEach((carName) => {
    if (carName.length > 5) {
      throw new Error(ERROR_MESSAGES.VALIDATE_FIVE_LENGTH);
    }
  });

  return true;
};

export default validateFiveLength;

