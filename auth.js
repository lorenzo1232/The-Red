
function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const errorEl = document.getElementById('error');

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      window.location.href = 'index.html'; // Redirigir al dashboard
    })
    .catch(error => {
      errorEl.textContent = error.message;
    });
}
