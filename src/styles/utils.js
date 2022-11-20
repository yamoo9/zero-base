const ROOT_FONT_SIZE = 16;

export const removeUnit = (pxValue) => parseFloat(pxValue, 10);
export const em = (value, base = ROOT_FONT_SIZE) => `${value / base}em`;
export const rem = (value, base = ROOT_FONT_SIZE) => `${value / base}rem`;
