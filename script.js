(function dropDownMenu() {
  const menu = document.querySelector('.drop-down-menu');
  const dropDownItems = document.querySelector('.drop-down-items');
  const classes = dropDownItems.classList;

  menu.addEventListener('mouseleave', () => {
    const result = classes.toggle('show');

    if (!result) dropDownItems.classList.add('hide');
    else dropDownItems.classList.remove('hide');
  });

  menu.addEventListener('mouseenter', () => {
    const result = classes.toggle('hide');

    if (!result) dropDownItems.classList.add('show');
    else dropDownItems.classList.remove('show');
  });
})();

(function imageSlider() {
  let index = 1;
  const images = document.querySelectorAll('.images');

  const displayImage = (index) => {
    images.forEach((image) => {
      if(image.id == `image-${index}`) {
        image.classList.add('show-image');
        image.classList.remove('hide-image');
      } else {
        image.classList.add('hide-image');
        image.classList.remove('show-image');
      }
    })
  };
  
  const arrowButtons = document.querySelectorAll('.slider-button');
  arrowButtons.forEach((direction) => direction.addEventListener('click', function() {
      if (direction.id === 'left' && index > 1) index--;
      else if (direction.id ==='right' && index < (images.length)) index++;

      displayImage(index);
    })
  );

  displayImage(index);
})();
