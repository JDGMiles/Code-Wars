function isValidWalk(walk) {
  var nsbal=0;
  var ewbal=0;
  var count=0;

  for(i=0; i<walk.length; i++){
    if(walk[i]=="n"){count++}
    if(walk[i]=="s"){count--}
  }

  if(count==0){nsbal=1}
  count=0;

  for(i=0; i<walk.length; i++){
    if(walk[i]=="e"){count++}
    if(walk[i]=="w"){count--}
  }

  if(count==0){ewbal=1}

  if(ewbal && nsbal && walk.length==10){return true}
  else{return false}

}

// https://www.codewars.com/kata/take-a-ten-minute-walk/javascript/
