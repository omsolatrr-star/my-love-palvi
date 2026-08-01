# Romantic Girlfriend's Day Website

A romantic single-page website built with plain HTML, CSS, and JavaScript. It includes:

- An animated envelope that opens into a love letter
- Floating hearts and falling petals
- A photo gallery ready for your real photos and screenshots
- A local MP3 player for your chosen song
- A configurable "since we met" timer
- Smooth scrolling and mobile-friendly layout

## Files

- `index.html` - page structure and content
- `style.css` - all design, animation, and responsive layout styles
- `script.js` - envelope, music-player, timer, floating-decoration, and mobile-menu interactions

## Customize It

1. Update names and letter text in `index.html`.
2. Replace the current gallery image paths in `index.html` if you want different photos.
3. Replace `assets/audio/samjhawan.mp3` with your own MP3 and update the song name in `index.html` if you want a different song.
4. Change the date in `script.js`:

```js
const config = {
  metDate: "2026-03-15T00:00:00",
  metDateLabel: "March 15, 2026",
};
```

The current page is already prefilled for:

- `Palvi`
- `Om`
- March 15, 2026
- Song section labeled for `Samjhawan`
- Real image files inside `assets/images`

## Image Folder

The project now includes a local image folder:

```text
project-folder/
  index.html
  style.css
  script.js
  assets/
    images/
      palvi-butterfly-selfie.jpg
      palvi-window-smile.png
      mohtarma-chat.jpeg
      sirf-mere-ho-chat.jpeg
      palvi-soft-smile.png
      lover-hands-story.png
    audio/
      samjhawan.mp3
```

## Preview Locally

Open `index.html` in your browser and press "Play Our Song" in the music section. The local MP3 works without Spotify.

## Publish Free on GitHub Pages

1. Create a new GitHub repository.
2. Upload `index.html`, `style.css`, `script.js`, and your optional `assets` folder.
3. In the repository, open `Settings`.
4. Go to `Pages`.
5. Under `Build and deployment`, choose:
   - `Source`: `Deploy from a branch`
   - `Branch`: `main`
   - `Folder`: `/ (root)`
6. Save the settings.
7. Wait about a minute. GitHub will give you a public website link.

Your site URL will usually look like:

```text
https://your-username.github.io/your-repo-name/
```

## Notes

- The page is fully static, so it works well on GitHub Pages.
- The comments inside the code mark the main places to personalize names, photos, dates, and music.
- The song starts only after a visitor presses play because browsers block automatic audio playback.
