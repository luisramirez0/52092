import dlsListener from "./generated/dlsListener.js";

export class CustomdlsListener extends dlsListener {

    enterStat(ctx) {
        console.log(`Se detectó una: ${ctx.constructor.name}`);
    }

    enterRegla(ctx) {
        console.log("Entrando a una regla:", ctx.identificador().getText());
    }

    enterAccion(ctx) {
        console.log("Entrando a una acción");
    }

}