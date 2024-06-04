import { Board } from "./classes/Board";
import { BoardConfig } from "./interfaces/BoardConfig";
import "./style.css";

const config: BoardConfig = {
  samples: 300,
  multiplicationFactor: 34,
};

const board = new Board();
board.setConfig(config);
board.render();
