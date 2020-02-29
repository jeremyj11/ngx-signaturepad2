# NgxSignaturepad2Demo

Angular 8 component for [szimek/signature_pad](https://www.npmjs.com/package/signature_pad).

## Install
`npm install ngx-signaturepad2 --save`

## Reference Implementation
* [Source](https://github.com/jeremyj11/ngx-signaturepad2/)

## Usage example

API is identical to [szimek/signature_pad](https://www.npmjs.com/package/signature_pad).

Inputs:
* options are as per [szimek/signature_pad](https://www.npmjs.com/package/signature_pad)
* width: width of the canvas (px)
* height: height of the canvas (px)

```typescript

// import into app module

import { NgxSignaturepadModule } from 'ngx-signaturepad2';

...

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxSignaturepadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

// then import for use in a component

import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('signaturePad', { static: false }) signaturePad;

  width: number = 600;
  height: number = 300;
  options: any = null;

  constructor() { }

  isEmpty() {
    console.log('is empty', this.signaturePad.isEmpty());
  }

  savePng() {
    const data = this.signaturePad.toDataURL();
    console.log(data);
  }

  saveJpg() {
    const data = this.signaturePad.toDataURL("image/jpeg");
    console.log(data);
  }

  saveSvg() {
    const data = this.signaturePad.toDataURL("image/svg+xml");
    console.log(data);
  }

  saveArray() {
    const data = this.signaturePad.toData();
    console.log(data);
    console.log(JSON.stringify(data));
  }

  clear() {
    console.log('clear');
    this.signaturePad.clear();
  }

  changeOptions() {
    console.log('options changed');
    this.options = {
      minWidth: 5,
      maxWidth: 10,
      penColor: "rgb(66, 133, 244)"
    };
  }

  setSigArray() {
    let jsonString = '[{"color":"rgb(66, 133, 244)","points":[{"time":1582940095394,"x":267,"y":116}]},{"color":"rgb(66, 133, 244)","points":[{"time":1582940096537,"x":297,"y":115}]},{"color":"rgb(66, 133, 244)","points":[{"time":1582940097774,"x":239,"y":135},{"time":1582940097853,"x":240,"y":141},{"time":1582940097885,"x":242,"y":148},{"time":1582940097918,"x":244,"y":153},{"time":1582940097983,"x":248,"y":158},{"time":1582940098033,"x":252,"y":162},{"time":1582940098064,"x":257,"y":165},{"time":1582940098112,"x":264,"y":167},{"time":1582940098144,"x":271,"y":167},{"time":1582940098177,"x":284,"y":168},{"time":1582940098210,"x":295,"y":168},{"time":1582940098244,"x":302,"y":165},{"time":1582940098277,"x":309,"y":161},{"time":1582940098311,"x":315,"y":156},{"time":1582940098343,"x":322,"y":148},{"time":1582940098376,"x":325,"y":142},{"time":1582940098392,"x":330,"y":136},{"time":1582940098442,"x":333,"y":131}]}]';
    this.signaturePad.fromData(JSON.parse(jsonString));
  }

  //
  setSigString() {
    this.signaturePad.fromDataURL("data:image/png;base64,iVBORw...");
  }
}

```
HTML:

```html
<div style="border:1px solid red" [style.width]="width+'px'" [style.height]="height+'px'">

  <ngx-signaturepad #signaturePad [options]="options" [width]="width" [height]="height"></ngx-signaturepad>

</div>

<input type="button" value="Clear" (click)="clear()" />

<input type="button" value="Check Empty" (click)="isEmpty()" />

<input type="button" value="Set signature from string" (click)="setSigString()" />

<input type="button" value="Set signature from array" (click)="setSigArray()" />

<input type="button" value="Save png" (click)="savePng()" />

<input type="button" value="Save jpg" (click)="saveJpg()" />

<input type="button" value="Save svg" (click)="saveSvg()" />

<input type="button" value="Save array" (click)="saveArray()" />

<input type="button" value="Change draw style" (click)="changeOptions()" />
