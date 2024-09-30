const me = document.getElementById('me').addEventListener('click', function() {
    
    const wrap = document.getElementById('meWrap');
    const studyWrap = document.getElementById('studyWrap');

    if (studyWrap.classList.contains('study-flex')) {
        studyWrap.classList.remove('study-flex');
    }

    if(wrap.classList.contains('wrap-flex')){
        wrap.classList.remove('wrap-flex')
    } else {
       wrap.classList.add('wrap-flex')
    } 
    
})

const study = document.getElementById('study').addEventListener('click', function() {
    
    const wrap = document.getElementById('studyWrap');
    const meWrap = document.getElementById('meWrap');

    if (meWrap.classList.contains('wrap-flex')) {
        meWrap.classList.remove('wrap-flex');
    }

    if(wrap.classList.contains('study-flex')){
        wrap.classList.remove('study-flex')
    } else {
       wrap.classList.add('study-flex')
    } 
})







