function isValidIP(str) {

  var pieces=str.split(".");

  if(pieces.length!=4){return false;}

  for(i=0; i<4; i++){
    if(pieces[i].length>3){return false;}

    if(pieces[i][0]=="0" && pieces[i].length>1){return false;}

    for(j=0; j<pieces[i].length; j++){
      if(pieces[i][j]!="0" && pieces[i][j]!="1" && pieces[i][j]!="2" && pieces[i][j]!="3" && pieces[i][j]!="4" && pieces[i][j]!="5" && pieces[i][j]!="6" && pieces[i][j]!="7" && pieces[i][j]!="8" && pieces[i][j]!="9"){return false;}
    }

    if(pieces[i]>255){return false;}
  }

  return true;

}
