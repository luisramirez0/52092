
import fs from 'fs';
import readline from 'readline';
import dlsLexer from './generated/dlsLexer.js';
import dlsParser from './generated/dlsParser.js';
import CustomdlsVisitor from './CustomdlsVisitor.js';
import { CharStreams, CommonTokenStream } from "antlr4";

async function main() {
    let input;
    try {
        input = fs.readFileSync('input.txt', 'utf8');
    } catch (err) {
        input = await leerCadena();
        console.log(input);
    }

    let inputStream = CharStreams.fromString(input);
    let lexer = new dlsLexer(inputStream);

    console.log("Verificando tokens generados por el lexer...");
    const tokens = lexer.getAllTokens();

    if (tokens.length === 0) {
        console.error("No se generaron tokens. Verifica la entrada y la gramática.");
        return;
    }

    console.log("\nTabla de Tokens y Lexemas:");
    console.log("------------------------------------------------------------");
    console.log("| Lexema                   | Token                         |");
    console.log("------------------------------------------------------------");
    for (let token of tokens) {
        const tokenType = dlsLexer.symbolicNames[token.type] || `UNKNOWN (${token.type})`;
        const lexema = token.text;
        console.log(`| ${lexema.padEnd(14)}           | ${tokenType.padEnd(30)}|`);
    }
    console.log("-------------------------------------------------------");

    // Rehacer flujo léxico
    inputStream = CharStreams.fromString(input);
    lexer = new dlsLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new dlsParser(tokenStream);
    let tree = parser.dsl(); // ✅ regla inicial correcta

    if (parser.syntaxErrorsCount > 0) {
        console.error("\nSe encontraron errores de sintaxis en la entrada.");
    } else {
        console.log("\nEntrada válida.");
        const cadena_tree = tree.toStringTree(parser.ruleNames);
        console.log(`Árbol de derivación: ${cadena_tree}`);

        // ✅ Crear el contexto que simula el "estado" del sistema
        const contexto = {
            intentosFallidos: 5,     // Cambia para probar lógica
            fueraDeHorario: true,
            accesoSensibles: true,
            esAdmin: false
        };

        const visitor = new CustomdlsVisitor(contexto); // ✅ pasás contexto
        visitor.visit(tree);
    }
}

function leerCadena() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise(resolve => {
        rl.question("Ingrese una cadena: ", (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

main();
