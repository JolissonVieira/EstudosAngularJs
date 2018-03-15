angular.module('listaTelefonica').controller('listaTelefonicaController',function($scope){
    $scope.contatos = [
        {nome: "Jolisson",telefone:"6185131432"},
        {nome: "Paulo",telefone:"6193267594"},
        {nome: "Antonio",telefone:"6185142021"}
    ]
    $scope.adicionarContato = function(contato){
        $scope.contatos.push(angular.copy(contato)); 
    }
});