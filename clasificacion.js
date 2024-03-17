
let verbo,tiempo,fin;

      do{
        verbo=prompt('ingrese un verbo: ','');
        tiempo=prompt('ingrese el tiempo: ','');
        
        if(verbo.match(/ar$/g)){
          fin="ar";
        }
        if(verbo.match(/er$/g)){
          fin="er";
        }
        if(verbo.match(/ir$/g)){
          fin="ir";
        }
      
        switch(tiempo){
          case "a":
            presenteYo(verbo,fin);
            break;
          
          case "f":
            futuroYo(verbo,fin);
            break;
          
          case "p":
            pasadoYo(verbo,fin);
            break;
          
          case "t":
            alert("Mostrando...");
            break;

          default:
            alert("Tiempo no reconocido");
        }
      
      }while(tiempo!="t");