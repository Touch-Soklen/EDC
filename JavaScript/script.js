function edc(obj){
    return document.getElementById(obj);
}
function Calculate(){
    var total = parseFloat(edc("txtnew").value) - parseFloat(edc("txtold").value);
    edc("name").innerHTML = edc("txtname").value;
    edc("telnum").innerHTML = "(+855)" + edc("txtnum").value;
    edc("old").innerHTML = edc("txtold").value + "Kw";
    edc("new").innerHTML = edc("txtnew").value + "Kw";
    edc("kwtotal").innerHTML = total + "Kw";
    Totals();
}
function validate() {
    if (txttrash.checked == 1) {
      edc("trash").innerHTML = "10000រៀល";
    } else if (txttrash.checked == 0) {
      edc("trash").innerHTML = "";
    }
}
function Totals() {
    var total = parseFloat(edc("txtnew").value) - parseFloat(edc("txtold").value);
    let grandTotal;
    if (total > 0 && total <= 50) {
      grandTotal = total * 500;
    } else if (total >= 51 && total <= 100) {
      grandTotal = total * 1000;
    } else if (total >= 101 && total <= 150) {
      grandTotal = total * 1500;
    } else if (total >= 151 && total <= 200) {
      grandTotal = total * 2000;
    } else {
      grandTotal = total * 2500;
    }
  
    if (txttrash.checked== 1) {
      const resultTotal = grandTotal + 10000 + "រៀល";
      return (edc("total").innerHTML = resultTotal);
    } else {
      const resultTotal = grandTotal + "រៀល";
      return (edc("total").innerHTML = resultTotal);
    }
  
  }
  
  function Del() {
    edc("txtname").value = "";
    edc("txtnum").value = "";
    edc("txtold").value = "";
    edc("txtnew").value = "";
    edc("txttrash").value = "";
  
    edc("name").innerHTML = "";
    edc("telnum").innerHTML = "";
    edc("old").innerHTML = "";
    edc("new").innerHTML = "";
    edc("kwtotal").innerHTML="";
    edc("trash").innerHTML = "";
    edc("total").innerHTML = "";
    txttrash.checked = 0;
  }
