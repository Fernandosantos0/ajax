'use strict';

const requisitarPagina = url => {
    fetch(url)
        .then(dados => dados.text())
        .then(pagina => {
            const resultado = document.getElementsByClassName('col-md-10')[0];
            resultado.innerHTML = pagina;
        })
        .catch(e => console.error(e));
};