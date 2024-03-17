function pasadoYo(entrada,final){
    entrada = entrada.substring(0, entrada.length -2);

    if(final=="ar"){
        document.write("Yo " + entrada + "e.<br>");
    }
    if(final=="er"||final=="ir"){
        document.write("Yo " + entrada + "i.<br>");
    }    pasadoTu(entrada, final);
}

function pasadoTu(entrada, final){
    if(final=="ar"){
        document.write("Tu " + entrada + "aste.<br>");
    }
    if(final=="er"||final=="ir"){
        document.write("Tu " + entrada + "iste.<br>");
    }
    pasadoEl(entrada,final);
}

function pasadoEl(entrada,final){
    if(final=="ar"){
        document.write("El " + entrada + "o.<br>");
    }
    if(final=="er"||final=="ir"){
        document.write("El " + entrada + "io.<br>");
    }
    pasadoNosotros(entrada,final);
}

function pasadoNosotros(entrada,final){
    if(final=="ar"){
        document.write("Nosotros " + entrada + "amos.<br>");
    }
    if(final=="er"||final=="ir"){
        document.write("Nosotros " + entrada + "imos.<br>");
    }
    pasadoVosotros(entrada,final);
}

function pasadoVosotros(entrada,final){
    if(final=="ar"){
        document.write("Vosotros " + entrada + "asteis.<br>");
    }
    if(final=="er"||final=="ir"){
        document.write("Vosotros " + entrada + "isteis.<br>");
    }
    pasadoEllos(entrada,final);
}

function pasadoEllos(entrada,final){
    if(final=="ar"){
        document.write("Ellos " + entrada + "aron.<br>");
    }
    if(final=="er"||final=="ir"){
        document.write("Ellos " + entrada + "ieron.<br><br><br>");
    }
}


