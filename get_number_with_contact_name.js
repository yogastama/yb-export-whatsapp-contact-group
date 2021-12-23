// get all numbers
let allGroupNumbers = [
    '+62 811-1043-689',
    '+62 811-1821-161',
    '+62 811-1845-500',
    '+62 811-337-486',
    '+62 811-832-767',
    '+62 811-900-262',
    '+62 811-920-601',
    '+62 811-9591-410',
    '+62 811-9630-111',
    '+62 812-1003-6241',
    '+62 812-1007-5373',
    '+62 812-1024-0094',
    '+62 812-1055-132',
    '+62 812-1234-1830',
    '+62 812-1389-7317',
    '+62 812-1395-896',
    '+62 812-1909-2337',
    '+62 812-5690-5096',
    '+62 812-6071-0497',
    '+62 812-6875-7590',
    '+62 812-7611-7672',
    '+62 812-7688-8464',
    '+62 812-8021-138',
    '+62 812-8032-9432',
    '+62 812-8142-090',
    '+62 812-8164-5550',
    '+62 812-8293-5863',
    '+62 812-8326-0003',
    '+62 812-8341-9084',
    '+62 812-8398-9722',
    '+62 812-8402-4060',
    '+62 812-8707-4004',
    '+62 812-8714-9567',
    '+62 812-8759-6098',
    '+62 812-8839-7353',
    '+62 812-8955-7032',
    '+62 812-8979-9006',
    '+62 812-9386-2707',
    '+62 812-9444-145',
    '+62 812-9647-2077',
    '+62 812-9725-6887',
    '+62 812-9855-991',
    '+62 812-9863-7617',
    '+62 812-9936-028',
    '+62 812-9939-9769',
    '+62 813-1000-9890',
    '+62 813-1010-4565',
    '+62 813-1070-7468',
    '+62 813-1081-5566',
    '+62 813-1128-1111',
    '+62 813-1132-4331',
    '+62 813-1150-8947',
    '+62 813-1464-4790',
    '+62 813-1506-2972',
    '+62 813-1810-6468',
    '+62 813-1842-7630',
    '+62 813-1942-4927',
    '+62 813-2071-5620',
    '+62 813-2139-5843',
    '+62 813-2244-7660',
    '+62 813-2474-0373',
    '+62 813-2939-3778',
    '+62 813-4787-5507',
    '+62 813-8016-7830',
    '+62 813-8530-0264',
    '+62 813-8537-4574',
    '+62 813-8600-1744',
    '+62 813-8705-4860',
    '+62 813-8831-4797',
    '+62 813-9448-5399',
    '+62 813-9781-0123',
    '+62 813-9849-2004',
    '+62 813-9888-6300',
    '+62 816-1825-653',
    '+62 816-1922-563',
    '+62 816-709-300',
    '+62 816-803-508',
    '+62 816-887-826',
    '+62 816-906-030',
    '+62 817-0030-313',
    '+62 817-9131-933',
    '+62 818-0818-9024',
    '+62 818-677-767',
    '+62 818-803-444',
    '+62 819-0599-9977',
    '+62 821-1016-8053',
    '+62 821-1104-3054',
    '+62 821-1185-1578',
    '+62 821-2370-6727',
    '+62 821-2416-6860',
    '+62 821-2573-7522',
    '+62 821-7248-8040',
    '+62 822-1053-4121',
    '+62 822-1188-9140',
    '+62 822-5898-4512',
    '+62 822-6019-2803',
    '+62 822-7794-9345',
    '+62 823-3992-7153',
    '+62 851-0049-8562',
    '+62 852-1863-2744',
    '+62 852-1948-4328',
    '+62 853-1375-9990',
    '+62 855-8822-111',
    '+62 856-9193-9287',
    '+62 877-5006-7536',
    '+62 877-7723-0956',
    '+62 877-8892-3628',
    '+62 878-4159-8836',
    '+62 895-3492-22066',
    '+62 896-3058-4338',
    '+62 896-9609-0575',
];
// foreach masing-masing number
let contactNames = [];
let notFounds = [];
function runApp(){
    var script = document.createElement('script');
    script.src = '//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js';
    script.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(script);
    $('#main header [role="button"]').click();
    // allGroupNumbers = $('#main header').children[1].children[1].innerText.split(', ');
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
            let contactName = document.querySelectorAll(`[title="${el}"]`)[0].parentElement.parentElement.parentElement.parentElement.children[1].children[1].children[0].innerText;
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
runApp();