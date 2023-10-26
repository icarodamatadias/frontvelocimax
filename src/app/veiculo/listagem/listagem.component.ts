import { Component, OnInit } from '@angular/core';
import { VeiculoService } from 'src/app/veiculoService/veiculo.service';
import { Veiculo } from '../veiculoInterface/veiculo';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit{
 

  veiculos: Veiculo[] = [];
  
  constructor(public veiculoService: VeiculoService) { }  

  ngOnInit(): void {
    this.veiculoService.getAll().subscribe((data: Veiculo[])=>{
      this.veiculos = data;
      console.log(this.veiculos);
      console.log(this.veiculos);
      //alert(this.veiculos);
    }) 
     
  }

  deleteveiculo(id:number){
    this.veiculoService.delete(id).subscribe(res => {
         this.veiculos = this.veiculos.filter(item => item.id !== id);
         console.log('Veiculo deleted successfully!');
    })
  }
}
