// CUBE
const cubePositions = new Float32Array([
  -1, -1, -1,  // 0
   1, -1, -1,  // 1
   1,  1, -1,  // 2
  -1,  1, -1,  // 3
  -1, -1,  1,  // 4
   1, -1,  1,  // 5
   1,  1,  1,  // 6
  -1,  1,  1   // 7
]);

const cubeColors = new Float32Array([
  1, 0, 0,  
  0, 1, 0,  
  0, 0, 1, 
  1, 1, 0, 
  1, 0, 1, 
  0, 1, 1, 
  1, 1, 0, 
  1, 0, 1
]);


const cubeIndices = new Uint16Array([
  // Front
  4, 5, 6,   
  4, 6, 7,

  // Back
  1, 0, 3,   
  1, 3, 2,

  // Top
  3, 7, 6,   
  3, 6, 2,

  // Bottom
  0, 1, 5,   
  0, 5, 4,

  // Right
  1, 2, 6,   
  1, 6, 5,

  // Left
  0, 4, 7,   
  0, 7, 3,
]);



// PYRAMID
const pyramidPositions = new Float32Array([
  -1, -1, -1,   // 0 - back left
   1, -1, -1,   // 1 - back right
   1, -1,  1,   // 2 - front right
  -1, -1,  1,   // 3 - front left
   0,  1,  0    // 4 - top
]);

const pyramidColors = new Float32Array([
  1, 0, 0,      // red
  0, 1, 0,      // green
  0, 0, 1,      // blue
  1, 1, 0,      // yellow
  1, 0, 1       // magenta
]);

const pyramidIndices = new Uint16Array([
  // Bottom
  0, 1, 2,   
  0, 2, 3,

  // Back
  0, 4, 1,

  // Right
  1, 4, 2,

  // Front
  2, 4, 3,

  // Left
  3, 4, 0
]);



// RECTANGULAR PRISM
const prismPositions = new Float32Array([
  -1.5, -0.5, -0.5,   // 0
   1.5, -0.5, -0.5,   // 1
   1.5,  0.5, -0.5,   // 2
  -1.5,  0.5, -0.5,   // 3

  -1.5, -0.5,  0.5,   // 4
   1.5, -0.5,  0.5,   // 5
   1.5,  0.5,  0.5,   // 6
  -1.5,  0.5,  0.5    // 7
]);

const prismColors = new Float32Array([
  1, 0, 0,
  0, 1, 0,
  0, 0, 1,
  1, 1, 0,
  1, 0, 1,
  0, 1, 1,
  1, 1, 0,
  1, 0, 1
]);

const prismIndices = new Uint16Array([
  // Front
  4, 5, 6,
  4, 6, 7,

  // Back
  1, 0, 3,
  1, 3, 2,

  // Top
  3, 7, 6,
  3, 6, 2,

  // Bottom
  0, 1, 5,
  0, 5, 4,

  // Right
  1, 2, 6,
  1, 6, 5,

  // Left
  0, 4, 7,
  0, 7, 3
]);