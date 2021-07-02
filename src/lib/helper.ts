export const getCelsius = (temp: number): number => {
  const kelvin = 273.15;

  return temp - kelvin;
};
