angular.module('listaTelefonica').controller('listaTelefonicaController',function($scope, $http){

    $http.get('http://morning-flower-8662.getsandbox.com/obter-contatos').then(function(data){
        $scope.contatos = data.data;
        console.log(data.data);
    })
    // $scope.contatos = [
    //     {nome: "Jolisson",telefone:"6185131432",data:new Date()},
    //     {nome: "Paulo",telefone:"6193267594",data:new Date()},
    //     {nome: "Antonio",telefone:"6185142021",data:new Date()}
    // ]
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