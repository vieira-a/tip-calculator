function getBillValue() {
  let billValue = Number(document.querySelector('#bill').value)
  return billValue
}

function selectTip(clickedTip) {
  if (document.querySelector('#custom').value === '') {
    let tip = Number(clickedTip)
    return tip
    //console.log(tip)
  } else {
    tip = Number(document.querySelector('#custom').value)
    return tip
    //console.log(tip)
  }
}
