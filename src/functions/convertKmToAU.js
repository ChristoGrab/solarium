// This function converts a distance in km to AU (astronomical units), fixed to 2 decimal places.

export const convertKmToAU = (distance) => {
  let distanceInAU = distance / 149597870.7
  distanceInAU = distanceInAU.toFixed(2)
  return distanceInAU
}
