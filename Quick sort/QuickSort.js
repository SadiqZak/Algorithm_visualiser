
export const quick = (arr) => {
    quickSort(arr, 0, arr.length)
}

const quickSort = (arr, start, end) =>{
    // console.log("worked")

    if(start >= end){
        return
    }

    let index = partition(arr, start, end)

    quickSort(arr, start, index-1)
    quickSort(arr, index+1, end)

    
}

const partition = (arr, start, end) =>{ 
    let pivotIndex = start
    let pivotValue = arr[end]
    
    for(let i = start; i< end; i++){
        if(arr[i] < pivotValue){
            swap(arr, i, pivotIndex)
            pivotIndex++
        }
    }

    swap(arr, pivotIndex, end)
    return pivotIndex
}

const swap = (arr, i, j)=>{
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp

    return arr
}

let arr =  Array.from({length: 10}, () => Math.floor(Math.random() * 40));
console.log(quick(arr))