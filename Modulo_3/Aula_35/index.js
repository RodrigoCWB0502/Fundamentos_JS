function register(element) {
  const username = element.children.username.value;
  const password = element.children.password.value;
  const passwordConfirmation = element.children.passwordConfirmation.value;

  // Verifica as Senhas
  if (password === passwordConfirmation) {
    alert('Usuário ' + username + ' registrado!');
  } else {
    alert('As senhas estão incorretas');
  }
}
