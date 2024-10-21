const sections = document.querySelectorAll('.section');
const secBtns = document.querySelectorAll('.controlls');
const secBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransitions(){
  //button click active class
  for(let i = 0; i < secBtn.length; i++){
    secBtn[i].addEventListener('click', function(){
      let currentBtn = document.querySelectorAll('.active-btn');
      currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
      this.className = currentBtn[0].className + ' active-btn';
    })
  }
  
  //sections active
  allSections.addEventListener('click',(e) =>{
    const id = e.target.dataset.id;
    if(id){
      //remove selected from other btns
      secBtns.forEach((btn) =>{
        btn.classList.remove('active')
      })
      e.target.classList.add('active')

      //hide other sections
      sections.forEach((section) =>{
        section.classList.remove('active')
      })

      const element = document.getElementById(id);
      element.classList.add('active');
    }
  })

  // // Toggle theme
  // document.addEventListener('DOMContentLoaded', () => {
  //   const themeBtn = document.querySelector('.theme-btn');
  //   themeBtn.addEventListener('click', e => {
  //     document.body.classList.toggle("light-mode");
  //   });
  // });
}

PageTransitions();

document.addEventListener('DOMContentLoaded', () => {
  // Function to set the theme based on localStorage
  function setTheme() {
      const isLightMode = localStorage.getItem('light-mode') === 'true';
      if (isLightMode) {
          document.body.classList.add("light-mode");
      } else {
          document.body.classList.remove("light-mode");
      }
  }

  // Initial check to apply the theme
  setTheme();

  // Toggle theme
  const themeBtn = document.querySelector('.theme-btn');
  themeBtn.addEventListener('click', e => {
      // Toggle light-mode class
      document.body.classList.toggle("light-mode");

      // Save the preference in localStorage
      const isLightMode = document.body.classList.contains("light-mode");
      localStorage.setItem('light-mode', isLightMode);
  });
});