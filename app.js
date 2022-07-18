

  const btn = document.querySelectorAll('.li-01');
  const imgg = document.querySelector('.img-01')
  const heading = document.querySelector('.heading-02-01');
  const para = document.querySelector('.p-02-01')
  const num = document.querySelector('.num');
  const num2 = document.querySelector('.num2');

  btn.forEach((e) => {
    e.addEventListener("click", (n)=>{
     
        alert(n.target.innerText)

   if(n.target.innerText == "moon"){
    imgg.src = "/starter-code/assets/destination/image-moon.webp";
    heading.textContent = "moon";
    para.textContent = " See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
    num.textContent = "384,400 km";
    num2.textContent = "3 days";
  
   }


 if(n.innerText == "mars"){

    imgg.src = "/starter-code/assets/destination/image-mars.webp";
    heading.innerHTML  = "mars";
    para.textContent = " See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
    num.textContent = "384,400 km";
    num2.textContent = "3 days";

   }

    });


  });


