const btnMenuLateral = document.getElementById('btn-menu-lateral')
const menuLateral = document.querySelector('.menu-lateral')
const categorias = document.querySelectorAll('.categorias-sumir');

btnMenuLateral.addEventListener('click', function(){
    menuLateral.classList.toggle('menu-sumido');
    categorias.forEach(function(categoria) {
    categoria.classList.toggle('categorias-sumir');
    })

    if (menuLateral.classList.contains('menu-sumido')) {
        categorias.forEach(function(categoria) {
          categoria.classList.add('categorias-sumir');
        });
      } else {
        categorias.forEach(function(categoria) {
          categoria.classList.remove('categorias-sumir')
        })
    }
})


