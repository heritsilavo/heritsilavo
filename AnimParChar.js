/**
 * preparer le html et ajouter le css
 * @param {string} selector 
 */
export function prepareHtmlElements(selector){
    const contenu=document.querySelector(selector).innerHTML
    document.querySelector(selector).innerHTML=null
    
    var titleContainer = document.createElement("div")
    titleContainer.classList.add('title-container')
    
    var title1 = document.createElement("p")
    title1.innerHTML=contenu;
    title1.classList.add('title')
    title1.classList.add('title1')
    
    var title2 = document.createElement("p")
    title2.innerHTML=contenu;
    title2.classList.add('title')
    title2.classList.add('title2')
    
    titleContainer.appendChild(title1)
    titleContainer.appendChild(title2)
    document.querySelector(selector).appendChild(titleContainer)
    
    //entourer chaque mot de <span>
    document.querySelectorAll(".title").forEach((str)=>{
    var long = str.innerText.length - str.innerText.split(" ").length+1;
    var t1 = str.innerHTML.split(" ")
    var t2 = "";
    t1.forEach((mot,indice)=>{
        (indice!=0)?t2+=" <span>"+mot+"</span>":t2+="<span>"+mot+"</span>"
    })
    str.innerHTML=t2;

    //ajouter le code css dans le balise <head>
    var codeCSS = `\
    .title-container{\
        display: flex;\
        align-items: center;\
        justify-content: center;\
        width: 100%;\
        position: relative;\
    }\
    .title{\
        margin-top: 0%;\
        position: absolute;\
        display: block;\
    }\
    .title-container p span span{/*pourqu'il puissent faire une rotation et translation*/\
        display: inline-block;\
    }\
    .title-container p.title1 span span{\
        transform-origin: bottom;\
    }\
    .title-container p.title2 span span{/*texte du dessous cacheé a debut*/\
        transform-origin: top;\
        transform: translateY(80%) rotateX(90deg);\
    }\
    /*au hover*/\
    .title-container:hover p.title2 span span{\
        transform: translateY(0%) rotateX(0deg);\
    }\
    .title-container:hover p.title1 span span{\
        transform: translateY(-80%) rotateX(-90deg);\
    }\
  `
  var styleCSS=document.createElement('style')
  styleCSS.innerHTML=codeCSS
  document.querySelector('head').appendChild(styleCSS);
})
}
/**
 * pour ajouter des span, avec des differentes transitions pour chacun
 * @param {String} selector
 * @param {Number} speed
 */
export function addSpanNodeToAllChar(selector=".title",speed=0.1){
    var k=0;
    document.querySelectorAll(selector+" span").forEach(element =>{
        const str = document.querySelectorAll(selector)[0]
        var long = str.innerText.length - str.innerText.split(" ").length+1;
        var txt = element.innerHTML.split(" ")
        txt = element.innerText.split("");
        element.innerHTML = "";
        for(var i=0 ; i<txt.length ; i++){
            element.innerHTML += `<span style='transition:all ${k*speed}s'> ${txt[i]}</span>`;
            k++;
            if(k==long){
                k=0;
            }
        }
    })
}