import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Movie, MoviesDataTypeObject } from '../models/movie'
import { environment } from '../../environments/environment'
import { map } from 'rxjs'
import { CreditsDataTypeObject } from '../models/credits'
import { ImagesDataTypeObject } from '../models/image'
import { VideoDataTypeObject } from '../models/video'

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

  getMoviesByType(type: string, count = 20) {
    return this.http
      .get<MoviesDataTypeObject>(
        `${this.apiURL}/movie/${type}?api_key=${this.apiKey}`
      )
      .pipe(map((data) => data.results.slice(0, count))) // results containing the list of movies and slices it to return only the first count(20) items
  }

  getMovieById(id: string) {
    return this.http.get<Movie>(
      `${this.apiURL}/movie/${id}?api_key=${this.apiKey}`
    )
  }

  getMovieVideos(id: string) {
    return this.http
      .get<VideoDataTypeObject>(
        `${this.apiURL}/movie/${id}/videos?api_key=${this.apiKey}`
      )
      .pipe(map((data) => data.results))
  }

  getMovieImages(id: string) {
    return this.http
      .get<ImagesDataTypeObject>(
        `${this.apiURL}/movie/${id}/images?api_key=${this.apiKey}`
      )
      .pipe(map((data) => data.backdrops))
  }

  getMovieCast(id: string) {
    return this.http
      .get<CreditsDataTypeObject>(
        `${this.apiURL}/movie/${id}/credits?api_key=${this.apiKey}`
      )
      .pipe(map((data) => data.cast))
  }

  getMovieSimilar(id: string) {
    return this.http
      .get<MoviesDataTypeObject>(
        `${this.apiURL}/movie/${id}/similar?api_key=${this.apiKey}`
      )
      .pipe(map((data) => data.results.slice(0, 12)))
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
