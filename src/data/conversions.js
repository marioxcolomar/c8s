export const conversions = [
  {
    id: "distance",
    title: "Distance",
    icon: "route",
    units: [
      { id: "km", label: "Kilometers", symbol: "km" },
      { id: "mi", label: "Miles", symbol: "mi" },
    ],
    toBase: { km: (v) => v, mi: (v) => v / 0.621371 },
    fromBase: { km: (v) => v, mi: (v) => v * 0.621371 },
  },
  {
    id: "weight",
    title: "Weight",
    icon: "scale",
    units: [
      { id: "kg", label: "Kilograms", symbol: "kg" },
      { id: "lb", label: "Pounds", symbol: "lb" },
    ],
    toBase: { kg: (v) => v, lb: (v) => v / 2.20462 },
    fromBase: { kg: (v) => v, lb: (v) => v * 2.20462 },
  },
  {
    id: "fuel",
    title: "Fuel Efficiency",
    icon: "fuel",
    units: [
      { id: "mpg", label: "Miles/Gallon", symbol: "mpg" },
      { id: "kpl", label: "Km/Liter", symbol: "km/L" },
    ],
    toBase: { mpg: (v) => v, kpl: (v) => v / 0.425144 },
    fromBase: { mpg: (v) => v, kpl: (v) => v * 0.425144 },
  },
];

export function addConversion(conversion) {
  conversions.push(conversion);
}
