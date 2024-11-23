import RacingController from "./controller/RacingController.js";

class App {
  constructor () {
    this.racingController = new RacingController
  }

  async run() {
    this.racingController.racing();
  }
}

export default App;
