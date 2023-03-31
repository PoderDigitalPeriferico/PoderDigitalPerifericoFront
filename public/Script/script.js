window.addEventListener('scroll', () => {
    if(document.getElementById('favela5')) {
        let value = window.scrollY;

        document.getElementById('text').style.marginTop = (value <= 500 ? value : 500) * 2.5 + 'px';
        document.getElementById('favela_poste_esq').style.left = value * -1.5 + 'px';
        document.getElementById('favela5').style.left = value * 1.5 + 'px';
        document.getElementById('favela4').style.left = value * -1.5 + 'px';
        document.getElementById('favela_poste_dir').style.left = value * 1.5 + 'px';
        document.getElementById('favela_casa_dir').style.left = value * 1.5 + 'px';
        document.getElementById('favela_casa_esq').style.left = value * -.5 + 'px';

        document.getElementById('pipa_dir_1').style.left = value * 1.5 + 'px';
        document.getElementById('pipa_dir_1').style.top = value * 0.5 + 'px';
        document.getElementById('pipa_dir_2').style.left = value * 1.5 + 'px';
        document.getElementById('pipa_dir_2').style.top = value * 0.5 + 'px';

        document.getElementById('pipa_esq_1').style.left = value * 1.5 + 'px';
        document.getElementById('pipa_esq_1').style.top = value * -0.5 + 'px';
        document.getElementById('pipa_esq_2').style.left = value * -1.5 + 'px';
        document.getElementById('pipa_esq_2').style.top = value * -0.5 + 'px';
        document.getElementById('pipa_esq_3').style.left = value * 1.5 + 'px';
        document.getElementById('pipa_esq_3').style.top = value * -0.5 + 'px';
        document.getElementById('pipa_esq_4').style.left = value * -1.5 + 'px';
        document.getElementById('pipa_esq_4').style.top = value * -0.5 + 'px';
    }
});