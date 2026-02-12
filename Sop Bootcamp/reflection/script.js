const input = document.querySelector('input');
const submitButton = document.querySelector('.submit');
const container = document.querySelector('.main');
const modal = document.querySelector('.modal');

const selectAll = document.querySelector('.selectall');


input.addEventListener('keypress', function(e) {
    if(e.key== 'Enter'){
addText();   
 }
});
let count = 0;

submitButton.addEventListener('click', addText);

function addText(e) {
    if((input.value).trim() == ""){
        return;
    }
    const btn = document.createElement('button');
    btn.textContent = 'Open Modal';
    const data = input.value;
    const minicontainer = document.createElement('div');
    minicontainer.textContent = data;
    minicontainer.appendChild(btn);
    container.append(minicontainer);
    input.value = '';

const modal = document.createElement("div");
const heading = document.createElement("h1");
const yesBtn = document.createElement("button");
const noBtn = document.createElement("button");
modal.classList.add("modal");
yesBtn.classList.add("yes");
noBtn.classList.add("no");
heading.textContent = "Are you Sure";
yesBtn.textContent = "Yes";
noBtn.textContent = "No";
modal.appendChild(heading);
modal.appendChild(yesBtn);
modal.appendChild(noBtn);
document.body.appendChild(modal);
btn.addEventListener('click', function(e) {
    const count = countCheck();
    const h2 = document.createElement('h2');
    h2.textContent = count;
    modal.appendChild(h2);
    modal.style.display = 'flex';
    });

yesBtn.addEventListener("click", function() {
    modal.style.display = "none";
    minicontainer.remove();

});

noBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

const check  = document.createElement('input');
check.setAttribute('type', 'checkbox');
minicontainer.appendChild(check);

selectAll.addEventListener('click', function() {
    if(check.checked) {
        check.checked = false;
    } else {    
    check.checked  = true;
    }
});

  
}

function countCheck(){
    const childrens = container.querySelectorAll('div');
    let checkedCount = 0;
    
    childrens.forEach(function(child){
        const checkbox = child.querySelector('input');
        // console.log(checkbox.checked);
        if(checkbox.checked) {
            checkedCount++;
        }
    
    })
   return checkedCount;
}