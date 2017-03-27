function solution(digits){
  var temp=1*digits[4]+10*digits[3]+100*digits[2]+1000*digits[1]+10000*digits[0];
  var highest=temp;

  for(i=1; i<digits.length-4; i++){
    temp=10*(temp%10000)+1*digits[4+i];
    if(temp>highest){highest=temp;}
  }

  return highest;

}
