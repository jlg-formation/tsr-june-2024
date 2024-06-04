import { increment, multiplicationFactorMax } from "../constants";
import { BoardConfig } from "../interfaces/BoardConfig";
import { getKeys, querySelector, sleep } from "../misc";

type Callback = (newConfig: BoardConfig) => void;

export class Command {
  callback: Callback = () => {};
  config: BoardConfig = {
    samples: 0,
    multiplicationFactor: 0,
  };
  isPlaying = false;

  constructor() {
    this.render();
    this.setActions();
  }

  onChange(callback: Callback) {
    this.callback = callback;
  }

  async play() {
    while (this.isPlaying) {
      await sleep(16);
      let mf = this.config.multiplicationFactor;
      mf += increment;
      mf %= multiplicationFactorMax;
      mf = +mf.toFixed(2);
      this.setConfig({ ...this.config, multiplicationFactor: mf });
    }
  }

  render() {
    const keys = getKeys(this.config);
    for (const key of keys) {
      querySelector(`div.command label.${key} .value`).innerHTML =
        this.config[key] + "";
      querySelector(`div.command label.${key} input`, HTMLInputElement).value =
        this.config[key] + "";
    }

    const playBtn = querySelector("div.command button.play", HTMLButtonElement);
    playBtn.innerHTML = this.isPlaying ? "Pause" : "Play";
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

    this.setButtonAction();
  }

  setButtonAction() {
    const playBtn = querySelector("div.command button.play", HTMLButtonElement);
    playBtn.addEventListener("click", () => {
      this.isPlaying = !this.isPlaying;
      this.render();
      if (this.isPlaying) {
        this.play();
      }
    });
  }

  setConfig(config: BoardConfig) {
    this.config = config;
    this.render();
    this.callback(this.config);
  }
}
