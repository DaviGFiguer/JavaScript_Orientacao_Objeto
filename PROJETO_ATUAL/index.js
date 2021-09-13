import {Cliente} from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 11122233309);




cliente1.agencia = 1001;
cliente1._saldo = 0;


const cliente2 = new Cliente();

//cliente2.nome = "Alice";
//cliente2.cpf = 88822233309;
//cliente2.agencia = 1001;
//cliente2._saldo = 0;



const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);

contaCorrenteRicardo.depositar(500);


const conta2 = new ContaCorrente(conta2, 102);
conta2.cliente = new Cliente("Alice", 8882223330);



//conta2.cliente = cliente2;
conta2.agencia = 102;

contaCorrenteRicardo.transferir(100, conta2);


console.log(ContaCorrente.numeroDeContas);