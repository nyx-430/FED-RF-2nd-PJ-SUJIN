///////////////////////////////

// scroll effect by Ninny design
// Copyright (c) 2023 Ninny design
// 무단사용금지

///////////////////////////////

function scroll_effect_ninny() {

    const element = document.querySelectorAll('.scr-el, .scr-el-one, .scrs');

    element.forEach( function(el) {

        if(el.classList.contains('scrs') == true) {
            const reveals_ele = el.querySelectorAll('.scr-delay');
            reveals_ele.forEach( function(scrs) {
                scroll_effect(scrs);
            });
        } else {
            scroll_effect(el);
        }

    });

    function scroll_effect(x) {
        const variables = getComputedStyle(x);

        let winTop = window.scrollY + window.innerHeight;
        let eTop = x.getBoundingClientRect().top;
        let eHeight;
        let condition = winTop >= eTop;

        let xs = x.parentNode.children;
        let classlist = x.classList;

        let is_scrs = x.closest('.scrs') && !classlist.contains('scr-el-one') && !classlist.contains('scr-el');
        let no_scrs = !x.closest('.scrs') && classlist.contains('scr-el-one') || classlist.contains('scr-el');


        if(is_scrs) {
            xs = x.closest('.scrs').querySelectorAll('.scr-delay');
            classlist = x.closest('.scrs').classList;
        }

        let max = xs.length;
        let delay = 200;

        if(variables.getPropertyValue('--scr-el-delay')) {
            delay = variables.getPropertyValue('--scr-el-delay');
            delay = Number(delay.replace('ms', ''));
        }

        if(is_scrs) {
            for(let i = 0; i < max; i++) {
                if (xs[i] === x) {
                    x.style.transitionDelay = i * delay + "ms";
                }
            }
        }


        function scroll_active() {
            if(classlist.contains('active') == true) {
                if(is_scrs) {
                    setTimeout(function() {
                        x.style.transitionDuration = '0ms';
                        x.style.transitionDelay = '0ms';
                    }, i * 200 + delay);
                } else {
                    if(x.style.transitionDuration == '') {
                        setTimeout(function() {
                            x.style.transitionDuration = '0ms';
                            x.style.transitionDelay = '0ms';
                        }, 50);
                    }
                }
            } else {
                let prev = x.previousElementSibling;
                if(prev && no_scrs) {
                    let style = prev.style.transitionDelay;
                    style = style.replace('ms', '');
                    style = Number(style);

                    x.style.transitionDelay = style + delay + "ms";
                }

                setTimeout(function() {
                    classlist.add('active');
                }, 50);
            }
        }

		if (condition) {
			scroll_active();
		}

        window.addEventListener('scroll', function() {
            winTop = window.scrollY + window.innerHeight * 0.85;
            eTop = window.scrollY + x.getBoundingClientRect().top;
            eHeight = eTop + x.clientHeight * 0.85;

            condition = winTop >= eTop;

            if(classlist.contains('scr-el') == true) {
                condition = winTop >= eTop && window.scrollY < eHeight;
            }

            if (condition) {
                scroll_active();
            } else {
                if(classlist.contains('scr-el') == true) {
                    classlist.remove('active');

                    if(classlist.contains('active') == false) {
                        x.style.transitionDuration = '';
                        x.style.transitionDelay = '';
                    }
                }
            }

        });
    }

}
window.addEventListener('load', function() {
    scroll_effect_ninny();
});