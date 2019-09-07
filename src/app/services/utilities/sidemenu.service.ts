import { Injectable } from '@angular/core';
import { HttpService } from '../api/http.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SidemenuService {
  constructor(private httpService: HttpService) {}

  get() {
    return this.httpService.get('assets/data/sidemenu.json').pipe(
      map(data => {
        return data;
      })
    );
  }
}
