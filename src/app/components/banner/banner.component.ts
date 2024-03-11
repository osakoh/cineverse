import { Component, Input } from '@angular/core'
import { Movie } from 'src/app/models/movie'

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  @Input() shows: Movie[] = []
  @Input() title = ''
}
