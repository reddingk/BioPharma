(function () {
	"use strict";

		angular.module('homeCtrl', ['ui.bootstrap']);
		angular.module('config', [ 'ngMaterial' ]);
		angular.module('directives', []);
		/**/
    angular.module('bioPharmaApp', ['ngMaterial','ngAnimate','ui.router','duScroll','ngParallax','directives', 'config','homeCtrl']);

})();

(function(){

  angular
    .module('config')
    .config(['$stateProvider', '$urlRouterProvider','$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
      $stateProvider
      .state('app', {
        url: "/",
        views: {
          'content':{
            templateUrl: 'views/home.html',
            controller: 'HomeController as hc'
          },
          'header':{
            templateUrl: 'views/templates/_header.html'
          },
          'footer':{
            templateUrl: 'views/templates/_footer.html'
          }
        }
      })
      .state('app.construction', {
        url: "underconstruction",
        views: {
          'content@': {
            templateUrl: 'views/construction.html'
          }
        }
      });

      $urlRouterProvider.otherwise('/');
      $locationProvider.html5Mode(true);
    }]);


})();

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

(function(){
   "use strict";

    angular.module('homeCtrl').controller('HomeController', ['$state','$http', function($state, $http){
      var vm = this;
      vm.title = "Home";
      vm.test = "/img/backgrounds/6.jpg";
      
      vm.sections = [
        {"id":"main", "template":'views/templates/_main.html'},
        {"id":"aboutus", "template":'views/templates/pages/_aboutus.html'},
        {"id":"engagement", "template":'views/templates/pages/_engagement.html'},
        {"id":"partnering", "template":'views/templates/pages/_partnering.html'},
        {"id":"careers", "template":'views/templates/pages/_careers.html'},
        {"id":"contactus", "template":'views/templates/pages/_contactus.html'},
      ];
      vm.aboutInfo = [
        {"title":"Overview", "type":"text", "isopen":false, "content":""},
        {"title":"Board Of Directors", "type":"list", "isopen":false, "content":[{"name":"Richard J. Kang, PhD", "title":"Molecular & Cell Biology", "resume":["Founder of JK BioPharma Solutions, Inc", "Presently Board of Director & Chief Operating Officer at NeoImmuneTech, Inc (Maryland)","Leader Group Mentors of Korea Innovation Center (KIC) for Ministry of Science, ICT and Future Planning (MSIP) of Korea", "Formerly Chief Executive Officer at NeoImmuneTech, Inc","PhD from the University of Edinburgh","Serial entrepreneur, experience in Management, Operation, R&D, Clinical Development and Business Development in Bio/Pharma companies", "Various research experience for 17 years (20 publications in Cell, Nature, J of Pathology etc.; 9 patents)" ]},{"name":"Sun Dae Kang, PhD", "title":"Economics", "resume":["Formerly Chairman at Nexol Investments", "Formerly Adjunctive Faculty at Myungji University", "Formerly the first Head of Economic Research Institute at Kyobo Life Insurance", "Formerly Vice President Kyobo Life Insurance", "Formerly Vice President at Hanshin Securities", "Formerly Director at Daewoo Economic Research Institute", "PhD from Yunsei University", "Depth of expertise across multiple economic domains including venture capitals, securities etc." ]} ]},
        {"title":"Special Advisors", "type":"text", "isopen":false, "content":""}
      ];

      vm.EModels = [{"title":"Strategic Plan", "img":"models/Strategic_Plan.png", "isopen":false},{"title":"Innovation Management", "img":"models/Innovative_management.png", "isopen":false},{"title":"Business Model", "img":"models/Business_Model.png", "isopen":false}];

      vm.contactUsForm = {"name":"","phone":"","toEmail":"","subject":"","message":""};
      var SGKey = "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";

      vm.sendEmail = function() {
        var errormessage = [];
        if (vm.contactUsForm.name == ""){  errormessage.push("Name"); }
        if (vm.contactUsForm.toEmail == ""){  errormessage.push("Email"); }
        if (vm.contactUsForm.subject == ""){  errormessage.push("Subject"); }
        if (vm.contactUsForm.message == ""){  errormessage.push("Message"); }

        if(errormessage.length > 0) {
          alert("The following field(s) are missing: " + errormessage.join());
        }
        else {
          var data = translateForm(vm.contactUsForm);
          var url = "/sendgrid/sendemail" + translateForm(vm.contactUsForm);
          //"/sendgrid/sendtest/77"

          $http({ method: 'GET', url: url})
         .then(function successCallback(response) {
            console.log("success");
            console.log(response.data);
          }, function errorCallback(response) { console.log("ERROR"); console.log(response); });

          alert("Thank you we will get back to you as soon as we can.");
          clearform();
        }
      }

      function clearform() {
        vm.contactUsForm.name = "";
        vm.contactUsForm.phone = "";
        vm.contactUsForm.subject = "";
        vm.contactUsForm.toEmail = "";
        vm.contactUsForm.message = "";
      }
      function translateForm(form){

        var fullSubject = "WEBSITE EMAIL: " + form.subject;
        var fullText = "Name: " + form.name + " | Email: "+form.toEmail +" | Phone: " + form.phone + " | Message: " + form.message;

        var returnParams = "?api_user=jkbiopharma" +"&api_key="+SGKey+"&to=info@jkbiopharma.com&toname=JKBioPharma"+"&subject="+ fullSubject + "&text="+ fullText+"&from=info@jkbiopharma.com";
        return returnParams;
      }
      // Demo Pages
      vm.sections_old = [
        {"id":"main", "template":'views/templates/_main.html'},
        {"id":"teamwork", "template":'views/templates/demo/_teamwork.html'},
        {"id":"services", "template":'views/templates/demo/_services.html'},
        {"id":"investors", "template":'views/templates/demo/_investors.html'},
        {"id":"contactus", "template":'views/templates/pages/_contactus.html'}
      ];
      vm.services = [
        {"title":"Nemo enim ipsam voluptatem", "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},
        {"title":"Excepteur sint occaecat cupidatat", "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},
        {"title":"Duis aute irure dolor in reprehenderit", "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}
      ];

    }]);

})();
