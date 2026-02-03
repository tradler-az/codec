# ESLint Errors Fix for HomeView.vue

## Errors Identified:
1. **Line 112 - [vue/no-parsing-error]**: `Unexpected token <`
   - Cause: JSX syntax `<faShield />` in v-for inline array
   - Fix: Replace with FontAwesome component references

2. **Line 125 - [vue/valid-v-for]**: `Expected 'v-bind:key' directive`
   - Cause: Invalid v-for structure with JSX
   - Fix: Use computed property with properly imported icons

## Fix Steps:

### Step 1: Add missing icon imports
Import `faShield`, `faRocket`, `faGlobeAmericas` from `@fortawesome/free-solid-svg-icons`

### Step 2: Create computed property for features
Replace inline array with a computed property:
```javascript
const features = computed(() => [
  { title: 'Trusted Content', desc: '...', icon: faShield },
  { title: 'Innovative Platforms', desc: '...', icon: faRocket },
  { title: 'Community Impact', desc: '...', icon: faGlobeAmericas }
])
```

### Step 3: Update template v-for
Change:
```vue
v-for="(feature, i) in [ { icon: <faShield /> }, ... ]"
```
to:
```vue
v-for="(feature, i) in features"
```

## Files to Edit:
- `/home/tradler/Desktop/tasks/optivalfm/src/views/HomeView.vue`

## Status: ✅ Completed

### Changes Made:
1. Added `faRocket`, `faGlobeAmericas`, `faBrain` to imports
2. Added `computed` to Vue imports
3. Created `features` computed property with icon references
4. Updated v-for to use `features` instead of inline array with JSX
5. Replaced `{{ feature.icon }}` with `<component :is="feature.icon" />`

