import {Component} from '@angular/core';
import {ColSize, DynamicFormOption} from './dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  options: DynamicFormOption[] = [
    {
      desc: '',
      required: true,
      type: 'text',
      label: 'First Name',
      name: 'firstName',
      sizeXl: ColSize.col4,
      sizeLg: ColSize.col4,
      sizeMd: ColSize.col4,
      sizeSm: ColSize.col6,
      sizeXs: ColSize.col12,
      min: 3,
      max: 10,
    },
    {
      desc: '',
      required: true,
      type: 'date',
      label: 'Date Please',
      name: 'datePlease',
      sizeXl: ColSize.col4,
      sizeLg: ColSize.col4,
      sizeMd: ColSize.col4,
      sizeSm: ColSize.col6,
      sizeXs: ColSize.col12,
      min: '2019-03-01',
      max: '2019-05-31',
    },
    {
      desc: '',
      required: true,
      type: 'range',
      label: 'Range Input',
      name: 'rangeInput',
      sizeXl: ColSize.col4,
      sizeLg: ColSize.col4,
      sizeMd: ColSize.col4,
      sizeSm: ColSize.col6,
      sizeXs: ColSize.col12,
      min: 3,
      max: 10,
    },
    {
      desc: '',
      required: true,
      type: 'password',
      label: 'Password',
      name: 'password',
      sizeXl: ColSize.col4,
      sizeLg: ColSize.col4,
      sizeMd: ColSize.col4,
      sizeSm: ColSize.col6,
      sizeXs: ColSize.col12,
      min: 3,
      max: 10,
    },
    {
      desc: '',
      required: true,
      type: 'email',
      label: 'Email',
      name: 'email',
      sizeXl: ColSize.col4,
      sizeLg: ColSize.col4,
      sizeMd: ColSize.col4,
      sizeSm: ColSize.col6,
      sizeXs: ColSize.col12,
      min: 3,
      max: 10,
    },
    {
      desc: '',
      required: true,
      type: 'radio',
      label: 'Gender',
      name: 'gender',
      sizeXl: ColSize.col4,
      sizeLg: ColSize.col4,
      sizeMd: ColSize.col4,
      sizeSm: ColSize.col6,
      sizeXs: ColSize.col12,
      min: 3,
      max: 10,
      dataProvider: [
        {
          id: 'gender_male',
          label: 'Male',
          value: 'male',
        },
        {
          id: 'gender_female',
          label: 'Female',
          value: 'female',
        },
      ],
    },
    {
      desc: '',
      required: true,
      type: 'select',
      label: 'City',
      name: 'city',
      sizeXl: ColSize.col4,
      sizeLg: ColSize.col4,
      sizeMd: ColSize.col4,
      sizeSm: ColSize.col6,
      sizeXs: ColSize.col12,
      min: 0,
      max: 0,
      dataProvider: [
        {
          id: 'city1',
          label: 'City 1',
          value: 'city1',
        }, {
          id: 'city2',
          label: 'City 2',
          value: 'city2',
        }, {
          id: 'city3',
          label: 'City 3',
          value: 'city3',
        }, {
          id: 'city4',
          label: 'City 4',
          value: 'city4',
        }, {
          id: 'city5',
          label: 'City 5',
          value: 'city5',
        },
      ],
    },
    {
      desc: '',
      required: false,
      type: 'checkbox',
      label: 'Gender',
      name: 'checkbox',
      sizeXl: ColSize.col4,
      sizeLg: ColSize.col4,
      sizeMd: ColSize.col4,
      sizeSm: ColSize.col6,
      sizeXs: ColSize.col12,
      min: 2,
      max: 4,
      dataProvider: [
        {
          id: 'checkbox_1',
          label: 'Value 1',
          value: 'value1',
        },
        {
          id: 'checkbox_2',
          label: 'Value 2',
          value: 'value2',
        },
        {
          id: 'checkbox_3',
          label: 'Value 3',
          value: 'value3',
        },
        {
          id: 'checkbox_4',
          label: 'Value 4',
          value: 'value4',
        },
        {
          id: 'checkbox_5',
          label: 'Value 5',
          value: 'value5',
        },
      ],
    },
  ];
  isValid = false;
  data = {
    checkbox: [],
    gender: ''
  };
  title = 'dynamic-form';
}
