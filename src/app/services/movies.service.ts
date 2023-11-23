import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { MoviesDataTypeObject } from '../models/movie'
import { environment } from '../../environments/environment'

/**
 * @Injectable({
  providedIn: 'root',
})
 * providedIn:  specifies where Angular should make the service available.
 * 'root', creates a global singleton instance. Services can also be limited to specific module. e.g in 'app.module' -> providers: [MoviesService]
 */
@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private apiURL = environment.apiURL
  private apiKey = environment.apiKey

  constructor(private http: HttpClient) {}

  getPopularMovies() {
    return this.http.get<MoviesDataTypeObject>(
      `${this.apiURL}/movie/popular?api_key=${this.apiKey}`
    )
  }
}

/**
 * structure of environment.ts
 *
 * export const environment = {
  production: false,
  apiURL: 'https://some.api.call',
  apiKey: 'some-api-key',
}

 */
