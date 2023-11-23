import { animate, state, style, transition, trigger } from '@angular/animations'
import { Component, OnInit } from '@angular/core'
import { MoviesService } from 'src/app/services/movies.service'

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  /**
   * trigger: creates an animation trigger named 'slideFade'. Triggers are attached to elements in the template and define a named animation
   * state('void', style({ opacity: 0 })): Defines a state named 'void'. Applies when an element is not attached to the view(no movie added to the DOM),
   *                                       elements in the 'void' state have their opacity set to 0, making them completely transparent
   *
   * transition('void <=> *', [animate('1s'): Defines the transition between states
   * 'void <=> *': the transition applies when entering or leaving the 'void' state
   *      the *: represents any state
   * animate('1s'): means the transition takes 1 second. changing states smoothly from 0 to final state and vice versa
   */
  animations: [
    trigger('slideFade', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', [animate('1.5s')]),
    ]),
  ],
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
