const token = sessionStorage.getItem('token');


function Login(event) {
    event.preventDefault();
    window.location.href = '../LOGIN/Login.html'

}

function Signup(event) {
    event.preventDefault();
    window.location.href = '../SIGNUP/signup.html'
}

async function getformvalue(event) {
    event.preventDefault();
    const destination = document.getElementById('destination').value;
    const noofguest = document.getElementById('guest').value
    const checkin = document.getElementById('check-in').value;
    const checkout = document.getElementById('check-out').value;
    let gym = document.getElementById('gym').checked
    let pool = document.getElementById('pool').checked
    let spa = document.getElementById('spa').checked
    let resturant = document.getElementById('resturant').checked;

    console.log(destination, noofguest, checkin, checkout, gym, pool, spa, resturant);
    

    //const response=await axios.get(`http://localhost:4000/hotel/search-hotel`);

}



window.addEventListener('DOMContentLoaded', async () => {
    console.log(token);
    if (token) {
        document.getElementById('slbtn').hidden = true;
    }
})