function sumAll(nums){
    while(nums.length > 1){
        let condensed = [nums.length-1];
        for(let i = 0;i < nums.length - 1;i++){
            condensed[i] = Number(nums[i]) + Number(nums[i+1]);
        }
        nums = condensed;
    }
    console.log(nums[0])
  }
  sumAll([2, 10, 3])

function condense(arr){
    let condensed = []
    for (let n of arr){
        condensed.push(n)
    }
    while (condensed.length > 1){
        let temp = []
        for (let i = 0; i < condensed.length - 1; i++){
            temp.push(condensed[i] + condensed[i + 1])
        }
        condensed = temp

    }
    console.log(condensed[0])    
}
condense([1])