angular.module('listaTelefonica').controller('listaTelefonicaController',function($scope){
    $scope.contatos = [
        {nome: "Jolisson",telefone:"6185131432"},
        {nome: "Paulo",telefone:"6193267594"},
        {nome: "Antonio",telefone:"6185142021"}
    ]
    $scope.operadoras = [
        {nome: "Oi",id:"1"},
        {nome: "Tim",id:"2"},
        {nome: "Vivo",id:"3"},
        {nome: "Claro",id:"4"}
    ]
    $scope.adicionarContato = function(contato){
        $scope.contatos.push(angular.copy(contato));
        delete $scope.contato;
        $scope.contatoForm.$setPristine();
    };
    $scope.limparCampos = function(contato){
        delete $scope.contato;
        $scope.contatoForm.$setPristine();
    };
    $scope.removerContato = function(contatos){

        for (var i = contatos.length -1 ; i >= 0 ; i--) {
            if (contatos[i].selecionado) {
                contatos.splice(i, 1);
            }
        }

        $scope.contatos = contatos.filter(function(contato){
            if (!contato.selecionado) {
                return contato
            };
        });

    }
});