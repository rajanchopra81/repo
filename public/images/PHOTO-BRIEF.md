# Photography Brief — drrajanchopra.com

The site currently shows elegant textured placeholders wherever a real
photo belongs. Drop finished images into this folder using the exact
filenames below, then set the matching `src` prop on the corresponding
`ImagePlaceholder` component (one line each) — no other code changes
needed.

## 1. Primary Portrait — `portrait.jpg`
Used on: Homepage ("Concierge Neurology" section) and About page (hero).
- Orientation: portrait, crops well to 4:5
- Style: natural light, unposed, no white coat if avoidable — think
  editorial/private-practice, not stock medical photography. No forced
  smile; calm, direct gaze is more consistent with the brand.
- Minimum resolution: 1600 × 2000px

## 2. Consultation / Interior — `interior.jpg` (optional)
Used on: Homepage hero.
- Orientation: portrait, crops to 3:4
- Style: architectural interior of the actual consultation space —
  natural light, minimal styling, no clutter. If this isn't available,
  leave this slot as the placeholder or substitute a second portrait.
- Minimum resolution: 1600 × 2133px

## 3. Brain Health Art — `brain-health.jpg` (optional)
Used on: Brain Health & Cognitive Wellness page (hero).
- Orientation: portrait, crops to 3:4
- Style: minimalist neurology-related artwork or abstract imagery —
  not a stock brain scan or clip-art icon. Could also be a second
  interior or portrait shot if no artwork is available.
- Minimum resolution: 1600 × 2133px

## How to activate a photo once it's in this folder

In the relevant page file, add a `src` prop to the `ImagePlaceholder`
call, e.g. in `app/about/page.tsx`:

```tsx
<ImagePlaceholder
  label="Dr. Rajan Chopra — professional portrait, natural light"
  aspect="aspect-[4/5]"
  src="/images/portrait.jpg"
/>
```

That's the only change required — the placeholder box is automatically
replaced by the real photo, optimized by Next.js.
