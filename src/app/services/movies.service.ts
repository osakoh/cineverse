import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Movie, MoviesDataTypeObject } from '../models/movie'

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
  constructor(private http: HttpClient) {}

  getPopularMovies() {
    return this.http.get<MoviesDataTypeObject>(
      'https://api.themoviedb.org/3/movie/popular?api_key='
    )
  }
}
