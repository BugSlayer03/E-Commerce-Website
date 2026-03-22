let currentIndex=0;

function showSlide(index){
    const slider=document.getElementById("slider");
    const totalSlides=document.querySelectorAll('.slide').length;

    if(index>=totalSlides || index<0){
        return ;
    } 
    // else if(index<0) currentIndex=totalSlides-1;
    else currentIndex=index;

    slider.style.transform=`translateX(-${currentIndex*100}%)`;
}

function nextSlide(){
    showSlide(currentIndex+1);
}

function prevSlide(){
    showSlide(currentIndex-1);
}