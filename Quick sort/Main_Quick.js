import { quick } from "./QuickSort.js"; //to acces a folder use "./"
const arrayContainer = document.querySelector("#array-container");
const generateNewArray = document.querySelector("#generate-array");
const quickSortArray = document.querySelector("#quick-sort");

let divheight = [] //keeping track of the arr

const generateRandomArray = () => {         // generate a random Array using generateRandomNum
    let arr = []

    for(let i = 0; i < 310; i++){
        let randomNum = generateRandomNum(5,600)
        arr.push(randomNum )
        divheight[i] = randomNum 
    }
 
    return arr
}

const generateRandomNum = (max, min) =>{        // generate random number (height input)
    const a = Math.floor(Math.random() * (max - min + 1)) + min;
    return a
}

const generateBars = () =>{         //generate bars

    arrayContainer.innerHTML = ""   //remove all of the html that previously exists

    let arr = generateRandomArray()

    for(let i=0; i<arr.length; i++){
        let divEle = document.createElement("div")
        divEle.classList.add("array-bar")
        divEle.style.height =`${arr[i]}px`
        arrayContainer.appendChild(divEle)
    }
}

// export const updateArrays = (e, firstValue, secondValue) =>{
//     console.log("called")
//     let containerArr = e.target.parentElement.parentElement

//     let temp = containerArr.children[firstValue].style.height
//     let newHeight = containerArr.children[secondValue].style.height
//     containerArr.children[firstValue].style.height = newHeight
//     containerArr.children[secondValue].style.height = temp 
    
// }

window.onload = generateBars() //calling function

generateNewArray.addEventListener("click",generateBars)
quickSortArray.addEventListener("click",function(e){
    let containerArr = e.target.parentElement.parentElement
    let check = containerArr.children[0].children[0].style.height

    console.log(e.target.parentElement.parentElement)
    console.log(check)
    console.log(quick(divheight))
})