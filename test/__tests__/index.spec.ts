import { describe, expect, it } from "@jest/globals";
import { initConsole } from "../../src/index";

/**
 * 校验手机号
 */
describe("initConsole", () => {
  it("正常", () => {
    expect(initConsole()).toBe(true);
  });

  it("异常", () => {
    expect(initConsole()).toBe(false);
  });
});
