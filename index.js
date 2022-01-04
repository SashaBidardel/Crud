const formu=document.getElementById("form");
const list=document.getElementById("list");
let listaNombres=[];
function getElement(element){
 listaNombres.push(element);
}
function getLocalStorage(){
    localStorage.setItem('lista',JSON.stringify(listaNombres));
    render();
}
function render(){
    list.innerHTML="";
    listaNombres= JSON.parse(localStorage.getItem('lista'));
    if (listaNombres ==""){
        listaNombres=[];
    }
    else{
        listaNombres.forEach(element => {
            list.innerHTML +=`<div class="alert alert-primary " style="margin-left: 6%; margin-right: 6%;"; role="alert"><b style="color: blueviolet;">${element}</b><span style="display: flex; justify-content: end;"><i class="material-icons">delete_outline</i>  <i class="material-icons ">edit </i></span></div>`
        });
    }
}
formu.addEventListener("submit",(e)=>{
    e.preventDefault();
    let name=document.getElementById("nombre").value;
    if (name === ""){
        alert("Escriba un nombre válido")
    }
    else{
    getElement(name);
    formu.reset();
    getLocalStorage();
  ;
    }
    
})
function eliminar(nombre){
    let indexArray;
    console.log(nombre);
    listaNombres.forEach((element,index)=>{
        if (nombre === element){
            indexArray=index;
            
            
        }
        
    })
    
    console.log(indexArray);
    console.log("hola");
    listaNombres.splice(indexArray,1);
   getLocalStorage();
   
   
}
/*function editar(nombre){
    let indexArray;
    listaNombres.forEach((element,index)=>{
        if (nombre = element){
            indexArray=index;
            console.log(indexArray);
        }
    })
    eliminar(nombre);
    alert("Edite su nombre");
    formu.addEventListener("submit",(e)=>{
        e.preventDefault();
        let name=document.getElementById("nombre").value;
        if (name === ""){
            alert("Escriba un nombre válido")
        }
        else{
        getElement(name);
        formu.reset();
        formu.addEventListener("submit",(e)=>{
            e.preventDefault();
            let name=document.getElementById("nombre").value;
            if (name === ""){
                alert("Escriba un nombre válido")
            }
            else{
            getElement(name);
            formu.reset();
            getLocalStorage();
          ;
            }
            
        })
        getLocalStorage();
      ;
        }
        
    })
    
}*/
list.addEventListener("click",(e)=>{
    e.preventDefault();
    
    
    let icon=e.target.innerHTML;
    console.log(e);
   if (icon === "delete_outline"){
      eliminar(e.path[2].childNodes[0].childNodes[0].data); 
      
   }
   
  /*else{
     if (icon = "edit"){
    console.log("hey teeeo");
    //editar(e.path[1].childNodes[1].innerHTML);
   }
}*/
})

document.addEventListener("DOMcontentLoaded",render());