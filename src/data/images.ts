/** Profile image paths.
 *  Place your images in src/assets/profile/ then update the paths below.
 *  Supported formats: jpg, jpeg, png, webp, avif */

const images = {
  /** Hero section profile photo */
  hero: new URL("../assets/profile/hero.jpg", import.meta.url).href,
  /** About section profile photo */
  about: new URL("../assets/profile/about.jpg", import.meta.url).href,
  /** Generic circular profile photo fallback */
  profile: new URL("../assets/profile/profile.jpg", import.meta.url).href,
};

export default images;