import { Component } from '@angular/core'
import { map } from 'rxjs'
import { mapToMovies } from 'src/app/models/tvshows'
import { MoviesService } from 'src/app/services/movies.service'
import { TvshowsService } from 'src/app/services/tvshows.service.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(
    private moviesService: MoviesService,
    private tvshowsService: TvshowsService
  ) {}

  upcomingMovies$ = this.moviesService.getMoviesByType('upcoming', 12)
  topRatedMovies$ = this.moviesService.getMoviesByType('top_rated', 12)
  popularTvshows$ = this.tvshowsService
    .getTvShowsByType('popular', 12)
    .pipe(map(mapToMovies))
}
