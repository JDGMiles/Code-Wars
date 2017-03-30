function listSquared(m, n) {

  var temp=0;
  var answer=[];

  for(j=m; j<n+1; j++){
    temp=sumofsds(j);
    if(Math.floor(Math.sqrt(temp))==Math.sqrt(temp)){answer.push([j,temp]);}
  }

  return answer;

  function sumofsds(a){
    var count=0;
    for(i=1; i<=Math.sqrt(a); i++){
      if(a%i==0){
        if(a/i != i){count=count+(i*i)+(a/i)*(a/i);}
        else{count=count+i*i;}
      }
    }
    return count;
  }

}
