let intro = document.querySelector('.intro')
let logo = document.querySelector('.logoheader')
let logospan = document.querySelectorAll('.logo')

window.addEventListener('DOMContentLoaded', ()=>{

  setTimeout(()=>{
    logospan.forEach((span,idx)=>{
      setTimeout(()=> {
        span.classList.add('active')
      },(idx + 1)*400)
    });
     
    setTimeout(() => {
      logospan.forEach((span,idx) => {
        setTimeout(()=>{
          span.classList.remove('active')
          span.classList.add('fade')
        }, (idx + 1) * 50)
      })
    }, 2000);

    setTimeout(() => {
      intro.style.top ='-100vh'
    },2300)
  })

})


const topFunction=()=>{
  document.body.scrollTop = 500; // For Safari
  document.documentElement.scrollTop = 500; // For Chrome, Firefox, IE and Opera
}

$(document).ready(function(){
  console.log('Ready')
 
  
  

  // $('#testButton').click(testButtonFunction)

  //bind the button
  $('#myBtn').click(topFunction)

  //test get call
  $.get('/test?user_name="Fantastic User"',(result)=>{
    console.log(result)
  })


})
