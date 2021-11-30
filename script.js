const menuDropDown = document.querySelector('.menu-drop-down');
const dropDownItems = document.querySelector('.drop-down-items');
const classes = dropDownItems.classList;

menuDropDown.addEventListener('mouseleave', () => {
  const result = classes.toggle('show');

  if(!result) dropDownItems.classList.add('hide');
  else dropDownItems.classList.remove('hide');
});

menuDropDown.addEventListener('mouseenter', () => {
  const result = classes.toggle('hide');

  if(!result) dropDownItems.classList.add('show');
  else dropDownItems.classList.remove('show');
});
