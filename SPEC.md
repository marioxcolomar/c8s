# Unit Converter App Specification

## Project Overview
- **Project name**: C8S
- **Type**: Vue 3 Web Application
- **Core functionality**: Extensible unit converter with 3 initial conversion categories
- **Target users**: Anyone needing quick unit conversions

## UI/UX Specification

### Layout Structure
- Single page application
- Header with app title
- Main content area with converter cards
- Responsive grid: 1 column mobile, 2 columns tablet, 3 columns desktop

### Visual Design

**Color Palette**
- Background: `#0d1117` (deep dark)
- Card background: `#161b22`
- Card border: `#30363d`
- Primary accent: `#f0883e` (warm orange)
- Secondary accent: `#8b949e` (muted gray)
- Text primary: `#e6edf3`
- Text secondary: `#7d8590`
- Input background: `#0d1117`
- Input border: `#30363d`
- Input focus border: `#f0883e`

**Typography**
- Font family: `"JetBrains Mono", monospace` for numbers/inputs
- Font family: `"DM Sans", sans-serif` for headings/labels
- Heading: 28px bold
- Card title: 18px semibold
- Labels: 14px medium
- Input: 24px

**Spacing**
- Card padding: 24px
- Card gap: 20px
- Input gap: 12px

**Visual Effects**
- Cards: subtle glow on hover
- Inputs: smooth focus transition (0.2s)
- Swap button: rotate animation on click

### Components

1. **Header**
   - App title "C8S" with accent color
   - Tagline

2. **ConverterCard**
   - Title showing conversion type
   - Two input fields with bidirectonal conversion
   - Unit labels (km/mi, kg/lb, mpg/kmpl)
   - Swap button between inputs

3. **SwapButton**
   - Circular button with rotate icon
   - Hover scale effect

## Functionality Specification

### Core Features

**Conversion Types**
1. Kilometers ↔ Miles (1 km = 0.621371 mi)
2. Kilograms ↔ Pounds (1 kg = 2.20462 lb)
3. MPG ↔ Km/L (1 mpg = 0.425144 km/L)

**User Interactions**
- Type in any input field, immediate conversion in paired field
- Click swap to reverse direction
- Clear button to reset both fields

**Extensibility Design**
- Conversion definitions in a separate data file
- Each conversion has: id, title, units array, conversion functions
- Easy to add new conversions by adding entry to config

### Data Structure
```javascript
{
  id: 'distance',
  title: 'Distance',
  units: [
    { id: 'km', label: 'Kilometers', toBase: (v) => v, fromBase: (v) => v },
    { id: 'mi', label: 'Miles', toBase: (v) => v * 0.621371, fromBase: (v) => v / 0.621371 }
  ]
}
```

## Acceptance Criteria
- [ ] App loads without errors
- [ ] All 3 conversions work bidirectionally
- [ ] Typing in either field updates the other
- [ ] Swap button reverses conversion direction
- [ ] New conversions can be added by editing config only
- [ ] Responsive layout works on all screen sizes
- [ ] Dark theme renders correctly
