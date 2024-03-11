import { Component, Input } from '@angular/core'
import { SECURE_BASE_URL } from 'src/app/constants/image-configuration'
import { Movie } from 'src/app/models/movie'

@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrls: ['./show-item.component.scss'],
})
export class ShowItemComponent {
  @Input() showItem: Movie | null = null

  imageBaseUrl = SECURE_BASE_URL
}
