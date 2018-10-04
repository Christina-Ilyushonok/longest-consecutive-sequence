module.exports = function longestConsecutiveLength(array) {
    let obj = {};
    let ans = 0;
    let n = array.length;

    for (let i=0; i<n; ++i)
        obj[array[i]] = true;

    for (let i=0; i<n; ++i) {
        if (!obj[array[i]-1]) {
            let j = array[i];
            while (obj[j])
                j++;
            if (ans<j-array[i])
                ans = j-array[i];
        }
    }
    return ans;
}



