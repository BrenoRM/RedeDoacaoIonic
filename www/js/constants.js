angular
        .module('app.constants', [])
        .constants('AllConstants', {
            INSTITUICOES:[
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
            ]
        });