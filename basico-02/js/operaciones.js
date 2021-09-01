
console.log( "Haciendo algo" );

var app = angular.module( "applicasuz",[] );
app.controller( "controlador", function( $scope ){ 

   //$scope.producto = [];
   //$scope.producto[0] = [  { id: 1,nombre: "papa: " },
   //$scope.producto[1] = [  { id: 2,nombre: "yuca: " },

   $scope.producto = [  { id: 1, nombre: "papa", icono: "img1.jpg", enlace: "https://www.google.com/" }, 
                        { id: 2, nombre: "yuca", icono: "img2.jpg", enlace: "http://oferta.senasofiaplus.edu.co"}, 
                        { id: 3, nombre: "arroz", icono: "img3.jpg", enlace: "https://www.youtube.com/"},
                        { id: 4, nombre: "panela", icono: "img4.jpg", enlace: "https://www.google.com/"},
                        { id: 5, nombre: "queso", icono: "img4.jpg", enlace: "https://www.google.com/"}
                     ];     


   $scope.precio = 1000;


 });