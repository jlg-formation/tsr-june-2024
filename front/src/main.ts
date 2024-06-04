import { Board } from "./classes/Board";
import { Command } from "./classes/Command";
import { BoardConfig } from "./interfaces/BoardConfig";
import "./style.css";

const config: BoardConfig = {
  samples: 300,
  multiplicationFactor: 56,
};

const board = new Board();
board.setConfig(config);
board.render();

const command = new Command();
command.setConfig(config);
command.onChange((newConfig) => {
  board.setConfig(newConfig);
  board.render();
});
