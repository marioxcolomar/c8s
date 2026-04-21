# C8S - Version History

## Version 1 (Initial Release)

### Overview
Vue 3 unit converter application with extensible architecture for adding new conversion types.

### Features
- 3 initial conversion types:
  - Distance: Kilometers ↔ Miles
  - Weight: Kilograms ↔ Pounds
  - Fuel Efficiency: MPG ↔ Km/L
- Home page with icon-based navigation
- Full-page converter view on selection
- Bidirectional conversion with real-time updates
- Swap button to reverse conversion direction
- Clear button to reset inputs
- Dark theme with warm orange accent

### Tech Stack
- Vue 3 (Composition API)
- Vite (build tool)
- Vue Router 4
- No external UI libraries

### Project Structure
```
src/
├── components/
│   └── Icon.vue          # SVG icon component
├── data/
│   └── conversions.js    # Conversion definitions (extensible)
├── router/
│   └── index.js          # Vue Router configuration
├── views/
│   ├── Home.vue          # Home page with icons
│   └── Converter.vue    # Full-page converter
├── App.vue
├── main.js
└── style.css
```

### How to Add New Conversions
Edit `src/data/conversions.js`:

```javascript
{
  id: 'unique-id',
  title: 'Display Title',
  icon: 'icon-name',  // route, scale, fuel, or add new to Icon.vue
  units: [
    { id: 'unit1', label: 'Unit One', symbol: 'u1' },
    { id: 'unit2', label: 'Unit Two', symbol: 'u2' }
  ],
  toBase: {
    unit1: (v) => v,
    unit2: (v) => v * conversionFactor
  },
  fromBase: {
    unit1: (v) => v,
    unit2: (v) => v / conversionFactor
  }
}
```

### Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Design Decisions
1. **Extensibility**: All conversions defined in data file, not hardcoded in components
2. **Icons as navigation**: Home page uses icons instead of cards for cleaner UI
3. **Separate views**: Full-page converter provides better UX for focused conversion
4. **Dark theme**: GitHub-inspired dark color scheme
5. **No state management**: Vue's reactive system sufficient for this scope
