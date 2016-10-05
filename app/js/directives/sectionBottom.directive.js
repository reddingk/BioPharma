angular.module('directives', []).directive('sectionBottom', function ($window) {
  return {
    restrict: 'EA',
    link: function ($scope, element, attrs) {

      angular.element($window).bind("scroll", function() {
        var bottomSection = angular.element(document.getElementsByClassName("mainBody"))[0].children[1].offsetTop;
        var windowp = angular.element($window)[0];
        var invPop = angular.element(document.getElementsByClassName("investorsPop"));

        if((windowp.innerHeight == bottomSection) || (windowp.pageYOffset > (bottomSection - this.innerHeight))){
          if(!invPop.hasClass("screenPass"))
            invPop.addClass("screenPass");
        }
        else {
          if(invPop.hasClass("screenPass")){
            invPop.removeClass("screenPass");
          }
        }
      });
    }
  }
});
