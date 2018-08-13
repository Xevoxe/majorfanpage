


export function MergeSort(arr){
    //Array of length 1 is already sorted
    // console.log(arr);
    if(arr.length === 1){
        return arr;
    }

    const middle = Math.floor(arr.length/2);
    //Split the array in half 
    const left = arr.slice(0,middle);
    const right = arr.slice(middle);


    return Merge(MergeSort(left),MergeSort(right));
}

function Merge(left, right){
    let merged = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex < left.length && rightIndex < right.length){
        //Compare the left to the right
        if(left[leftIndex] < right[rightIndex]){
            merged.push(left[leftIndex])
            leftIndex++;
        }
        else{
            merged.push(right[rightIndex])
            rightIndex++;
        }
    }
    console.log(merged);
    //Concat any left over values into the merged array and return
    return merged.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
