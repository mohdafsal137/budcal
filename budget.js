//register

function register(){
    const ac={
        uname:uname.value,
        email:email.value,
        pswd:pswd.value
        
    }
    if(ac.uname==""||ac.email==""||ac.pswd==""){
        alert('fill all details')
    }
    else{
        if(ac.uname in localStorage){
            alert('account already exists')
        }
        else{
            localStorage.setItem(ac.uname,JSON.stringify(ac))
            alert('new account created sucessfully')
            window.location="./login.html"
        }
    }

}


//login page

function login(){
    let uname=document.getElementById('uname').value
    let pswd=document.getElementById('pswd').value
    if(uname==""||pswd==""){
        alert('fill all details')
    }
    else{
        if(uname in localStorage){
            let acc=JSON.parse(localStorage.getItem(uname))
            if(pswd==acc.pswd){
                localStorage.setItem('login',JSON.stringify(acc))
                alert('login sucessful')
window.location="./home.html"
            }
            else{
                alert('incorrect password')
            }
        }
        else{
            alert('account does not found')
        }
    }
}


//function add

let bal = {
    balance: 0,
    spend: 0
  };
  
  function add() {
    let type = document.getElementById('c_type').value;
    let amount = Math.floor(parseFloat(document.getElementById('amount').value));
  
    if (type === '' || isNaN(amount) || amount <= 0) {
      alert('Enter valid data');
    } else {
        alert('amount added sucessfully')
      bal.balance += amount;
      localStorage.setItem('balData', JSON.stringify(bal));
      b.innerHTML=`${bal.balance}`

      itable.innerHTML=`<tr>
<td>${type}</td>
<td>${amount}</td>
<td>${bal.balance}</td>
</tr>`

    }
  }

  //expense
  
  function addexpense() {
    let type1 = document.getElementById('type1').value;
    let amount1 = Math.floor(parseFloat(document.getElementById('amount1').value));
  
    if (type1 === '' || isNaN(amount1) || amount1 <= 0) {
      alert('Enter valid data');
    } else {
      if (amount1 <= bal.balance) {
        bal.spend += amount1;
        bal.balance -= amount1;
        localStorage.setItem('balData', JSON.stringify(bal));
        alert('amount is reduced from your balance sucessfully')
        s.innerHTML=`${bal.balance}`
etable.innerHTML=`<tr>
<td>${type1}</td>
<td>${amount1}</td>
<td>${bal.balance}</td>
</tr>`

      } else {
        alert('Insufficient balance');
      }
    }
  }

  
  window.onload = function () {
    const storedData = localStorage.getItem('balData');
    if (storedData) {
      bal = JSON.parse(storedData);


    }
  };

  //clear
  function clearall(){
    localStorage.removeItem(bal)
    
  }


  //log out

  function logout(){
    window.location="./login.html"
  }