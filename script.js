let formm=document.getElementById("form");

 const ta = document.querySelector("#tabll tbody");

formm.addEventListener("submit",function(ass){
     ass.preventDefault();
let nam=document.getElementById("name").value;
let sele=document.getElementById("sele").value;
let price=document.getElementById("price").value;
let but=document.getElementById("but");
let s = document.createElement("tr");
 const finalPrice = (price * 1.15).toFixed(0) + " ₸";
s.innerHTML =`
   <td>${nam}</td>
    <td>${sele}</td>
     <td>${price}</td>
     <td>${finalPrice}</td>
`
ta.appendChild(s);
 form.reset();
})
