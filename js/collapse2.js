document.getElementById('toggleConveniosButton').addEventListener('click', function() {
    var convenios = document.querySelectorAll('#more-convenios');
    convenios.forEach(function(convenio) {
        if (convenio.style.display === 'none' || convenio.style.display === '') {
            convenio.style.display = 'block';
        } else {
            convenio.style.display = 'none';
        }
    });

    if (this.textContent === 'Ver mais') {
        this.textContent = 'Ver menos';
    } else {
        this.textContent = 'Ver mais';
    }
});
