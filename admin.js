'use strict'
let username = document.getElementById('username')
let password = document.getElementById('password')
let login = document.getElementById('login')
let passwordBaru = document.getElementById('passwordBaru')
let akun = document.getElementById('akun')
let register = document.getElementById('register')
let pilih = document.getElementById('pilih')
let optionValue;
let admin = document.getElementById('admin')
let premium = document.getElementById('premium')
let kodeToken = 'AAA'
let token = document.getElementById('token')
let pembayaran = document.getElementById('pembayaran')
let akunAdmin = {}
let akunPremium = {}
let akunBiasa = {}
let semuaAkun = {
    admin: JSON.parse(localStorage.getItem('admin')),
    premium: JSON.parse(localStorage.getItem('premium')),
    biasa : JSON.parse(localStorage.getItem('biasa'))
}
let valueUsr;
let valuePass;


let select = () => {
    optionValue = pilih.value
    switch(optionValue) {
        case 'admin':
                admin.style.display = 'block'
                premium.style.display = 'none'
            break;
            case 'premium':
                premium.style.display = 'block'
                admin.style.display = 'none'
                break;
                case 'user':
                    admin.style.display = 'none'
                    premium.style.display = 'none'
                    break;
    }
}

let inLogin = () => {
    debugger;
    valueUsr = username.value
    valuePass = password.value
    for (let property in semuaAkun) {
        for (let isi in semuaAkun[property]) {
            if (isi === username.value && semuaAkun[property][isi] === password.value) {
                if (property === 'admin') {
                    login.setAttribute('href', 'https://rangki.github.io/')
                    console.log('bisa')
                    return
                } else if (property === 'premium') {
                    login.setAttribute('href', 'https://rangki.github.io/SimpleCalculatorJs/Cal.html')
                    console.log('bisa')
                    return
                } else {
                    login.setAttribute('href', 'https://www.youtube.com/')
                    console.log('bisa')
                    return
                }
            }
        }
    }
alert('username atau password mungkin salah')
}

let resgisterNow = () => {
    if (optionValue === 'admin') {
        if (token.value === kodeToken) {
            akunAdmin[akun.value] = passwordBaru.value
            token.value = ''
            akun.value = ''
            passwordBaru.value = ''
            console.log(akunAdmin)
            alert('akun berhasil dibuat')
            localStorage.setItem('admin', JSON.stringify(akunAdmin))
        } else {
            alert('token salah !')
            token.value = ''
        }
    } else if (optionValue === 'premium') {
        if (Number(pembayaran.value) >= 10000) {
            akunPremium[akun.value] = passwordBaru.value
            pembayaran.value = ''
            akun.value = ''
            passwordBaru.value = ''
            console.log(akunPremium)
            alert('akun berhasil dibuat')
            localStorage.setItem('premium', JSON.stringify(akunPremium))
        } else {
            alert('nominal pembayaran belum cukup')
            pembayaran.value = '' }
    } else {
        akunBiasa[akun.value] = passwordBaru.value
        akun.value = ''
        passwordBaru.value = ''
        console.log(akunBiasa)
        alert('akun berhasil dibuat')
        localStorage.setItem('biasa', JSON.stringify(akunBiasa))
    }
}

pilih.addEventListener('change', select)

register.addEventListener('click', resgisterNow)

