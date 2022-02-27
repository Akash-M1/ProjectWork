searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
}

let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{
  loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () =>{
  loginForm.classList.remove('active');
}

window.onscroll = () =>{

  searchForm.classList.remove('active');

  if(window.scrollY > 80){
    document.querySelector('.header .header-2').classList.add('active');
  }else{
    document.querySelector('.header .header-2').classList.remove('active');
  }

}

// window.onload = () =>{

//   if(window.scrollY > 80){
//     document.querySelector('.header .header-2').classList.add('active');
//   }else{
//     document.querySelector('.header .header-2').classList.remove('active');
//   }

// }

var swiper = new Swiper(".books-slider", {
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2 ,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".reviews-slider", {
  spaceBetween: 10,
  grabCursor:true,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

function validateform(){  
  var name=document.myform.name.value;  
  var password=document.myform.password.value;  
   
  if (name==null || name==""){  
    alert("Name can't be blank");  
    return false;  
  }
  else if(password.length<6){  
    alert("Password must be at least 6 characters long.");  
    return false;  
  } 
  else if(name!="akashm.cs20@bmsce.ac.in" || password!="test@123"){
    alert("Invalid Credentials");
    return false;
  }
}  