angular.module('app.controllers', [])
  
.controller('doaOCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

}])
   
.controller('doaOMaterialCtrl', ['$scope', '$stateParams', '$ionicModal', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicModal) {

    $scope.abrigos = [
                {
                    id: 1,
                    nome: 'Lar Torres de Melo',
                    endereco: 'R. Júlio Pinto, 1832 - Jacarecanga, Fortaleza - CE',
                    CNPJ: '',
                    telefones: ['8532066750'],
                    itensNecessitados:[
                        {
                            nome: 'Leite em Pó',
                            quantidade: '200',
                            unidade: 'kg',
                            urgencia: 5
                        },
                        {
                            nome: 'Arroz',
                            quantidade: '50',
                            unidade: 'kg',
                            urgencia: 3   
                        },
                        {
                            nome: 'Escova de Dente',
                            quantidade: '100',
                            unidade: 'uni',
                            urgencia: 2
                        }
                    ],
                    dadosBancarios:{
                        agencia: '',
                        conta:'',
                        banco:'',
                        operacao: ''
                    }
                },
                {
                    id: 2,
                    nome: 'Lar 3 Irmãs',
                    endereco: ' R. Gustavo Braga, 140 - Rodolfo Teófilo, Fortaleza - CE',
                    CNPJ: '',
                    telefones: ['8530233343'],
                    itensNecessitados:[
                        {
                            nome: 'Leite em Pó',
                            quantidade: '200',
                            unidade: 'kg',
                            urgencia: 5
                        },
                        {
                            nome: 'Arroz',
                            quantidade: '50',
                            unidade: 'kg',
                            urgencia: 3   
                        },
                        {
                            nome: 'Escova de Dente',
                            quantidade: '100',
                            unidade: 'uni',
                            urgencia: 2
                        }
                    ],
                    dadosBancarios:{
                        agencia: '',
                        conta:'',
                        banco:'',
                        operacao: ''
                    }
                }
            ];
        $scope.instituicaoSelecionada = null;
        $scope.instituicaoSelecionadaObject;
        $scope.mudarStatus =  function(valor){
            if(valor == ""){
                $scope.instituicaoSelecionadaObject= null;
            }
            else{
                valor = JSON.parse(valor);
                $scope.instituicaoSelecionadaObject = valor
            }
        };
        $ionicModal.fromTemplateUrl('templates/doacaoModal.html',{
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal = modal;
        });

        $scope.openModal = function(){
            $scope.modal.show();
        };

        $scope.closeModal = function() {
            $scope.modal.hide();
        };
        
    //Cleanup the modal when we're done with it!
        $scope.$on('$destroy', function() {
            $scope.modal.remove();
        });
        
    // Execute action on hide modal
        $scope.$on('modal.hidden', function() {
        // Execute action
        });
        
    // Execute action on remove modal
        $scope.$on('modal.removed', function() {
        // Execute action
        });

        $scope.realizarDoacao = function(item){
            $scope.itemSelecionado = item;
            $scope.openModal();
        }
        
}])
   
.controller('doaOEmDinheiroCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

    $scope.abrigos = [
                {
                    nome: 'Lar Torres de Melo',
                    endereco: 'R. Júlio Pinto, 1832 - Jacarecanga, Fortaleza - CE',
                    CNPJ: '',
                    telefones: ['8532066750'],
                    itensNecessitados:[
                        {
                            nome: 'Leite em Pó',
                            quantidade: '200',
                            unidade: 'kg',
                            urgencia: 5
                        },
                        {
                            nome: 'Arroz',
                            quantidade: '50',
                            unidade: 'kg',
                            urgencia: 3   
                        },
                        {
                            nome: 'Escova de Dente',
                            quantidade: '100',
                            unidade: 'uni',
                            urgencia: 2
                        }
                    ],
                    dadosBancarios:{
                        agencia: '',
                        conta:'',
                        banco:'',
                        operacao: ''
                    }
                },
                {
                    nome: 'Lar 3 Irmãs',
                    endereco: ' R. Gustavo Braga, 140 - Rodolfo Teófilo, Fortaleza - CE',
                    CNPJ: '',
                    telefones: ['8530233343'],
                    itensNecessitados:[
                        {
                            nome: 'Leite em Pó',
                            quantidade: '200',
                            unidade: 'kg',
                            urgencia: 5
                        },
                        {
                            nome: 'Arroz',
                            quantidade: '50',
                            unidade: 'kg',
                            urgencia: 3   
                        },
                        {
                            nome: 'Escova de Dente',
                            quantidade: '100',
                            unidade: 'uni',
                            urgencia: 2
                        }
                    ],
                    dadosBancarios:{
                        agencia: '',
                        conta:'',
                        banco:'',
                        operacao: ''
                    }
                }
            ];

}])
 