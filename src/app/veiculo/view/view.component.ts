import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Veiculo } from '../veiculoInterface/veiculo';
import { VeiculoService } from 'src/app/veiculoService/veiculo.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {

  id!: number;
  veiculo!: Veiculo;

  constructor(
    public veiculoService: VeiculoService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
   
  ngOnInit(): void {
    this.id = this.route.snapshot.params['veiculoId'];
        
    this.veiculoService.find(this.id).subscribe((data: Veiculo)=>{
      this.veiculo = data;
    });
  }
}
