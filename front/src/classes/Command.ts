import { BoardConfig } from "../interfaces/BoardConfig";

type Callback = (newConfig: BoardConfig) => void;

export class Command {
  callback: Callback = () => {};
  config: BoardConfig = {
    samples: 0,
    multiplicationFactor: 0,
  };

  onChange(callback: Callback) {
    this.callback = callback;
  }

  setConfig(config: BoardConfig) {
    this.config = config;
  }
}
