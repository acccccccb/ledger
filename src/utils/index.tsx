export function rgbaToHex(rgbaColor: String) {
  // 使用正则表达式提取每个颜色通道的值
  const match = rgbaColor.match(/(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)/);

  if (!match) {
    return ''; // 如果无法解析颜色，返回空字符串
  }

  // 提取颜色通道的值
  const [, r, g, b, a] = match;

  // 将通道值转换为十六进制
  const hexR = parseInt(r).toString(16).padStart(2, '0');
  const hexG = parseInt(g).toString(16).padStart(2, '0');
  const hexB = parseInt(b).toString(16).padStart(2, '0');

  // 将alpha通道值转换为十六进制
  const hexA = Math.round(parseFloat(a) * 255)
    .toString(16)
    .padStart(2, '0');

  // 返回#开头的颜色字符串
  return `#${hexR}${hexG}${hexB}`;
}

export const dateFormatter = new Intl.DateTimeFormat('zh-CN', {
  year: 'numeric',
  month: '2-digit',
  day: 'numeric',
});
