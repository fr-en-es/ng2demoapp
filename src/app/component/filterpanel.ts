import {Component, Input} from "angular2/core";
@Component({
    selector:"filterpanel",
   
    template:`<div class="filterpanel">Filterpanel
  
    <select name="select">
        <option *ngFor = "#key of mandatekeys;">{{key}}</option>
        
    </select>
    <select name="select">
        <option value="value1" selected>Value 1</option> 
        <option value="value2" >Value 2</option>
        <option value="value3">Value 3</option>
    </select>
    </div>`
})

export class Filterpanel{
     @Input()
     mandatekeys;
     constructor()
     {
         
     }
    
}