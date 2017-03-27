function toCamelCase(str){
  var dashun=[];
  var count=0;
  var temp="";

  for(i=0; i<str.length; i++){
    if(str[i]=="-" || str[i]=="_"){dashun[count]=i; count++;}
  }

  var answer=""+str.substring(0,dashun[0]);

  for(i=0; i<count-1; i++){
  answer=answer+str.substring(dashun[i]+1,dashun[i]+2).toUpperCase()+str.substring(dashun[i]+2,dashun[i+1]);
  }

  answer=answer+str.substring(dashun[count-1]+1,dashun[count-1]+2).toUpperCase()+str.substring(dashun[count-1]+2,str.length);

  return answer;
}
