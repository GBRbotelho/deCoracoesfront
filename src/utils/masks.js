export function maskCep(value) {
  // Remove tudo que não é dígito
  value = value.replace(/\D/g, "");

  // Aplica a máscara do CEP
  if (value.length > 5) {
    value = value.replace(/^(\d{5})(\d{1,3})/, "$1-$2");
  }

  return value;
}

export function maskPhone(value) {
  // Remove tudo que não é dígito
  value = value.replace(/\D/g, "");

  // Aplica a máscara de telefone (formato (XX) XXXXX-XXXX ou (XX) XXXX-XXXX)
  if (value.length > 10) {
    value = value.replace(/^(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  } else if (value.length > 5) {
    value = value.replace(/^(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
  } else if (value.length > 2) {
    value = value.replace(/^(\d{2})(\d{0,5})/, "($1) $2");
  }

  return value;
}

export function maskCpf(value) {
  // Remove tudo que não é dígito
  value = value.replace(/\D/g, "");

  // Aplica a máscara de CPF (XXX.XXX.XXX-XX)
  if (value.length > 9) {
    value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  } else if (value.length > 6) {
    value = value.replace(/^(\d{3})(\d{3})(\d{0,3})/, "$1.$2.$3");
  } else if (value.length > 3) {
    value = value.replace(/^(\d{3})(\d{0,3})/, "$1.$2");
  }

  return value;
}

export function maskLetter(value) {
  // Remove tudo que não é letra ou espaço
  return value.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");
}
