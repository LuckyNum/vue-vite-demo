// @ts-ignore
import color from 'css-color-function'
import rgbHex from 'rgb-hex'
import formula from '@/utils/formula.json'

/**
 * 写入新样式到 style
 * @param {*} elNewStyle  element-plus 的新样式
 * @param {*} isNewStyleTag 是否生成新的 style 标签
 */
export const writeNewStyle = (elNewStyle: string) => {}
/**
 * 根据主色值，生成最新的样式表
 */
export const generateNewStyle = (primaryColor: string) => {}

/**
 * 根据主色生成色值表
 */
export const generateColors = (primary: string) => {
  if (!primary) return
  const colors = {
    primary
  }
  Object.keys(formula).forEach((key) => {
    // @ts-ignore
    const value = formula[key].replace(/primary/g, primary)
    // @ts-ignore
    colors[key] = '#' + rgbHex(color.convert(value))
  })
  return colors
}
