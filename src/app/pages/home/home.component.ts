import { Component } from '@angular/core'
import { map } from 'rxjs'
import { mapToMovies } from 'src/app/models/tvshows'
import { MoviesService } from 'src/app/services/movies.service'
import { TvShowsService } from 'src/app/services/tvshows.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(
    private moviesService: MoviesService,
    private tvshowsService: TvShowsService
  ) {}

  popularMovies$ = this.moviesService.getMoviesByType('popular', 12)

  upcomingMovies$ = this.moviesService.getMoviesByType('upcoming', 12)
  topRatedMovies$ = this.moviesService.getMoviesByType('top_rated', 12)
  popularTvshows$ = this.tvshowsService
    .getTvShowsByType('popular', 12)
    .pipe(map(mapToMovies))
}
