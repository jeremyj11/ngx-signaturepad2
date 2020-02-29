import { Component, OnInit, ElementRef, Input } from '@angular/core';
import SignaturePad from 'signature_pad';

@Component({
  selector: 'ngx-signaturepad',
  template: '<canvas [width]="_width" [height]="_height" style="touch-action: none;"></canvas>',
  styles: []
})
export class NgxSignaturepadComponent implements OnInit {
  public _width: number = 200;
  public _height: number = 200;
  public _options: any = {};

  private _canvas: any;
  private _signaturePad: any;

  @Input() set options(options: any) {
    this._options = options;
    if (this._signaturePad) {
      this._signaturePad = new SignaturePad(this._canvas, this._options || {});
    }
  };

  @Input() set width(value: number) {
    this._width = value;
  }

  @Input() set height(value: number) {
    this._height = value;
  }

  constructor(
    private _el: ElementRef
  ) { }

  ngOnInit() {
    if (this.options) {
      this._options = this.options;
    }
  }

  ngAfterViewInit(): void {
    this._canvas = this._el.nativeElement.querySelector("canvas");
    this._signaturePad = new SignaturePad(this._canvas, this._options || {});
  }

  toDataURL(type = null): string {
    return this._signaturePad.toDataURL(type);
  }

  fromDataURL(data: string): void {
    this._signaturePad.fromDataURL(data);
  }

  toData(): any {
    return this._signaturePad.toData();
  }

  fromData(data: any): void {
    this._signaturePad.fromData(data);
  }

  clear(): void {
    this._signaturePad.clear();
  }

  isEmpty(): boolean {
    return this._signaturePad.isEmpty();
  }

  off(): void {
    this._signaturePad.off();
  }

  on(): void {
    this._signaturePad.on();
  }
}