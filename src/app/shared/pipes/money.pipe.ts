import { Pipe } from '@angular/core';

@Pipe({
  name: 'money',
})
export class MoneyPipe {
  transform(value: string){
    return `R$ ${value}`;
  }

}
