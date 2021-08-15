import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators"; 

 
export class DataService {
 
  constructor(private url: string, private http: HttpClient) { }
  
  getAll(){
    return this.http.get(this.url);
  }
  create(resource){
    return this.http.post(this.url, resource).pipe(map((res:any) => res));;
  }
  update(ressource){
    return this.http.put(this.url+'/'+ressource.id, ressource);
  }
  delete(ressource){
    return this.http.delete(this.url+'/'+ressource.id);
  }
}
