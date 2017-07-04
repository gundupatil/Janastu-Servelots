import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';
import "../../assets/js/ninja-slider.js";
import "../../assets/js/simple-lightbox.js";
import 'hammerjs';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
@Component({
  selector: 'app-gallery',
 templateUrl:'./gallery.component.html',
  styles: [ "../node_modules/font-awesome/css/font-awesome.css"],
  styleUrls: ['../css/demo.css','../css/simplelightbox.min.css','../css/ninja-slider.css','../css/demo.scss'],

})
export class GalleryComponent implements OnInit {
 // url:"../../assets/js/simple-lightbox.js";
  public ngOnInit() {
    this.loadScript('../../assets/js/simple-lightbox.js');
  }
  public loadScript(url) {
    console.log('preparing to load...')
    let node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(node);
 }
    // galleryOptions: NgxGalleryOptions[];
    // galleryImages: NgxGalleryImage[];

    // ngOnInit(): void {

    //     this.galleryOptions = [
    //         {
    //             width: '600px',
    //             height: '400px',
    //             thumbnailsColumns: 4,
    //             imageAnimation: NgxGalleryAnimation.Slide
    //         },
    //         // max-width 800
    //         {
    //             breakpoint: 800,
    //             width: '100%',
    //             height: '600px',
    //             imagePercent: 80,
    //             thumbnailsPercent: 20,
    //             thumbnailsMargin: 20,
    //             thumbnailMargin: 20
    //         },
    //         // max-width 400
    //         {
    //             breakpoint: 400,
    //             preview: false
    //         }
    //     ];

    //     this.galleryImages = [
    //         {
    //             small: '../../assets/images/image1.png',
    //             medium: '../../assets/images/image10.jpg',
    //             big: 'assets/1-big.jpg'
    //         },
    //         {
    //             small: 'assets/2-small.jpg',
    //             medium: 'assets/2-medium.jpg',
    //             big: 'assets/2-big.jpg'
    //         },
    //         {
    //             small: 'assets/3-small.jpg',
    //             medium: 'assets/3-medium.jpg',
    //             big: 'assets/3-big.jpg'
    //         }
    //     ];
    // }
}
