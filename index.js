let data = [
  {
    principal: 2500,
    time: 1.8 
  },
   {
    principal: 1000,
    time: 5 
  },
   {
    principal: 3000,
    time: 1 
  },
   {
    principal: 2000,
    time: 3
  }
]

function siCalculator(obj) {
  if (obj) {
   let interest = ((obj.principal * obj.time * obj.rate) / 100)
    return interest;
  }
}

function interestCalculator (dataArray) {
  dataArray.forEach((obj) => {
    if (obj.principal >= 2500 && obj.time > 1 && obj.time < 3) {
        obj.rate = 3
        obj.interest = siCalculator(obj)
      } else if (obj.principal >= 2500 && obj.time >= 3) {
        obj.rate = 4
        obj.interest = siCalculator(obj)
      } else if ( obj.principal < 2500 || obj.time <= 1) {
        obj.rate = 2
        obj.interest = siCalculator(obj)
      } else {
        obj.rate = 1
        obj.interest = siCalculator(obj)
      }
  })
  console.log(dataArray);
  return dataArray;
}

interestCalculator(data);