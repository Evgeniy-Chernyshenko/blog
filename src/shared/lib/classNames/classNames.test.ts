import { classNames } from "./classNames";

describe("classNames", () => {
  test("С классом", () => {
    expect(classNames("someClass")).toBe("someClass");
  });

  test("С классом и модами", () => {
    expect(classNames("someClass", { visible: true, loading: false })).toBe(
      "someClass visible",
    );
  });

  test("С классом и дополнительными классами", () => {
    expect(classNames("someClass", ["hello", "world"])).toBe(
      "someClass hello world",
    );
  });

  test("С классом, модами и дополнительными классами", () => {
    expect(
      classNames("someClass", { visible: true, loading: false }, [
        "hello",
        "world",
      ]),
    ).toBe("someClass visible hello world");
  });

  test("С пустым классом", () => {
    expect(classNames("")).toBe("");
  });

  test("С классом и undefined в дополнительных классах", () => {
    expect(classNames("someClass", [undefined])).toBe("someClass");
  });

  test("С классом, модами и undefined в дополнительных классах", () => {
    expect(
      classNames("someClass", { visible: true, loading: false }, [
        undefined,
        undefined,
      ]),
    ).toBe("someClass visible");
  });
});
