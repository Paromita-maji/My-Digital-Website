//side bar start

function openNav() {
    'use strict';
    const sidepanel = document.getElementById('mySidepanel');
    if(sidepanel){
        sidepanel.style.left = '0';
    }else{
        console.error('error: side panel not found');
    }
}

function closeNav() {
    'use strict';
    const sidepanel = document.getElementById('mySidepanel');
    if(sidepanel){
        sidepanel.style.left = '-320';
    }else{
        console.error('error: side panel not found');
    }
}
//searchbar

function open_search(){
    'use strict';
    const searchpanel = document.getElementById('search-bar');
    if(searchpanel){
        searchpanel.style.height = '100vh';
        searchpanel.style.borderRadius = '0';
    }else{
        console.error('error: side panel not found');
    }
}

function close_search(){
    'use strict';
    const searchpanel = document.getElementById('search-bar');
    if(searchpanel){
        searchpanel.style.height = '0';
        searchpanel.style.borderTopLeftRadius = '100%';
        searchpanel.style.borderTopRightRadius = '100%';
    }else{
        console.error('error: side panel not found');
    }
}

//portfolio gallary tab
function open_img(evt, cityName){
let i, tabcontent, tablinks;

//hide all tab content
tabcontent = document.getElementsByClassName('tabcontent');
for(i=0;i<tabcontent.length;i++){
    tabcontent[i].style.display = "none";
}

//remove active class from all tab links
tablinks = document.getElementsByClassName('tablinks');
for(i=0;i<tablinks.length;i++){
    tablinks[i].classList.remove("active");
}

//show the selected tab content and mark the corresponding tab link as active
document.getElementById(cityName).style.display = "block";
evt.currentTarget.classList.add('active');
}

//responsive team slider
$('.team-slider').slick({
    arrows:false,
    dots:true,
    infinite:false,
    autoplay:true,
    speed:300,
    slidesToShow:4,
    slidesToScroll:1,
    responsive:[{
        breakpoint:1024,
        settings:{
            slidesToShow:3,
            slidesToScroll:1,
            infinite:true,
            dots:true,
        }
    },
{
    breakpoint:600,
    settings:{
        slidesToShow:2,
        slidesToScroll:1,
    }
},
{
    breakpoint:480,
    settings:{
        slidesToShow:1,
        slidesToScroll:1,
    }
},

]
})

//faq section
document.addEventListener('DOMContentLoaded', function(){
    let accordionButtons = document.querySelectorAll('.accordion-button');
    let acoimg = document.querySelectorAll('.accordion-button img');

    accordionButtons.forEach(function(button, index){
        button.addEventListener('click', function(){
            let collapse = this.parentElement.nextElementSibling;

            //close all the other accordion items
            accordionButtons.forEach(function (otherButton, otherIndex){
                if(otherButton !== button){
                    let otherCollapse = otherButton.parentElement.nextElementSibling;
                    otherCollapse.style.maxHeight = null;

                    //reset the image source and rotation for other accordion items
                    acoimg[otherIndex].src = 'images/icon/plus.png';
                    acoimg[otherIndex].style.transform = 'rotate(0deg)';
                    otherButton.style.backgroundColor = "#fff";
                }
            });

            //toggle the clicked according item
            if(collapse.style.maxHeight){
                collapse.style.maxHeight = null;
                //reset the image source, rotation, and background color when collapsing
                acoimg[index].src = "images/icon/plus.png";
                acoimg[index].style.transform = "rotate(90deg)";
                button.style.backgroundColor = '';
            }else{
                collapse.style.maxHeight = collapse.scrollHeight + "px";
                //change the image source, set rotation, and background color when expanding
                acoimg[index].src = "images/icon/plus.png";
                acoimg[index].style.transform = "rotate(180deg)";
                button.style.backgroundColor = "#c1b0b5";
            }
        });
    });
});


//footer validation start

const fom = document.getElementById('footer-form');
const footerMessage = document.getElementById('footer-message');

fom.addEventListener('submit', (event)=> {
    event.preventDefault();
    footerMessage.innerHTML = '~Form Submitted Successfully';
    footerMessage.style.display = 'flex';
    fom.reset();
    setTimeout(() => {
        footerMessage.style.display = 'none';
    }, 3000);
})


//button back to top
window.onscroll = function(){
    scrollFunction()
}
function scrollFunction(){
if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    document.getElementById('backToTopBtn').style.display = 'block';
}else{
    document.getElementById('backToTopBtn').style.display = 'none';
}
}

function scrollToTop(){
    const scrollToTopBtn = document.documentElement || document.body;
    scrollToTopBtn.scrollIntoView({
        behavior: 'smooth'
    })
}





//responsive logoipsum slider
$('.sliderlogo').slick({
    arrows:false,
    dots:false,
    infinite:false,
    autoplay:false,
    speed:300,
    slidesToShow:5,
    sliderToScroll:1,
    responsive:[{
        breakpoint:1024,
        settings:{
            slidesToShow:4,
            sliderToScroll:1,
            infinite:true,
            dots:false,
        }
    },
{
    breakpoint:600,
    settings:{
        slidesToShow:2,
        sliderToScroll:1,
    }
},
]
})



 document.addEventListener('DOMContentLoaded', (event) => {
            // Select the hamburger button, close button, and the right sidebar
            const hamburgerButton = document.getElementById('hamburger-button');
            const closeButton = document.querySelector('.close_rightsidebar');
            const rightSidebar = document.getElementById('right-side');

            // Add click event listener to the hamburger button to show the sidebar
            hamburgerButton.addEventListener('click', () => {
                rightSidebar.style.display = 'block'; // Show the sidebar
            });

            // Add click event listener to the close button to hide the sidebar
            closeButton.addEventListener('click', () => {
                rightSidebar.style.display = 'none'; // Hide the sidebar
            });
        });
