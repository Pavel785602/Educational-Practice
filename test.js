const { encrypt, decrypt } = require("./index");

test("encrypt test", () => {
  expect(encrypt("abc")).toEqual("abc");
});

test("decrypt test", () => {
  expect(decrypt("abc")).toEqual("abc");
});