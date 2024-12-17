import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): any {
    if(!value)
      return null;

    
      let words = value.split(' ')
      for(var i=0;i<words.length;i++){
        if(this.isPreposition(words[i]) && i>0 )
        {
          words[i]=words[i].toLowerCase();
        }
        else{
          words[i]=this.toTitleCase(words[i]);
        }

      }
      return words.join(' ');   
  }

  private toTitleCase(words:string):string{
    words =words.substring(0,1).toUpperCase() + words.substring(1).toLowerCase();
    return words;
  }
  private isPreposition(word:string):boolean{
    let prepositions = [
      'of',
      'the'
    ];
  
   return prepositions.includes(word.toLowerCase())
  }
 
}
