// setTimeout(() => {
//     alert("Salam Reshad")
// }, timeout);

// function checkOddNum(num){
//     return num % 2 == 1;
// }
// function checkEvenNum(num){
//     return num % 2 == 0;
// }


// function sumOfNumsbyCondition(arr,callback)
// {
// let sum = 0;
// for (const item of arr){
//     if (callback(item)){
//         sum+=item
//     }
// }
// console.log(sum);
// }

// function sumOfEvenNums(arr)
// {
// let sum = 0;
// for (const item of arr){
//     if (item % 2 == 0){
//         sum+=item
//     }
// }
// console.log(sum);
// }


// let nums = [1, 5, 6, 7, 9, 2];
// sumOfOddNums(nums)
// sumOfEvenNums(nums)

// sumOfNumsbyCondition(nums,checkOddNum)
// sumOfNumsbyCondition(nums, m => m > 0)

// let nums = [1, 5, 6, 7, 9, 2];

// let result = nums.filter(m => m > 5);
// let result = nums.find(m => m > 5);

// console.log(nums)
// console.log(result)


// let result = nums.findIndex(m => m > 5);
// console.log(result)


// class Animal {
//     constructor (heigth, width)
//     {
//         this.heigth = heigth;
//         this.width = width;
//     }
// }

// let animal = new Animal(100,200);


// class Bird extends Animal{
//     constructor(a,b){
//         super(a,b);
//         this.name = "Devequshu";
//     }

//     getName(t)
//     {
//         console.log("ttes")
//     }
// }

// let bird = new Bird(100,200);
// bird.getName(100)
// console.log(bird.heigth)

// console.log(animal.heigth)

// animal.name = "salam"

// console.log(animal.width)


// let name = "sasa";
// let surname = new String();

// surname = "salam";

// console.log(surname);

// let isMarried = new Boolean();

// isMarried = true;

// console.log(isMarried);


// class Test{
//     constructor(name)
//     {
//         this.name = name;
//     }
// }



// console.log(test.name);

// Test.prototype.surname = "Surname for test";

// Test.prototype.getName = function()
// {
//     console.log("this is a test name")
// }

// let test = new Test("salam");

// console.log(test.name)
// test.getName()


// String.prototype.customContains = function(serachText){
//     return this.includes(serachText)
// }

// let name = "Reshad";

// console.log(name.customContains("c"))



// let date = new Date();

// console.log(date);

// let year = date.getFullYear();

// let month = date.getUTCMonth();


// let result = `${month + 1} - ${year}`;

// console.log(result)



// console.log(month);

// console.log(year);


// let data = Math.pow(2, 4)

// let data = Math.sqrt(2, 4)

// console.log(data)




//DOM


// let elems = document.getElementsByTagName("h1")

// for (let i = 0; i < elems.length; i++) {
//     const element = elems[i];
//     console.log(element)
// }


// let elem = document.getElementsByClassName("test");

// console.log(elem);


// let elem = document.getElementById("products");
// console.log(elem);

// let elem = document.querySelector("#products .test");
// console.log(elem);

// let elems = document.querySelectorAll("#products h1");

// for (let i = 0; i < elems.length; i++) {
//     const element = elems[i];
//     // console.log(element);
//     console.log(element);
// }


// let elems = document.querySelectorAll("#products h1");
// elems[1].style.backgroundColor = "Red"
// for (const item of elems) {
//     item.style.backgroundColor = "Red"
// }



// console.log(h1.innerText);
// console.log(h1.innerHTML);
// h1.innerText = "Reshad Bey";
// h1.innerHTML = "<span>Reshad Bey</span>";

// h1.style.color = "Teal";
// h1.style.margin = "200px";


// h1.className = "active";

// let h1 = document.querySelector("h1");
// h1.classList.add("active");

// h1.classList.remove("product");


// console.log(h1.classList.contains("active"));
// console.log(document.querySelector("#products ul li:nth-child(2)"));


// h1.setAttribute("id", "text")

// console.log(h1.getAttribute("id"))
// console.log(h1.hasAttribute("id"))


let button = document.querySelector(".add-button");
let h1 = document.querySelector("h1");

button.addEventListener("click", function(){
    this.style.backgroundColor = "Magenta";

    h1.style.backgroundColor = "Green";
    h1.style.color = "White"
    h1.style.width = "200px"
    h1.innerText = "Salam Fatime xanim"

    let btnText =  this.innerText;
    this.innerText = h1.innerText;
    h1.innerText = btnText
});