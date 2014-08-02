##Table of Contents##

- [Introduction](#introduction)
- [Screenshots](#screenshots)
- [Demo notes](#demo-notes)
- [Development notes](#development-notes)
    - [Technologies used](#technologies-used)
    - [Future development](#future-development)

##Introduction##
An HTML5 app suitable for restaurants, foodstalls, bars, beverage sellers etc to showcase their products and get customer followed them in social network.

##Screenshots##
(Updated later)

##Demo notes##
APK File (Click on Raw to download): [Download](Updated later).

XAPP Fike (Click on Raw to download): [Download](Updated later).

##Development notes##
###Technologies used###
   *  Cordova
   *  Jssor Slider
   *  JQuery Mobile
   *  HTML5, CSS3, JavaScript, Jquery

###Future development###
In development mode: total space required is around 5.2 - 6MB.
In production mode it is expected to be around 4MB

On Production mode, remember to reduce uneccessary image files, put everything into a single page to smoothen the transition between jquery mobile pages.

If change an images and they are rendered uncorectly (distored, or clipped off, or not responsive when the device changes orientation), then:

1/ Open the productsPage.js and modify the javascript options  object. There are already a lot of comments there to guide you through.

2/ Try to change to image dimension to the one that has been corectly rendered, in this example, bottles images.


