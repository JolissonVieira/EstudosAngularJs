(function(){
    'use strict';

    angular
        .module('listaTelefonica')
        .filter('objectFilter', filter)

    function filter(){

        return filterFilter;

        function filterFilter(input, chave, valor){
            if(!chave || !valor){
                return input;
            }
            return input.filter(function (item) {
                if(!item[chave]){
                    return false;
                }
                return item[chave].toLowerCase().indexOf(valor.toLowerCase()) != -1;
            })
        }
    }

}());