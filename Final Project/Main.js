import { bubble } from "./Algorithms/Bubblesort.js";    //to acces a folder use "./" //import algorithm
import { quick } from "./Algorithms/QuickSort.js"; 
import { select } from "./Algorithms/Selectionsort.js";
import { merge } from "./Algorithms/Mergesort.js";

const arrayContainer = document.querySelector("#array-container");
const generateNewArray = document.querySelector("#generate-array");
const submitBtn = document.querySelector("#submit-btn");
const algoInput = document.querySelector("#algorithms")

let divheight = [] //keeping track of the arr
let divs = [] //keeping track of divs?
let delay = 0

export const divUpdate = (i, j) => {
    let arr = divs

    setTimeout(()=>{

        let temp = arr[i].style.height

        arr[i].style.backgroundColor = "red"
        arr[i].style.height = arr[j].style.height

        arr[j].style.backgroundColor = "blue"
        arr[j].style.height = temp

    },delay*10)

    // arr[i].style.backgroundColor = "black"
    // arr[j].style.backgroundColor = "black"

    delay+=1
    

    return arr
}

export const modDivUpdate = (i, value) => {
    let arr = divs
    
    setTimeout(()=>{
  
        arr[i].style.backgroundColor = "red"
        arr[i].style.height = `${value}px`

        if(arr[i+1]){
            arr[i+1].style.backgroundColor = "blue"
        }
        
        
    },delay*10)

    // arr[i].style.backgroundColor = "black"
    // arr[j].style.backgroundColor = "black"

    delay+=1
    

    return arr
}

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

    delay = 0
    arrayContainer.innerHTML = ""   //remove all of the html that previously exists

    let arr = generateRandomArray()

    for(let i=0; i<arr.length; i++){
        divs[i] = document.createElement("div")
        divs[i].classList.add("array-bar")
        divs[i].style.height =`${arr[i]}px`
        arrayContainer.appendChild(divs[i])
    }
}


window.onload = generateBars() //calling function

generateNewArray.addEventListener("click",generateBars)
submitBtn.addEventListener("click",function(){
    console.log(algoInput.value)
    if(algoInput.value === "Bubble Sort"){
        bubble(divheight)
    }

    if(algoInput.value === "Quick Sort"){
        quick(divheight)
    }

    if(algoInput.value === "Select Sort"){
        select(divheight)
    }

    if(algoInput.value === "Merge Sort"){
        merge(divheight)
    }

    algoInput.value = ""
})


