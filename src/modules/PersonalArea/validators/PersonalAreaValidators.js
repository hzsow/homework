

export const required = value => value ? undefined : 'Обязательное';
export const minLength = min => value =>
value && value.length < min ? `Минимум ${min} символа` : undefined
export const minLength3 = minLength(3);
export const minLength4 = minLength(4);
export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Неверный формат Email' : undefined
export const number = value => value && isNaN(Number(value)) ? 'Только цифры' : undefined

export const normalizeValue = value => {
  if (!value) {
    return value
  }
  let onlyNums = value.replace(/[^.\d]/g, '').replace(/^(\d*\.?)|(\d*)\.?/g, "$1$2")

  if (onlyNums.indexOf('.') !== -1 && onlyNums.substring(onlyNums.indexOf('.')+1).length > 2)
    onlyNums = onlyNums.substring(0, onlyNums.length - 1);
  return onlyNums;
}

export const normalizeAccount = value => {
  if (!value) {
    return value;
  }
  const onlyNums = value.replace(/[^\d]/g, '')
  if (onlyNums.length <= 1) {
    return `4 `
  }
  if (onlyNums.length <= 4) {
    return `${onlyNums.slice(0, 1)} ${onlyNums.slice(1, 4)}`
  }
  if (onlyNums.length <= 7) {
    return `${onlyNums.slice(0, 1)} ${onlyNums.slice(1, 4)} ${onlyNums.slice(4, 7)}`
  }
  return `${onlyNums.slice(0, 1)} ${onlyNums.slice(1, 4)} ${onlyNums.slice(4,7)} ${onlyNums.slice(7,10)}`
}
