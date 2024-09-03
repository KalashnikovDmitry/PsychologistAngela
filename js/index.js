const tabsBtn = document.querySelectorAll('.tab-btn');
const tabsItems = document.querySelectorAll('.tabs-content-item')

tabsBtn.forEach(changeTab);




function changeTab(item) {
    item.addEventListener('click', function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab')
        let active_tab = document.querySelector(tabId);

            if ( !currentBtn.classList.contains('tabs-active')) {
                tabsBtn.forEach(function(item) {
                    item.classList.remove('tabs-active');
                });

                tabsItems.forEach(function(item){
                    item.classList.remove('tabs-active');
                });

                currentBtn.classList.add('tabs-active');
                active_tab.classList.add('tabs-active');
            }
    });   
}

document.querySelector('.tab-btn').focus();
document.querySelector('.tab-btn').click();


