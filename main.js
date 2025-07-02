var sliderimgs = Array.from(
  document.querySelectorAll(".slider-container  img")
);
var slidesize = sliderimgs.length;
console.log(sliderimgs.length);
var currentslide = 1;
var slidenum = document.getElementById("slide-number");

var next = document.getElementById("next");
var prev = document.getElementById("prev");

prev.onclick=prevslide;
next.onclick=nextslide;


function nextslide() {
 
  if(next.classList.contains("disabled")){
    return false
  }
  else{
 currentslide++;
  thechecker()

  }
}

function prevslide() {
  

  if(prev.classList.contains("disabled")){
    return false
  }
  else{
    currentslide--;
  thechecker()

  }
}


var paginationElement =document.createElement("ul");
paginationElement.setAttribute('id', 'pagination-ul');
for(var i=1;i<=slidesize;i++){
var paginationItem =document.createElement("li");
paginationItem.setAttribute('data-index', i);
paginationItem.appendChild(document.createTextNode(i));
paginationElement.appendChild(paginationItem);
}
document.getElementById('indicators').appendChild(paginationElement);



var paginationCreatedUl = document.getElementById('pagination-ul');


var paginationsBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

for (var i = 0; i < paginationsBullets.length; i++) {

  paginationsBullets[i].onclick = function () {

    currentslide = parseInt(this.getAttribute('data-index'));

    thechecker();
  }

}

// Get Pagination Items | Array.form [ES6 Feature]

function thechecker(){

slidenum.textContent=(currentslide) +"/"+(slidesize)
removeActive()
 
sliderimgs[currentslide - 1].classList.add('active');
paginationCreatedUl.children[currentslide - 1].classList.add('active');

if (currentslide==1){
    prev.classList.add("disabled")
}

else{
    prev.classList.remove("disabled")
}

if (currentslide==slidesize){
    next.classList.add("disabled")
}

else{
    next.classList.remove("disabled")
}


}
thechecker();

function removeActive(){
    sliderimgs.forEach(function(img){
img.classList.remove("active")
    })



paginationsBullets.forEach(function (bullet) {

    bullet.classList.remove('active');

  });


}