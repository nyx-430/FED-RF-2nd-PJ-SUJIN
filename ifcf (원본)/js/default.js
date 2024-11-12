// ScrollReveal 적용
window.sr = ScrollReveal({
	reset: false,
	distance: '100px',
	easing: 'ease',
	viewFactor: 0.3
});


window.addEventListener('DOMContentLoaded', function() {

	// Index Page
	sr.reveal('#main-slide1', { delay: 0 });

	sr.reveal('.pg-main .reveal', { reset: true });
	sr.reveal('.pg-main .reveal-once', { reset: false });

	// Sub Pages
	sr.reveal('.page-content .reveal', { reset: true });
	sr.reveal('.page-content .reveal-once', { reset: false });


    var winUrl = window.location.pathname;


    if ( winUrl == '/' || winUrl.includes('index')) {
        $('#wrapper').removeClass('is-sub').addClass('is-index');
        $('#page').removeClass('pg-sub').addClass('pg-main');
    }

    $('#menu .m-menu-btn').click(function(){
        $(this).parent().toggleClass('on');
        if($(this).parent().hasClass('on')) {
            $('#top').addClass('on');
        } else {
            $('#top').removeClass('on');
        }
    });



    function menu_resize() {
        $('#menu ul .depth1 > a').click(function(e){
            if ($(window).width() <= 1024) {
                e.preventDefault();
                $(this).parent().toggleClass('on');
                $('#menu ul .depth1 > a').not($(this)).parent().removeClass('on');
            } else {
                e.unbind();
            }
        });
    }
    $(window).on('resize', function() {
        menu_resize();
    });
    menu_resize();


    var $subMenu = $('#sub-menu');
	var $depth1 = $subMenu.find('.depth1');
	var $depth2 = $subMenu.find('.depth2');
	var $depth2_sub = $depth2.find('.sub');

    var $subTitle = $('.pg-sub > .wrap .page-tit');
    var subTitleTxt = $subTitle.data('title');
    var subcount = $subTitle.data('count') - 1;
    var nav_depth1 = $('#menu ul li').eq(subcount).find('> a').text();
    var nav_depth2 = $('#menu ul li').eq(subcount).find('.depth2').html();

    if(subTitleTxt) {
        $depth1.find('span').text(nav_depth1);
        $depth2.find('span').text(subTitleTxt);
        $depth2_sub.html(nav_depth2);

        $subTitle.text(subTitleTxt);
    } else {
        $subMenu.remove();
    }

    $(document).click(function(e) {
        var $this = $(e.target);
        if($this.closest('#sub-menu').length > 0) {
            if($this.hasClass('depth2') || $this.closest('.depth2').length > 0) {
                $('.depth2').toggleClass('on');
            } else {
                $('.depth2').removeClass('on');
            }
            if($this.hasClass('depth1') || $this.closest('.depth1').length > 0) {
                $('.depth1').toggleClass('on');
            } else {
                $('.depth1').removeClass('on');
            }
        }
    });


    var $subVisual = $('#sub-visual');

    $subVisual.find(".swiper-slide").css({'background-image':'url(../img/sub-visual.jpg)'});

	for(i=1; i<5; i++) {
		if ( winUrl.includes('sub0'+i) ) {
			$subVisual.find(".swiper-slide").css({'background-image':'url(../img/sub-visual'+i+'.jpg)'});
		}
	}


    $('#go-top').click(function() {
		$('html, body').animate({ scrollTop: '0px' }, 500);
    });



    // 팝업
    var wrapper = $('#wrapper');
    var top = $('#top');
    var layer_popup = $('.layer-popup');

    var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var youtube_popup;

    window.onYouTubeIframeAPIReady = function() {
        youtube_popup = new YT.Player('youtube-popup1', {});
    };

    if(wrapper.hasClass('is-index')) {
        layer_popup.addClass('on');
    }


    var video_src = $('#youtube-popup1').attr('src');
    var url = window.location.origin;

    $('#youtube-popup1').attr('src', video_src + '&origin=' + url)

    layer_popup.find('button').click(function(){
        layer_popup.removeClass('on');
        if(youtube_popup.getPlayerState() == 1) youtube_popup.pauseVideo();
    });
    top.find('.live').click(function(){
        layer_popup.addClass('on');
    });







    const $body = document.querySelector('body');
    const $menu = document.getElementById('menu');

    function subwrap_h() {
        let max_h = 0;
        let $menu_subwrap = $menu.querySelectorAll('.depth2');
        $menu_subwrap.forEach(function(e){
            let h = parseInt(e.clientHeight);
            if(max_h < h) max_h = h;
        });
        document.documentElement.style.setProperty('--menu-bg-h', max_h+'px');
    }
    subwrap_h();
    window.addEventListener("resize", function() {
        subwrap_h();
    });



    // Family Site
    const family_site = document.querySelectorAll('.family-box');

    family_site.forEach(function(e) {
        let btn = e.querySelector('.family-btn');
        let parent = btn.parentElement;
        btn.addEventListener("click", function() {
            parent.classList.toggle('on');
        });
    });



    // Scroll add Class
    let scrollTop = window.scrollY;
    let window_h = window.innerHeight;
    let scrollBottom = scrollTop + window_h;
    let lastScroll = 0;
    let document_h, scrolling;

    function scroll_class() {
		document_h = document.documentElement.scrollHeight;
        // 스크롤 최상단보다 아래
        if (scrollTop > 0) {
            $body.classList.add('scrolled');
        } else {
            $body.classList.remove('scrolled');
        }

        // 스크롤 최하단보다 약간 위
		if (scrollTop >= document_h - window_h - 150) {
			$body.classList.add('scroll-bt-up');
		} else	{
			$body.classList.remove('scroll-bt-up');
		}

        // 스크롤 최하단
		if (document_h == scrollBottom) {
			$body.classList.add('scroll-bt');
		} else {
			$body.classList.remove('scroll-bt');
		}
    }

	setTimeout(function() {
		scroll_class();
	}, 400);

    window.addEventListener("scroll", function() {
        scrollTop = window.scrollY;
		scrollBottom = scrollTop + window_h;

        scroll_class();
    });



    // Tab
	const tabBtn = document.querySelectorAll(".tab-btn");

	tabBtn.forEach(function(tab) {
		const btns = tab.children;
		const parent = tab.parentElement;
		const tabCon = parent.querySelector('.tab-con');
        const scrs = tabCon.querySelectorAll('.scr-el, .scr-el-one, .scrs');
		const cons = tabCon.children;

		let hash = window.location.hash;
        let delay;

        // scrs.forEach(function(el) {
        //     setTimeout(function() {
        //         if(el.classList.contains('scrs')) {
        //             let scrDelay = el.querySelectorAll('.scr-delay');
        //             scrDelay.forEach(function(d) {
        //                 delay = d.style.transitionDelay;
        //                 d.dataset.delay = delay;
        //             });
        //         } else {
        //             delay = el.style.transitionDelay;
        //             el.dataset.delay = delay;
        //         }
        //     }, 200);
        // });


		for(let i=0; i<btns.length; i++) {
			let url = btns[i].getAttribute('href');

			if(hash && url && url.includes('#')) {
				if(hash == url) {
					btns[i].classList.add('on');
					cons[i].classList.add('on');
				} else {
					btns[i].classList.remove('on');
					cons[i].classList.remove('on');
				}
			} else {
				btns[0].classList.add('on');
				cons[0].classList.add('on');
			}

			btns[i].addEventListener("click", function(e) {
				let arr = [...e.target.parentElement.children];
				let index = arr.indexOf(e.target);

				e.target.classList.add('on');
				cons[index].classList.add('on');

				for(j=0; j<btns.length; j++) {
					if(j != index && cons[j]) {
						btns[j].classList.remove('on');
						cons[j].classList.remove('on');
					}
				}

				tab_scrs();
			});

            window.addEventListener('load', function() {
                tab_scrs();
            });
		}

		function tab_scrs() {
            scrs.forEach(function(el) {

                if(el.style.transitionDuration != '0ms' || el.style.transitionDuration != '') {
                    el.classList.remove('active');
                    el.style.transitionDuration = '';
                    el.style.transitionDelay = '';
                }

                if(el.classList.contains('scrs')) {
                    let scrDelay = el.querySelectorAll('.scr-delay');
                    scrDelay.forEach(function(d) {
                        if(d.style.transitionDuration != '0ms' || d.style.transitionDuration != '') {
                            d.classList.remove('active');
                            d.style.transitionDuration = '';
                            d.style.transitionDelay = '';
                        }
                    });
                }

                if(el.closest('.on')) {
                    setTimeout(function() {
                        scroll_effect_ninny();
                    }, 50);
                }
            });
		}

	});
});