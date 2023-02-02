let ulDetector = [];
$(document).ready(async ()=>{
    if(window.localStorage.cpu==null||window.localStorage.lengh<=0){
        console.warn('localStorage is empty! Filling...')
        window.localStorage.setItem('cpu','undefined');
        window.localStorage.setItem('gpu','undefined');
        window.localStorage.setItem('mobo','undefined');
        window.localStorage.setItem('mem','undefined');
        window.localStorage.setItem('strge','undefined');
        window.localStorage.setItem('pwrsply','undefined');
        window.localStorage.setItem('mntr','undefined');
        console.log(`localStorage filled! ${window.localStorage}`)
    }
})

$(document).ready(async()=>{
    let windowLocation = window.location.pathname
    windowLocation=windowLocation.replace('/pages/','');windowLocation=windowLocation.replace('.html','');
    populateList(windowLocation);
})

async function populateList(pageName){
    pageName=pageName.toUpperCase();
    ulDetector = document.querySelectorAll('ul');
    let liElement = document.createElement('li');
    console.log(`populateList: Populating from ${pageName} in partStorage`)
    if(ulDetector.length>0){
        console.log('%cpopulateList: ul element found! Populating...','background-color:green; color:lightgreen;')
        for(let x=0;x<pageName.length;x++){
            console.log(pageName);
        }
    }else{
        console.error(`%cpopulateList: ul element not found! ${ulDetector[0]}`,'color:red;')
    }
}