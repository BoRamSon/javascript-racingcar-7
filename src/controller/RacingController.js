import { MissionUtils } from "@woowacourse/mission-utils";
import validateCarNames from "../validation/validateCarNames.js";
import validateTryNumber from "../validation/validateTryNumber.js";

class RacingController {
  constructor() {}

  async racing() {
    const carNames = await this.readCarNames();
    const validatedCarNames = this.validationCarNames(carNames);
    const tryNumber = await this.readTryNumbers();
    const validatedTryNumber = this.validationTryNumber(tryNumber);
    return;
  }

  // 1. 경주할 자동차 이름을 쉼표(,)기준으로 구분하여 각각 5자 이하로만 입력받는다.
  async readCarNames() {
    const inputCarNames = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분) \n => "
    );
    const stringType = String(inputCarNames);
    const removeSpace = stringType.replace(/ /g, "");
    return removeSpace;
  }

  // 2. 입력받은 자동차 이름값들을 검증한다.
  validationCarNames(validationTarget) {
    validateCarNames(validationTarget);
    return validationTarget;
  }

  // 3. 시도할 횟수를 입력받는다.
  async readTryNumbers() {
    const inputCarNames = await MissionUtils.Console.readLineAsync(
      "시도할 횟수는 몇 회인가요? \n => "
    );
    const removeSpace = inputCarNames.replace(/ /g, "");
    return removeSpace;
  }

  // 4. 입력받은 시도할 홧수를 검증한다.
  validationTryNumber(validationTarget) {
    const validatedValue = validateTryNumber(validationTarget);
    return Number(validationTarget);
  }
}

export default RacingController;
