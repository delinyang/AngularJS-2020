(function (){
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope)
  {
    $scope.items="";
    $scope.msgColor="green";

    $scope.CalcItems = function (itemStr)
    {
      var result = "Enjoy!";
      if (itemStr == "")
      {
        result = "Please enter data first";
        $scope.msgColor="red";
      }
      else {
        var numOfItems = itemStr.split(',').length;

        if (numOfItems > 3)
        {
          result = "Too much!"
        }

      }

      $scope.message = result;
    };


  };


})();
