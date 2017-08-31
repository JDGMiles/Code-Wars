function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
  var oldprice=startPriceOld;
  var newprice=startPriceNew;
  var cash=0;
  var deprec=percentLossByMonth;
  var month=0;
  var total=cash+oldprice;
  while(total<newprice){
    month++;
    if(month%2==0){deprec+=0.5;}
    cash+=savingperMonth;
    oldprice=oldprice*((100-deprec)/100);
    newprice=newprice*((100-deprec)/100);
    total=cash+oldprice;
  }
  return [month, Math.round(total-newprice)];
}

// https://www.codewars.com/kata/buying-a-car/train/javascript
