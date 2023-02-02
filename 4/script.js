const btnReq=document.querySelector(".btn-request");
const resultNode=document.querySelector(".result");

function displayResult(urlImg) {
    const cardBlock = `
        <div class="card">
            <img
                src="${urlImg}"
                class="card-image"
            />
        </div>
    `;
    resultNode.innerHTML = cardBlock;
}

function getImage(){
    const num1=document.querySelector(".input-num-1").value;
    const num2=document.querySelector(".input-num-2").value;

    if(Number(num1)>99 && Number(num1 <301) && Number(num2>99) && Number(num2 <301)){
        fetch(`https://picsum.photos/${num1}/${num2}`)
        .then((response)=>{ 
            displayResult(response.url);
        })
        .catch(()=>{console.log("Ошибка!")})
    }else{
        resultNode.innerHTML="<p>одно из чисел вне диапазона от 100 до 300</p>";
    }
}

btnReq.addEventListener("click",()=>{
    getImage();
})