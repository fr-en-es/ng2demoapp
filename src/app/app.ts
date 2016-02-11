import {Component} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES, RouterLink} from "angular2/router";
import { Portfolio } from './component/portfolio';
import { Transactions } from './component/transaction';

@Component({
    selector:"app",
    template:`<div class="app">App
            <router-outlet></router-outlet>
    </div>`,
    directives:[ROUTER_DIRECTIVES, RouterLink]
})

@RouteConfig([
    {path:'/portfolio', name:'Portfolio', component:Portfolio},
    {path:'/transaction', name:'Transaction', component:Transactions}
])
export class App
{

}