import { Inject } from 'angular2/core';
import { IDataService } from '../service/Idataservice';
import { PortfolioDataService } from '../service/portfoliodataservice';
import { Observable } from 'rxjs/Rx';
import  'rxjs/add/operator/map';


export class PortfolioFilterModel
{
    constructor(@Inject (PortfolioDataService) private dataService:IDataService  )
    {
        
    }
    private portfoliodata:Observable<Object>;
   
    
     
    getAllMandates = ()=>{
        //process filterdata and get mandates
       
        this.portfoliodata = this.dataService.fetch()
            .map(
                (obj) => {
                    
                    return obj["accountinfo"].map((o)=> o["mandatekey"]);
                }
         )
         //.subscribe( (data)=> console.log("mandatekey   >> ", data))

        console.log("this.portfoliodata  ", this.portfoliodata);
        return this.portfoliodata;
    }

    
}