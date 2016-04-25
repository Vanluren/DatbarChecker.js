  var datbarCheck = function()
  {
      var text = '{"sentences":[' +
 '{"sentence":"sidde der hjemme og prikke øjnene ud over noget DADs"},' +
 '{"sentence":"sidde der hjemme og ikke forstå hvad der er op og ned i CompArk"},' +
 '{"sentence":"sidde der hjemme og Hade IntDes?"},' +
 '{"sentence":"sidde der hjemme og IKKE FÅ LAVET LEKTIER"},' +
 '{"sentence":""},' +
 '{"sentence":""},' +
 '{"sentence":""},' +
 '{"sentence":""},' +
 '{"sentence":""},' +
 '{"sentence":""},' +
 '{"sentence":""}]}';

    var obj = JSON.parse(text);
    var d = new Date();
    var n = d.getDay();
    var t = d.getTime();
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var weekday = ["Søndag", "Mandag" , "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag", ];
    var answer = document.getElementById("answer");
    var randomN = Math.round((Math.random()*10))

    if(randomN => obj.sentences.length){
        console.log(obj.sentences.length);
        console.log(randomN);
    }

    if (n == 5)
        {
            if(hours == 02){
                answer.innerHTML = "Baren er desværre lukket nu!</br> <h3>(Så gå dog i seng.)</h3>"
            }

            else if(hours < 15){
                if(((hours - 1) * -1) === 1){
                    answer.innerHTML="Baren åbner om " + ((hours - 15) * -1) + " Time! <h3>Vi ses der nede.</h3>";
                }
                else {
                    answer.innerHTML="Baren åbner om " + ((hours - 15) * -1) + " Timer! <h3>Vi ses der nede.</h3>";
                }
            }
            else{
                if((hours - 15) === 0){
                            answer.innerHTML = "Baren har været åben i " + minutes + " minutter. <h3>Så bare roligt, der er rigelig med tid før baren lukker.</h3>";
                        }
                        else {
                            answer.innerHTML = "Baren har været åben i " + ((15 - hours) * -1) + " timer og " + minutes + " minutter";
                        }

                }
        }
      else
      {
        answer.innerHTML = "Baren er desværre ikke åben, da det er " + weekday[n] + ". <h3>Burde du ikke også"+ " " + obj.sentences[randomN].sentence + "?" + "</h3>";
      }
  }
