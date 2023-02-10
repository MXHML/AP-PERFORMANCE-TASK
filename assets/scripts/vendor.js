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
})


async function populateList(listname){
    let createLiElement = document.createElement("li")
    ulDetector = document.querySelectorAll('ul');
    console.log(listname.length)
    console.log(`populateList: Populating from ${listname} in partStorage`)
    if(ulDetector.length>0){
        console.log('%cpopulateList: ul element found! Populating...','background-color:green; color:lightgreen;')
        if(listname==CPU_LIST){
            for(let x=0;x<listname.length;x++){
                ulDetector[0].innerHTML+=`<li><div class="row"><div class="col">${CPU_LIST[x].name}</div> <div class="col">Base clock: ${CPU_LIST[x].base_clock}</div><div class="col">Cores: ${CPU_LIST[x].cores}</div><div class="col">Price: ${CPU_LIST[x].price}</div></li>`
            }
        }
        if(listname==GPU_LIST){
            for(let x=0;x<listname.length;x++){
                ulDetector[0].innerHTML+=`<li><div class='row'><div class='col'>${GPU_LIST[x].name}</div> <div class='col'>Memory Clock: ${GPU_LIST[x].memory_clock}</div></li>`
            }
        }
        if(listname==MOBO_LIST){
            for(let x=0;x<listname.length;x++){
                ulDetector[0].innerHTML+=`<li>${MOBO_LIST[x].name} Socket: ${MOBO_LIST[x].socket}</li>`
            }
        }
        if(listname==MEM_LIST){
            for(let x=0;x<listname.length;x++){
                ulDetector[0].innerHTML+=`<li>${MEM_LIST[x].name} Memory Speed: ${MEM_LIST[x].speed}</li>`
            }
        }
        if(listname==STRGE_LIST){
            for(let x=0;x<listname.length;x++){
                ulDetector[0].innerHTML+=`<li>${STRGE_LIST[x].name} Capacity: ${STRGE_LIST[x].capacity}</li>`
            }
        }
        if(listname==PWRSPLY_LIST){
            for(let x=0;x<listname.length;x++){
                ulDetector[0].innerHTML+=`<li>${PWRSPLY_LIST[x].name} Wattage: ${PWRSPLY_LIST[x].wattage}</li>`
            }
        }
        if(listname==MNT_LIST){
            for(let x=0;x<listname.length;x++){
                ulDetector[0].innerHTML+=`<li>${MNT_LIST[x].name} Resolution: ${MNT_LIST[x].resolution}</li>`
            }
        }
    }else{
        console.error(`%cpopulateList: ul element not found! ${ulDetector[0]}`,'color:red;')
    }
    let temp = document.querySelectorAll("li")
    temp.forEach((item)=>{
        item.addEventListener('click',()=>{
            
        })
    })
}

async function addToStorage(part,name){
    window.localStorage[part]=name
}