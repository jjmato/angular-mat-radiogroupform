import {Component} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

/**
 * @title Radios with ngModel
 */
@Component({
  selector: 'radio-ng-model-example',
  templateUrl: 'radio-ng-model-example.html',
  styleUrls: ['radio-ng-model-example.css'],
})
export class RadioNgModelExample {
  form: FormGroup;
  favoriteSeason: string;
  starters: string[] = ['Bulbasaur', 'Charmander', 'Squiertle'];

  constructor(
    private _fb: FormBuilder
  ) {
    this.form = this._fb.group({
      'pokemon':[
        '',
        [ Validators.required]
      ]
    });
  }
}


/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */