document.querySelectorAll('.notes-wrap span').forEach(function(span) {
    span.addEventListener('click', function() {

        const targetDiv = document.querySelector(this.dataset.target);

        if (targetDiv.classList.contains('active')) {
            targetDiv.classList.remove('active');
        } else {
            targetDiv.classList.add('active');
        }

    });
});