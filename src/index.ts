/**
 * @description 校验手机号
 * @param {string} str 手机号
 * @returns {boolean}
 */
export const checkPhone = (str: string) => {
  if (!str) {
    return false;
  }

  return /^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(str);
};
