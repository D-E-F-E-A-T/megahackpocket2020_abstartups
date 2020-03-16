document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }
  
  });
  var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};
$(document).ready(function(){

var name = getUrlParameter('name');
var description = getUrlParameter('description');
var avatar = getUrlParameter('avatar');
var status = getUrlParameter('status');


( (name) ? $('.nameStartup').html(name) : 'Shawee');
( (description) ? $('.descriptionStartup').text(description) : 'Nós automatizamos todas as etapas pra você, da inscrição dos participantes, até a atribuição de notas dos jurados!');
( (avatar != 'undefined') ? $('.avatarStartup').attr('src', avatar) : $('.avatarStartup').attr('avatar.png', 'avatar'));
( (status != 'Fora de Operação') ? $('.statusStartup').html('<span class="tag">Em Operação</span><span class="tag is-success">Sim</span>') : $('.statusStartup').html('<span class="tag">Em Operação</span><span class="tag is-danger">Não</span>'));

});