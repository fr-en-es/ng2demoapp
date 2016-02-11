import {Component, Directive} from "angular2/core";
import { RouterLink} from 'angular2/router';
@Component({
    selector:"tabnav",
   
    template:`<div class="tabnav">Tabbed Navigation
     <button>Portfolio</button>
     <button>Transactions</button>
    </div>`,
    directives:[RouterLink]
    
    
})

export class TabbedNavigation{
    
    constructor(){
        
        Object.getOwnPropertyDescriptor(this, "Component");
    }
    
}