var uniquePathsWithObstacles = function(obstacleGrid) {
    var n=obstacleGrid.length;
    var m=obstacleGrid[0].length;

if(obstacleGrid[0][0]===1){
    return 0;
}
       else{
        obstacleGrid[0][0]=1;

        for(var j=1;j<m;j++){
            if(obstacleGrid[0][j]!==1){
                obstacleGrid[0][j]=1;
            }
            else{
                for(var k=j;k<m;k++){
                    obstacleGrid[0][k]=0;
                }
                break;
            }
        }
        for(var i=1;i<n;i++){
            if(obstacleGrid[i][0]!==1){
                obstacleGrid[i][0]=1;
            }
            else{
                for(var k=i;k<n;k++){
                    obstacleGrid[k][0]=0;
                }
                break;
            }
        }

           
       
  
       for(var i=1;i<n;i++){
           for(var j=1;j<m;j++){
               
               if(obstacleGrid[i][j]!==1){
               obstacleGrid[i][j]=obstacleGrid[i-1][j]+obstacleGrid[i][j-1];
               
               } else{
                obstacleGrid[i][j]=0;
                
               }

           }
       }
       return obstacleGrid[n-1][m-1];
       }
};


var res1= uniquePathsWithObstacles(
    [[0,0],[1,1],[0,0]]);
var res2= uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]]);
console.log('res1: ', res1);
console.log('res2: ', res2);