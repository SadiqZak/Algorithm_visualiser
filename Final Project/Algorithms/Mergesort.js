// import { divUpdate } from "../Main.js"
import { modDivUpdate } from "../Main.js"

export const merge = (arr) => {
    
    if(arr.length < 2){
        return arr
    }

    let midPoint = Math.floor((arr.length)/2),
    leftArr = arr.slice(0, midPoint),
    rightArr = arr.slice(midPoint)

    return mergeSort(merge(leftArr),merge(rightArr))
}

const mergeSort =(leftArr, rightArr) =>{
    let result =[], leftIndex =0, rightIndex =0, checkIndex = 0

    while(leftIndex<leftArr.length && rightIndex<rightArr.length){
        if(leftArr[leftIndex] < rightArr[rightIndex]){
            result.push(leftArr[leftIndex])
            modDivUpdate(checkIndex, leftArr[leftIndex])
            leftIndex++
            checkIndex++
        }else{
            result.push(rightArr[rightIndex])  
            modDivUpdate(checkIndex, rightArr[rightIndex])
            rightIndex++
            checkIndex++
        }
    }

    let leftRemains = leftArr.slice(leftIndex),
    rightRemains = rightArr.slice(rightIndex)

    return result.concat(leftRemains).concat(rightRemains)
}

