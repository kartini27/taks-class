class bankAccount1{
    noRekening;
    saldo;
    setnoRekening(noRekening){
        this.noRekening = noRekening;
    }
    setSaldo(saldo){
        this.saldo = saldo;
    }
    setMenyimpanNorekening(noRekening){
        this.noRekening = noRekening
    }
    setMenyimpanSaldo(saldo){
        this.saldo = saldo
    }
    deposit(){
        let noRekening = 2707021231
        let setorUang = 4000000
        let deposit 
    if(this.noRekening == 2707021231){
        deposit = this.saldo + setorUang

    }
    return deposit 
    }
    tarikSaldo(){
        let noRekening = 2707021231
        let ambilUang = 1000000
        let tarikSaldo
        if(this.noRekening - ambilUang){
            tarikSaldo = this.deposit()- ambilUang
            console.log(this.deposit)
        }
        return tarikSaldo
    }
    ngecekSaldo(){
        let noRekening = 2707021231
        let ngecekSaldo 
        if (this.noRekening = true){
            this.ngecekSaldo = this.tarikSaldo()
        }
        return this.ngecekSaldo
    }
    
}
const atm1 =  new bankAccount1();
atm1.setnoRekening(2707021231);
atm1.setSaldo(4000000);

const atm1deposit = atm1.deposit();
const atm1tarikSaldo = atm1.tarikSaldo()
const atm1mengecekSaldo =

console.log("deposit =",atm1deposit)
console.log("tarikSaldo =", atm1mengecekSaldo)



console.log('============');
class bankAccount2{
    noRekening;
    saldo;
    setnoRekening(noRekening){
        this.noRekening = noRekening;
    }
    setSaldo(saldo){
        this.saldo = saldo;
    }
    setMenyimpanNorekening(noRekening){
        this.noRekening = noRekening
    }
    setMenyimpanSaldo(saldo){
        this.saldo = saldo
    }
    deposit(){
        let noRekening = 1817214563
        let setorUang = 450000
        let deposit 
    if(this.noRekening == 1817214563){
        deposit = this.saldo + setorUang

    }
    return deposit 
    }
    tarikSaldo(){
        let noRekening = 1817214563
        let ambilUang = 450000
        let tarikSaldo
        if(this.noRekening - ambilUang){
            tarikSaldo = this.deposit()- ambilUang
            console.log(this.deposit)
        }
        return tarikSaldo
    }
    ngecekSaldo(){
        let noRekening = 1817214563
        let ngecekSaldo 
        if (this.noRekening = true){
            this.ngecekSaldo = this.tarikSaldo()
        }
        return this.ngecekSaldo
    }
    
}
const atm2 =  new bankAccount2();
atm1.setnoRekening(1817214563);
atm1.setSaldo(450000);

const atm2deposit = atm2.deposit();
const atm2tarikSaldo = atm2.tarikSaldo()
const atm2mengecekSaldo =

console.log("deposit =",atm2deposit)
console.log("tarikSaldo =", atm2mengecekSaldo)
