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
    this.setActions();
  }

  onChange(callback: Callback) {
    this.callback = callback;
  }

  render() {
    const keys = getKeys(this.config);
    for (const key of keys) {
      querySelector(`div.command label.${key} .value`).innerHTML =
        this.config[key] + "";
      querySelector(`div.command label.${key} input`, HTMLInputElement).value =
        this.config[key] + "";
    }
  }

  setActions() {
    const keys = getKeys(this.config);
    for (const key of keys) {
      const slider = querySelector(
        `div.command label.${key} input`,
        HTMLInputElement
      );
      slider.addEventListener("input", () => {
        this.setConfig({
          ...this.config,
          [key]: Number(slider.value),
        });
      });
    }
  }

  setConfig(config: BoardConfig) {
    this.config = config;
    this.render();
    this.callback(this.config);
  }
}
