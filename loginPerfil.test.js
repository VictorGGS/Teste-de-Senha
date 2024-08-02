const {validatePassword} = require('./loginPerfil')

it('Senha', () => {
    //"String" = 'suns 2 numbers' -> Não tem importância na execuçõa, mas é a especificação do código
    expect(validatePassword('20Jul2017')). toBe(false)
})
it('Senha', () => {
    //"String" = 'suns 2 numbers' -> Não tem importância na execuçõa, mas é a especificação do código
    expect(validatePassword('%20Jul2017')). toBe(true)
})