import {Component, Input} from "angular2/core";
@Component({
    selector:"filterpanel",
   
    template:`<div class="filterpanel">Filterpanel
  
    <select name="select">
        <option *ngFor = "#key of mandatekeys;">{{key}}</option>
        
    </select>
    <select name="select">
        <option value="value1" selected>Account 1</option> 
        <option value="value2" >Account 2</option>
        <option value="value3">Account 3</option>
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