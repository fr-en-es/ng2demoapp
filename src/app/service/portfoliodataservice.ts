import { Inject, Injectable } from 'angular2/core';
import { Http, BaseRequestOptions, BaseResponseOptions,ConnectionBackend } from 'angular2/http';
import { IDataService } from '../service/Idataservice';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

 @Injectable()
export class PortfolioDataService implements IDataService
{
    http:Http
    portfoliodatasource:;
    constructor(http:Http)
    {
        this.http = http;
    }
    
    
    
    
    fetch( url?:String){
     //cache results   
     return this.http.get("mockdata/portfoliodata.json").map(o=> JSON.parse(o._body));
     }
    
   
    
}