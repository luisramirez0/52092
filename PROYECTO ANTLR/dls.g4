grammar dls;

//Gramatica
dsl : regla+ accion+ ;  

regla : REG identificador LLLAVE CUAN condicion ENT comando RLLAVE;

condicion : ACCESONOAUTORIZADO
          | multiplesintentosfallidos
          | ACTIVIDADSOSPECHOSA
          ;

multiplesintentosfallidos : INTENTOSFALLIDOS MAYOR DIGITO;

accion : ACC comando LLLAVE RLLAVE ;

identificador : LETRA (LETRA | DIGITO)* ;

comando : AGREGARUSUARIO
        | AGREGARIPA
        | ACTIVARMONITOREO
        ;

caracter : LETRA
         | DIGITO
         | '_'
         | '-'
         | '/'
         ;

//Lexemas
REG: 'regla' ;
ACC : 'accion' ;
CUAN : 'cuando' ;
ENT: 'entonces' ;
LLLAVE : '{' ;
RLLAVE : '}' ;
MAYOR : '>' ;
INTENTOSFALLIDOS : 'intentosFallidos' ;
AGREGARUSUARIO : 'agregarUsuarioAListaNegra' ;
AGREGARIPA : 'agregarIPAListaNegra' ;
ACTIVARMONITOREO : 'activarmonitoreoDetallado' ;
LETRA : [a-zA-Z];
DIGITO : [0-9];
ACCESONOAUTORIZADO : 'intentoAccesoFueraHorario' ;
ACTIVIDADSOSPECHOSA : 'accesoARecursosSensibles' 'y' 'no EsAdministrador' ;
WS: [ \t]+ -> skip ;
NEWLINE: '\r'? '\n' -> skip ;
