document.getElementById('btn-submit').addEventListener('click', function(){

    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    const passField = document.getElementById('user-pass');
    const pass = passField.value;
    
    if(email === 'abcd@gmail.com' && pass === 'abcd'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Please enter valid information');
    }
})