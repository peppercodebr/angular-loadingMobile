angular.module('pcFactory', [])

.factory('loadingMobile', function ($rootScope) {

	//TRANSFORM HEX TO RGB
	function hexToRgb(hex='#FFFFFF',alpha=1){
	    var chn;
	    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
	        chn = hex.substring(1).split('');
	        if(chn.length == 3){
	            chn = [chn[0], chn[0], chn[1], chn[1], chn[2], chn[2]];
	        }
	        chn = '0x'+chn.join('');
	        return 'rgba('+[(chn>>16)&255, (chn>>8)&255, chn&255].join(',')+','+alpha+')';
	    }
	    throw new Error('Wrong Exa');
	}

	//LOADING CSS TO HEAD HTML
	function loadingCss(size='5vh',hex,alpha){
		var css = '<style type="text/css">'
			+'.ballLoading { background-color: rgba(0,0,0,0);'
			+'border: 5px solid '+hexToRgb(hex,alpha)+';'
			+'opacity: .9;'
			+'border-top: 5px solid rgba(0,0,0,0);'
			+'border-left: 5px solid rgba(0,0,0,0);'
			+'border-radius: '+size+';'
			+'width: '+size+';'
			+'height: '+size+';'
			+'margin: 40vh auto 0 auto;'
			+'-moz-animation: spin .7s infinite linear;'
			+'-webkit-animation: spin .7s infinite linear; }'
			+'#loadingMobile { margin: 0; width: 100%; height: 100%; position: absolute; background-color: rgba(0,0,0,0.5); z-index: 1; -webkit-animation: fadein 0.2s; -moz-animation: fadein 0.2s; -ms-animation: fadein 0.2s; -o-animation: fadein 0.2s; animation: fadein 0.2s; }'
			+'@-moz-keyframes spin { 0% { -moz-transform: rotate(0deg); } 100% { -moz-transform: rotate(360deg); }; }'
			+'@-moz-keyframes spinoff { 0% { -moz-transform: rotate(0deg); } 100% { -moz-transform: rotate(-360deg); }; }'
			+'@-webkit-keyframes spin { 0% { -webkit-transform: rotate(0deg); } 100% { -webkit-transform: rotate(360deg); }; }'
			+'@-webkit-keyframes spinoff { 0% { -webkit-transform: rotate(0deg); } 100% { -webkit-transform: rotate(-360deg); }; }'
			+'@keyframes fadein { from { opacity: 0; } to { opacity: 1; } }'
			+'@-moz-keyframes fadein { from { opacity: 0; } to { opacity: 1; } }'
			+'@-webkit-keyframes fadein { from { opacity: 0; } to { opacity: 1; } }'
			+'@-ms-keyframes fadein { from { opacity: 0; } to { opacity: 1; } }'
			+'@-o-keyframes fadein { from { opacity: 0; } to { opacity: 1; } }'
			+'</style>';
		angular.element(document.querySelector( 'head' )).append(css);
	}

	return {
		show: function(size,hexa,alpha){
			if(!$rootScope.checkCss){
				loadingCss(size,hexa,alpha);
				$rootScope.checkCss = 1;
			}

			var bodySel = angular.element(document.querySelector( 'body' ));
			
			if (navigator.userAgent.match('ANDROID')) {
				bodySel.css('padding-top','0');
			}
			
			bodySel.prepend('<div id="loadingMobile"><div class="ballLoading"></div></div>');
		},
		hide: function(){
			angular.element(document.querySelector( '#loadingMobile' )).remove();
		}
	};
})