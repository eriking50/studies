const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')
let func_chi = []

axios.get(url).then(response => {
    const funcionarios = response.data
    funcionarios.forEach(funcionario => {
        if (funcionario.pais == 'China' && 
            funcionario.genero == 'F') {
                func_chi.push(funcionario)
            }
    })
    var max_sal = 100000
    func_chi.forEach(fun_chi => {
        if(fun_chi.salario < max_sal){
            func_chi_menor_sal = fun_chi
            max_sal = fun_chi.salario
        }
    })
    console.log(func_chi_menor_sal)
})