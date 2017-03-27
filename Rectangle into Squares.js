function sqInRect(lng, wdth){
  var answer=[];
  var didsomething=0;
  while(lng!=wdth){
    if(lng<wdth){answer[answer.length]=lng; wdth=wdth-lng;}
    else{answer[answer.length]=wdth; lng=lng-wdth;}
    didsomething=1;
  }
  answer[answer.length]=lng;
  if(didsomething){return answer;}
  else{return null;}
}
