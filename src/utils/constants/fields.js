export const weatherFields = [
  { 
    value: 'max',
    icon: 'angles-up',
    field: 'temp_max',
    expression: '°C',
    transform: (value) => (Math.round(value))
  },
  {
    value: 'min',
    icon: 'angles-down',
    field: 'temp_min',
    expression: '°C',
    transform: (value) => (Math.round(value))
  },
  {
    value: 'wind',
    icon: 'wind',
    field: 'speed',
    expression: 'km/h',
    transform: (value) => (Math.round(value * 3.6))
  },
  {
    value: 'humidity',
    icon: 'droplet',
    field: 'humidity',
    expression: '%',
    transform: (value) => (Math.round(value))
  },
]