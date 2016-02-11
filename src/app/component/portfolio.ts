import {Component, Input, Inject} from "angular2/core";

import { Filterpanel } from './filterpanel';
import { DataGrid } from './datagrid';
import { TabbedNavigation } from './tabnav';
import { PortfolioFilterModel } from '../model/portfoliofiltermodel';
import { IDataService } from '../service/IDataService';


@Component({
   
    template:`<div class="portfolio">
            <button (click)="clickme($event)">clickme</button> Portfolio
            <tabnav></tabnav>
            <filterpanel [mandatekeys]="mandatekeys"></filterpanel>
            <datagrid></datagrid>
            </div>`,
    directives:[Filterpanel,DataGrid, TabbedNavigation],
    providers:[PortfolioFilterModel]
    
})

export class Portfolio{
    @Input()
    label:String = "somelabel";
    mandatekeys:Object;
    constructor(filterdatamodel:PortfolioFilterModel){
       let mandates = filterdatamodel.getAllMandates()
                        .subscribe( (data) => {
                            this.mandatekeys = data;
                            console.log("mandatekeys   >> ", data)
                        }
                        );
        
    }
    
    clickme(){
       /* console.log("label ", this.label);
        console.log("reflect api ", Reflect.getOwnMetadataKeys(Portfolio));
        console.log("metadata ", Reflect.getMetadata("propMetadata", Portfolio));
        console.log("metadata ", Reflect.getMetadata("annotations", Portfolio));*/
    }
}
    