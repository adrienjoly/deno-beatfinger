import test from "ava";
const computeGameState = require("./index");

test("computeGameState exists", (t) => {
  t.is(computeGameState, "function");
});
