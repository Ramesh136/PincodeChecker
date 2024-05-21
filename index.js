const btn = document.getElementsByClassName('btn')[0]
const postalApi = 'https://api.postalpincode.in/pincode/'

btn.addEventListener('click',async ()=>{

  
    let input = document.getElementById('input')
    if(!input.value){
      alert("enter pincode")
    }
    let data = await fetch(postalApi+input.value)
    let json = await data.json()
    let message = document.getElementById('message')
    console.log(json[0])
    if (json[0].Status === "Success") {
      message.innerHTML = json[0].PostOffice.map((element)=>{
        return `<h5>${element.Name} - ${element.DeliveryStatus}</h5>`;
      }).join("")
    } else {
      message.innerHTML = `<h5>Check Pincode and try again</h5>`
      setTimeout(()=>{
        message.innerHTML= ''
      },1000)
      console.log("false");
    }
})