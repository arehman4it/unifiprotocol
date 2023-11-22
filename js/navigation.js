$(document).ready(function(){document.body.addEventListener("click",function(e){var dropdowns=document.querySelectorAll('.main-navigation .navigation-dropdown');if(e.target.classList.contains('dropdown-trigger')){console.log('you clicked the dropdown trigger');for(var i=0;i<dropdowns.length;i++){dropdowns[i].classList.remove('visible');}
e.target.parentElement.classList.add('visible');}
if(!e.target.closest('.main-navigation')){for(var i=0;i<dropdowns.length;i++){dropdowns[i].classList.remove('visible');}}})})
function toggleMenu(){var mainNavigation=document.querySelector('#main-navigation');mainNavigation.classList.toggle('visible');function closeMainNavigationOnClick(){mainNavigation.classList.toggle('visible')
mainNavigation.removeEventListener('click',closeMainNavigationOnClick)}
mainNavigation.addEventListener('click',closeMainNavigationOnClick)}