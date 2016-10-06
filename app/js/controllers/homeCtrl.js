(function(){
   "use strict";

    angular.module('homeCtrl').controller('HomeController', ['$state', function($state){
      var vm = this;
      vm.title = "Home";

      vm.sections = [
        {"id":"main", "template":'views/templates/_main.html'},
        {"id":"aboutus", "template":'views/templates/pages/_aboutus.html'},
        {"id":"engagement", "template":'views/templates/pages/_engagement.html'},
        {"id":"partnering", "template":'views/templates/pages/_partnering.html'},
        {"id":"careers", "template":'views/templates/pages/_careers.html'},
        {"id":"contactus", "template":'views/templates/pages/_contactus.html'},
      ];

      vm.boardOfDirectors =[
        {"name":"Richard J. Kang, PhD", "title":"Molecular & Cell Biology", "resume":["Founder of JK BioPharma Solutions, Inc", "Presently Board of Director & Chief Operating Officer at NeoImmuneTech, Inc (Maryland)","Leader Group Mentors of Korea Innovation Center (KIC) for Ministry of Science, ICT and Future Planning (MSIP) of Korea", "Formerly Chief Executive Officer at NeoImmuneTech, Inc","PhD from the University of Edinburgh","Serial entrepreneur, experience in Management, Operation, R&D, Clinical Development and Business Development in Bio/Pharma companies", "Various research experience for 17 years (20 publications in Cell, Nature, J of Pathology etc.; 9 patents)" ]},
        {"name":"Sun Dae Kang, PhD", "title":"Economics", "resume":["Formerly Chairman at Nexol Investments", "Formerly Adjunctive Faculty at Myungji University", "Formerly the first Head of Economic Research Institute at Kyobo Life Insurance", "Formerly Vice President Kyobo Life Insurance", "Formerly Vice President at Hanshin Securities", "Formerly Director at Daewoo Economic Research Institute", "PhD from Yunsei University", "Depth of expertise across multiple economic domains including venture capitals, securities etc." ]}
      ];
      vm.EModels = [{"title":"Strategic Plan", "img":"1.jpg", "isopen":false},{"title":"Innovation Management", "img":"2.jpg", "isopen":false},{"title":"Business Model", "img":"3.jpg", "isopen":false}];



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
