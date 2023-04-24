import { describe, expect, it } from "@jest/globals";
import { checkPhone } from "../../src/index";

/**
 * 校验手机号
 */
describe("checkPhone: 校验手机号", () => {
  it("校验手机号测试", () => {
    expect(checkPhone("15988657787")).toBe(true);
    expect(checkPhone("19131119413")).toBe(true);
    expect(checkPhone("17713986666")).toBe(true);
    expect(checkPhone("1771398666")).toBe(false);
    expect(checkPhone("11713986666")).toBe(false);
  });

  it("校验手机号异常值测试", () => {
    expect(checkPhone("123456")).toBe(false);
    expect(checkPhone("")).toBe(false);
  });
});
