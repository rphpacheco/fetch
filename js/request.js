//http://transparencia.portalfacil.com.br/api/clientes?type=json

const getData = async () => {
    const url = document.querySelector(['input']),
    code = document.querySelector('#results'),
    select = document.querySelector('#method'),
    method = select.value

    if(url.value) {
        code.innerHTML = await fetch(url.value, { method :  method })
            .then(res => res.text())
            .catch(error => error)
    } else {
        code.innerHTML = 'Please, enter a url for request data'
    }
}