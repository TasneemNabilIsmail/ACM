/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    var pos=-1;
    var count=0;
    for(let i=0;i<s.length;i++){
        var rs=search(t,pos+1,t.length, s[i]);
            if(rs!==-1){
                pos=rs; 
                count++;            
            }
    }
    
    if(count===s.length){
        return true;
    }
    return false;

};

var search = function (nums,left,right, target){
    var r=right;
    let index=left
    while(index<r){
        
        if(nums[index]===target){
            return index;
        }
        index++;
    }
    return -1;

}
