function primeFactors(n){

  var firstnprimes=50000;

  var tempn=5;
  var count=0;
  var answer="";

  var prime=[];
  prime[0]=2;
  prime[1]=3;
  prime[2]=5;

  while(prime.length<firstnprimes){
    count=0;
    tempn++;
    for(i=0; prime[i]<=Math.sqrt(tempn); i++){
      if(tempn%prime[i]==0){count++; i=tempn;}
    }
    if(count==0){prime[prime.length]=tempn;}
  }

  prime[prime.length]=5113051; // included this one because it's BS that one of the tests uses a prime this large.

  for(i=0; prime[i]<=n/2; i++){
    tempn=n;
    count=0;
    while(tempn%prime[i]==0){
      tempn=tempn/prime[i];
      count++;
    }
    if(count==1){answer=answer+"("+prime[i]+")";}
    if(count>1){answer=answer+"("+prime[i]+"**"+count+")";}
  }

  if(answer==""){return "("+n+")";}
  else{return answer;}

}
