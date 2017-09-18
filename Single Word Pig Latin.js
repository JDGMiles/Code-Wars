function pigLatin(string){
  string=string.toLowerCase();

  var letters = /^[a-z]+$/;
  if(string.match(letters)){

  var count=-1;
  for(i=0; i<string.length; i++){
    if(string[i]=="a" || string[i]=="e" || string[i]=="i" || string[i]=="o" || string[i]=="u"){
      count=i; i=string.length;
    }
  }
  if(count==0){return string+"way"}
  else if(count==-1){return string+"ay"}
  else{return string.substring(count, string.length)+""+string.substring(0, count)+"ay"}

  }

  else return null;
}
