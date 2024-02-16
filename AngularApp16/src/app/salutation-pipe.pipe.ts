import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salutationPipe'
})
export class SalutationPipePipe implements PipeTransform {

  transform(value: string, Gender: string): string {
    if(Gender == 'Male')
    return "Mr. "+value;
    else
    return "Miss. "+value;
  }

}
