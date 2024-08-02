function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return {
        valid: re.test(email),
        error: re.test(email) ? '' : 'E-mail inválido.'
    };
}

function validatePassword(password) {
    // Verifica o comprimento mínimo da senha
    if (password.length < 8) {
        return false;
    }

    // Verifica se a senha contém pelo menos uma letra minúscula
    const hasLowerCase = /[a-z]/.test(password);
    if (!hasLowerCase) {
        return false;
    }

    // Verifica se a senha contém pelo menos uma letra maiúscula
    const hasUpperCase = /[A-Z]/.test(password);
    if (!hasUpperCase) {
        return false;
    }

    // Verifica se a senha contém pelo menos um número
    const hasNumber = /\d/.test(password);
    if (!hasNumber) {
        return false;
    }

    // Verifica se a senha contém pelo menos um caractere especial
    const hasSpecialChar = /[@$!%*?&]/.test(password);
    if (!hasSpecialChar) {
        return false;
    }

    // Se todas as condições forem atendidas, a senha é válida
    return true;
}

function validateCPF(cpf) {
    cpf = cpf.replace(/\D/g, '');
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return { valid: false, error: 'CPF inválido.' };

    let sum = 0;
    let remainder;

    for (let i = 1; i <= 9; i++) {
        sum += parseInt(cpf.charAt(i - 1)) * (11 - i);
    }

    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpf.charAt(9))) return { valid: false, error: 'CPF inválido.' };

    sum = 0;
    for (let i = 1; i <= 10; i++) {
        sum += parseInt(cpf.charAt(i - 1)) * (12 - i);
    }

    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpf.charAt(10))) return { valid: false, error: 'CPF inválido.' };

    return { valid: true, error: '' };
}

function validateNome(nome) {
    return {
        valid: nome !== '',
        error: nome !== '' ? '' : 'O nome é obrigatório.'
    };
}

function validateConfirmSenha(senha, confirmSenha) {
    return {
        valid: senha === confirmSenha,
        error: senha === confirmSenha ? '' : 'Senhas não conferem.'
    };
}

module.exports = {
    validateEmail,
    validatePassword,
    validateCPF,
    validateNome,
    validateConfirmSenha
};
