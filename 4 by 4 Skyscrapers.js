function solvePuzzle (clues) {

  var filledcount=0;
  var t=0;
  var runtime=10000;

  var count=0;
  var value=0;
  var position=0;

  var known=[];
  for(i=0;i<4;i++){known[i]=[];for(j=0;j<4;j++){known[i][j]=0;}}

  var possible=[];
  for(i=0;i<4;i++){possible[i]=[];for(j=0;j<4;j++){possible[i][j]=[];for(k=0;k<4;k++){possible[i][j][k]=1;}}}

  while(t<runtime){
    findknown();
    eliminateknown();
    aloneinrow();
    aloneincolumn();
    cluesolve4();
    cluesolve1();
    cluesolve2();
    cluesolve3();
    t++;
  }

  return known;

  function findknown(){
    count=0;
    value=0;
    for(i=0;i<4;i++){
      for(j=0;j<4;j++){
        if(known[i][j]==0){
          count=0;
          for(k=0;k<4;k++){
            if(possible[i][j][k]==1){value=k+1; count++;}
          }
          if(count==1){markknown(i,j,value);}
        }
      }
    }
  }

  function markknown(a,b,c){
    for(m=0; m<4; m++){possible[a][b][m]=0;}
    possible[a][b][c-1]=1;
    known[a][b]=c; filledcount++;
  }

  function eliminateknown(){
    count=0;
    value=0;
    for(i=0;i<4;i++){
      for(j=0;j<4;j++){
        if(known[i][j]!=0){
          for(k=0;k<4;k++){
            if(k!=i){possible[k][j][known[i][j]-1]=0;}
          }
          for(k=0;k<4;k++){
            if(k!=j){possible[i][k][known[i][j]-1]=0;}
          }
        }
      }
    }
  }

  function aloneinrow(){
    count=0;
    position=0;
    for(k=0; k<4; k++){
      for(i=0; i<4; i++){
        count=0;
        for(j=0; j<4; j++){
          if(possible[i][j][k]==1){count++; position=j;}
        }
        if(count==1){
          for(m=0; m<4; m++){possible[i][position][m]=0;}
          possible[i][position][k]=1;
        }
      }
    }
  }

  function aloneincolumn(){
    count=0;
    position=0;
    for(k=0; k<4; k++){
      for(j=0; j<4; j++){
        count=0;
        for(i=0; i<4; i++){
          if(possible[i][j][k]==1){count++; position=i;}
        }
        if(count==1){
          for(m=0; m<4; m++){possible[position][j][m]=0;}
          possible[position][j][k]=1;
        }
      }
    }
  }

  function cluesolve4(){
    for(i=0; i<4; i++){if(clues[i]==4){markknown(0,i,1); markknown(1,i,2); markknown(2,i,3); markknown(3,i,4);}}
    for(i=4; i<8; i++){if(clues[i]==4){markknown(i-4,3,1); markknown(i-4,2,2); markknown(i-4,1,3); markknown(i-4,0,4);}}
    for(i=8; i<12; i++){if(clues[i]==4){markknown(0,11-i,4); markknown(1,11-i,3);markknown(2,11-i,2); markknown(3,11-i,1);}}
    for(i=12; i<16; i++){if(clues[i]==4){markknown(15-i,0,1); markknown(15-i,1,2); markknown(15-i,2,3); markknown(15-i,3,4);}}
  }

  function cluesolve1(){
    for(i=0; i<4; i++){if(clues[i]==1){markknown(0,i,4);}}
    for(i=4; i<8; i++){if(clues[i]==1){markknown(i-4,3,4);}}
    for(i=8; i<12; i++){if(clues[i]==1){markknown(3,11-i,4);}}
    for(i=12; i<16; i++){if(clues[i]==1){markknown(15-i,0,4);}}
  }

  function cluesolve2(){
    for(i=0; i<4; i++){if(clues[i]==2){
      possible[0][i][3]=0;
      if(known[0][i]==1){markknown(1,i,4);}
      if(known[0][i]==2){
        possible[1][i][2]=0;
        if(possible[1][i][3]==0){
          markknown(1,i,1); markknown(2,i,4); markknown(3,i,3);
        }
      }
      if(known[3][i]==4){markknown(0,i,3);}
      if(known[2][i]==4){possible[0][i][0]=0;}
    }}

    for(i=8; i<12; i++){if(clues[i]==2){
      possible[3][11-i][3]=0;
      if(known[3][11-i]==1){markknown(2,11-i,4);}
      if(known[3][11-i]==2){
        possible[2][11-i][2]=0;
        if(possible[2][11-i][3]==0){
          markknown(2,11-i,1); markknown(1,11-i,4); markknown(0,11-i,3);
        }
      }
      if(known[0][11-i]==4){markknown(3,11-i,3);}
      if(known[1][11-i]==4){possible[3][11-i][0]=0;}
    }}

    for(i=4; i<8; i++){if(clues[i]==2){
      possible[i-4][3][3]=0;
      if(known[i-4][3]==1){markknown(i-4,2,4);}
      if(known[i-4][3]==2){
        possible[i-4][2][2]=0;
        if(possible[i-4][2][3]==0){
          markknown(i-4,2,1); markknown(i-4,1,4); markknown(i-4,0,3);
        }
      }
      if(known[i-4][0]==4){markknown(i-4,3,3);}
      if(known[i-4][1]==4){possible[i-4][3][0]=0;}
    }}

    for(i=12; i<16; i++){if(clues[i]==2){
      possible[15-i][0][3]=0;
      if(known[15-i][0]==1){markknown(15-i,1,4);}
      if(known[15-i][0]==2){
        possible[15-i][1][2]=0;
        if(possible[15-i][1][3]==0){
          markknown(15-i,1,1); markknown(15-i,2,4); markknown(15-i,3,3);
        }
      }
      if(known[15-i][3]==4){markknown(15-i,0,3);}
      if(known[15-i][2]==4){possible[15-i][0][0]=0;}
    }}

  }

  function cluesolve3(){
    for(i=0; i<4; i++){if(clues[i]==3){
      possible[0][i][3]=0;
      possible[0][i][2]=0;
      possible[1][i][3]=0;
      if(known[0][i]==1 && known[1][i]==2){markknown(2,i,4); markknown(3,i,3);}
      if(known[0][i]==2 && known[1][i]==1){markknown(2,i,3); markknown(3,i,4);}
      if(known[2][i]==3 && known[3][i]==4){markknown(0,i,2); markknown(1,i,1);}
    }}

    for(i=8; i<12; i++){if(clues[i]==3){
      possible[3][11-i][3]=0;
      possible[3][11-i][2]=0;
      possible[2][11-i][3]=0;
      if(known[3][11-i]==1 && known[2][11-i]==2){markknown(1,11-i,4); markknown(0,11-i,3);}
      if(known[3][11-i]==2 && known[2][11-i]==1){markknown(1,11-i,3); markknown(0,11-i,4);}
      if(known[1][11-i]==3 && known[0][11-i]==4){markknown(3,11-i,2); markknown(2,11-i,1);}
    }}

    for(i=4; i<8; i++){if(clues[i]==3){
      possible[i-4][3][3]=0;
      possible[i-4][3][2]=0;
      possible[i-4][2][3]=0;
      if(known[i-4][3]==1 && known[i-4][2]==2){markknown(i-4,1,4); markknown(i-4,0,3);}
      if(known[i-4][3]==2 && known[i-4][2]==1){markknown(i-4,1,3); markknown(i-4,0,4);}
      if(known[i-4][1]==3 && known[i-4][0]==4){markknown(i-4,3,2); markknown(i-4,2,1);}
    }}

    for(i=12; i<16; i++){if(clues[i]==3){
      possible[15-i][0][3]=0;
      possible[15-i][0][2]=0;
      possible[15-i][1][3]=0;
      if(known[15-i][0]==1 && known[15-i][1]==2){markknown(15-i,2,4); markknown(15-i,3,3);}
      if(known[15-i][0]==2 && known[15-i][1]==1){markknown(15-i,2,3); markknown(15-i,3,4);}
      if(known[15-i][2]==3 && known[15-i][3]==4){markknown(15-i,1,1);}
    }}

  }

}
