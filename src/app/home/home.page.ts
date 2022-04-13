import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  public nome1="";
  public nome2="";
  url ="http://lucasreno.kinghost.net/love-calculator/";
  public resultado=0
  mensagem =""
  constructor(
  public http:HttpClient,
  ) {}

enviarDados(){
this.http.get<any>(this.url+this.nome1+ "/"+ this.nome2).subscribe(
  (resposta:any)=>{
    this.resultado = resposta;
    if(this.resultado < 20 )this.mensagem = "Ta igual a Maria Rita";
   else if(this.resultado < 40)this.mensagem = "Iludido(a)";
   else if(this.resultado < 60)this.mensagem ="tem esperança";
    else if(this.resultado < 80)this.mensagem = " vai dar certo corre atras ";
    else this.mensagem = "sortudo";
}
);
}

}
