/**
 * portfolio filter
 */ 
let portfolioFilters = document.querySelectorAll('#portfolio-flters li'); 
let portfolioGallery = document.querySelectorAll('#projects .gallery .project');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const images = document.querySelector('.carousel-carousel-mobile-container').children;
const totalImages = images.length;
let index = 0;

  for(let i=0; i<portfolioFilters.length; i++) {
      portfolioFilters[i].addEventListener('click', function(e) {
          e.preventDefault();
          for(let j=0; j<portfolioFilters.length; j++) {
              portfolioFilters[j].classList.remove("active")
          }
          portfolioFilters[i].classList.add("active")
          let dataFilter = portfolioFilters[i].getAttribute("data-filter")
          for(let k=0; k<portfolioGallery.length; k++) {
              if(dataFilter === "*") {
                  portfolioGallery[k].style.display = "flex"
                  portfolioGallery[k].style.flexDirection = "column"   
              }
              else if(portfolioGallery[k].getAttribute("data-filter") === dataFilter) {
                  console.log("hmm")
                  portfolioGallery[k].style.display = "flex"
                  portfolioGallery[k].style.flexDirection = "column"
              }
              else {  
                  portfolioGallery[k].style.display = "none"   
              }
          }
          
          AOS.refresh()
      });
  }

$( ".change" ).on("click", function() {
    if( $( "body" ).hasClass( "dark" )) {
        $( "body" ).removeClass( "dark" );
        //$( ".change" ).text( "OFF" );
    } else {
        $( "body" ).addClass( "dark" );
        //$( ".change" ).text( "ON" );
    }
});

//mobile slider
prev.addEventListener('click', () => {
  nextImage('next');
})

next.addEventListener('click', () => {
  nextImage('prev');
})

function nextImage(direction) {
  if(direction == 'next') {
    index++;
    if(index == totalImages) {
      index = 0;
    }
  } else {
    if(index == 0) {
      index = totalImages - 1;
    } else {
      index--;
    }
  }

  for(let i = 0; i < images.length; i++) {
    images[i].classList.remove('main');
  }
  images[index].classList.add('main');
}