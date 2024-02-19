// click now button
function handleClick() {
  const targetSectionId = this.getAttribute("data-target");
  const targetSection = document.getElementById(targetSectionId);
  
  if (targetSection) {
    targetSection.style.display = "block";
    targetSection.scrollIntoView({ behavior: "smooth" });
  }
}

const clickNowElement = document.getElementById("clickNow");
if (clickNowElement) {
  clickNowElement.addEventListener("click", handleClick);
}

// seats left  
const seats = document.getElementsByClassName("seat");
let selectedSeat = 0; 
let prices = 550;
let discount = 0;

function seatClickHandler(e) {
  selectedSeat++;
  if (selectedSeat === 4) {
    const disableBtn = document.getElementById("apply");
    disableBtn.removeAttribute("disabled");
  }

  // 4 seat alert notice
  if (selectedSeat > 4) {
    alert("Seat selection is restricted to a maximum of four seats per booking");
    return;
  }

  // show in UI
  const ui = document.getElementById("ui");
  const btnText = e.target.innerText;

  const div = document.createElement("div");
  div.classList.add("flex", "justify-between", "mt-4");
  ui.appendChild(div);

  const h1 = document.createElement("h1");
  h1.innerText = btnText;

  const p = document.createElement("p");
  p.innerText = "Economy";

  const price = document.createElement("p");
  price.innerText = prices;

  div.appendChild(h1);
  div.appendChild(p);
  div.appendChild(price);

  // total calculation
  const priceElement = document.getElementById("total");
  const priceNumber = parseInt(priceElement.innerText);
  priceElement.innerText = priceNumber + prices;

  // grand total
  const grandPriceElement = document.getElementById("grand-total");
  const grandPriceNumber = parseInt(grandPriceElement.innerText);
  grandPriceElement.innerText = grandPriceNumber + prices;

  // left seat validation
  const leftSeats = document.getElementById("out-seat");
  leftSeats.innerText--;

  // seat selection
  const selectSeatElement = document.getElementById("seat");
  selectSeatElement.innerText++;

  // twice select validation
  e.currentTarget.disabled = true;

  setBackgroundById(e.target.id);
}

for (let i = 0; i < seats.length; i++) {
  seats[i].addEventListener("click", seatClickHandler);
}

function setBackgroundById(id) {
  document.getElementById(id).style.backgroundColor = "gray";
}

  // interaction apply button
  function applyDiscount() {
    const grandPriceElement = document.getElementById("grand-total");
    const grandPrice = parseInt(grandPriceElement.innerText);
    
    const inputValue = document.getElementById("input").value;
    let discountPercentage = 0;
  
    switch(inputValue) {
      case "NEW15":
        discountPercentage = 0.15;
        break;
      case "Couple 20":
        discountPercentage = 0.2;
        break;
      default:
        alert("Invalid Coupon Code");
        return;
    }
  
    const discount = grandPrice * discountPercentage;
    const newGrandTotal = grandPrice - discount;
  
    grandPriceElement.innerText = newGrandTotal;
  
    const discountPriceElement = document.getElementById("discount");
    discountPriceElement.innerText = discount;
  
    const btn = document.getElementById("btn-div");
    btn.classList.add("hidden");
  }
  
  document.getElementById("apply").addEventListener("click", applyDiscount);
  
  
  // clear all process
  
  document.getElementById('next').addEventListener('click', redirectToCurrentPage);
  function redirectToCurrentPage() {
      window.location.href = window.location.href;
  }
  