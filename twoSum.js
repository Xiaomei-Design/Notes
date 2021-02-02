var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = 1; j < nums.length; j++) {
            if(i === j) {
                continue;
            }
            const sum = nums[i] + nums[j];
            if (sum === target) {
                return [i, j]
            }
        }
    }
};


// use obj
// but the runtime is the same, that's strange

var twoSum = function(nums, target) {
    let obj = {};
    for(let i = 0; i< nums.length; i++) {
        obj[target-nums[i]] = i
    }
    for( let j = 0; j < nums.length; j++) {
        if(obj.hasOwnProperty(nums[j])) {
            if(j === obj[nums[j]]) {
                continue;
            }
            return [j, obj[nums[j]]]
        }
    }
};

// no advantage
var twoSum = function(nums, target) {
    let obj = new Map();
    for(let i = 0; i< nums.length; i++) {
        obj.set(target-nums[i], i);
    }
    for( let j = 0; j < nums.length; j++) {
        if(obj.has(nums[j])) {
            if(j === obj.get(nums[j])) {
                continue;
            }
            return [j, obj.get(nums[j])]
        }
    }
};

