// get all numbers
let allGroupNumbers = [];
// foreach masing-masing number
let contactNames = [];
let notFounds = [];
function runApp(){
    var script = document.createElement('script');
    script.src = '//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js';
    script.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(script);
    $('#main header [role="button"]').click();
    allGroupNumbers = $('#main header').children[1].children[1].innerText.split(', ');
    setTimeout(function() { 
        $('.three').children().eq(1).children().eq(2).children('span').children().eq(0).children().eq(0).children().eq(0).children().eq(1).children('section').children().eq(5).children().eq(1).children('button').click()
    }, 5000);
    let scrollHeight = 100;
    let refreshIntervalContact = setInterval(function(){
        if (notFounds.length < 1) {
            appendContactNames();
        }else{
            appendContactNames(notFounds);
        }
        $('[data-animate-modal-body="true"]').children().eq(0).children().eq(0).children().eq(2).scrollTop(scrollHeight);
        scrollHeight += 100;
        let statusStop = checkIndexOfNumber();
        if(statusStop){
            clearInterval(refreshIntervalContact);
        }
    }, 1000);
}
function appendContactNames(notFoundsUse = false){
    let contactsForeach = allGroupNumbers;
    if(notFoundsUse){
        contactsForeach = notFoundsUse;
    }
    contactsForeach.forEach(el => {
        let elementContact = document.querySelectorAll(`[title="${el}"]`);
        if (elementContact.length > 0) {
            let contactName = document.querySelectorAll(`[title="${el}"]`)[0].parentElement.parentElement.parentElement.children[1].children[1].children[0].innerText;
            let foundContact = contactNames.some(el => el.number == el);
            if(!foundContact){
                contactNames.push({
                    number : el,
                    name : contactName
                });
                removeA(notFounds, el);
            }
        }else{
            if(!notFounds.includes(el)){
                notFounds.push(el);
            }
        }
    });
}
function removeA(arr) {
    var what, a = arguments, L = a.length, ax;
    while (L > 1 && arr.length) {
        what = a[--L];
        while ((ax= arr.indexOf(what)) !== -1) {
            arr.splice(ax, 1);
        }
    }
    return arr;
}
function checkIndexOfNumber(){
    let status = true;
    if(notFounds.length == 0 && contactNames.length == 0){
        return false;
    }
    notFounds.forEach(el => {
        if(el.indexOf('+62') !== -1){
            status = false;
        }
    });
    if(status){
        var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(contactNames));
        var dlAnchorElem = document.createElement('a');
        dlAnchorElem.style.display = 'none';
        dlAnchorElem.id = 'downloadAnchorElem';
        // var dlAnchorElem = document.getElementById('downloadAnchorElem');
        dlAnchorElem.setAttribute("href",     dataStr     );
        dlAnchorElem.setAttribute("download", "scene.json");
        dlAnchorElem.click();
    }
    return status;
}