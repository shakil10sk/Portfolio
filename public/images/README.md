# Images

Drop your images here, then enable them by setting the matching path in [`/lib/data.ts`](../../lib/data.ts).
While paths are unset, the UI shows polished generated placeholders — nothing is broken.

## Slots

| Slot | Path | Recommended | Used in |
| --- | --- | --- | --- |
| Profile avatar | `public/images/avatar.jpg` | 400 × 400 (square) | Hero card |
| Editorial photo | `public/images/about.jpg` | 800 × 1000 (4:5 portrait) | About section |
| Project covers | `public/images/projects/<slug>.jpg` | 1600 × 900 (16:9) | Projects grid |

## How to enable an image

1. Save the file to the path above (e.g. `public/images/avatar.jpg`).
2. Open `lib/data.ts` and set the corresponding field.

```ts
// Avatar + about photo
export const profile = {
  ...
  avatar: "/images/avatar.jpg",
  aboutImage: "/images/about.jpg",
};

// A project cover
{
  title: "RAJUK EPMS",
  ...
  image: "/images/projects/rajuk.jpg", // uncomment / set this
}
```

3. Save — the new image appears immediately (`next dev`).

## Suggested project filenames

- `projects/rajuk.jpg`
- `projects/btrc.jpg`
- `projects/mutation.jpg`
- `projects/sheba.jpg`
- `projects/olympiad.jpg`
- `projects/amarparcel.jpg`
- `projects/pharmacy.jpg`
- `projects/storefronts.jpg`

## Tips

- JPG/PNG/WebP all work. WebP is smallest.
- Next/Image optimises automatically — you don't need to compress aggressively.
- If an image fails to load, the placeholder seamlessly takes over.
