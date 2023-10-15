import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StabledifussionService {

  options: object = {
    'method': 'POST',
    'url': 'https://stablediffusionapi.com/api/v3/text2img',
    'headers': {
      'Content-Type': 'application/json'
    }
  }

  body: any = {
    "key": '',
    "prompt": '',
    "negative_prompt": null,
    "width": "512",
    "height": "512",
    "samples": "1",
    "num_inference_steps": "20",
    "seed": null,
    "guidance_scale": 7.5,
    "safety_checker": "no",
    "multi_lingual": "no",
    "panorama": "no",
    "self_attention": "no",
    "upscale": "no",
    "embeddings_model": null,
    "webhook": null,
    "track_id": null
  };

  constructor(private httpClient: HttpClient) { }

  generateAnImage(prompt: string, key: string) {
    return new Promise((resolve, reject) => {
      this.body.prompt = prompt;
      this.body.key = key;
      this.httpClient.post('https://stablediffusionapi.com/api/v3/text2img', this.body, this.options)
        .subscribe((res: any) => {
          if (res.status === 'success') {
            resolve(res.output);
          } else if (res.status === 'processing') {
            this.getImageProccess(res.fetch_result)
              .then(data => resolve(data));
          } else {
            switch (res.message) {
              case 'Invalid API Request':
                reject('Empty API KEY')
                break;
              default:
                reject(res.message);
                break;
            }
          }
        });
    });
  }

  async getImageProccess(url: string, key: string = this.body.key) {
    return new Promise((resolve, reject) => {
      this.httpClient.post(url, { "key": key }, this.options)
        .subscribe((res: any) => {
          if (res.output) {
            resolve(res.output);
          } else {
            this.getImageProccess(url);
          }
        });
    });
  }
}
