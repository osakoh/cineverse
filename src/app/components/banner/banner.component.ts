import { Component, Input } from '@angular/core'
import { Movie } from 'src/app/models/movie'

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
})
export class BannerComponent {
  @Input() shows: Movie[] = []
  @Input() title = ''
  @Input() showsType: 'tv' | 'movie' = 'movie'
}
