//15.00 = 900 minutter


  var datbarCheck = function()
  {
      var text = '{"sentences":[' +
 '{"sentence":"sidde der hjemme og prikke øjnene ud over noget DADs"},' +
 '{"sentence":"sidde der hjemme og ikke forstå hvad der er op og ned i CompArk"},' +
 '{"sentence":"sidde der hjemme og Hade IntDes?"},' +
 '{"sentence":"sidde der hjemme og regulere dine automater"},' +
 '{"sentence":"sidde der hjemme og bede til Bouvins ånd om at forstå x86_64"},' +
 '{"sentence":"sidde der hjemme og bede til Bouvins ånd om at forstå x86_64"},' +
 '{"sentence":"sidde der hjemme og bede til Bouvins ånd om at forstå x86_64"},' +
 '{"sentence":"sidde der hjemme og bede til Bouvins ånd om at forstå x86_64"},' +
 '{"sentence":"sidde der hjemme og bede til Bouvins ånd om at forstå x86_64"},' +
 '{"sentence":"sidde der hjemme og bede til Bouvins ånd om at forstå x86_64"},' +
 '{"sentence":"sidde der hjemme og bede til Bouvins ånd om at forstå x86_64"}]}';


    var obj = JSON.parse(text);
//Genopfind tiden
    var todaysDate = new Date();
    var todaysWeekday = todaysDate.getDay();
    var currentTime = todaysDate.getTime();
    var hour = todaysDate.getHours();
    var minut = todaysDate.getMinutes();
    var weekdayArr = ["Søndag", "Mandag" , "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"];
//Lær den at snakke
    var answer = document.getElementById("answer");
//Lær den at finde rand tal
    var randomN = Math.round((Math.random()*10))

    if (todaysWeekday == 5)
        {
            if(hour == 02){
                answer.innerHTML = "Baren er desværre lukket nu!</br> <h3>(Så gå dog i seng.)</h3>"
            }

            else if(hour < 15){
                if((hour - 1 ) <=1 ){
                    answer.innerHTML="Baren åbner om " + ((hour - 14) * -1) + " Time og " + (60 - minut) + "minutter! <h3>Vi ses der nede.</h3>";
                }
                else {
                    answer.innerHTML="Baren åbner om " + ((hour - 14) * -1) + " Timer og " + (60 - minut) + " minutter! <h3>Vi ses der nede.</h3>";
                }
            }
            else{
                if((hour - 15) === 0){
                            answer.innerHTML = "Baren har været åben i " + minut + " minutter. <h3>Så bare roligt, der er rigelig med tid før baren lukker.</h3>";
                        }
                        else {
                            answer.innerHTML = "Baren har været åben i " + ((15 - hour) * -1) + " timer og " + minut + " minutter";
                        }

                }
        }
      else
      {
        answer.innerHTML = "Baren er desværre ikke åben, da det er " + weekdayArr[todaysWeekday] + ". <h3>Burde du ikke også"+ " " + obj.sentences[randomN].sentence + "?" + "</h3>";
      }
  }
