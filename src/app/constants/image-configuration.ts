export const SECURE_BASE_URL = 'https://image.tmdb.org/t/p/'

/**
 * Available sizes for movie backdrops.
 * These sizes are used to fetch different resolutions of backdrops from the API
 *
 * Object.freeze: makes the array immutable, preventing any modifications to its size or contents
 *
 * 'as const': asserts that that each array element is treated as a unique, unchangeable constant, not just a general string
 *           that is,'w300' is recognized specifically as the string 'w300'. This approach turns array elements into distinct constants, enhancing type checking and ensuring their values remain constant.
 */
export const BACKDROP_SIZES = Object.freeze([
  'w300',
  'w780',
  'w1280',
  'original',
] as const)
