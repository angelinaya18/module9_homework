const btnReq=document.querySelector(".btn-request");
const resultNode=document.querySelector(".result");

let images=localStorage.getItem('images');
if(images){
    displayResult(JSON.parse(images));
}

function useRequest(url,callback){
    fetch(url)
    .then((response)=>{ 
        return response.json() 
    })
    .then((data)=>{
        localStorage.setItem('images',JSON.stringify(data));
        callback(data);
    })
    .catch(()=>{console.log("Ошибка!")})
}

function displayResult(apiData) {
    let cards="";
    apiData.forEach(item => {
        const cardBlock = `
            <div class="card">
                <img
                    src="${item.download_url}"
                    class="card-image"
                />
                <p>${item.author}</p>
            </div>
        `;
        cards = cards + cardBlock;
    });

    resultNode.innerHTML = cards;
}

function getImage(){
    const num1=document.querySelector(".input-num-1").value;
    const num2=document.querySelector(".input-num-2").value;

    if(!(Number(num1)>0 && Number(num1 <11)) && !(Number(num2)>0 && Number(num2 <11))){
        resultNode.innerHTML="<p>Номер страницы и лимит вне диапазона от 1 до 10</p>";
    }else if(!(Number(num1)>0 && Number(num1 <11))){
        resultNode.innerHTML="<p>Номер страницы вне диапазона от 1 до 10</p>";
    }else if(!(Number(num2)>0 && Number(num2 <11))){
        resultNode.innerHTML="<p>Лимит вне диапазона от 1 до 10</p>";
    }else if(Number(num1)>0 && Number(num1 <11) && Number(num2)>0 && Number(num2 <11)){
        useRequest(`https://picsum.photos/v2/list?page=${num1}&limit=${num2}`,displayResult)
    }
}

btnReq.addEventListener("click",()=>{
    getImage();
})