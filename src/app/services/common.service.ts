import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private counter = 0;

  constructor() { }

  public square(n: number): number {
    return n * n;
  }

  public getCounter(): number {
    return this.counter;
  }

  public setCounter(n: number): void{
    this.counter = n;
  }

  public submitData(data: any): void{
    console.log('Send data to server. Data = ', data)
  }
}
