const pil = document.querySelectorAll("#pil line");
for (let i = 0; i < pil.length; i++) {
console.log(`Letter ${i} is ${pil[i].getTotalLength()}`);
}

setTimeout(function() {
  window.location.href = "https://gagamamma.github.io/slider/SamuelsTotalservice/hem.html";
}, 4500);
