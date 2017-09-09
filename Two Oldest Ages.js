function twoOldestAges(ages){
  var answer=[];
  answer[0]=ages[0]; answer[1]=ages[1];
  for(var i=0; i<ages.length; i++){
    if(ages[i]>answer[0]){
      if(ages[i]>answer[1]){answer[0]=answer[1]; answer[1]=ages[i];}
      else{answer[0]=ages[i];}
    }
  }
  return answer;
}

// https://www.codewars.com/kata/two-oldest-ages-1/train/javascript
