import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
  encapsulation: ViewEncapsulation.None,

  // styles: [
  //   `
	// 		.my-custom-class .tooltip-inner {
	// 			background-color: darkblue;
	// 			font-size: 125%;
	// 		}
	// 		.my-custom-class.bs-tooltip-end .tooltip-arrow::before {
	// 			border-right-color: darkblue;
	// 		}
	// 		.my-custom-class.bs-tooltip-start .tooltip-arrow::before {
	// 			border-left-color: darkblue;
	// 		}
	// 		.my-custom-class.bs-tooltip-top .tooltip-arrow::before {
	// 			border-top-color: darkblue;
	// 		}
	// 		.my-custom-class.bs-tooltip-bottom .tooltip-arrow::before {
	// 			border-bottom-color: darkblue;
	// 		}
	// 	`,
  // ],

})
export class TooltipComponent {
}
