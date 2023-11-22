import { trigger } from '@angular/animations'
import { Component, OnInit } from '@angular/core'
import { MoviesService } from 'src/app/services/movies.service'

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  // animations: [trigger('slideFade')],
})
export class SliderComponent implements OnInit {
  constructor(private moviesService: MoviesService) {}

  // the dollar sign($)- a naming convention indicating that the variable holds an observable
  // SliderComponent subscribes to this Observable via movies$
  movies$ = this.moviesService.getPopularMovies()

  slideIndex = 0

  ngOnInit(): void {
    setInterval(() => {
      this.slideIndex += 1
    }, 5000)
  }
}
