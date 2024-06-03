export function useForm(event, validate) {
  if (validate === "letras") {
    const regex = /[a-zA-ZÀ-ú ]/;
    const key = event.key;
    if (
      !regex.test(key) &&
      key !== "Backspace" &&
      key !== "Delete" &&
      !event.ctrlKey &&
      !event.metaKey
    ) {
      event.preventDefault();
    }
  }

  if (validate === "numeros") {
    const regex = /[0-9]/;
    const key = event.key;
    if (
      !regex.test(key) &&
      key !== "Backspace" &&
      key !== "Delete" &&
      !event.ctrlKey &&
      !event.metaKey
    ) {
      event.preventDefault();
    }
  }

  if (validate === "cpf") {
    const key = event.key;
    if (
      !/[0-9]/.test(key) &&
      key !== "Backspace" &&
      key !== "Delete" &&
      !event.ctrlKey &&
      !event.metaKey
    ) {
      event.preventDefault();
    } else {
      setTimeout(() => {
        event.target.value = formatCPF(event.target.value);
      }, 0);
    }
  }

  if (validate === "telefone") {
    const key = event.key;
    if (/[0-9]/.test(key)) {
      event.target.value = formatPhoneNumber(event.target.value);
    } else if (
      !/[0-9]/.test(key) &&
      key !== "Backspace" &&
      key !== "Delete" &&
      !event.ctrlKey &&
      !event.metaKey
    ) {
      event.preventDefault();
    }
  }
}

function formatPhoneNumber(value) {
  const cleaned = value.replace(/\D/g, "");

  const formatted = cleaned.replace(/(\d{1})(\d{4})(\d{4})/, "$1 $2-$3");
  return formatted;
}

function formatCPF(value) {
  // Remove todos os caracteres não numéricos
  const cleaned = value.replace(/\D/g, "");
  // Aplica a formatação desejada (XXX.XXX.XXX-XX)
  const formatted = cleaned.replace(
    /(\d{3})(\d{3})(\d{3})(\d{2})/,
    "$1.$2.$3-$4"
  );
  return formatted.substring(0, 14); // Limita a string a 14 caracteres
}
