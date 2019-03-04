(function () {
	"use strict";

		angular.module('homeCtrl', ['ui.bootstrap']);
		angular.module('config', [ 'ngMaterial' ]);
		angular.module('directives', []);
		/**/
    angular.module('bioPharmaApp', ['ngMaterial','ngAnimate','ui.router','duScroll','directives', 'config','homeCtrl']);

})();

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
        {"title":"Overview", "type":"text", "isopen":true, "content":"JK BioPharma Solutions, Inc. (JKBP) was established in January 2013 pursuing to be a sophisticated outstanding developer in new drug development. We develop drug candidates throughout early stage to human proof-of-concept to maximize their value, which enables successful out-licensing to global leading pharmaceuticals. We accelerate drug development by innovation, out-sourcing and key personnel. We establish a substantial system to work with start-up biotech companies as well as established Bio/Pharmaceutical foreign companies pursuing globalization, especially the US market."},
        {"title":"Board Of Directors", "type":"list", "isopen":false, "content":[
          {"name":"Jeong Gyun Oh", 
          "title":"Molecular & Cell Biology", 
          "resume":[
            "Presently Board of Director at NeuroBo Pharmaceuticals, Inc.", 
            "Formerly Vice President of Finance at CDNetworks Co., Ltd.",
            "BA, Business Administration from Seoul National University", 
            "Extensive experience of finance operations including investment, accounting etc." 
          ]},
            {"name":"Sun Dae Kang, PhD", "title":"Economics", "resume":["Formerly Chairman at Nexol Investments", "Formerly Adjunctive Faculty at Myungji University", "Formerly the first Head of Economic Research Institute at Kyobo Life Insurance", "Formerly Vice President Kyobo Life Insurance", "Formerly Vice President at Hanshin Securities", "Formerly Director at Daewoo Economic Research Institute", "PhD from Yunsei University", "Depth of expertise across multiple economic domains including venture capitals, securities etc." ]} ]},
        {"title":"Special Advisors", "type":"text", "isopen":false, "content":"JK BioPharma Solutions, Inc. organizes a project-specialized scientific advisory group when we commit the project with a collaborator. The special advisory group consisting of substantially experienced experts in the area of the specified indication of a pipeline provides the most effective strategy to the project."}
      ];

      vm.EModels = [{"title":"Strategic Plan", "id":"SP", "img":"models/strategyplan.svg","mimg":"models/mobile/strategyplan_m.svg", "isopen":false},{"title":"Innovative Management", "id":"IM","img":"models/innovativemanagement.svg", "mimg":"models/mobile/innovativemanagement_m.svg","isopen":false},{"title":"Business Model", "id":"BM","img":"models/businessmodel.svg", "mimg":"models/mobile/businessmodel_m.svg","isopen":false}];

      vm.careersList =[ {"title":"Research Associate","link":"docs/research_associate_job_description.pdf", "link_title":"research_associate_job_description.pdf"}];

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

      // Header Click
      $("#myNavbar a").on("click", function () {
        $('.navbar-toggle').click();
      });

    }]);

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
