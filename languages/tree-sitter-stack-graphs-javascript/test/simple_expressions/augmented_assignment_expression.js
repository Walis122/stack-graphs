let x = 1;
let y = 2;
let z = 3;

// Flow in
z += x;
//   ^ defined: 1

// Flow around and update

y += 1;

/**/ y;
//   ^ defined: 2, 12