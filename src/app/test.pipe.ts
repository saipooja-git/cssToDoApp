import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test',
  standalone: true
})
export class TestPipe implements PipeTransform {

  transform(name: string, person: { name: string; gender: string }): string {
    if (person.gender === "f") {
      return `Hello Miss ${person.name}, you're learning ${name}`;
    } else {
      return `Hello Mr ${person.name}, you're learning ${name}`;
    }
  }

}
