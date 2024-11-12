/*!
 * Paged v0.1
 * https://github.com/eterv/paged.js
 * @license MIT licensed
 *
 * Copyright (C) 2018 eterv.com - A project by Gwang-won Choi
 * IE11+, Edge, Chrome, Safari, Opera... Modern Browser Support
 */

;(function($, w, undefined){
	'use strict';

	var pluginName = 'paged';
	var className = 'pgd';

	$.fn.Paged = function(ele, o) {
		// Extend options
		o = $.extend({}, $.fn.Paged.defaults, o);

		var self = this;

		var $ele = $(ele);
	};

	// Default Options
	$.fn.Paged.defaults = {

	};
})(window.jQuery, window);


;(function($, w, undefined){
	'use strict';

	var pluginName = 'Tiled';
	var className = 'Tiled';
	var $window = $(window);

	$.fn.Tiled = function(opt) {
		var self = this;

		var breakpoint = [];
		var column = [];
		var gap = [];
		var imageRatio = [];
		var scrollAnimation = false;
		var scrollAnimationName = '';

		var tile_Width = [];
		var tile_h_2x_Width = [];

		var class_ts_lefticon1 = 'ts-lefticon1';
		var class_ts_rectimg_left_1 = 'ts-rectimg-left-1';
		var class_ts_squareimg_top_1 = 'ts-squareimg-top-1';
		var class_ts_squareimg_bottom_1 = 'ts-squareimg-bottom-1';
		var class_ts_squareimg_full = 'ts-squareimg-full';

		var imageHeight = 0;

		// Extend options
		opt = $.extend({}, $.fn.Tiled.defaults, opt);

		breakpoint = opt.breakpoint.split(":");
		column = opt.column.split(":");
		gap = opt.gap.split(":");
		imageRatio = opt.imageRatio.split(":");
		scrollAnimation = opt.scrollAnimation;
		scrollAnimationName = opt.scrollAnimationName;

		// Check Error
		if (breakpoint.length === 0 || !$.isNumeric(breakpoint[0]) ) return;
		if (column.length !== breakpoint.length + 1 || !$.isNumeric(column[0]) ) return;
		if (gap.length !== breakpoint.length + 1 || !$.isNumeric(gap[0]) ) return;
		if (imageRatio.length !== 2 || !$.isNumeric(imageRatio[0]) || !$.isNumeric(imageRatio[1])) return;

		for (var i = 0; i <= column.length; i++) {
			tile_Width[i] = 100 / column[i];
			tile_h_2x_Width[i] = tile_Width[i] * 2;

			if (tile_h_2x_Width[i] > 100) tile_h_2x_Width[i] = 100;		// 너비가 100% 넘어가면 안되므로 너비를 100으로 맞춤.
		}
		imageHeight = imageRatio[1] / imageRatio[0] * 100;

		return this.each(function() {
			var $this = $(this);

			var $tiles = $this.hasClass('tiles') ? $this : $this.find('.tiles');
			var $tile = $tiles.find('.tile');
			var $tile_h_2x = $tiles.find('.tile-h-2x');
			var $img = $tiles.find('.image > .img');
			var $content = $tile.find('.content');

			function update(isResize) {
				var bp = getBreakpoint(breakpoint);

				$tiles.css({ 'margin': '0 -' + (gap[bp] / 2) + 'px' });
				$tile.css({ 'width': tile_Width[bp] + '%', 'padding': '0 ' + (gap[bp] / 2) + 'px', 'margin-bottom': gap[bp] + 'px', 'clear': 'none' });
				/*$tile.each(function() {
					$(this).style('width', tile_Width[bp] + '%', 'important');
				});*/
				$tile.css({ 'padding': '0 ' + (gap[bp] / 2) + 'px', 'margin-bottom': gap[bp] + 'px', 'clear': 'none' });

				if ( ! $tiles.hasClass(class_ts_squareimg_full)) {
					$tile.filter('.tile:nth-child(' + column[bp] + 'n+1)').css({ 'clear': 'both' });
				} else {
					$tile_h_2x.css({ 'width': tile_h_2x_Width[bp] + '%' });
				}

				if ($tiles.hasClass(class_ts_squareimg_top_1) || $tiles.hasClass(class_ts_squareimg_bottom_1) || $tiles.hasClass(class_ts_squareimg_full) || $tiles.hasClass(class_ts_rectimg_left_1)) {
					$img.css({ 'padding-bottom': imageHeight + '%' });
				}

				if ( $tiles.hasClass(class_ts_squareimg_full)) {
					$tile_h_2x.find('.image > .img').css({ 'padding-bottom': (imageHeight / 2) + '%' })
				}


			}
			update(false);
			$tiles.addClass('loaded');

			$window.on('resize', function() {
				update(true);
			});

			// 중간에 DOM에 AJAX 등으로 tile 이 추가되는지 감시하여 업데이트 (IE10 이하버전 작동안함)
			// (MS도 이전버전의 IE를 버린마당에 모든 코드는 IE11 부터 지원할예정...)
			var observer = new MutationObserver(function(mu) {
				mu.forEach(function(mu) {
					if (mu.type === 'childList') {
						$tile = $tiles.find('.tile');
						$img = $tiles.find('.image > .img');
						update(false);

						$tile.each(function() {
							var $this = $(this);

							if (!$this.hasClass('loaded')) {
								sr.reveal($this.find('.a')[0], { delay: 0 });
							}
						});

					}
				});
			});
			
			
			
		
			
			
			
			
			
			var mo_config = { attributes: true, childList: true, characterData: true };
			observer.observe($tiles[0], mo_config);

			var ani_delay = 0;
			$tile.each(function () {
				var $this = $(this);
				if (scrollAnimation) {		// 스크롤 애니메이션

					sr.reveal($(this).find('.a')[0], { delay: ani_delay });
					//$this.data('delay', ani_delay + 'ms');

					ani_delay += 100;
					if (ani_delay === 100 * column[getBreakpoint(breakpoint)]) ani_delay = 0;

				} else {				// 일반 로딩
					$this.css('visibility', 'visible');
				}
				$this.addClass('loaded');
			});

			/*if (scrollAnimation) {
				$tile.Reveald({
					once: false,
					delay: '0ms'
				});
			}*/

		});
	};

	var getBreakpoint = function(breakpoints) {
		if (!breakpoints) { return undefined; }
		var index = 0;
		for (var i = 0; i < breakpoints.length; i++) {
			if (window.innerWidth <= breakpoints[i]) {
				index = i + 1;
			}
		}
		return index;
	};

	// Default Options
	$.fn.Tiled.defaults = {
		breakpoint: "1023:767:480",
		column: "4:4:2:1",
		gap: "20:20:10:10",
		imageRatio: "1:1",
		scrollAnimation: true,
		scrollAnimationName: 'fadeInUp'
	};
})(window.jQuery, window);