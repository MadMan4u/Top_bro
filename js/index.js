//filter
  //Direction filter
  document.querySelector('ul#list').addEventListener('click', (event) => {
    var filterBox = document.querySelectorAll('.main__content-item');
    var filterClass = event.target.dataset['f'];
    filterBox.forEach(elem => {
        elem.classList.remove('hide_filter');
        elem.classList.remove('display_none');
        if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
            elem.classList.add('hide_filter');
            setTimeout(function() {
                elem.classList.add('display_none');
            }, 1000);
        }
    });
});
    //Direction platform
document.querySelector('ul#list2').addEventListener('click', (event) => {
    var filterBox = document.querySelectorAll('.main__content-item');
    var filterClass = event.target.dataset['f'];
    filterBox.forEach(elem => {
        elem.classList.remove('hide_filter');
        elem.classList.remove('display_none');
        if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
            elem.classList.add('hide_filter');
            setTimeout(function() {
                elem.classList.add('display_none');
            }, 1000);
        }
    });
});

//Custom select
var selectField = document.getElementById('selectField');
var selectText = document.getElementById('selectText');
var selectField2 = document.getElementById('selectField2');
var selectText2 = document.getElementById('selectText2');
var options = document.getElementsByClassName('options');
var options2 = document.getElementsByClassName('options_direction');
var list = document.getElementById('list');
var arrowIcon = document.getElementById('arrowIcon');
var arrowIcon2 = document.getElementById('arrowIcon2');

selectField.onclick = function () {
    list.classList.toggle('hide');
    arrowIcon.classList.toggle('rotate');
};

selectField2.onclick = function () {
    list2.classList.toggle('hide');
    arrowIcon2.classList.toggle('rotate');
};

for(options of options) {
    options.onclick = function () {
        selectText.innerHTML = this.textContent;
        list.classList.toggle('hide');
        arrowIcon.classList.toggle('rotate');
    }
}

for(options2 of options2) {
    options2.onclick = function () {
        selectText2.innerHTML = this.textContent;
        list2.classList.toggle('hide');
        arrowIcon2.classList.toggle('rotate');
    };
}

