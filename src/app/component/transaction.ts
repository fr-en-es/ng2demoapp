import {Component} from "angular2/core";

import { Filterpanel } from './filterpanel';
import { DataGrid } from './datagrid';


@Component({
   
    template:`<div class="portfolio">Transactions<tabnav></tabnav><filterpanel></filterpanel><datagrid></datagrid></div>`,
    directives:[Filterpanel,DataGrid]
})

export class Transactions{}
