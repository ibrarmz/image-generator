import { Component, Input } from '@angular/core';
import { StabledifussionService } from 'src/app/services/stabledifussion.service';

@Component({
  selector: 'app-image-generator',
  templateUrl: './image-generator.component.html',
  styleUrls: ['./image-generator.component.scss']
})
export class ImageGeneratorComponent {
  loaded !: boolean;
  prompt !: string;
  image !: any;
  error !: string;
  @Input() key !: string;

  constructor(private stableDiffussion: StabledifussionService) { }

  async generateAnImage() {
    this.error = '';
    this.loaded = true;
    try {
      this.image = await this.stableDiffussion.generateAnImage(this.prompt, this.key);
      this.loaded = false;
      console.log(this.image);
    } catch (error : any) {
      this.error = error;
      this.loaded = false;
    }
  }
}
