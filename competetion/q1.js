/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var left=0;
   var right=nums.length-1;
   var rs=binarySearch(nums,left,right, target);
if(rs!==-1){
   return rs;
}
if(target<nums[0]){
   return 0;
}
if(target>nums[right])
   {
       return right+1;
   }
for(let i=0;i<right;i++){
    if(nums[i]<target&&nums[i+1]>target)
        {
            return i+1;
        }
}
};


var binarySearch = function (nums,left,right, target){
var r=right;
var l= left;
var m=Math.abs((r-l))/2;

var middle= l+Math.ceil(m);

while(r>=l){
    m=Math.abs((r-l))/2;
   middle= l+Math.ceil(m);
   
   if (target===nums[middle]){
   return middle;
}
  else if (target> nums[middle]){
       l=middle+1;
}
else if (target< nums[middle]){
   r=middle-1;    
}
}
return -1

}