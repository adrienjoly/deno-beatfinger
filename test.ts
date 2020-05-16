// $ deno test

import {
  assertEquals,
  assertArrayContains,
} from "https://deno.land/std/testing/asserts.ts";
import { computeGameState, PressedKeys } from "./beatfinger.ts";

const makePressedKeys = () : PressedKeys  => ({
  down: false,
  up: false,
  left: false,
  right: false,
});

Deno.test({
  name: "computeGameState exists",
  fn(): void {
    assertEquals(typeof computeGameState, "function");
  },
});

Deno.test({
  name: "computeGameState returns a target at the beginning of a game",
  fn(): void {
    const state = computeGameState(makePressedKeys());
    assertArrayContains(state.targets, [
      { id: 0, key: "up", timestamp: 1000, hit: false },
    ]);
  },
});

Deno.test({
  name: "computeGameState can mark the target as hit",
  fn(): void {
    const pressedKeys = makePressedKeys();
    const { id, key, timestamp } = computeGameState(pressedKeys).targets[0];
    const state = computeGameState({ ...pressedKeys, [key]: true });
    assertArrayContains(state.targets, [
      { id, key, timestamp, hit: true },
    ]);
  },
});

// TODO: computeGameState returns another target, later in the game
