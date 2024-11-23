import { MissionUtils } from "@woowacourse/mission-utils";

class RacingController {
  constructor() {}

  async racing() {
    const carNames = await this.readCarNames();

    return console.log(carNames);
  }

  // 1. 경주할 자동차 이름을 쉼표(,)기준으로 구분하여 각각 5자 이하로만 입력받는다.
  async readCarNames() {
    const inputCarNames = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분) \n => "
    );
    const stringType = String(inputCarNames);
    return stringType;
  }
}

export default RacingController;
