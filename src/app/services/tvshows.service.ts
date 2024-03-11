import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment'
import { Tvshow, TvshowsDto } from '../models/tvshows'
import { map } from 'rxjs'
import { VideoDataTypeObject } from '../models/video'
import { ImagesDataTypeObject } from '../models/image'
import { CreditsDataTypeObject } from '../models/credits'

@Injectable({
  providedIn: 'root',
})
export class TvShowsService {
  private apiURL = environment.apiURL
  private apiKey = environment.apiKey

  constructor(private http: HttpClient) {}

  getTvShowsByType(type: string, count = 20) {
    return this.http
      .get<TvshowsDto>(`${this.apiURL}/tv/${type}?api_key=${this.apiKey}`)
      .pipe(map((data) => data.results.slice(0, count)))
  }

  getTvShowById(id: string) {
    return this.http.get<Tvshow>(
      `${this.apiURL}/tv/${id}?api_key=${this.apiKey}`
    )
  }

  getTvShowVideos(id: string) {
    return this.http
      .get<VideoDataTypeObject>(
        `${this.apiURL}/tv/${id}/videos?api_key=${this.apiKey}`
      )
      .pipe(map((data) => data.results))
  }

  getTvShowImages(id: string) {
    return this.http
      .get<ImagesDataTypeObject>(
        `${this.apiURL}/tv/${id}/images?api_key=${this.apiKey}`
      )
      .pipe(map((data) => data.backdrops))
  }

  getTvShowCast(id: string) {
    return this.http
      .get<CreditsDataTypeObject>(
        `${this.apiURL}/tv/${id}/credits?api_key=${this.apiKey}`
      )
      .pipe(map((data) => data.cast))
  }

  getTvShowSimilar(id: string) {
    return this.http
      .get<TvshowsDto>(`${this.apiURL}/tv/${id}/similar?api_key=${this.apiKey}`)
      .pipe(map((data) => data.results.slice(0, 12)))
  }
}
