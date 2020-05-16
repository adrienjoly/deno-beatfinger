export interface PressedKeys {
  up: boolean;
  down: boolean;
  left: boolean;
  right: boolean;
}

type Key = "up" | "down" | "left" | "right";

type Timestamp = number;

interface Target {
  id: number;
  key: Key;
  timestamp: Timestamp;
  hit: boolean;
}

interface GameState {
  incrX: number;
  incrY: number;
  targets: Target[];
}

export function computeGameState(pressedKeys: PressedKeys): GameState {
  const target: Target = { id: 0, key: "up", timestamp: 1000, hit: false };
  if (pressedKeys[target.key]) {
    target.hit = true;
  }
  const gameState: GameState = {
    incrX: 0,
    incrY: 0,
    targets: [target],
  };
  if (pressedKeys.right) {
    gameState.incrX += 3;
  } else if (pressedKeys.left) {
    gameState.incrX -= 3;
  }
  if (pressedKeys.down) {
    gameState.incrY += 3;
  } else if (pressedKeys.up) {
    gameState.incrY -= 3;
  }
  return gameState;
}
