function isSmooth(arr) {
  if(arr[0]==arr[arr.length-1]){
    if(arr.length%2==0){if(arr[0]==arr[arr.length/2]+arr[arr.length/2-1]){return true}}
    if(arr.length%2==1){if(arr[0]==arr[(arr.length-1)/2]){return true}}
  }
  return false;


}
