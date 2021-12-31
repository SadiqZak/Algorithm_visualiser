import { divUpdate } from "../Main.js"

export const bubble = (arr) => {
    
    for(let i= 0; i< arr.length; i++){
        for(let j=0; j<=i; j++){
            if(arr[i] < arr[j]){
                swap(arr, i, j)
                divUpdate(i,j)
            }
        }
    }

    return arr
}

const swap = (arr, i, j)=>{
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp

    return arr
}


