import { BoardConfig } from "../interfaces/BoardConfig";
import { querySelector } from "../misc";

type Callback = (newConfig: BoardConfig) => void;

export class Command {
  callback: Callback = () => {};
  config: BoardConfig = {
    samples: 0,
    multiplicationFactor: 0,
  };

  constructor() {
    this.render();
  }

  onChange(callback: Callback) {
    this.callback = callback;
  }

  render() {
    querySelector("div.command label.samples .value").innerHTML =
      this.config.samples + "";
    querySelector("div.command label.multiplicationFactor .value").innerHTML =
      this.config.multiplicationFactor + "";
  }

  setConfig(config: BoardConfig) {
    this.config = config;
    this.render();
  }
}
