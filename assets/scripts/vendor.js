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
                ulDetector[0].innerHTML+=`<li><div class="row"><div class="col" id="${CPU_LIST[x].name}">${CPU_LIST[x].name}</div>
                <div class="col">Base clock: ${CPU_LIST[x].base_clock}</div>
                <div class="col">Cores: ${CPU_LIST[x].cores}</div>
                <div class="col">Price: $${CPU_LIST[x].price}</div>
                </li>`
            }
        }
        if(listname==GPU_LIST){
            for(let x=0;x<listname.length;x++){
                ulDetector[0].innerHTML+=`<li><div class='row'><div class='col' id="${GPU_LIST[x].name}">${GPU_LIST[x].name}</div>
                <div class='col'>Memory Clock: ${GPU_LIST[x].memory_clock}</div>
                <div class='col'>Price: $${GPU_LIST[x].price}</div>
                </li>`
            }
        }
        if(listname==MOBO_LIST){
            for(let x=0;x<listname.length;x++){
                ulDetector[0].innerHTML+=`<li><div class='row'><div class='col' id="${MOBO_LIST[x].name}">${MOBO_LIST[x].name}</div>
                <div class="col"> Socket: ${MOBO_LIST[x].socket}</div>
                <div class='col'> Price: $${MOBO_LIST[x].price}</div>
                </li>`
            }
        }
        if(listname==MEM_LIST){
            for(let x=0;x<listname.length;x++){
                ulDetector[0].innerHTML+=`<li><div class='row'><div class='col' id="${MEM_LIST[x].name}">${MEM_LIST[x].name}</div> 
                <div class="col"> Memory Speed: ${MEM_LIST[x].speed}</div>
                <div class='col'> Price: $${MEM_LIST[x].price}</div>
                </li>`
            }
        }
        if(listname==STRGE_LIST){
            for(let x=0;x<listname.length;x++){
                ulDetector[0].innerHTML+=`<li><div class='row'><div class='col' id="${STRGE_LIST[x].name}">${STRGE_LIST[x].name}</div>
                <div class="col"> Capacity: ${STRGE_LIST[x].capacity}</div>
                <div class='col'> Price: $${STRGE_LIST[x].price}</div>
                <div class='col'> Type: ${STRGE_LIST[x].type}</div>
                </li>`
            }
        }
        if(listname==PWRSPLY_LIST){
            for(let x=0;x<listname.length;x++){
                ulDetector[0].innerHTML+=`<li><div class='row'><div class='col' id="${PWRSPLY_LIST[x].name}">${PWRSPLY_LIST[x].name}</div>
                <div class="col"> Wattage: ${PWRSPLY_LIST[x].wattage}</div>
                <div class='col'> Price: $${PWRSPLY_LIST[x].price}</div>
                </li>`
            }
        }
        if(listname==MNT_LIST){
            for(let x=0;x<listname.length;x++){
                ulDetector[0].innerHTML+=`<li><div class='row'><div class='col' id="${MNT_LIST[x].name}">${MNT_LIST[x].name}</div>
                <div class="col"> Resolution: ${MNT_LIST[x].resolution}</div>
                <div class='col'> refresh rate: ${MNT_LIST[x].refreshRate}</div>
                <div class='col'> Size: ${MNT_LIST[x].size}</div>
                <div class='col'> Price: $${MNT_LIST[x].price}</div>
                </li>`
            }
        }
    }else{
        console.error(`%cpopulateList: ul element not found! ${ulDetector[0]}`,'color:red;')
    }
    let temp = document.querySelectorAll("li")
    temp.forEach((item)=>{
        item.addEventListener('click',()=>{
            let windowLocation = window.location.pathname
            windowLocation=windowLocation.replace('/pages/','');windowLocation=windowLocation.replace('.html','');
            addToStorage(windowLocation,item.children[0].childNodes[0].id);
            window.location.href="/index.html"
        })
    })
}

async function addToStorage(part,name){
    window.localStorage[part]=name;
}

function clearStorage(){
    window.localStorage.clear();
}