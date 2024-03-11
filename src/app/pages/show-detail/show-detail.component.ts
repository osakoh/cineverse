import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Observable, map } from 'rxjs'
import { IMAGES_SIZES } from 'src/app/constants/image-configuration'
import { Actor } from 'src/app/models/credits'
import { Movie } from 'src/app/models/movie'
import { Image } from 'src/app/models/image'
import { mapToMovie, mapToMovies } from 'src/app/models/tvshows'
import { Video } from 'src/app/models/video'
import { MoviesService } from 'src/app/services/movies.service'
import { TvShowsService } from 'src/app/services/tvshows.service'

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.scss'],
})
export class ShowDetailComponent implements OnInit {
  showId = ''
  showType: 'tv' | 'movie' = 'movie'

  show$: Observable<Movie> | null = null
  showVideos$: Observable<Video[]> | null = null
  showImages$: Observable<Image[]> | null = null
  showCast$: Observable<Actor[]> | null = null
  similarShows$: Observable<Movie[]> | null = null

  imagesSizes = IMAGES_SIZES

  constructor(
    private router: ActivatedRoute,
    private moviesService: MoviesService,
    private tvService: TvShowsService
  ) {}

  ngOnInit() {
    this.showId = this.router.snapshot.params['id']
    this.showType = this.router.snapshot.params['type']

    // showType is movie
    if (this.showType === 'movie') {
      this.show$ = this.moviesService.getMovieById(this.showId)

      this.showVideos$ = this.moviesService.getMovieVideos(this.showId)

      this.showImages$ = this.moviesService.getMovieImages(this.showId)

      this.showCast$ = this.moviesService.getMovieCast(this.showId)

      this.similarShows$ = this.moviesService.getMovieSimilar(this.showId)
    }

    // showType is TV
    if (this.showType === 'tv') {
      this.show$ = this.tvService
        .getTvShowById(this.showId)
        .pipe(map(mapToMovie))

      this.showVideos$ = this.tvService.getTvShowVideos(this.showId)

      this.showImages$ = this.tvService.getTvShowImages(this.showId)

      this.showCast$ = this.tvService.getTvShowCast(this.showId)

      this.similarShows$ = this.tvService
        .getTvShowSimilar(this.showId)
        .pipe(map(mapToMovies))
    }
  }
}
