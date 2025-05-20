// Generated from c:/Users/herma/Documents/luis cod/dls.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import dlsListener from './dlsListener.js';
import dlsVisitor from './dlsVisitor.js';

const serializedATN = [4,1,20,61,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,1,0,4,0,18,8,0,11,0,12,0,19,1,0,4,0,23,8,0,11,0,
12,0,24,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,3,2,39,8,2,1,3,1,
3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,5,1,5,5,5,52,8,5,10,5,12,5,55,9,5,1,6,1,
6,1,7,1,7,1,7,0,0,8,0,2,4,6,8,10,12,14,0,3,1,0,15,16,1,0,12,14,2,0,1,3,15,
16,57,0,17,1,0,0,0,2,26,1,0,0,0,4,38,1,0,0,0,6,40,1,0,0,0,8,44,1,0,0,0,10,
49,1,0,0,0,12,56,1,0,0,0,14,58,1,0,0,0,16,18,3,2,1,0,17,16,1,0,0,0,18,19,
1,0,0,0,19,17,1,0,0,0,19,20,1,0,0,0,20,22,1,0,0,0,21,23,3,8,4,0,22,21,1,
0,0,0,23,24,1,0,0,0,24,22,1,0,0,0,24,25,1,0,0,0,25,1,1,0,0,0,26,27,5,4,0,
0,27,28,3,10,5,0,28,29,5,8,0,0,29,30,5,6,0,0,30,31,3,4,2,0,31,32,5,7,0,0,
32,33,3,12,6,0,33,34,5,9,0,0,34,3,1,0,0,0,35,39,5,17,0,0,36,39,3,6,3,0,37,
39,5,18,0,0,38,35,1,0,0,0,38,36,1,0,0,0,38,37,1,0,0,0,39,5,1,0,0,0,40,41,
5,11,0,0,41,42,5,10,0,0,42,43,5,16,0,0,43,7,1,0,0,0,44,45,5,5,0,0,45,46,
3,12,6,0,46,47,5,8,0,0,47,48,5,9,0,0,48,9,1,0,0,0,49,53,5,15,0,0,50,52,7,
0,0,0,51,50,1,0,0,0,52,55,1,0,0,0,53,51,1,0,0,0,53,54,1,0,0,0,54,11,1,0,
0,0,55,53,1,0,0,0,56,57,7,1,0,0,57,13,1,0,0,0,58,59,7,2,0,0,59,15,1,0,0,
0,4,19,24,38,53];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class dlsParser extends antlr4.Parser {

    static grammarFileName = "dls.g4";
    static literalNames = [ null, "'_'", "'-'", "'/'", "'regla'", "'accion'", 
                            "'cuando'", "'entonces'", "'{'", "'}'", "'>'", 
                            "'intentosFallidos'", "'agregarUsuarioAListaNegra'", 
                            "'agregarIPAListaNegra'", "'activarmonitoreoDetallado'", 
                            null, null, "'intentoAccesoFueraHorario'" ];
    static symbolicNames = [ null, null, null, null, "REG", "ACC", "CUAN", 
                             "ENT", "LLLAVE", "RLLAVE", "MAYOR", "INTENTOSFALLIDOS", 
                             "AGREGARUSUARIO", "AGREGARIPA", "ACTIVARMONITOREO", 
                             "LETRA", "DIGITO", "ACCESONOAUTORIZADO", "ACTIVIDADSOSPECHOSA", 
                             "WS", "NEWLINE" ];
    static ruleNames = [ "dsl", "regla", "condicion", "multiplesintentosfallidos", 
                         "accion", "identificador", "comando", "caracter" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = dlsParser.ruleNames;
        this.literalNames = dlsParser.literalNames;
        this.symbolicNames = dlsParser.symbolicNames;
    }



	dsl() {
	    let localctx = new DslContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, dlsParser.RULE_dsl);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 17; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 16;
	            this.regla();
	            this.state = 19; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===4);
	        this.state = 22; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 21;
	            this.accion();
	            this.state = 24; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===5);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	regla() {
	    let localctx = new ReglaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, dlsParser.RULE_regla);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 26;
	        this.match(dlsParser.REG);
	        this.state = 27;
	        this.identificador();
	        this.state = 28;
	        this.match(dlsParser.LLLAVE);
	        this.state = 29;
	        this.match(dlsParser.CUAN);
	        this.state = 30;
	        this.condicion();
	        this.state = 31;
	        this.match(dlsParser.ENT);
	        this.state = 32;
	        this.comando();
	        this.state = 33;
	        this.match(dlsParser.RLLAVE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicion() {
	    let localctx = new CondicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, dlsParser.RULE_condicion);
	    try {
	        this.state = 38;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 17:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 35;
	            this.match(dlsParser.ACCESONOAUTORIZADO);
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 36;
	            this.multiplesintentosfallidos();
	            break;
	        case 18:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 37;
	            this.match(dlsParser.ACTIVIDADSOSPECHOSA);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	multiplesintentosfallidos() {
	    let localctx = new MultiplesintentosfallidosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, dlsParser.RULE_multiplesintentosfallidos);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 40;
	        this.match(dlsParser.INTENTOSFALLIDOS);
	        this.state = 41;
	        this.match(dlsParser.MAYOR);
	        this.state = 42;
	        this.match(dlsParser.DIGITO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	accion() {
	    let localctx = new AccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, dlsParser.RULE_accion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this.match(dlsParser.ACC);
	        this.state = 45;
	        this.comando();
	        this.state = 46;
	        this.match(dlsParser.LLLAVE);
	        this.state = 47;
	        this.match(dlsParser.RLLAVE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	identificador() {
	    let localctx = new IdentificadorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, dlsParser.RULE_identificador);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
	        this.match(dlsParser.LETRA);
	        this.state = 53;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===15 || _la===16) {
	            this.state = 50;
	            _la = this._input.LA(1);
	            if(!(_la===15 || _la===16)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 55;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	comando() {
	    let localctx = new ComandoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, dlsParser.RULE_comando);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 56;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 28672) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	caracter() {
	    let localctx = new CaracterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, dlsParser.RULE_caracter);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 98318) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

dlsParser.EOF = antlr4.Token.EOF;
dlsParser.T__0 = 1;
dlsParser.T__1 = 2;
dlsParser.T__2 = 3;
dlsParser.REG = 4;
dlsParser.ACC = 5;
dlsParser.CUAN = 6;
dlsParser.ENT = 7;
dlsParser.LLLAVE = 8;
dlsParser.RLLAVE = 9;
dlsParser.MAYOR = 10;
dlsParser.INTENTOSFALLIDOS = 11;
dlsParser.AGREGARUSUARIO = 12;
dlsParser.AGREGARIPA = 13;
dlsParser.ACTIVARMONITOREO = 14;
dlsParser.LETRA = 15;
dlsParser.DIGITO = 16;
dlsParser.ACCESONOAUTORIZADO = 17;
dlsParser.ACTIVIDADSOSPECHOSA = 18;
dlsParser.WS = 19;
dlsParser.NEWLINE = 20;

dlsParser.RULE_dsl = 0;
dlsParser.RULE_regla = 1;
dlsParser.RULE_condicion = 2;
dlsParser.RULE_multiplesintentosfallidos = 3;
dlsParser.RULE_accion = 4;
dlsParser.RULE_identificador = 5;
dlsParser.RULE_comando = 6;
dlsParser.RULE_caracter = 7;

class DslContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = dlsParser.RULE_dsl;
    }

	regla = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ReglaContext);
	    } else {
	        return this.getTypedRuleContext(ReglaContext,i);
	    }
	};

	accion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AccionContext);
	    } else {
	        return this.getTypedRuleContext(AccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof dlsListener ) {
	        listener.enterDsl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof dlsListener ) {
	        listener.exitDsl(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof dlsVisitor ) {
	        return visitor.visitDsl(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ReglaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = dlsParser.RULE_regla;
    }

	REG() {
	    return this.getToken(dlsParser.REG, 0);
	};

	identificador() {
	    return this.getTypedRuleContext(IdentificadorContext,0);
	};

	LLLAVE() {
	    return this.getToken(dlsParser.LLLAVE, 0);
	};

	CUAN() {
	    return this.getToken(dlsParser.CUAN, 0);
	};

	condicion() {
	    return this.getTypedRuleContext(CondicionContext,0);
	};

	ENT() {
	    return this.getToken(dlsParser.ENT, 0);
	};

	comando() {
	    return this.getTypedRuleContext(ComandoContext,0);
	};

	RLLAVE() {
	    return this.getToken(dlsParser.RLLAVE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof dlsListener ) {
	        listener.enterRegla(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof dlsListener ) {
	        listener.exitRegla(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof dlsVisitor ) {
	        return visitor.visitRegla(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CondicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = dlsParser.RULE_condicion;
    }

	ACCESONOAUTORIZADO() {
	    return this.getToken(dlsParser.ACCESONOAUTORIZADO, 0);
	};

	multiplesintentosfallidos() {
	    return this.getTypedRuleContext(MultiplesintentosfallidosContext,0);
	};

	ACTIVIDADSOSPECHOSA() {
	    return this.getToken(dlsParser.ACTIVIDADSOSPECHOSA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof dlsListener ) {
	        listener.enterCondicion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof dlsListener ) {
	        listener.exitCondicion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof dlsVisitor ) {
	        return visitor.visitCondicion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MultiplesintentosfallidosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = dlsParser.RULE_multiplesintentosfallidos;
    }

	INTENTOSFALLIDOS() {
	    return this.getToken(dlsParser.INTENTOSFALLIDOS, 0);
	};

	MAYOR() {
	    return this.getToken(dlsParser.MAYOR, 0);
	};

	DIGITO() {
	    return this.getToken(dlsParser.DIGITO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof dlsListener ) {
	        listener.enterMultiplesintentosfallidos(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof dlsListener ) {
	        listener.exitMultiplesintentosfallidos(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof dlsVisitor ) {
	        return visitor.visitMultiplesintentosfallidos(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = dlsParser.RULE_accion;
    }

	ACC() {
	    return this.getToken(dlsParser.ACC, 0);
	};

	comando() {
	    return this.getTypedRuleContext(ComandoContext,0);
	};

	LLLAVE() {
	    return this.getToken(dlsParser.LLLAVE, 0);
	};

	RLLAVE() {
	    return this.getToken(dlsParser.RLLAVE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof dlsListener ) {
	        listener.enterAccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof dlsListener ) {
	        listener.exitAccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof dlsVisitor ) {
	        return visitor.visitAccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IdentificadorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = dlsParser.RULE_identificador;
    }

	LETRA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(dlsParser.LETRA);
	    } else {
	        return this.getToken(dlsParser.LETRA, i);
	    }
	};


	DIGITO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(dlsParser.DIGITO);
	    } else {
	        return this.getToken(dlsParser.DIGITO, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof dlsListener ) {
	        listener.enterIdentificador(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof dlsListener ) {
	        listener.exitIdentificador(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof dlsVisitor ) {
	        return visitor.visitIdentificador(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ComandoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = dlsParser.RULE_comando;
    }

	AGREGARUSUARIO() {
	    return this.getToken(dlsParser.AGREGARUSUARIO, 0);
	};

	AGREGARIPA() {
	    return this.getToken(dlsParser.AGREGARIPA, 0);
	};

	ACTIVARMONITOREO() {
	    return this.getToken(dlsParser.ACTIVARMONITOREO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof dlsListener ) {
	        listener.enterComando(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof dlsListener ) {
	        listener.exitComando(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof dlsVisitor ) {
	        return visitor.visitComando(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CaracterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = dlsParser.RULE_caracter;
    }

	LETRA() {
	    return this.getToken(dlsParser.LETRA, 0);
	};

	DIGITO() {
	    return this.getToken(dlsParser.DIGITO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof dlsListener ) {
	        listener.enterCaracter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof dlsListener ) {
	        listener.exitCaracter(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof dlsVisitor ) {
	        return visitor.visitCaracter(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




dlsParser.DslContext = DslContext; 
dlsParser.ReglaContext = ReglaContext; 
dlsParser.CondicionContext = CondicionContext; 
dlsParser.MultiplesintentosfallidosContext = MultiplesintentosfallidosContext; 
dlsParser.AccionContext = AccionContext; 
dlsParser.IdentificadorContext = IdentificadorContext; 
dlsParser.ComandoContext = ComandoContext; 
dlsParser.CaracterContext = CaracterContext; 
