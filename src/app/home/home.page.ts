import { Component } from '@angular/core';
import { Camera, CameraSource, CameraResultType } from '@capacitor/camera';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  async takePicture(){

    const image = await Camera.getPhoto({
      quality: 50,
      source: CameraSource.Camera,
      saveToGallery: false,
      resultType: CameraResultType.Uri,
    });

    setTimeout(async () => {
      const removeFile = await Filesystem.deleteFile({
        path: image.path,
      });
      console.log(removeFile);
    }, 2500);

    console.log(image);

  }

}
