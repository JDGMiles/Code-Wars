function narcissistic( value ) {
  var sum=0;
  value=value.toString();
  var n=value.length
  for(i=0; i<n; i++){
    sum=sum+Math.pow(value[i],n);
  }
  if(sum==value){return true;}
  else{return false;}
}
