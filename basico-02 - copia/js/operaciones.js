
console.log( "Haciendo algo" );

var app = angular.module( "applicasuz",[] );
app.controller( "controlador", function( $scope ){ 

   $scope.imprimir = function()
   {
      //$scope.imprimir = [ { imagen: "img.jpg", enlace: "www.youtube.com" } ];
      console.log( $scope.valor );

   }

   $scope.sum = function()
   {
      $scope.resultado = parseInt( $scope.num1) + parseInt($scope.num2 );
   }

   $scope.res = function()
   {
      $scope.resultado2 = ( $scope.num4 ) - ( $scope.num5 );
   }

 });

 function cambiar()
 {
    console.log( "JS dasda" )
 }