var element = document.getElementById('team');
var computedStyles = window.getComputedStyle(element);
console.log("Asta e ceea ce ma intereseaza:: ");
console.log(computedStyles.getPropertyValue("border"));

