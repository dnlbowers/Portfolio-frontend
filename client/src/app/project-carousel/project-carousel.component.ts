import { Component, Input, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { Project } from '../_models/project';

@Component({
  selector: 'app-project-carousel',
  templateUrl: './project-carousel.component.html',
  styleUrls: ['./project-carousel.component.css'],
})
export class ProjectCarouselComponent {
  @Input() projects: any;
  
  paused = false;
	unpauseOnArrow = false;
	pauseOnIndicator = false;
	pauseOnHover = true;
	pauseOnFocus = true;

// 	@ViewChild('carousel', { static: true }) carousel: NgbCarousel;

// 	togglePaused() {
// 		if (this.paused) {
// 			this.carousel.cycle();
// 		} else {
// 			this.carousel.pause();
// 		}
// 		this.paused = !this.paused;
// 	}

// 	onSlide(slideEvent: NgbSlideEvent) {
// 		if (
// 			this.unpauseOnArrow &&
// 			slideEvent.paused &&
// 			(slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
// 		) {
// 			this.togglePaused();
// 		}
// 		if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
// 			this.togglePaused();
// 		}
// 	}
}
