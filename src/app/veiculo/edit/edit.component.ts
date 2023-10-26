import { Component, OnInit } from '@angular/core';
import { VeiculoService } from 'src/app/veiculoService/veiculo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Veiculo } from '../veiculoInterface/veiculo';
import { FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{

  id!: number;
  veiculo!: Veiculo;
  form!: FormGroup;
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public veiculoService: VeiculoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['veiculoId'];
    this.veiculoService.find(this.id).subscribe((data: Veiculo)=>{
      this.veiculo = data;
    }); 
      
    this.form = new FormGroup({
      marca: new FormControl('', [Validators.required]),
      modelo: new FormControl('', Validators.required)
    });
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  get f(){
    return this.form.controls;
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  submit(){
    console.log(this.form.value);
    this.veiculoService.update(this.id, this.form.value).subscribe((res:any) => {
         console.log('veiculo updated successfully!');
         this.router.navigateByUrl('veiculos');
    })
  }

}
