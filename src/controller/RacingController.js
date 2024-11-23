import { MissionUtils } from "@woowacourse/mission-utils";
import validateCarNames from "../validation/validateCarNames.js";
import validateTryNumber from "../validation/validateTryNumber.js";
import makeArrayFromString from "../utils/makeArrayFromString.js";
import makeObjectFromArray from "../utils/makeObjectFromArray.js";

class RacingController {
  async racing() {
    const carNamesObject = await this.getCarNamesObject();
    const tryNumber = await this.getTryNumber();
    this.startCarRacing(carNamesObject, tryNumber);
    return;
  }

  async getCarNamesObject() {
    const carNames = await this.readCarNames();
    const validatedCarNames = this.validationCarNames(carNames);
    const carNamesArray = makeArrayFromString(validatedCarNames);
    MissionUtils.Console.print("");
    return makeObjectFromArray(carNamesArray);
  }

  async getTryNumber() {
    const tryNumber = await this.readTryNumbers();
    const validtedTryNumber = this.validationTryNumber(tryNumber);
    MissionUtils.Console.print("");
    return Number(validtedTryNumber);
  }

  //-----------------------------------------------------------------
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
    validateTryNumber(validationTarget);
    return validationTarget;
  }

  // 5. 게임 진행
  // 0에서 9 사이에서 무작위 값을 구한다.
  getRandomNumber() {
    return MissionUtils.Random.pickNumberInRange(0, 9);
  }

  // (forward 숫자를 dashe로 만들어주는 util)
  changeDashUtil(number) {
    let dash = "";
    for (let i = 0; i < number; i++) {
      dash += "-";
    }
    return dash;
  }

  // (print게임진행상황)
  printGameProgress(object) {
    object.map((array) => {
      const carName = array.name;
      const dash = this.changeDashUtil(array.forward);
      return MissionUtils.Console.print(`${carName} :  ${dash}`);
    });
    MissionUtils.Console.print("");
  }

  // 전진하는 조건은 무작위 값이 4 이상일 경우이다. 이 조건으로 게임을 시작한다.
  startCarRacing(carNamesObject, tryNumber) {
    for (let i = 0; i < tryNumber; i++) {
      const racingResult = carNamesObject.map((object) => {
        if (this.getRandomNumber() > 4) object.forward += 1;
        return object;
      });
      this.printGameProgress(racingResult);
    }
  }
}

export default RacingController;
