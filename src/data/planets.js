// This object contains all the data for each planet in the solar system.
// When the useParams hook is used in the InfoCard component, it returns the name of the planet from the URL,
// which is used to fetch the correct planet data from this object.

const planetData = {
  "mercury": {
    "name": "Mercury",
    "distance": 57909227,
    "radius": 2439.7,
    "orbit": .2408467,
    "velocity": 170503,
    "volume": 60827208742,
    "gravity": 3.7,
    "meanTemp": 167,
    "moons": 0,
    "funFact": "Mercury is the smallest planet in our solar system, only slightly larger than Earth's moon."
  },
  "venus": {
    "name": "Venus",
    "distance": 108209475,
    "radius": 6051.8,
    "orbit": .61519726,
    "velocity": 126074,
    "volume": 60827208742,
    "gravity": 8.87,
    "meanTemp": 464,
    "moons": 0,
    "funFact": "Venus rotates so slowly on its axis (once every 243 Earth days) that a Venusian year is actually shorter than a Venusian day."
  },
  "earth": {
    "name": "Earth",
    "distance": 149598262,
    "radius": 6371,
    "orbit": 1.0000174,
    "velocity": 107218,
    "volume": 1083206916846,
    "gravity": 9.81,
    "meanTemp": 15,
    "moons": 1,
    "funFact": "Earth is the only planet in the solar system with liquid water on the surface. In fact, 71% of its surface is water-covered."
  },
  "mars": {
    "name": "Mars",
    "distance": 227943824,
    "radius": 3389.5,
    "orbit": 1.8808476,
    "velocity": 86677,
    "volume": 163115609799,
    "gravity": 3.71,
    "meanTemp": -65,
    "moons": 2,
    "funFact": "The surface and atmosphere of Mars appear red because of oxidized iron minerals in the soil."
  },
  "jupiter": {
    "name": "Jupiter",
    "distance": 778340821,
    "radius": 69911,
    "orbit": 11.862615,
    "velocity": 47002,
    "volume":	1431281810739360,
    "gravity": 	24.79,
    "meanTemp": -110,
    "moons": 80,
    "funFact": "Jupiter's mass is more than twice that of every other planet combined."
  },
  "saturn": {
    "name": "Saturn",
    "distance": 1426666422,
    "radius": 58232,
    "orbit": 29.447498,
    "velocity": 34701,
    "volume": 827129915150897,
    "gravity": 10.4,
    "meanTemp": -140,
    "moons": 84,
    "funFact": "Saturn is best known for its impressive ring system. It has seven rings in total."
  },
  "uranus": {
    "name": "Uranus",
    "distance": 2870658186,
    "radius": 25362,
    "orbit": 84.016846,
    "velocity": 24477,
    "volume": 68334355695584,
    "gravity": 8.87,
    "meanTemp": -195,
    "moons": 27,
    "funFact": "Uranus' rotation is set at a nearly 90-degree angle from its plane of orbit, making it seem to spin on its side."
  },
  "neptune": {
    "name": "Neptune",
    "distance": 4498396441,
    "radius": 24622,
    "orbit": 164.79132,
    "velocity": 19556,
    "volume": 	62525703987421,
    "gravity": 	11.15,
    "meanTemp": -200,
    "moons": 14,
    "funFact": "The most distant planet from the Sun (sorry Pluto), Neptune was the first planet located by mathematical calculations rather than telescope."
  }
}

export default planetData;
