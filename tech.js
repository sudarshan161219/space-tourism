const tech = [
    {
     name: "Launch vehicle",
      img: {
        portrait: "./starter-code/assets/technology/image-launch-vehicle-portrait.jpg",
        landscape: "./starter-code/assets/technology/image-launch-vehicle-landscape.jpg"
      },
     desc: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    },
    {
     name: "Spaceport",
      img: {
        portrait: "./starter-code/assets/technology/image-spaceport-portrait.jpg",
        landscape: "./starter-code/assets/technology/image-spaceport-landscape.jpg"
      },
     desc: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    },
    {
     name: "Space capsule",
      img: {
        portrait: "./starter-code/assets/technology/image-space-capsule-portrait.jpg",
        landscape: "./starter-code/assets/technology/image-space-capsule-landscape.jpg"
      },
     desc: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    }
  ]

  const one = document.querySelector('.one');
  const two = document.querySelector('.two');
  const three = document.querySelector('.three');

  const img3 = document.querySelector('.img-03');
  const techp1 = document.querySelector('.tech-p1');
  const techp2 = document.querySelector('.tech-p2');



  let currentItem = 0

  window.addEventListener("DOMContentLoaded", function(){
    showitem(currentItem);
    });


  function showitem(n){
    const data =  tech[n]
    techp1.textContent  = data.name
    img3.src  = data.img.landscape
    techp2.textContent = data.desc
    
  }

  one.addEventListener("click", ()=>{
    if(currentItem <  tech.length -0){
              currentItem = 0;
            }
             showitem(currentItem)
  })
  
  
  two.addEventListener("click", ()=>{
    if(currentItem <  tech.length -0){
              currentItem = 1;
            }
             showitem(currentItem)
  })
  
  three.addEventListener("click", ()=>{
    if(currentItem <  tech.length -0){
              currentItem = 2;
            }
             showitem(currentItem)
  })
  