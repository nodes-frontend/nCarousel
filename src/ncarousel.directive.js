(function() {
	'use strict';

	angular
		.module('nCarousel')
	  	.directive('nCarousel', nCarousel);

	/* @ngInject */
	function nCarousel($rootScope) {
		/**
		 * @ngdoc directive
		 * @name nCarousel
		 * @description
		 * # nCarousel
		 */
		var directive = {
			templateUrl: 'nCarousel.template.html',
			link: link,
			scope: {
				images: '=',
				headline: '=',
				text: '='
			},
			restrict: 'E'
		};

		return directive;


		function link(scope, element, attrs){

			scope.next = next;
			scope.nextStatus = true;
			scope.prev = prev;
			scope.prevStatus = false;
			scope.imageStatus = true;
			scope.clickImage = clickImage;

			scope.multipleImages = false;

			scope.currentIndex = 0;
			scope.translate = $rootScope.translate;
			$rootScope.imageCarouselCurrentIndex = 0;

			activate();

			function activate() {
				//Check if they are undefined
				if(scope.images == undefined) {
					scope.imageStatus = false;
					return;
				}

				if (scope.images.length > 1) {
					scope.multipleImages = true;
				}

				fetchImage();

				scope.igimage = scope.images[scope.currentIndex];
			}

			function next() {
				if ((scope.currentIndex + 1) != scope.images.length && scope.multipleImages) {
					scope.currentIndex = scope.currentIndex + 1;
					fetchImage();
					checkStatus();
				}
			}

			function prev() {
				if (scope.currentIndex > 0 && scope.multipleImages) {
					scope.currentIndex = scope.currentIndex - 1;
					fetchImage();
					checkStatus();
				}
			}

			function clickImage(number) {
				scope.currentIndex = number;
				fetchImage();
				checkStatus();
			}

			function fetchImage() {
				if(scope.images[scope.currentIndex] == '' || scope.images[scope.currentIndex] == undefined || scope.images[scope.currentIndex] == null) {
					scope.imageStatus = false
				} else {
					scope.imageStatus = true;
				}
				$rootScope.imageCarouselCurrentIndex = scope.currentIndex;
				scope.igimage = scope.images[scope.currentIndex];
			}

			function checkStatus() {
				if(scope.currentIndex > 0 && scope.multipleImages) {
					scope.prevStatus = true;
				} else {
					scope.prevStatus = false;
				}
				if((scope.currentIndex + 1) != scope.images.length && scope.multipleImages) {
					scope.nextStatus = true;
				} else {
					scope.nextStatus = false;
				}
			}
		};
	};
})();
