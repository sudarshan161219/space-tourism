
const destinations = [

      {
        name: "Moon",
        img:  "./starter-code/assets/destination/image-moon.png",
        desc: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        distance: "384,400 km",
        travel: "3 days"
      },
      {
        name: "Mars",
        img:"./starter-code/assets/destination/image-mars.png",     
        desc: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        distance: "225 mil. km",
        travel: "9 months"
      },
      
      {
        name: "Europa",
        img:  "./starter-code/assets/destination/image-europa.png",
        desc: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        distance: "628 mil. km",
        travel: "3 years"
      },
      {
        name: "Titan",
        img:  "./starter-code/assets/destination/image-titan.png",
        desc: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        distance: "1.6 bil. km",
        travel: "7 years"
      }
    ]




  const moon = document.querySelector('.moon');
  const mars = document.querySelector('.mars');
  const europa = document.querySelector('.europa');
  const titan = document.querySelector('.titan');





  const imgg = document.querySelector('.img-01');
  const heading = document.querySelector('.heading-02-01');
  const para = document.querySelector('.p-02-01');
  const num2 = document.querySelector('.num2');
  const num = document.querySelector('.num');



moon.addEventListener("click", ()=>{
  if(currentItem <  destinations.length -0){
            currentItem = 0;
          }
          showItem(currentItem)
})


mars.addEventListener("click", ()=>{
  if(currentItem <  destinations.length -0){
            currentItem = 1;
          }
          showItem(currentItem)
})

europa.addEventListener("click", ()=>{
  if(currentItem <  destinations.length -0){
            currentItem = 2;
          }
          showItem(currentItem)
})

titan.addEventListener("click", ()=>{
  if(currentItem <  destinations.length -0){
            currentItem = 3;
          }
          showItem(currentItem)
})




window.addEventListener("DOMContentLoaded", function(){

  showItem(currentItem)
  showperson(currentItem)
  });




let currentItem  = 0

        function showItem(n){
          const data =  destinations[n]
          heading.textContent  = data.name
          imgg.src  = data.img
          para.textContent = data.desc
          num.textContent =  data.distance    
          num2.textContent =  data.travel
        }

     