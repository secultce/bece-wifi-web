import { Component, OnInit } from '@angular/core';
import {
   FormBuilder,
   FormControl,
   FormGroup,
   Validators,
} from '@angular/forms';
@Component({
   selector: 'app-modal-register-visitors',
   templateUrl: './modal-register-visitors.component.html',
   styleUrls: ['./modal-register-visitors.component.scss'],
})
export class ModalRegisterVisitorsComponent implements OnInit {
   public mask: string;
   constructor(private formBuilder: FormBuilder) {}

   ngOnInit(): void {}

   //  cpfcnpjmask() {
   //     const value = this.dadosBancariosForm.get('cpf_cnpj').value;
   //     console.log(value, value.length, this.dadosBancariosForm);
   //     if (value.length <= 14) {
   //        this.mask = '00.000.000/0000-00';
   //     } else {
   //        this.mask = '00.000.0000-00';
   //     }
   //  }
}
