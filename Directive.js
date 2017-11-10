/// <reference path="Provider.js" />
/// <reference path="angular.min.js" />
var app = angular.module('myapp', []);
app.controller('testdirective', ['$scope',function ($scope) {
    $scope.name = "Abhijit";
    $scope.place = "Kolkata";


}]);
app.directive('placecheck', function () {

    return {

        restrict: 'EA',
        template:'<input type="text" ng-model="place"/>',
        scope: {
            place:'=testdrive'

        },
        link: function (scope, elem, attr) {
            debugger;
            var a = attr.testdrive;
          
            elem.bind('keypress', function (event) {
                var func = scope.$eval(attr.placecheck);
                debugger;
                //var model = $parse(attrs.placecheck);
                var h = elem;

            });


    }


    }

});
app.directive('customdiretive', function () {
    
    return {
        restrict: 'A',
        template: '<input type="text" ng-model="name"/><h1>I Love my country {{name}}<h1>',
        scope: {
        name:"@check"
        },
        compile: function (elem, attr) {
            
            return {
               
                    post: function (scope, elem, attr) {
                        elem.append('<h1>I Love my country1 </h1>');
                       scope.name = 'abhi';
                    },
                    pre: function (scope, elem, attr) {
                        elem.append("<h1>I Love my country2</h1>");
                        scope.name = 'abhi';
                    }
                
            }
        }
    }
    
});
app.factory('directiveservice', function () {

    return {

        getname: function () {
            return "abhijit is not ";
        }

    }

})
app.directive('checklove', function (directiveservice) {

    return {
        restrict: 'E',
        template: '<div>ohh this is {{chhh}}</div>',
        link: function (scope, elem) {
            debugger;
            scope.chhh = directiveservice.getname();
        }

    }

});
app.directive('mandir', function () {

    return {
        priority: 101,
        restrict: 'A',
        template:'abhijiiiiiiii',
        controller: function ($scope, $element, $attrs) {
            $scope.name1 = [];
            this.addName = function () {
                $scope.name1="Abhijit2222";
                return $scope.name1;
            }
            this.addName1 = function () {
                $scope.name2 = "Abhijit1111";
                return $scope.name2;
            }
            this.addName2 = function () {
                $scope.name1.push("Abhijittwaatt");
            }
        },
        link: function (scope, element) {
            element.bind('mouseover', function () {
                console.log(scope.name1);
            })
        }
    }
});



app.directive('checkname', function () {
    return {
        priority:100,
        restrict:'EA',
        require:'mandir',
        template:'love uuuuuuuuuuu',
        link: function (scope, element, attrs, mandirCtrl) {
          
            console.log(mandirCtrl.addName());
            console.log(mandirCtrl.addName1());
        }
    }
});
app.directive('inter', function () {

    return {
        restrict:'E',
        template:'<p>My name is {{name}} </p>'

    }
});
