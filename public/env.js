let intro = document.querySelector('.intro')
let logo = document.querySelector('.logoheader')
let logospan = document.querySelectorAll('.intrologo')

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


$('.arrow').click(function() {      // When arrow is clicked
  $('body,html').animate({
      scrollTop : $(".parallax.second").position().top                       // Scroll to top of body
  }, 700);
});


const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");

function toggleMenu(){
  
  if(menu.classList.contains("active")){
    menu.classList.remove("active");
    toggle.querySelector("a").innerHTML = "<i class='fa fa-bars'></i>";
  } else {
      menu.classList.add('active');
      toggle.querySelector("a").innerHTML = "<i class='fa fa-times'></i>";
    }
  
}

toggle.addEventListener('click',toggleMenu,false);


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
