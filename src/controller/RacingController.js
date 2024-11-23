import { MissionUtils } from "@woowacourse/mission-utils";
import validateCarNames from "../validation/validateCarNames.js";
import validateTryNumber from "../validation/validateTryNumber.js";
import makeArrayFromString from "../utils/makeArrayFromString.js";
import makeObjectFromArray from "../utils/makeObjectFromArray.js";

class RacingController {
  async racing() {
    const carNamesObject = await this.getCarNamesObject();
    const tryNumber = await this.getTryNumber();
    const carRacingResult = this.startCarRacing(carNamesObject, tryNumber);
    this.printWinner(carRacingResult);
    return;
  }

  async getCarNamesObject() {
    const carNames = await this.readCarNames();
    const stringType = String(carNames);
    const validatedCarNames = this.validationCarNames(stringType);
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

  async readCarNames() {
    const inputCarNames = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분) \n => "
    );
    const stringType = String(inputCarNames);
    const removeSpace = stringType.replace(/ /g, "");
    return removeSpace;
  }

  validationCarNames(validationTarget) {
    validateCarNames(validationTarget);
    return validationTarget;
  }

  async readTryNumbers() {
    const inputCarNames = await MissionUtils.Console.readLineAsync(
      "시도할 횟수는 몇 회인가요? \n => "
    );
    const removeSpace = inputCarNames.replace(/ /g, "");
    return removeSpace;
  }

  validationTryNumber(validationTarget) {
    validateTryNumber(validationTarget);
    return validationTarget;
  }

  getRandomNumber() {
    return MissionUtils.Random.pickNumberInRange(0, 9);
  }

  changeDashUtil(number) {
    let dash = "";
    for (let i = 0; i < number; i++) {
      dash += "-";
    }
    return dash;
  }

  printGameProgress(object) {
    object.map((array) => {
      const carName = array.name;
      const dash = this.changeDashUtil(array.forward);
      return MissionUtils.Console.print(`${carName} :  ${dash}`);
    });
    MissionUtils.Console.print("");
  }

  startCarRacing(carNamesObject, tryNumber) {
    let racingResult = carNamesObject;
    for (let i = 0; i < tryNumber; i++) {
      racingResult = racingResult.map((object) => {
        if (this.getRandomNumber() > 4) object.forward += 1;
        return object;
      });
      this.printGameProgress(racingResult);
    }
    return racingResult;
  }

  printWinner(carRacingResult) {
    const maxForwardNumber = Math.max(
      ...carRacingResult.map((object) => object.forward)
    );
    const winnerArray = carRacingResult
      .filter((object) => object.forward === maxForwardNumber)
      .map((object) => object.name);
    const winner = winnerArray.join(", ");
    return MissionUtils.Console.print(`최종우승자 : ${winner}`);
  }
}

export default RacingController;
