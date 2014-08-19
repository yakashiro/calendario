(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

'use strict';



var miVentana;
var miIntervalo;/*=setInterval(function(){intervalo(); },1000);*/
var miTimeout;
var tiempoObjeto=function (){ return new Date();};
var tipoDe=function (v){ return typeof v;};
var objetoTiempo=tiempoObjeto(null);


//#numeros | #url | #texto | #array | #test | #tiempo | #navigator | #document | #window | #encode 
var esNAN=function(v){ return isNaN(v);};
var contar=function(v){return v.length;};
var arcoTangente2=function (x,y){ return Math.atan2(x,y);};
var numeroMaximo=function(){ return Number.MAX_VALUE;};
var numeroBajo=function(){ return Number.MIN_VALUE;};
var convertirNumeroEnNotacionExpotencial=function(v){return v.toExponential();};


//fn rm(type,valor,valor2)
var misRecursos=function (t,v,v2,v3,v4){
var tipos=['entero','esNumero','igual','flotante','finito','numero','valorAbsoluto','arcoCoseno','coseno','arcoSeno','seno','arcoTangente','tangente','redondeoArriba','redondeoAbajo','redondeo','euler','logaritmo','max','min','potencia','aleatorio','raizCuadrada','decimal','precision','porcentaje',/* de url*/'url','codificarUrl','decodificarUrl','urlAnterior','ultimaModificacion','ubicacionVentana','historial','objetoUrl',/*de texto*/'caracterIndice','codigoCaracter','minuscula','mayuscula','posicionDe','ultimaPosicion','cadena','concatenar','antesDespues','buscarEn','reemplazar','extraer','recortarCadena','separar','quitarEspacio','valorPrimitivo',/*array*/'unir','eliminarUltimo','agregarFinal','agregarInicio','invertir','cortarPrimero','ordenar','agregarElementos','testear','probar',/*tiempo*/'diaMes','diaSemana','year','mes','hora','minutos','segundos','milisegundos','devolverTiempo','tiempoDesde','fechaNombre','fechaGlobal','fechaIso','fechaCadena','fechaJson','horaNormal','zonaHoraria','tiempoNormal','fechaNormal',/*navigator*/,'navegador',/*dom*/,'tituloDom','DOM','imprimir','frames',/* codificar*/'codificarBase64','decodificarBase64','prevencion'],s;


//fn(tipo,0:local|1:universal|2:modificar local|3:modificar universal)



//$.inArray(t,tipos)!=-1=>jquery
if(t && tipoDe(t)==='string' && tipos.indexOf(t)!=-1){

switch(t){
	
	case "prevencion":
	s=v.stopPropagation() || v.preventDefault();
	
	break;
	
case "entero":
	if(!v2){ console.log("defina fn(type,value,value2)");s=parseInt(v);}else{s=parseInt(v,v2);}
break;
case "esNumero":
	s=$.isNumeric(v);	
break;
case "igual":
	s=eval(v);	
break;
case "flotante":
	s=parseFloat(v);	
break;
case "finito":
	s=isFinite(v);	
break;
case "numero":
	s=Number(v);	
break;
case "valorAbsoluto":
	s=Math.abs(v);
break;
case "arcoCoseno":
	s=Math.acos(v);
break;
case "coseno":
	s=Math.cos(v);
break;
case "arcoSeno":
	s=Math.asin(v);
break;
case "seno":
	s=Math.sin(v);
break;
case "arcoTangente":
	s=Math.atan(v);
break;
case "tangente":
	s=Math.tan(v);
break;
case "redondeoArriba":
	s=Math.ceil(v);
break;
case "redondeoAbajo":
	s=Math.floor(v);
break;
case "redondeo":
	s=Math.round(v);
break;
case "euler":
	s=Math.exp(v);
break;
case "logaritmo":
	s=Math.log(v);
break;
case "max":
	if(!v2){console.log("defina fn(type,value,value2)");s=v; }else{  s=Math.max(v,v2); }
break;
case "min":
	if(!v2){console.log("defina fn(type,value,value2)");s=v; }else{  s=Math.min(v,v2); }
break;
case "potencia":
	if(!v2){console.log("defina fn(type,value,value2)");s=v; }else{  s=Math.pow(v,v2); }
break;
case "aleatorio":
	s=Math.random();
break;
case "raizCuadrada":
	s=Math.sqrt(v);
break;
case "decimal":
	if(!v2){console.log("defina fn(type,value,value2)");s=v; }else{  s=v.toFixed(v2); }
break;
case "precision":
	if(!v2){console.log("defina fn(type,value,valor2)");s=v.toPrecision(); }else{  s=v.toPrecision(v2); }
break;
case "porcentaje":
	if(!v2){console.log("defina fn(type,value,valor2)");s=v; }else{  s=v * v2 / 100; }
break;
case "url":
	s=misRecursos('ubicacionVentana','href')||document.URL;
break;
case "codificarUrl":
	s=encodeURIComponent(v);//encodeURI
break;
case "decodificarUrl":
	s=decodeURIComponent(v);//decodeURI
break;
case "urlAnterior":
	s=document.referrer;
break;
case "ultimaModificacion":
	s=document.lastModified;
break;
case "ubicacionVentana":
	var lv=window.location||document.location||location;
	if(v){ s=lv[misRecursos('minuscula',v)]; }else{	s=lv;}	
break;
case "historial":
/*
state 	:  
length	: cuenta el historial 
back 	: anterior pagina  
forward : siguiente 
go 		: indicar el numero de url al que desea acceder - es anterior y + es siguiente
*/
var w=window.history; if(v){ s=w[misRecursos('minuscula',v)]();}else{ s=w;}
break;
case "objetoUrl":
	var indiceValor = [], extraido,valor = v.slice(v.indexOf('?') + 1).split('&'),total=contar(valor),i=0;
	for(i;i<total;i++){
		 extraido=valor[i].split("=");
		misRecursos('agregarFinal',indiceValor,extraido[0]);
		 indiceValor[extraido[0]]=extraido[1];
					}
	s=indiceValor;
break;

case "caracterIndice":
	s=v.charAt(v2!==''?v2:0);
break;

case "codigoCaracter":
	s=v.charCodeAt(v2!==''&&v2<=contar(v)?v2:0); 
break;

case "minuscula":
	s=v.toLowerCase()||v.toLocaleLowerCase();
break;

case "mayuscula":
	s=v.toUpperCase()||v.toLocaleUpperCase();
break;

case "posicionDe":
	s=v.indexOf(v2);
break;

case "ultimaPosicion":
	s=v.lastIndexOf(v2);
break;
case "cadena":
	s=String(v)||v.toString();
break;
case "concatenar":
	s=v.concat(v2);
break;
case "antesDespues":
	s=v.localeCompare(v2);
break;
case "buscarEn":
	s=v.match(v2);
break;
case "reemplazar":
	s=v.replace(v2,v3);//fn(t,texto,buscar,remplaza)
break;
case "extraer":
	s=v.slice(v2,v3)||v.substring(s,e);//fn(t,texto|array,star,end)
break;
case "recortarCadena":
	s=v.substr(v2,v3);//fn(t,texto|array,star,end)
break;
case "separar":
if(v2){	s=v.split(v2); }else{ s=v.split();}
break;
case "quitarEspacio":
s=v.trim(); 
break;
case "valorPrimitivo":
s=v.valueOf(); 
break;

case "unir":
s=v.join(v2); //fn(valor,valor2,separador);
break;
case "eliminarUltimo":
s=v.pop();
break;
case "agregarFinal":
s=v.push(v2);
break;
case "agregarInicio":
s=v.unshift(v2);
break;
case "invertir":
s=v.reverse();
break;
case "cortarPrimero":
s=v.shift();
break;
case "ordenar":
s=v.sort();
break;
case "agregarElementos":
s=v.splice(v2,v3,v4); //fn(array,index,indexremover,valor)
break;
case "testear":
s=v.test(v2); 
break;
case "probar":
s=v.exec(v2);
break;

case "year":
if(!v){
	s=objetoTiempo.getFullYear();
}else if(v==1){
	s=objetoTiempo.getUTCFullYear();
}else if(v==2){
	s=objetoTiempo.setFullYear(v2);
}else if(v==3){
	s=objetoTiempo.setUTCFullYear(v2);
}
break;
case"mes":
if(!v){
	s=objetoTiempo.getMonth();
}else if(v==1){
	s=objetoTiempo.getUTCMonth();
}else if(v==2){
	s=objetoTiempo.setMonth(v2);
}else if(v==3){
	s=objetoTiempo.setUTCMonth(v2);
}
break;
case "diaMes":
if(!v){
	s=objetoTiempo.getDate();
}else if(v==1){
	s=objetoTiempo.getUTCDate();
}else if(v==2){
	s=objetoTiempo.setDate(v2);
}else if(v==3){
	s=objetoTiempo.setUTCDate(v2);
}
break;
case "diaSemana":
if(!v){
	s=objetoTiempo.getDay();
}else if(v==1){
	s=objetoTiempo.getUTCDay();
}
break;
case "hora":
if(!v){
	s=objetoTiempo.getHours();
}else if(v==1){
	s=objetoTiempo.getUTCHours();
}else if(v==2){
	s=objetoTiempo.setHours(v2);
}else if(v==3){
	s=objetoTiempo.setUTCHours(v2);
}
break;
case "minutos":
if(!v){
	s=objetoTiempo.getMinutes();
}else if(v==1){
	s=objetoTiempo.getUTCMinutes();
}else if(v==2){
	s=objetoTiempo.setMinutes(v2);
}else if(v==3){
	s=objetoTiempo.setUTCMinutes(v2);
}
break;
case "segundos":
if(!v){
	s=objetoTiempo.getSeconds();
}else if(v==1){
	s=objetoTiempo.getUTCSeconds();
}else if(v==2){
	s=objetoTiempo.setSeconds(v2);
}else if(v==3){
	s=objetoTiempo.setUTCSeconds(v2);
}
break;
case "milisegundos":
if(!v){
	s=objetoTiempo.getMilliseconds();
}else if(v==1){
	s=objetoTiempo.getUTCMilliseconds();
}else if(v==2){
	s=objetoTiempo.setMilliseconds(v2);
}else if(v==3){
	s=objetoTiempo.setUTCMilliseconds(v2);
}
break;
case "devolverTiempo":
s=objetoTiempo.getTime();
break;
case "tiempoDesde":
s=Date.parse(v2);
break;
case "fechaNombre":
s=objetoTiempo.toDateString();
break;
case "fechaGlobal":
s=objetoTiempo.toUTCString();
break;
case "fechaIso":
s=objetoTiempo.toISOString();
break;
case "fechaCadena":
s=objetoTiempo.toTimeString();
break;
case "fechaJson":
s=objetoTiempo.toJSON();
break;
case "horaNormal":
s=objetoTiempo.toLocaleTimeString();
break;
case "zonaHoraria":
s=objetoTiempo.getTimezoneOffset();
break;
case "tiempoNormal":
s=objetoTiempo.toLocaleString();
break;
case "fechaNormal":
s=objetoTiempo.toLocaleDateString();
break;
case "navegador":
/*appCodeName | appName | appVersion | cookieEnabled | doNotTrack | geolocation | language | maxTouchPoints | mimeTypes | onLine	| platform |plugins | product | productSub | userAgent | vendor | vendorSub | webkitPersistentStorage | webkitTemporaryStorage*/
var n=navigator;
if(v){  s=n[v];	}else{	s=n;}
break;
case"tituloDom":
s=document.title;
break;
case"DOM":
var doc=document.doctype;
if(v){	s=doc[misRecursos('minuscula',v)];	}else{	s=doc;	}
break;
case"imprimir":
s=window.print();
break;
case"frames":
s=frames;
break;
case"codificarBase64":
s=window.btoa(v);
break;
case"decodificarBase64":
s=window.atob(v);
break;

}
return s;

}else{
return tipos;
}
		
}







if(typeof window.jQuery ==='function'){ 
//modulo cargado exitosamente


$.aplicacion= function( nombre, opciones) {

if(tipoDe(nombre)==='string' && nombre){
$.fn[ nombre ] = function( options ) {
//adjunto los paramtros tanto del pluying como el de la aplicacion	
	var args;

args=options;

//ejecutar tiene que ser una funcion 
opciones.ejecutar.call(this,args);
//optiones.apply(this,arguments);
};

}else{
throw RangeError('Error el el nombre de la funcion');
}

};
//definiendo en variable el core
var aplicacion = $.aplicacion;



/*********************************************************************************************************
 	eventos	:	obtenidas evento
*********************************************************************************************************/
var codigoEvento={
RETROCESO:8,
COMA:188,
ELIMINAR:46,
FIN:35,
ENTER:13,
ESC:27,
CASA:36,
CTRL:17,
ALT:18,
ARRIBA:38,
IZQUIERDA:37,
DERECHA: 39,
ABAJO:40,
PAGE_DOWN:34,
PAGE_UP:33,
PERIODO:190,
ESPACIO:32,
SHIFT:16,MAYUSCULA:20,
IMPRIMIR:44,
TAB:9
};


var eventos=function(e){
							return {
							codigo:e.which || e.keyCode,
							tipo:e.type, 
							seleccionado:$(e.target)||$(e.toElement),
							padreSeleccionado:$(e.currentTarget)||$(e.delegateTarget),
							eventoOriginal: e.originalEvent,
							coordenadas:{
								punteroX:e.clientX,
								punteroY:e.clientY,
								documentoX:e.pageX,
								documentoY:e.pageY,
								ventanaX:e.screenX,
								ventanaY:e.screenY,
								coordenadaX:e.offsetX,
								coordenadaY:e.offsetY
								}
							}; 
	};


/*********************************************************************************************************
 	PARAMETROS	:	obtenidas del objeto a seleccionar defecto es window
*********************************************************************************************************/

var parametros={
	elmento:$(window)||$(document),
	recurso:function(el){
if(el){el=el;}else{ el=parametros.elmento;}
				return{
				"altura": el.height(), 	
				"anchura": el.width(), 
				"alturaInterna": el.innerHeight(),
				"anchuraInterna": el.innerWidth(),		
				"alturaExternaTotal": el.outerHeight(true),
				"anchuraExternaTotal": el.outerWidth(true),	
				"alturaExternaNormal":el.outerHeight(),
				"anchuraExternaNormal":	el.outerWidth(),	
				"contar":el.length ,
				"coordenadaIzquierda":el.offset()?el.offset().left:0, 
				"coordenadaArriba": el.offset()?el.offset().top:0,
				"coordenadaDerecha": misRecursos('igual',misRecursos('numero',$(window).width()) - misRecursos('numero',el.offset().left) + misRecursos('numero',el.width())),
				"coordenadaAbajo":  el.offset().top + el.outerHeight(),
				"posicionIzquierda":el.position()?el.position().left:0, 
				"posicionArriba": el.position()?el.position().top:0,
				"posicionDerecha": misRecursos('igual',misRecursos('numero',$(window).width()) - misRecursos('numero',el.position().left) + misRecursos('numero',el.width())),"posicionAbajo":  el.position().top + el.outerHeight(),
				"nombreNodo":misRecursos('minuscula',el[0].nodeName)||el[0].localName,
				"index":$("*").index(el),
				"scrollLeft":el.scrollLeft(),
				"scrollTop":el.scrollTop(),

				
							};
}
};//dimensiones


/*********************************************************************************************************
 	PLUYING	"FECHA":	version 0.1 nivel basico
*********************************************************************************************************/
var calendario=$.aplicacion(
'calendario',{
ejecutar:function(adicional){
//digo que cuando se de click en el objeto no se cierre pero si cuando esta fuera	
$("body").bind('click',function(e){
if(contar(o.container)===1 && o.container.is(":visible") && contar(eventos(e).seleccionado.parents(".hasFechaElemento"))<=0){
o.cerrarFecha();
}
});
var o={
		fechaDefecto:misRecursos('fechaNormal'),
		otro:{ 
						  mes:{
								0:'enero',
								1:'febrero',
								2:'marzo',
								3:'abril',
								4:'mayo',
								5:'junio',
								6:'julio',
								7:'agosto',
								8:'septiembre',
								9:'octubre',
								10:'noviembre',
								11:'diciembre'
							},year:{
								0:'Domingo',
								1:'Lunes',
								2:'Martes',
								3:'Miercoles',
								4:'Jueves',
								5:'Viernes',
								6:'Sabado'
							}
				
		},
		testea: {
						dia:/([1-9]|[12]\d|3[01])/,
						mes:/^(0?[1-9]|1[012])$/,
						year:/^\d{4}$/

			
			},
		envoltura:$("<div class='pr dinline hasFechaElemento'></div>"),
container:$("<div class='pa clearfix overflowv itenFecha bg_blanco radio'><div class='itenFechaTitulo bg_suave'><a class='itenFechaAnterior cpointer dib vam  md_10 bg_gris_hover cs_hover   pi_10 pd_10 parriba_5 pabajo_5 tac size_fontx16'><span class='icon-chevron-left vam'></span></a><!--itenFechaAnterior--><select data-llamda='seleccionarMes' class='itenFechaMes  pi_5 pd_5  capitalize '><option value='0' >enero</option><option value='1'>febrero</option><option value='2'>marzo</option><option value='3'>abril</option><option value='4'>mayo</option><option value='5'>junio</option><option value='6'>julio</option><option value='7'>agosto</option><option value='8'>septiembre</option><option value='9'>octubre</option><option value='10'>noviembre</option><option value='11'>diciembre</option></select><select class='itenFechaYear  pi_10 pd_10 ' data-llamada='seleccionarYear'></select><a class='itenFechaSiguiente cpointer dib  vam  mi_10 bg_gris_hover cs_hover   pi_10 pd_10 parriba_5 pabajo_5 tac size_fontx16'><span class='icon-chevron-right vam'></span></a></div><div class='itenFechaCuerpo'><table class='t-bordernone   ap'><thead ><th title='Lunes' class='ptodo_5 tac'>Lu</th><th title='Martes' class='ptodo_5 tac'>Ma</th><th title='Miercoles' class='ptodo_5 tac'>Mi</th><th title='Jueves' class='ptodo_5 tac'>Ju</th><th title='Viernes' class='ptodo_5 tac'>Vi</th><th title='Sabado' class='ptodo_5 tac'>Sa</th><th title='Domingo' class='ptodo_5 tac'>Do</th> </thead><tbody class='pabajo_5'></tbody></table></div></div>"),

testeo:function(t){
//convierto la fecha en array : [dd,mm,yyyy]
var data=misRecursos('separar',t,'/');
//compruebo el dia mes y año que correspondan a mi regexp
if(misRecursos('testear',o.testea.dia,data[0]) && misRecursos('testear',o.testea.mes,data[1]) && misRecursos('testear',o.testea.year,data[2])){
return true;			}else{ return false; }
								 
},
envolver:function(v,i){
									v.wrap(o.envoltura);
									v.parent(o.envoltura).attr("id","bkod-fecha-" + i);
},
abrirFecha:function(){

if(o.container.is(":visible")==false){ o.container.stop().fadeTo("show", 1);	}

},
cerrarFecha:function(){
	
if(o.container.is(":visible")){o.container.stop().fadeTo("normal",0,function(){ o.container.hide();}); console.log(true);}


},
prepararFecha:function(t,v,prender){
	
//convierto en array al valor tiempo	
t=misRecursos('separar',t,'/');
var objetoFecha=o.container,yearOpciones=[],i=0;

var contarO=contar(v.parent(o.envoltura).find(".itenFecha"));

//solo inserto si el objeto fecha no esta insertado
if(contarO<=0){
//insertar el marco fecha
o.container.insertAfter(v).hide();
}
//seleccionando el mes
objetoFecha.find(".itenFechaMes").val(misRecursos('numero',t[1] - 1));
//datos para year				
for(;i<10;i++){
//aumento los años
var maxx=misRecursos('igual',misRecursos('numero',t[2]) + i + 1);
//decremento los años
var minn=misRecursos('igual',misRecursos('numero',t[2]) - i);
//agrego los años a la matriz "yearOpciones"
misRecursos('agregarFinal',yearOpciones,maxx);
misRecursos('agregarFinal',yearOpciones,minn);
}
//ordeno la matriz
yearOpciones.sort()
//vacio el campo
objetoFecha.find(".itenFechaYear").empty();
//recorriendo los valores de la matriz años
$.each(yearOpciones,function(i,v){
objetoFecha.find(".itenFechaYear").append("<option value='"+v+"'>"+v+"</option>");
});
//agrego el selected al año escrito	
objetoFecha.find(".itenFechaYear").val(misRecursos('numero',t[2]));
//para los dias
var tiempo=	new Date(t[2], t[1] , 0),
salidaOtros={ 
  'totalDias':tiempo.getDate(),
  'primerDia':new Date(t[2], t[1] - 1, 0).getDay(),
  'ultimoDia':tiempo.getDay(),
  'primerDiaMesSiguiente':new Date(t[2], t[1]).getDay()
},
 //total de tr 
totalTr=Math.ceil((salidaOtros.primerDia  + salidaOtros.totalDias) / 7),
//total de dias mas el dia que empieza
totalDias=misRecursos('numero',salidaOtros.totalDias) + misRecursos('numero',salidaOtros.primerDia),
calendario='',
loopTr,
loopTd,
loopUno=0,
loopDos=0;
//vaciar el tbody
objetoFecha.find("tbody").empty();
//loop para los tr
for (loopTr=0; loopTr < totalTr; loopTr++) { 
calendario += "<tr>";
			//loop para los td
			for (loopTd=0; loopTd < 7; loopTd++) { 
			//quiero que incremente los indices de td
			loopUno++;
			//quiero que corra apartir del primer dia y que el indice sea menor o igual al total de dias
			if(loopUno > salidaOtros.primerDia &&  loopUno<= totalDias){
			//para reestablecer los indices de forma incrementada	
			loopDos++;
			//agrego los td a su tr respectivo
calendario +="<td class='mp_falso hasValor' data-llamada='seleccionarDia' data-evento='click' data-mes='"+t[1]+"' data-year='"+t[2]+"'><a  class='db tac ptodo_5 bg_verde_hover cblanco_hover cpointer '>"+loopDos+"</a></td>";
			}else{
			//quiero agregar vacio a los td de dias que no corresponden mas adelante configurarlos	
			calendario +="<td></td>";	
				}
			}
calendario +="</tr>";
}
//finalmente agrego los dias 
objetoFecha.find(".itenFechaCuerpo").find("tbody").append(calendario);
//activar el dia
var nuevoDia=misRecursos('numero',t[0]) + salidaOtros.primerDia - 1,
//agrega un hack que significa que el dia esta seleccionado
objetoDiaNuevo=objetoFecha.find(".itenFechaCuerpo td");
//reseteando los dias
objetoDiaNuevo.removeClass("hasFechaDiaActivo");
objetoDiaNuevo.find("a").removeClass("bg_azul");
//asignando el nuevo dia seleccionado
objetoDiaNuevo=objetoDiaNuevo.eq(nuevoDia);
objetoDiaNuevo.addClass("hasFechaDiaActivo");
objetoDiaNuevo.find("a").addClass("bg_azul");
//abre el objeto fecha
if(prender){	o.abrirFecha();	}
//delegador de eventos
var delegadores=objetoFecha.find(".itenFechaAnterior,.itenFechaSiguiente,.itenFechaMes,.itenFechaYear,td.hasValor");
//destruyo los eventos
delegadores.unbind("click");
delegadores.unbind("change");
//asignando eventos a los objetos
delegadores.bind('click change ',function(e){
e.preventDefault();
o.nuevaFecha($(this),e,objetoFecha,t,v);
});



},
nuevaFecha:function(el,e,objetoFecha,t,v){
//itenFechaAnterior itenFechaSiguiente itenFechaMes itenFechaYear
e=eventos(e);
var mieventoTipo=e.tipo;


var valorTiempoObjeto=v.val().split('/');
var dia=valorTiempoObjeto?t[0]:valorTiempoObjeto[0];
var mes=valorTiempoObjeto?t[1]:valorTiempoObjeto[1];
var year=valorTiempoObjeto?t[2]:valorTiempoObjeto[2];
var nuevafecha;
	

//solo para click , anterior , siguiente y td
if(mieventoTipo==='click' && parametros.recurso(el).nombreNodo!='select'){
//anterior		
if(el.hasClass('itenFechaAnterior')){
//resto al mes actual seleccionado
mes=Number(objetoFecha.find(".itenFechaMes option:selected").val()) - 1;
//estable el valor para el año en este caso disminuye al actual		
year=mes<0?Number(objetoFecha.find(".itenFechaYear option:selected").val()) - 1:objetoFecha.find(".itenFechaYear option:selected").val();
//reseteo el mes en el caso que sea enero , regresa a diciembre
if(mes <0){	mes=11; }
}

//siguiente
if(el.hasClass('itenFechaSiguiente')){
//aumento al mes actual seleccionado
mes=Number(objetoFecha.find(".itenFechaMes option:selected").val()) + 1;
//estable el valor para el año en este caso aumenta al actual		
year=mes>11?Number(objetoFecha.find(".itenFechaYear option:selected").val()) + 1:objetoFecha.find(".itenFechaYear option:selected").val();
//reseteo el mes en el caso que sea diciembre , regresa a enero
if(mes > 11){	mes=0;	}
}


//td
if(parametros.recurso(el).nombreNodo=='td'){
nuevafecha=el.children("a").html() + '/' + Number(mes)   + '/' + year;
//ejecutar funcion para seleccionar valor
v.val(nuevafecha);
}else{
objetoFecha.find(".itenFechaMes").val(mes);
objetoFecha.find(".itenFechaYear").val(year);
console.log("jaja es anterior o sigiente");
nuevafecha=dia + '/' + (Number(mes) + 1)   + '/' + year;

//quiero que el input se establesca en foco para "ESC"
v.focus();
}


//ejecutar la fecha
o.prepararFecha(nuevafecha,v,false);


}else if(mieventoTipo==='change'){

//mes 
if(el.hasClass('itenFechaMes')){
mes=el.val();
year=objetoFecha.find(".itenFechaYear option:selected").val()
}
//year
if(el.hasClass('itenFechaYear')){
mes=objetoFecha.find(".itenFechaMes option:selected").val()
year=el.val();
}
nuevafecha=dia + '/' + (Number(mes) + 1)   + '/' + year;
//quiero que el input se establesca en foco para "ESC"
v.focus();
//ejecutar la fecha
o.prepararFecha(nuevafecha,v,false);

}//change

}//nueva fecha



};//fin de objeto "o"



//recorro los inputs y ejucuto
this.each(function(){
	
	var objeto=$(this);
	var valor=objeto.val();
	//solo nodo input
	if(parametros.recurso(objeto).nombreNodo==='input'){
		//integrando una envoltura al objeto
		o.envolver(objeto,parametros.recurso(objeto).index);
		
		//declarando manejadores de eventos para el input por ahora esta el keyup , focusIn y blur
		objeto.bind({
					keyup:function(e){
						if(eventos(e).codigo==codigoEvento.ESC){		
							o.cerrarFecha();
						}else{
						//actualizar los valores			
						objeto=$(this);	valor=objeto.val();
						//testeo el valor  y si es true configuro la fecha			
						if(o.testeo(valor)){	o.prepararFecha(valor,objeto,true);	}	
						}
									},
					focus:function(){
						//o focusIn
							//actualizar los valores			
							objeto=$(this);	valor=objeto.val();
							//testeo el valor  y si es true configuro la fecha	
							if(o.testeo(valor)){ o.prepararFecha(valor,objeto,true); 
							}else{	o.prepararFecha(o.fechaDefecto,objeto,true); }
									},
					blur:function(){
							//o focusout
							//datos.cerrarFecha();
							
							console.log(parametros.recurso(o.container).nombreNodo);
							
									}
				});//bind
													}else{
										console.log("error en el pluying : el elemento no input");
														}
				});//return this
}//ejecutar
});//fin de fecha pluyin


	
	

	


}else{
//error al cargar el modulo
console.log("error al cargar jquery");
}


}));
