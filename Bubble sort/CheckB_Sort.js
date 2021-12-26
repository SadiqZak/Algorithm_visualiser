const generateRandomArray = () => {
    let arr = []

    for(let i = 0; i < 310; i++){
        arr.push(generateRandomNum(5,600))
    }
 
    return arr
}

const generateRandomNum = (max, min) =>{
    const a = Math.floor(Math.random() * (max - min + 1)) + min;
    return a
}

const generateBars = (arr) =>{

    for(let i=0; i< arr.length; i++){
        let divEle = document.createElement("div")
        divEle.classList.add("array-bar")
        divEle.style.height =`${arr[i]}px`
        arrayContainer.appendChild(divEle)
    }

}

const swap = (arr, i, j)=>{
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp

    return arr
}

const bubbleSort = (arr) => {
    
    for(let i= 0; i< arr.length; i++){
        for(let j=0; j<=i; j++){
            if(arr[i] < arr[j]){
                swap(arr, i, j)
            }
        }
    }

    return arr
}