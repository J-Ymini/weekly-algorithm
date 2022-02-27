import { addUpTo1, addUpTo2 } from "./index";

test.skip("addUpToFirst 1000000000", () => {
  expect(addUpTo1(100000000)).toBe(5000000050000000);
});

test("addUpToSecond 1000000000", () => {
  expect(addUpTo2(100000000)).toBe(5000000050000000);
});
