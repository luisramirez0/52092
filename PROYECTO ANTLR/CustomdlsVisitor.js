import dlsVisitor from './generated/dlsVisitor.js';

class CustomdlsVisitor extends dlsVisitor {
    visitDsl(ctx) {
        // Visita todas las reglas
        for (let reglaCtx of ctx.regla()) {
            this.visit(reglaCtx);
        }
        // Visita todas las acciones
        for (let accionCtx of ctx.accion()) {
            this.visit(accionCtx);
        }
    }

    visitRegla(ctx) {
        const id = ctx.identificador().getText();
        console.log(`>> Ejecutando regla: ${id}`);
        const condicion = this.visit(ctx.condicion());
        if (condicion) {
            this.visit(ctx.comando());
        } else {
            console.log(">> Condición no cumplida, no se ejecuta el comando.");
        }
    }

    visitCondicion(ctx) {
        if (ctx.ACCESONOAUTORIZADO()) {
            console.log(">> Condición: intentoAccesoFueraHorario");
            return true; // Simulación
        }
        if (ctx.multiplesintentosfallidos()) {
            return this.visit(ctx.multiplesintentosfallidos());
        }
        if (ctx.ACTIVIDADSOSPECHOSA()) {
            console.log(">> Condición: accesoARecursosSensibles y no EsAdministrador");
            return true; // Simulación
        }
        return false;
    }

    visitMultiplesintentosfallidos(ctx) {
        const valor = parseInt(ctx.DIGITO().getText());
        
        const intentosFallidos = 5;
        const resultado = intentosFallidos > valor;
        console.log(`>> Condición: intentosFallidos (${intentosFallidos}) > ${valor} = ${resultado}`);
        return resultado;
    }

    visitAccion(ctx) {
        console.log(">> Ejecutando acción:");
        this.visit(ctx.comando());
    }

    visitComando(ctx) {
        const cmd = ctx.getText();
        switch (cmd) {
            case "agregarUsuarioAListaNegra":
                console.log(">> listaNegra.push(usuario);");
                break;
            case "agregarIPAListaNegra":
                console.log(">> listaNegra.push(ip);");
                break;
            case "activarmonitoreoDetallado":
                console.log(">> activarMonitoreo(true);");
                break;
            default:
                console.log(">> Comando desconocido:", cmd);
        }
    }
}

export default CustomdlsVisitor;
