function pivotIndex(nums: number[]): number {

    for (let i = 0; i < nums.length; i++) {

        let leftTotal: number = 0
        let rightTotal: number = 0

        for (let j = 0; j < i; j++) {
            leftTotal += nums[j]
        }
        for (let k = i + 1; k < nums.length; k++) {
            rightTotal += nums[k]
        }

        if (leftTotal === rightTotal) {
            return i
        }
    }
    return -1;
};