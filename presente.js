function presenteYo(entrada,final){
    entrada = entrada.substring(0, entrada.length -2);

    document.write("Yo " + entrada + "o.<br>");
    presenteTu(entrada, final);
}

function presenteTu(entrada, final){
    if(final=="ar"){
        document.write("Tu " + entrada + "as.<br>");
    }
    if(final=="er"||final=="ir"){
        document.write("Tu " + entrada + "es.<br>");
    }
    presenteEl(entrada,final);
}

function presenteEl(entrada,final){
    if(final=="ar"){
        document.write("El " + entrada + "a.<br>");
    }
    if(final=="er"||final=="ir"){
        document.write("El " + entrada + "e.<br>");
    }
    presenteNosotros(entrada,final);
}

function presenteNosotros(entrada,final){
    if(final=="ar"){
        document.write("Nosotros " + entrada + "amos.<br>");
    }
    if(final=="er"){
        document.write("Nosotros " + entrada + "emos.<br>");
    }
    if(final=="ir"){
        document.write("Nosotros " + entrada + "imos.<br>");
    }
    presenteVosotros(entrada,final);
}

function presenteVosotros(entrada,final){
    if(final=="ar"){
        document.write("Vosotros " + entrada + "ais.<br>");
    }
    if(final=="er"){
        document.write("Vosotros " + entrada + "eis.<br>");
    }
    if(final=="ir"){
        document.write("Vosotros " + entrada + "is.<br>");
    }
    presenteEllos(entrada,final);
}

function presenteEllos(entrada,final){
    if(final=="ar"){
        document.write("Ellos " + entrada + "an.<br><br><br>");
    }
    if(final=="er"||final=="ir"){
        document.write("Ellos " + entrada + "en.<br><br><br>");
    }
}


