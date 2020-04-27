

export const required = value => value ? undefined : 'Обязательное';
export const minLength = min => value =>
value && value.length < min ? `Минимум ${min} символа` : undefined
export const minLength3 = minLength(3);
export const minLength4 = minLength(4);
export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Неверный формат Email' : undefined
export const number = value => value && isNaN(Number(value)) ? 'Только цифры' : undefined

export const normalizeReplenish = value => {
  if (!value) {
    return value
  }
  const onlyNums = value.replace(/[^\d]/g, '')
  return onlyNums;
}
