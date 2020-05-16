// $ deno test

import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { computeGameState } from "./beatfinger.ts";

Deno.test({
  name: "computeGameState exists",
  fn(): void {
    assertEquals(typeof computeGameState, "function");
  },
});
