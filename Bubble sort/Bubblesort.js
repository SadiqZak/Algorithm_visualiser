const arrayContainer = document.querySelector(".array-container")

window.onload = () => {
    console.log('page is fully loaded');

    let arr = generateRandomArray()

    generateBars(arr)
    
    let divEle = document.createElement("div")
    divEle.classList.add("button-class")

    let butGen = document.createElement("button")
    butGen.innerText = "Generate Array"
    butGen.classList.add("generate-array")
    butGen.onclick = function(){
        window.location.reload();
    } 
    divEle.appendChild(butGen)

    let butSort = document.createElement("button")
    butSort.innerText = "Bubble Sort"
    butSort.classList.add("generate-array")
    butSort.onclick = function(e){
        let containerArr = e.target.parentElement.parentElement 
        // console.log(bubbleSort(arr),containerArr.children[1])

       
            for(let i= 0; i< arr.length; i++){
                setTimeout(()=>{          
                for(let j=0; j<=i; j++){
                    // containerArr.children[j].style.backgroundColor = "blue"  
                    setTimeout(()=>{ 
                    if(arr[i] < arr[j]){ 
                        // setTimeout(()=>{          }, j*10)
                    
                        containerArr.children[j].style.backgroundColor = "red"  
                        containerArr.children[j+1].style.backgroundColor = "red"
                        let temp = containerArr.children[i].style.height
                        let newHeight = containerArr.children[j].style.height
                        containerArr.children[i].style.height = newHeight
                        containerArr.children[j].style.height = temp
                        // containerArr.children[j].style.backgroundColor = "blue"

                        swap(arr, i, j)  

                        containerArr.children[j].style.backgroundColor = "red"  
                        containerArr.children[j+1].style.backgroundColor = "red"
                    }
                },i*100) 
                    containerArr.children[j].style.backgroundColor = "blue"  
                } 
                // containerArr.children[i].style.backgroundColor = "black   
            }, i*100)  
            } 
      
         console.log(arr)
    }
    divEle.appendChild(butSort)

    arrayContainer.appendChild(divEle)


};


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

