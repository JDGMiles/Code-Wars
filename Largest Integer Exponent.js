function getExponent(n,p){
  if(p<=1){return null;}
  var track=n;
  var count=0;
  while(n%p==0){
    n=n/p;
    count++;
  }
  return count;
}

// https://www.codewars.com/kata/largest-integer-exponent/train/javascript
