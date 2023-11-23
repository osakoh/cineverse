export const SECURE_BASE_URL = 'https://image.tmdb.org/t/p/'

/**
 * Available sizes for movie backdrops.
 * These sizes are used to fetch different resolutions of backdrops from the API
 *
 * Object.freeze: makes the array immutable, preventing any modifications to its size or contents
 *
 * 'as const': asserts that all members of the array are of specific literal types(each member of the array is treated as a constant with a specific and unchangeable value)
 */
export const BACKDROP_SIZES = Object.freeze([
  'w300',
  'w780',
  'w1280',
  'original',
] as const)
