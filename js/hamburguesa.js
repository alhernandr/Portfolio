document.getElementById('button').addEventListener('click', function(){
  
    let menu = document.getElementById('menu-desplegable'),
        button = this;
    // menu.style.transform = "translateX(-100%)";
    menu.classList.toggle('animar');
    button.classList.toggle('menu-active');
    // contenedor.classList.toggle('blur');
    
  });