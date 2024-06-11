// product image change 

const image = document.getElementById("default_image");
function showTab(tabName) {
    const tabContents = document.getElementsByClassName('tab-content');
    for (const tabContent of tabContents) {
        tabContent.style.display = 'none';
    }
    const selectedTab = document.getElementById(tabName);
    selectedTab.style.display = 'block';
}
function myFunction(imgs) {
    image.style.display = "none";
    var expandImg = document.getElementById("expandedImg");
    expandImg.src = imgs.src;
    // imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
}


const image2 = document.getElementById("default_image2");
function showTab(tabName) {
    const tabContents = document.getElementsByClassName('tab-content');
    for (const tabContent of tabContents) {
        tabContent.style.display = 'none';
    }
    const selectedTab = document.getElementById(tabName);
    selectedTab.style.display = 'block';
}
function Product2(imgs) {
    image2.style.display = "none";
    let expandImg = document.getElementById("expandedImg2");
    expandImg.src = imgs.src;
    // imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
}


const image3 = document.getElementById("default_image3");
function showTab(tabName) {
    const tabContents = document.getElementsByClassName('tab-content');
    for (const tabContent of tabContents) {
        tabContent.style.display = 'none';
    }
    const selectedTab = document.getElementById(tabName);
    selectedTab.style.display = 'block';
}
function Product3(imgs) {
    image3.style.display = "none";
    let expandImg = document.getElementById("expandedImg3");
    expandImg.src = imgs.src;
    // imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
}


const image4 = document.getElementById("default_image4");
function showTab(tabName) {
    const tabContents = document.getElementsByClassName('tab-content');
    for (const tabContent of tabContents) {
        tabContent.style.display = 'none';
    }
    const selectedTab = document.getElementById(tabName);
    selectedTab.style.display = 'block';
}
function Product4(imgs) {
    image4.style.display = "none";
    let expandImg = document.getElementById("expandedImg4");
    expandImg.src = imgs.src;
    // imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
}



//add cart (count + )


let icn = 0;
const a = document.getElementById("add");
a.addEventListener('click', num);
function num() {
    icn++;
    shop.innerHTML = icn;
}

let iaon = 0;
const b = document.getElementById('added');
b.addEventListener('click', num);
function num() {
    iaon++;
    shop.innerText = iaon;
}

let add = 0;
const c = document.getElementById('and');
c.addEventListener('click', num);
function num() {
    add++;
    shop.innerText = add;
}

let soni = 0;
const d = document.getElementById('soni');
d.addEventListener('click', num);
function num() {
    soni++;
    shop.innerText = soni;
}
