const  crew = [
    {
      crewname: "Douglas Hurley",
      crewimg:  "./starter-code/assets/crew/image-douglas-hurley.png",
      role: "Commander",
      bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    },
    
    {
      crewname: "Mark Shuttleworth",
      crewimg:  "./starter-code/assets/crew/image-mark-shuttleworth.png",
      role: "Mission Specialist",
      bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    },

    {
      crewname: "Victor Glover",
      crewimg: "./starter-code/assets/crew/image-victor-glover.png",
      role: "Pilot",
      bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
    },

    {
      crewname: "Anousheh Ansari",
      crewimg:  "./starter-code/assets/crew/image-anousheh-ansari.png",
      role: "Flight Engineer",
      bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
    }
  ]

  const one = document.querySelector('.one');
  const two = document.querySelector('.two');
  const three = document.querySelector('.three');
  const four = document.querySelector('.four');

  const img2 = document.querySelector('.img-02');
  const heading2 = document.querySelector('.heading-02-02');
  const para2 = document.querySelector('.p-02-02');
  const para022 = document.querySelector('.stats-p-02-02');


  one.addEventListener("click", ()=>{
    if(currentItem <  crew.length -0){
              currentItem = 0;
            }
            showperson(currentItem)
  })
  
  
  two.addEventListener("click", ()=>{
    if(currentItem <  crew.length -0){
              currentItem = 1;
            }
            showperson(currentItem)
  })
  
  three.addEventListener("click", ()=>{
    if(currentItem <  crew.length -0){
              currentItem = 2;
            }
            showperson(currentItem)
  })
  
  four.addEventListener("click", ()=>{
    if(currentItem <  crew.length -0){
              currentItem = 3;
            }
            showperson(currentItem)
  })
  






  let currentItem  = 0

  window.addEventListener("DOMContentLoaded", function(){
    showperson(currentItem);
    });


    function showperson(n){
        const data =  crew[n]
        heading2.textContent  = data.role
        img2.src  = data.crewimg
        para2.textContent = data.crewname
        para022 .textContent =  data.bio  
        
      }