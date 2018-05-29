/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        //FUnciones sobre el html
            //$(document).ready(function(e) {
                //Login
                $("#submitbutton").click(function() {
                    var email = document.getElementById("email").value;
                    var pass = document.getElementById("pass").value;
                    var url = 'http://localhost:8000/api/login/'+email+'/'+pass;
                    $.ajax({
                        type: "GET",
                        url:url,
                        dataType: 'json',
                        timeout: 5000,
                    }).done(function( data, textStatus, jqXHR ) {//data van los datos
                        if ( console && console.log ) {
                            console.log( "La solicitud Ajax login se ha completado correctamente.");

                            if (window.localStorage) {
                              localStorage.setItem("email", data["email"]);
                              localStorage.setItem("nombre", data["Usuario"]);
                              localStorage.setItem("apellido", data["apellido"]);
                              localStorage.setItem("telefono", data["telefono"]);
                              localStorage.setItem("date", data["date"]);
                            }else {
                                console.log("Ha fallado");
                            }
                            window.location.replace("http://localhost:8001/inicio.html");                        
                        }
                    }).fail(function( jqXHR, textStatus, errorThrown) {
                        if ( console && console.log ) {
                            console.log( "La solicitud a fallado: " +  textStatus);
                            window.location.replace("#page1");
                            alert("Datos incorrectos");
                        }
                    });
                });

    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        //this.receivedEvent('deviceready');
        //cuando el hardware este terminado

    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();
//Ver todas las peliculas(Ejemplo del ajedrez)
function pelis(){
    var url = 'http://localhost:8000/api/verPelis';
    $.ajax({
        type: "GET",
        url:url,
        dataType: 'json',
        timeout: 5000,
    }).done(function( data, textStatus, jqXHR ) {//data van los datos
        if ( console && console.log ) {

            //Estrenos
          	document.getElementById("estrenos1").innerHTML = "<div class='row' style='margin-left: 5%;'><div class='hijo' style=' '><div class='portada-p'><img src='http://127.0.0.1:8000/peliculas/imgPeliculas/"+data["estrenos"][0]["titulo"]+"'style='height: 120px; border-radius: 8px;'></br></br><a class='ver'><p style='color:  #EC67A2;''>"+data["estrenos"][0]["titulo"]+"</p></a><span style='color:  #EC67A2; text-align: center;'>"+data["estrenos"][0]["aLanzamiento"]+"</span></div></div>";
            document.getElementById("estrenos2").innerHTML = "<div class='row' style='margin-left: 5%;'><div class='hijo' style=''><div class='portada-p'><img src='http://127.0.0.1:8000/peliculas/imgPeliculas/"+data["estrenos"][1]["titulo"]+"'style='height: 120px; border-radius: 8px;'></br></br><a class='ver'><p style='color:  #EC67A2;''>"+data["estrenos"][1]["titulo"]+"</p></a><span style='color:  #EC67A2; text-align: center;'>"+data["estrenos"][1]["aLanzamiento"]+"</span></div></div>";
            document.getElementById("estrenos3").innerHTML = "<div class='row' style='margin-left: 5%;'><div class='hijo' style=''><div class='portada-p'><img src='http://127.0.0.1:8000/peliculas/imgPeliculas/"+data["estrenos"][2]["titulo"]+"'style='height: 120px; border-radius: 8px;'></br></br><a class='ver'><p style='color:  #EC67A2;''>"+data["estrenos"][2]["titulo"]+"</p></a><span style='color:  #EC67A2; text-align: center;'>"+data["estrenos"][2]["aLanzamiento"]+"</span></div></div>";
            document.getElementById("estrenos4").innerHTML = "<div class='row' style='margin-left: 5%;'><div class='hijo' style=''><div class='portada-p'><img src='http://127.0.0.1:8000/peliculas/imgPeliculas/"+data["estrenos"][3]["titulo"]+"'style='height: 120px; border-radius: 8px;'></br></br><a class='ver'><p style='color:  #EC67A2;''>"+data["estrenos"][3]["titulo"]+"</p></a><span style='color:  #EC67A2; text-align: center;'>"+data["estrenos"][3]["aLanzamiento"]+"</span></div></div>";
            //Favoritos
            document.getElementById("fav1").innerHTML = "<div class='row' style='margin-left: 5%;'><div class='hijo' style=' '><div class='portada-p'><img src='http://127.0.0.1:8000/peliculas/imgPeliculas/"+data["favoritos"][0]["titulo"]+"'style='height: 120px; border-radius: 8px;'></br></br><a href='/inicio/verPelicula/'><p style='color:  #EC67A2;''>"+data["favoritos"][0]["titulo"]+"</p></a><span style='color:  #EC67A2; text-align: center;'>"+data["favoritos"][0]["aLanzamiento"]+"</span></div></div>";
            document.getElementById("fav2").innerHTML = "<div class='row' style='margin-left: 5%;'><div class='hijo' style=''><div class='portada-p'><img src='http://127.0.0.1:8000/peliculas/imgPeliculas/"+data["favoritos"][1]["titulo"]+"'style='height: 120px; border-radius: 8px;'></br></br><a href='/inicio/verPelicula/'><p style='color:  #EC67A2;''>"+data["favoritos"][1]["titulo"]+"</p></a><span style='color:  #EC67A2; text-align: center;'>"+data["favoritos"][1]["aLanzamiento"]+"</span></div></div>";
            document.getElementById("fav3").innerHTML = "<div class='row' style='margin-left: 5%;'><div class='hijo' style=''><div class='portada-p'><img src='http://127.0.0.1:8000/peliculas/imgPeliculas/"+data["favoritos"][2]["titulo"]+"'style='height: 120px; border-radius: 8px;'></br></br><a href='/inicio/verPelicula/'><p style='color:  #EC67A2;''>"+data["favoritos"][2]["titulo"]+"</p></a><span style='color:  #EC67A2; text-align: center;'>"+data["favoritos"][2]["aLanzamiento"]+"</span></div></div>";
            document.getElementById("fav4").innerHTML = "<div class='row' style='margin-left: 5%;'><div class='hijo' style=''><div class='portada-p'><img src='http://127.0.0.1:8000/peliculas/imgPeliculas/"+data["favoritos"][3]["titulo"]+"'style='height: 120px; border-radius: 8px;'></br></br><a href='/inicio/verPelicula/'><p style='color:  #EC67A2;''>"+data["favoritos"][3]["titulo"]+"</p></a><span style='color:  #EC67A2; text-align: center;'>"+data["favoritos"][3]["aLanzamiento"]+"</span></div></div>";
            //Favoritos2
            document.getElementById("fav5").innerHTML = "<div class='row' style='margin-left: 5%;'><div class='hijo' style=' '><div class='portada-p'><img src='http://127.0.0.1:8000/peliculas/imgPeliculas/"+data["favoritos"][4]["titulo"]+"'style='height: 120px; border-radius: 8px;'></br></br><a href='/inicio/verPelicula/'><p style='color:  #EC67A2;''>"+data["favoritos"][4]["titulo"]+"</p></a><span style='color:  #EC67A2; text-align: center;'>"+data["favoritos"][4]["aLanzamiento"]+"</span></div></div>";
            document.getElementById("fav6").innerHTML = "<div class='row' style='margin-left: 5%;'><div class='hijo' style=''><div class='portada-p'><img src='http://127.0.0.1:8000/peliculas/imgPeliculas/"+data["favoritos"][5]["titulo"]+"'style='height: 120px; border-radius: 8px;'></br></br><a href='/inicio/verPelicula/'><p style='color:  #EC67A2;''>"+data["favoritos"][5]["titulo"]+"</p></a><span style='color:  #EC67A2; text-align: center;'>"+data["favoritos"][5]["aLanzamiento"]+"</span></div></div>";
            document.getElementById("fav7").innerHTML = "<div class='row' style='margin-left: 5%;'><div class='hijo' style=''><div class='portada-p'><img src='http://127.0.0.1:8000/peliculas/imgPeliculas/"+data["favoritos"][6]["titulo"]+"'style='height: 120px; border-radius: 8px;'></br></br><a href='/inicio/verPelicula/'><p style='color:  #EC67A2;''>"+data["favoritos"][6]["titulo"]+"</p></a><span style='color:  #EC67A2; text-align: center;'>"+data["favoritos"][6]["aLanzamiento"]+"</span></div></div>";
            document.getElementById("fav8").innerHTML = "<div class='row' style='margin-left: 5%;'><div class='hijo' style=''><div class='portada-p'><img src='http://127.0.0.1:8000/peliculas/imgPeliculas/"+data["favoritos"][7]["titulo"]+"'style='height: 120px; border-radius: 8px;'></br></br><a href='/inicio/verPelicula/'><p style='color:  #EC67A2;''>"+data["favoritos"][7]["titulo"]+"</p></a><span style='color:  #EC67A2; text-align: center;'>"+data["favoritos"][7]["aLanzamiento"]+"</span></div></div>";
            //Ultimas agregadas
            document.getElementById("ult1").innerHTML = "<div class='row' style='margin-left: 5%;'><div class='hijo' style=' '><div class='portada-p'><img src='http://127.0.0.1:8000/peliculas/imgPeliculas/"+data["ultimas"][0]["titulo"]+"'style='height: 120px; border-radius: 8px;'></br></br><a href='/inicio/verPelicula/'><p style='color:  #EC67A2;''>"+data["ultimas"][0]["titulo"]+"</p></a><span style='color:  #EC67A2; text-align: center;'>"+data["ultimas"][0]["aLanzamiento"]+"</span></div></div>";
            document.getElementById("ult2").innerHTML = "<div class='row' style='margin-left: 5%;'><div class='hijo' style=''><div class='portada-p'><img src='http://127.0.0.1:8000/peliculas/imgPeliculas/"+data["ultimas"][1]["titulo"]+"'style='height: 120px; border-radius: 8px;'></br></br><a href='/inicio/verPelicula/'><p style='color:  #EC67A2;''>"+data["ultimas"][1]["titulo"]+"</p></a><span style='color:  #EC67A2; text-align: center;'>"+data["ultimas"][1]["aLanzamiento"]+"</span></div></div>";
            document.getElementById("ult3").innerHTML = "<div class='row' style='margin-left: 5%;'><div class='hijo' style=''><div class='portada-p'><img src='http://127.0.0.1:8000/peliculas/imgPeliculas/"+data["ultimas"][2]["titulo"]+"'style='height: 120px; border-radius: 8px;'></br></br><a href='/inicio/verPelicula/'><p style='color:  #EC67A2;''>"+data["ultimas"][2]["titulo"]+"</p></a><span style='color:  #EC67A2; text-align: center;'>"+data["ultimas"][2]["aLanzamiento"]+"</span></div></div>";
            document.getElementById("ult4").innerHTML = "<div class='row' style='margin-left: 5%;'><div class='hijo' style=''><div class='portada-p'><img src='http://127.0.0.1:8000/peliculas/imgPeliculas/"+data["ultimas"][3]["titulo"]+"'style='height: 120px; border-radius: 8px;'></br></br><a href='/inicio/verPelicula/'><p style='color:  #EC67A2;''>"+data["ultimas"][3]["titulo"]+"</p></a><span style='color:  #EC67A2; text-align: center;'>"+data["ultimas"][3]["aLanzamiento"]+"</span></div></div>";
            
        }
    }).fail(function( jqXHR, textStatus, errorThrown) {
        if ( console && console.log ) {
            console.log( "La solicitud a fallado: partidas " +  textStatus);favoritos}
    });
}

function series(){
    var url = 'http://localhost:8000/api/verSeries';
    $.ajax({
        type: "GET",
        url:url,
        dataType: 'json',
        timeout: 5000,
    }).done(function( data, textStatus, jqXHR ) {//data van los datos
        if ( console && console.log ) {
            //Estrenos
            document.getElementById("estrenos1").innerHTML = "<div class='row' style='margin-left: 5%;'><div class='hijo' style=' '><div class='portada-p'><img src='http://127.0.0.1:8000/series/imgSeries/"+data["estrenos"][0]["titulo"]+"'style='height: 120px; border-radius: 8px;'></br></br><a href='/inicio/verPelicula/'><p style='color:  #EC67A2;''>"+data["estrenos"][0]["titulo"]+"</p></a><span style='color:  #EC67A2; text-align: center;'>"+data["estrenos"][0]["aLanzamiento"]+"</span></div></div>";
            document.getElementById("estrenos2").innerHTML = "<div class='row' style='margin-left: 5%;'><div class='hijo' style=''><div class='portada-p'><img src='http://127.0.0.1:8000/series/imgSeries/"+data["estrenos"][1]["titulo"]+"'style='height: 120px; border-radius: 8px;'></br></br><a href='/inicio/verPelicula/'><p style='color:  #EC67A2;''>"+data["estrenos"][1]["titulo"]+"</p></a><span style='color:  #EC67A2; text-align: center;'>"+data["estrenos"][1]["aLanzamiento"]+"</span></div></div>";
            document.getElementById("estrenos3").innerHTML = "<div class='row' style='margin-left: 5%;'><div class='hijo' style=''><div class='portada-p'><img src='http://127.0.0.1:8000/series/imgSeries/"+data["estrenos"][2]["titulo"]+"'style='height: 120px; border-radius: 8px;'></br></br><a href='/inicio/verPelicula/'><p style='color:  #EC67A2;''>"+data["estrenos"][2]["titulo"]+"</p></a><span style='color:  #EC67A2; text-align: center;'>"+data["estrenos"][2]["aLanzamiento"]+"</span></div></div>";
            document.getElementById("estrenos4").innerHTML = "<div class='row' style='margin-left: 5%;'><div class='hijo' style=''><div class='portada-p'><img src='http://127.0.0.1:8000/series/imgSeries/"+data["estrenos"][3]["titulo"]+"'style='height: 120px; border-radius: 8px;'></br></br><a href='/inicio/verPelicula/'><p style='color:  #EC67A2;''>"+data["estrenos"][3]["titulo"]+"</p></a><span style='color:  #EC67A2; text-align: center;'>"+data["estrenos"][3]["aLanzamiento"]+"</span></div></div>";
            //Favoritos
            document.getElementById("fav1").innerHTML = "<div class='row' style='margin-left: 5%;'><div class='hijo' style=' '><div class='portada-p'><img src='http://127.0.0.1:8000/series/imgSeries/"+data["favoritos"][0]["titulo"]+"'style='height: 120px; border-radius: 8px;'></br></br><a href='/inicio/verPelicula/'><p style='color:  #EC67A2;''>"+data["favoritos"][0]["titulo"]+"</p></a><span style='color:  #EC67A2; text-align: center;'>"+data["favoritos"][0]["aLanzamiento"]+"</span></div></div>";
            document.getElementById("fav2").innerHTML = "<div class='row' style='margin-left: 5%;'><div class='hijo' style=''><div class='portada-p'><img src='http://127.0.0.1:8000/series/imgSeries/"+data["favoritos"][1]["titulo"]+"'style='height: 120px; border-radius: 8px;'></br></br><a href='/inicio/verPelicula/'><p style='color:  #EC67A2;''>"+data["favoritos"][1]["titulo"]+"</p></a><span style='color:  #EC67A2; text-align: center;'>"+data["favoritos"][1]["aLanzamiento"]+"</span></div></div>";
            document.getElementById("fav3").innerHTML = "<div class='row' style='margin-left: 5%;'><div class='hijo' style=''><div class='portada-p'><img src='http://127.0.0.1:8000/series/imgSeries/"+data["favoritos"][2]["titulo"]+"'style='height: 120px; border-radius: 8px;'></br></br><a href='/inicio/verPelicula/'><p style='color:  #EC67A2;''>"+data["favoritos"][2]["titulo"]+"</p></a><span style='color:  #EC67A2; text-align: center;'>"+data["favoritos"][2]["aLanzamiento"]+"</span></div></div>";
            document.getElementById("fav4").innerHTML = "<div class='row' style='margin-left: 5%;'><div class='hijo' style=''><div class='portada-p'><img src='http://127.0.0.1:8000/series/imgSeries/"+data["favoritos"][3]["titulo"]+"'style='height: 120px; border-radius: 8px;'></br></br><a href='/inicio/verPelicula/'><p style='color:  #EC67A2;''>"+data["favoritos"][3]["titulo"]+"</p></a><span style='color:  #EC67A2; text-align: center;'>"+data["favoritos"][3]["aLanzamiento"]+"</span></div></div>";
            //Favoritos2
            document.getElementById("fav5").innerHTML = "<div class='row' style='margin-left: 5%;'><div class='hijo' style=' '><div class='portada-p'><img src='http://127.0.0.1:8000/series/imgSeries/"+data["favoritos"][4]["titulo"]+"'style='height: 120px; border-radius: 8px;'></br></br><a href='/inicio/verPelicula/'><p style='color:  #EC67A2;''>"+data["favoritos"][4]["titulo"]+"</p></a><span style='color:  #EC67A2; text-align: center;'>"+data["favoritos"][4]["aLanzamiento"]+"</span></div></div>";
            document.getElementById("fav6").innerHTML = "<div class='row' style='margin-left: 5%;'><div class='hijo' style=''><div class='portada-p'><img src='http://127.0.0.1:8000/series/imgSeries/"+data["favoritos"][5]["titulo"]+"'style='height: 120px; border-radius: 8px;'></br></br><a href='/inicio/verPelicula/'><p style='color:  #EC67A2;''>"+data["favoritos"][5]["titulo"]+"</p></a><span style='color:  #EC67A2; text-align: center;'>"+data["favoritos"][5]["aLanzamiento"]+"</span></div></div>";
            document.getElementById("fav7").innerHTML = "<div class='row' style='margin-left: 5%;'><div class='hijo' style=''><div class='portada-p'><img src='http://127.0.0.1:8000/series/imgSeries/"+data["favoritos"][6]["titulo"]+"'style='height: 120px; border-radius: 8px;'></br></br><a href='/inicio/verPelicula/'><p style='color:  #EC67A2;''>"+data["favoritos"][6]["titulo"]+"</p></a><span style='color:  #EC67A2; text-align: center;'>"+data["favoritos"][6]["aLanzamiento"]+"</span></div></div>";
            document.getElementById("fav8").innerHTML = "<div class='row' style='margin-left: 5%;'><div class='hijo' style=''><div class='portada-p'><img src='http://127.0.0.1:8000/series/imgSeries/"+data["favoritos"][7]["titulo"]+"'style='height: 120px; border-radius: 8px;'></br></br><a href='/inicio/verPelicula/'><p style='color:  #EC67A2;''>"+data["favoritos"][7]["titulo"]+"</p></a><span style='color:  #EC67A2; text-align: center;'>"+data["favoritos"][7]["aLanzamiento"]+"</span></div></div>";
            //Ultimas agregadas
            document.getElementById("ult1").innerHTML = "<div class='row' style='margin-left: 5%;'><div class='hijo' style=' '><div class='portada-p'><img src='http://127.0.0.1:8000/series/imgSeries/"+data["ultimas"][0]["titulo"]+"'style='height: 120px; border-radius: 8px;'></br></br><a href='/inicio/verPelicula/'><p style='color:  #EC67A2;''>"+data["ultimas"][0]["titulo"]+"</p></a><span style='color:  #EC67A2; text-align: center;'>"+data["ultimas"][0]["aLanzamiento"]+"</span></div></div>";
            document.getElementById("ult2").innerHTML = "<div class='row' style='margin-left: 5%;'><div class='hijo' style=''><div class='portada-p'><img src='http://127.0.0.1:8000/series/imgSeries/"+data["ultimas"][1]["titulo"]+"'style='height: 120px; border-radius: 8px;'></br></br><a href='/inicio/verPelicula/'><p style='color:  #EC67A2;''>"+data["ultimas"][1]["titulo"]+"</p></a><span style='color:  #EC67A2; text-align: center;'>"+data["ultimas"][1]["aLanzamiento"]+"</span></div></div>";
            document.getElementById("ult3").innerHTML = "<div class='row' style='margin-left: 5%;'><div class='hijo' style=''><div class='portada-p'><img src='http://127.0.0.1:8000/series/imgSeries/"+data["ultimas"][2]["titulo"]+"'style='height: 120px; border-radius: 8px;'></br></br><a href='/inicio/verPelicula/'><p style='color:  #EC67A2;''>"+data["ultimas"][2]["titulo"]+"</p></a><span style='color:  #EC67A2; text-align: center;'>"+data["ultimas"][2]["aLanzamiento"]+"</span></div></div>";
            document.getElementById("ult4").innerHTML = "<div class='row' style='margin-left: 5%;'><div class='hijo' style=''><div class='portada-p'><img src='http://127.0.0.1:8000/series/imgSeries/"+data["ultimas"][3]["titulo"]+"'style='height: 120px; border-radius: 8px;'></br></br><a href='/inicio/verPelicula/'><p style='color:  #EC67A2;''>"+data["ultimas"][3]["titulo"]+"</p></a><span style='color:  #EC67A2; text-align: center;'>"+data["ultimas"][3]["aLanzamiento"]+"</span></div></div>";
            
            
        }
    }).fail(function( jqXHR, textStatus, errorThrown) {
        if ( console && console.log ) {
            console.log( "La solicitud a fallado: partidas " +  textStatus);
        }
    });
}
