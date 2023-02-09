export const convertKmToAU = (distance) => {
  let distanceInAU = distance / 149597870.7
  distanceInAU = distanceInAU.toFixed(2)
  return distanceInAU
}
