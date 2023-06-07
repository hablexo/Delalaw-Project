

let content = document.querySelectorAll('#info');
 Array.prototype.slice.call(document.querySelectorAll(".interface")).forEach(function(c){
  c.addEventListener('click', evt, {capture: false});
      
      function evt(e){
      
        //
      for(i=0; i<content.length; i++){
        content[i].classList.add('popcontent')  
     
       
     } }
      })
      
    
   
function removeclass(){
  content.forEach(ele=>{
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      element.addEventListener('click', )
    }
    ele.classList.remove('popcontent')
  })
}