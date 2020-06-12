/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */


function sortColors(nums) {
    var zeros=0;
    var ones=0;
    var twoes=0;
    var index=0;

    for(let i=0;i<nums.length;i++){
        if (nums[i]===0){
            zeros++;
        }
        else if (nums[i]===1){
            ones++;
        }
        else if (nums[i]===2){
            twoes++;
        }
    }
    let i=0;
   while(i<nums.length){
       while(index<zeros){
           nums[i++]=0;
           index++
       }
       index=0;
       while(index<ones){
           nums[i++]=1;
           index++
       }
       index=0;
       while(index<twoes){
           nums[i++]=2;
           index++
       }
       
       }
}
