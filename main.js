let divId = 0;

function excluir(div){
        const el = document.querySelector(`.i${div}`);
        const pai = el.parentNode;
        pai.removeChild(el);

}

function enviar(){
    const valor = document.querySelector("#input").value;
    document.querySelector("#input").value = "";
    const radio = document.querySelector("#radio:checked").value;
    const result = document.createElement(`div`);
    result.innerHTML = `${valor} <button onclick="excluir('${divId}')">X</button>`
    result.classList.add("item")
    result.classList.add("i"+divId)
    result.addEventListener("click",function(e){
        setTimeout(function(){
            document.querySelectorAll(".item").forEach(i=>{
                i.classList.remove("marca")
            })
            e.target.classList.add("marca")
        },0)
    })
    divId++
    if(radio === "A"){
        document.querySelector(".la").appendChild(result);
    }
    else if(radio === "B"){
        document.querySelector(".lb").appendChild(result);
    }
}
document.querySelector("#b-left").addEventListener("click",function(){
    const el = document.querySelector(".marca");
    if(el){
        const pai = el.parentNode;
        pai.removeChild(el);
        document.querySelector(".la").appendChild(el);
    }
}
)
document.querySelector("#b-right").addEventListener("click",function(){
    const el = document.querySelector(".marca");
    if(el){
        const pai = el.parentNode;
        pai.removeChild(el);
        document.querySelector(".lb").appendChild(el);
    }
}
)

addEventListener("click",function(e){
    document.querySelectorAll(".item").forEach(i=>{
        i.classList.remove("marca")
    })
})