function runningSum(nums: number[]): number[] {

    let returnSum: number[] = []

    for (let i = 0; i < nums.length; i++) {
        let total: number = 0;
        for (let j = 0; j <= i; j++) {
            total += nums[j]
        }
        returnSum.push(total)
    }
    return returnSum
};