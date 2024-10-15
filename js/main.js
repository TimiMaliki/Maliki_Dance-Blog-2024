/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// /*==================== SHOW SCROLL TOP ====================*/ 
// function scrollTop(){
//     const scrollTop = document.getElementById('scroll-top');
//     // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
//     if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
// }
// window.addEventListener('scroll', scrollTop)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*==================== SCROLL REVEAL ANIMATION ====================*/
// const sr = ScrollReveal({
//     origin: 'top',
//     distance: '30px',
//     duration: 2000,
//     reset: true
// });

// sr.reveal(`.home__data, .home__img,
//             .about__data, .about__img,
//             .services__content, .menu__content,
//             .app__data, .app__img,
//             .contact__data, .contact__button,
//             .footer__content`, {
//     interval: 200
// })





const AllBlogs = [{
    id: 1,
    image: "./images/World_Car-Free_Day_3_2x-100__1_.jpg",
    Header:"The Dance Awards: how did your city do?",
    text:"From most members to most repairs—which city comes out on top?.",
    paid:"Not Free",
    ReadMore:"Read More"

},


{
    id: 2,
    image:"./images/Artboard_1_2x__2_-min.jpg",
    Header:"Dance x Komoot: Discover more of your city",
    text:"Want to go further with your Dance ride? We’ve been working with Komoot to add more adventure to your weekends with selected routes for you to explore.",
    paid:"Not Free",
    ReadMore:"Read More"
},

{
    id: 3,
    image:"./images/10k.jpeg",
    Header:"10K and counting: how we built a 10,000-person movement",
    text:"How we got here, and what’s next for Dance.",
    paid:"Not Free",
    ReadMore:"Read More"
},

{
    id: 4,
    image:"./images/230613_LI-TW-FB_LinkedIn_MILESxDance-Post-1__2_.jpg",
    Header:"Dance x MILES: Why mobility services should work together for more livable cities",
    text:"Our journeys might look different, but Dance and MILES are heading towards the same destination—and this is just the beginning.",
    paid:"Not Free",
    ReadMore:"Read More"
},


{
    id: 5,
    image:"./images/SIXTshare_x_Dance_Email_v1.png",
    Header:"Dance announces new funding & welcomes additional investors",
    text:"Dance raises additional capital from current and new investors partnering with the company on its mission to create more livable cities.",
    paid:"Not Free",
    ReadMore:"Read More"
},

{
    id: 6,
    image:"./images/VennDiagramEnglish.png",
    Header:"8 reasons subscribing to your ebike or moped makes sense",
    text:"And why ‘access’ is even better than ‘ownership’.",
    paid:"Not Free",
    ReadMore:"Read More"
},

]

const displayArticle = (AllBlogs) => {

    const posts = AllBlogs.map((post) => {
        return `
        
        <div class="blog-one p-5  lg:p-24">
        <div
          class=" w-[200px] lg:w-full h-full lg:h-full border border-gray-200 rounded-2xl shadow  bg-slate-100"
        >
          <a href="#">
            <img
              class="rounded-t-lg"
              src=${post.image}
              alt=""
            />
          </a>
          <div class="lg:p-15">
            <a href="#">
              <h5
                class="mb-2  text-lg lg:text-2xl  text-center font-bold tracking-tight text-slate-300 dark:text-black p-10"
              >
                ${post.Header}
              </h5>
            </a>
            <p class="mb-1 text-wrap  text-center text-md font-normal text-gray-700 dark:text-gray-400">
             ${post.text}
            </p>
          <div class=" flex justify-center p-10">
          <button
          type="button"
          class="w-[70px] h-[24px] lg:w-full lg:h-full text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
       ${post.ReadMore}
     </button>
        


       <button
       type="button"
       class="w-[70px] h-[24px] lg:w-full lg:h-full text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
     >
       ${post.paid }
     </button>
          </div>
          
          </div>     
        </div>
      </div>
        
        
        `
    }).join(" ")

    document.querySelector(".blog-wrapper").innerHTML = posts
}

displayArticle(AllBlogs)


