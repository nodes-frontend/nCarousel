# Nodes Galactic Carousel
_Not maintained by Nodes anymore_

This is a simple carousel

## How to

nCarouselUtil has method to convert text and images to show proper in the carousel
nCarousel is the directive for the carousel


```javascript

vm.modulesText = new Array();
vm.firstImages = new Array();
vm.secondImages = new Array();

vm.firstImages = result.data.modules;
vm.firstHeadline = result.data.modules;
vm.firstText = result.data.modules;

vm.firstImages = nCarouselUtil.convertData(vm.firstImages);
vm.firstText = nCarouselUtil.convertFooterText(vm.firstText);
vm.firstHeadline = nCarouselUtil.convertText(vm.firstHeadline);
```

And html

```html
<n-carousel images="firstImages" text="firstText" headline="firstHeadline"></n-carousel>
```

