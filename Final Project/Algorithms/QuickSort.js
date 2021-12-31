import { divUpdate } from "../Main.js"

export const quick = (arr) => { // helper function for quick sort
    quickSort(arr, 0, arr.length-1)
}

const quickSort = (arr, start, end) =>{ // sorting algorithm

    if(start >= end){
        return
    }

    let index = partition(arr, start, end)

    quickSort(arr, start, index-1) //recursive calling
    quickSort(arr, index+1, end)
    
}


const partition = (arr, start, end) =>{  
 
        let pivotIndex = start          //setting the first value as the starting number
        let pivotValue = arr[end]       //setting the end value as the last value (length of the array -1)
    
        for(let i = start; i< end; i++){
                if(arr[i] < pivotValue){      //if current value is less than pivotValue (end value)
                    swap(arr, i, pivotIndex)    //set the current index as pivotIndex (start value)
                    divUpdate(i, pivotIndex )   //update div
                    pivotIndex++
                }  
        } 
        swap(arr, pivotIndex, end)

        divUpdate(pivotIndex, end)

        return pivotIndex

    
}

const swap = (arr, i, j)=>{
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp

    return arr
}