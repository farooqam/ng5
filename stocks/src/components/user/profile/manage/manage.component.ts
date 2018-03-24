import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { StockService } from '../../../../services/stock/stock.service';

@Component({
  selector: 'stock-user-profile-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
  formModel: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _stockService: StockService) { 
    
      this.formModel = _formBuilder.group({
      'symbolToAdd': [''],
      'profileSymbols': _formBuilder.array([])
    });
  }

  ngOnInit() {
    this.setSymbolToAdd('');
    this.formModel.setControl('profileSymbols', this._formBuilder.array(this._stockService.get()));
  }

  getProfileSymbols(): FormArray {
    return this.formModel.get('profileSymbols') as FormArray;
  }

  addSymbol(): void {
    let model = this.formModel.value;
    let symbolToAdd = model.symbolToAdd;
    this.getProfileSymbols().insert(0, new FormControl(symbolToAdd.toUpperCase()));
    this.setSymbolToAdd('');
  }

  removeSymbol(index: number): void {
    this.getProfileSymbols().removeAt(index);
    this.setSymbolToAdd('');
  }

  private setSymbolToAdd(symbol): void {
    this.formModel.setControl('symbolToAdd', new FormControl(symbol));
  }
}
