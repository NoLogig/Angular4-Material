import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatCardModule, MatSliderModule } from '@angular/material';

import { ParallaxCSSComponent } from './scroll-parallax/parallax-css.component';
import { RouterModule } from '@angular/router';
import { MouseParallaxComponent } from './mouse-parallax/mouse-parallax.component';
import { BusinessCardModule } from 'src/app/utils/business-card/business-card.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, BusinessCardModule,
    MatCardModule, MatSliderModule,
    RouterModule.forRoot([
      {
        path: 'parallax-scrolls',
        component: ParallaxCSSComponent
      },
      {
        path: 'parallax-mouse',
        component: MouseParallaxComponent
      }
    ])
  ],
  exports: [ ParallaxCSSComponent, MouseParallaxComponent ],
  declarations: [ ParallaxCSSComponent, MouseParallaxComponent ]
})
export class ParallaxModule {}
