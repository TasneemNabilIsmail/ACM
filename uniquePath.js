var uniquePaths1 = function(m, n) {
    var rows=[];
       for(var i=0;i<n;i++){
           var cols=[];
           for(var j=0;j<m;j++){
               if(j==0 || i==0)
                   {
                       cols[j]=1
                   }
               else{
                   cols[j]=0;
               }
           }
           rows[i]=cols;
       }
       
       for(var i=1;i<n;i++){
           for(var j=1;j<m;j++){
               rows[i][j]=rows[i-1][j]+rows[i][j-1];
           }
       }
       return rows[n-1][m-1];
       
   };

   var res1= uniquePaths1(3,2);

   console.log('res1: ', res1);
   