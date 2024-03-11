import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment'
import { TvshowsDto } from '../models/tvshows'
import { map } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class TvshowsService {
  private apiURL = environment.apiURL
  private apiKey = environment.apiKey

  constructor(private http: HttpClient) {}

  getTvShowsByType(type: string, count = 20) {
    return this.http
      .get<TvshowsDto>(`${this.apiURL}/tv/${type}?api_key=${this.apiKey}`)
      .pipe(map((data) => data.results.slice(0, count)))
  }
}
