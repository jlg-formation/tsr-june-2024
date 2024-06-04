import { BoardConfig } from "../interfaces/BoardConfig";
import { getKeys, querySelector } from "../misc";

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
    const keys = getKeys(this.config);
    for (const key of keys) {
      querySelector(`div.command label.${key} .value`).innerHTML =
        this.config[key] + "";
      (
        querySelector(`div.command label.${key} input`) as HTMLInputElement
      ).value = this.config[key] + "";
    }
  }

  setConfig(config: BoardConfig) {
    this.config = config;
    this.render();
  }
}
