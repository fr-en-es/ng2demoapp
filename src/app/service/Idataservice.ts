import { Observable } from 'rxjs/Rx';
export interface IDataService
{
    fetch(...args:any[]):Observable<Object>;
}