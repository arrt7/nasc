const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");
const formDoacao = document.getElementById("form-doacao");
const msgSucesso = document.getElementById("msg-sucesso");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

formDoacao.addEventListener("submit", (e) => {
  e.preventDefault();

  // Validação CPF simples (apenas números e 11 dígitos)
  const cpf = formDoacao.cpf.value.replace(/\D/g, '');
  if (cpf.length !== 11) {
    alert("Por favor, insira um CPF válido com 11 números.");
    return;
  }

  // Aqui você pode adicionar mais validações se quiser

  // Se passou, mostra mensagem sucesso e reseta form
  msgSucesso.style.display = "block";
  formDoacao.reset();

  // Fecha menu se estiver aberto (mobile)
  if (navbar.classList.contains("active")) {
    navbar.classList.remove("active");
  }
});