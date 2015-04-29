(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name nCarousel
	 * @description
	 * # nCarousel
	 */
	angular
		.module('nCarousel')
		.service('nCarouselUtil', nCarouselUtil);

	/* @ngInject */
	function nCarouselUtil() {

		var service = {
			convertData: convertData,
			convertText: convertText,
			convertFooterText:convertFooterText
		};

		return service;

		function convertData(data) {
			var structuredData = [];

			if(data == undefined) {
				return
			}

			if(data.length <= 0) {
				return structuredData;
			}

			if(data.images == undefined) {
				return;
			}

			for(var i = 0; i < data.images.length; i++) {
				structuredData.push(data.images[i].image);
			}

			return structuredData;
		}

		function convertText(data) {
			var structuredData = [];

			if(data == undefined) {
				return
			}

			if(data.length <= 0) {
				return structuredData;
			}

			if(data.images == undefined) {
				return;
			}

			for(var i = 0; i < data.images.length; i++) {
				structuredData.push(data.images[i].text);
			}

			return structuredData;
		}

		function convertFooterText(data) {
			var structuredData = [];

			if(data == undefined) {
				return
			}

			if(data.length <= 0) {
				return structuredData;
			}

			if(data.images == undefined || data.images[0].text2) {
				return;
			}

			for(var i = 0; i < data.images.length; i++) {
				structuredData.push(data.images[i].text2);
			}

			return structuredData;
		}


	};

})();
