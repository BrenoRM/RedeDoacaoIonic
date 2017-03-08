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
    let doacaoModel = function(){
        return{
            quantidade: '',
            entrega:{
                formaDeEntrega: '',
                dataDaEntrega: '',
                horarioDaEntrega: ''
            }
        }
    };
    $scope.doacao = doacaoModel();
    $scope.doacoes = [];
    $scope.abrigos = [
                {
                    id: 1,
                    nome: 'Lar Torres de Melo',
                    endereco: 'R. Júlio Pinto, 1832 - Jacarecanga, Fortaleza - CE',
                    lat: -3.725975,
                    lng: -38.541830,
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
                    lat: -3.750371,
                    lng: -38.553351,
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
                $scope.instituicaoSelecionadaObject = valor;
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
        $scope.entregadorFlag = false;
        $scope.entregador = function(){
            $scope.entregadorFlag = true;
        }
        $scope.irDeixar = function(){
            $scope.entregadorFlag = false;
        }

        $scope.salvarDadosDoacao = function(){
            $scope.doacoes.push($scope.doacao);
            $scope.doacao = doacaoModel();
            console.log($scope.doacoes);
        }
        $scope.rota = false;
        $scope.visualizarRota = function(){
            if($scope.rota == true) $scope.rota = false;
            else{
                $scope.rota = true;
                $scope.instLat = $scope.instituicaoSelecionadaObject.lat;
                $scope.instLng = $scope.instituicaoSelecionadaObject.lng;
            }
            console.log($scope.rota);
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

.directive('map', function(){
    return{
        restrict: 'A',
        link: function($scope, element, attrs){

            let zValue = $scope.$eval(attrs.zoom);
            let lat = $scope.$eval(attrs.lat);
            let lng = $scope.$eval(attrs.lng);
            var myLatlng = new google.maps.LatLng(lat,lng);
            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition(function(position){
                    let pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    $scope.$eval(attrs.lat);
                    $scope.$eval(attrs.lng);
                    myLatlng = new google.maps.Map(document.getElementById('map'), {
                        center: {lat: pos.lat, lng: pos.lng},
                        zoom: 12
                    });
                     let directionsService = new google.maps.DirectionsService;
                     let directionsDisplay = new google.maps.DirectionsRenderer;
                     directionsDisplay.setMap(myLatlng);
                     let dest = {
                         lat: $scope.instLat,
                         lng: $scope.instLng
                     };
                     console.log(dest);
                     directionsService.route({
                         origin: pos,
                         destination: dest,
                         travelMode: google.maps.TravelMode.DRIVING
                     }, function(response, status){
                         if(status === google.maps.DirectionsStatus.OK){
                             directionsDisplay.setDirections(response);
                             myLatlng = directionsDisplay;
                         } else{
                             console.log("Error: " + status);
                         }
                     })

                    marker = new google.maps.Marker({
                        position: pos,
                        map: map
                    });
                });
            }
            
            mapOptions = {
                  zoom: zValue,
                  center: myLatlng
            }
            map = new google.maps.Map(element[0],mapOptions);
        }
    }
})
 