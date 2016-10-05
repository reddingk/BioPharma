(function () {
	"use strict";

		angular.module('homeCtrl', ['ui.bootstrap']);
		angular.module('config', [ 'ngMaterial' ]);
		angular.module('directives', []);
		/**/
    angular.module('bioPharmaApp', ['ngMaterial','ngAnimate','ui.router','duScroll','directives', 'config','homeCtrl']);

})();
