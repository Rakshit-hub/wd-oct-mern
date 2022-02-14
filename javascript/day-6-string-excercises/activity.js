function authenticate(a,b){
    
    
    
    for (let i=0; i<a.length; i++){
        if(a[i]===b){
            result= 'authenticated'
            return result= 'authenticated'
        }else {
            result  = 'nonathenticated'
        }
    }return result
}
let passwords=['passwords123', 'dctacademy','qwerty','secret123','gopro123','harrypotter']
console.log(authenticate(passwords, 'rdnbc'))