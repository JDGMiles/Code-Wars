class SmallestIntegerFinder {
  findSmallestInt(args) {
    var smallest=args[0];
    for(var i=1; i<args.length; i++){if(args[i]<smallest){smallest=args[i];}}
  return smallest;
  }
}

// https://www.codewars.com/kata/55a2d7ebe362935a210000b2
