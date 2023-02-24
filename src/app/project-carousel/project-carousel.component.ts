import { Component, Input, ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselConfig, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { Project } from '../_models/project';

@Component({
  selector: 'app-project-carousel',
  templateUrl: './project-carousel.component.html',
  styleUrls: ['./project-carousel.component.css'],
})
export class ProjectCarouselComponent {

    @Input() projects: Observable<Project[]> | undefined;


    paused = false;
	unpauseOnArrow = true;
	pauseOnIndicator = false;
	pauseOnHover = true;
	pauseOnFocus = false;
	showNavigationIndicators = false;

	@ViewChild('carousel', { static: true })
	carousel!: NgbCarousel;

	constructor(config: NgbCarouselConfig) {
		// customize default values of carousels used by this component tree
		config.showNavigationArrows = true;
		config.showNavigationIndicators = true;
	}
	
	togglePaused() {
			if (this.paused) {
				this.carousel.cycle();
			} else {
				this.carousel.pause();
			}
			this.paused = !this.paused;
		}

	onSlide(slideEvent: NgbSlideEvent) {
		if (
			this.unpauseOnArrow &&
			slideEvent.paused &&
			(slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
		) {
			this.togglePaused();
		}
		if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
			this.togglePaused();
		}
	}
}


