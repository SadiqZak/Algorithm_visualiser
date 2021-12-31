import { divUpdate } from "../Main.js"

export const select = (arr) =>{
    let len = arr.length, min;

    for(let i=0; i< len; i++){
        min =i
        for(let j=i+1; j<len; j++){
            if(arr[j] < arr[min]){
                min = j
            }
        }

        if(min!=i){
            swap(arr, i, min)
            divUpdate(i,min)
        }
    }

    // console.log(arr)

    return arr
}


const swap = (arr, i, j)=>{
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp

    return arr
}

