const buttons = document.querySelectorAll('.project-card button');
const projectCards = document.querySelectorAll('.project-card');


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if(button){
            const id = button.dataset.id;

        projectCards.forEach((card) => {
            const cardId = card.dataset.card;

            if(cardId === id){
                card.classList.toggle('is-active');

                button.textContent = 'Ver Proyecto';

                if (card.classList.contains('is-active')) {
                    button.textContent = 'Cerrar Proyecto';
                }
            }
            // Si queremos seleccionar solamente una card.
            // else{
            //     card.classList.remove('is-active');
            // }
        });
        }
    });
});
