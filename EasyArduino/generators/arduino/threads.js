/**
* @author Jesus Lens Costa
*/

'use strict';

goog.provide('Blockly.Arduino.threads');

goog.require('Blockly.Arduino');


var names = [];
var cantidad = 0;

//Controlador Threads
Blockly.Arduino.thread_Controller = function() {
	  var count = this.getTitleValue('TEXT');
	  var branch = Blockly.Arduino.statementToCode(this, 'DO');
	 	 	  
	  Blockly.Arduino.definitions_['define_thread'] = '#include <Thread.h>';
	  Blockly.Arduino.definitions_['define_threadController'] = '#include <ThreadController.h>';
	  Blockly.Arduino.definitions_['var_controller'+count] = 'ThreadController '+count+' = ThreadController();\n';	  
	  
	  var index;
	  for(index = 0; index < names.length; index++) {
		  var text = names[index];
		  Blockly.Arduino.setups_['addT'+count+text] = count+'.add(&'+text+');\n';
	  }	
	  cantidad=0;
	  names = [];
	  
	  var code = count+'.run();\n';
	  return code;
};


//Thread
Blockly.Arduino.thread = function() {	  
	  var count = this.getTitleValue('TEXT');
	  var branch = Blockly.Arduino.statementToCode(this, 'BLOQ');
	  var interval = Blockly.Arduino.valueToCode(this, 'STAT', Blockly.Arduino.ORDER_ATOMIC) || '0';
	 	 
	  names[cantidad] = count;
	  cantidad++;
	  
	  Blockly.Arduino.definitions_['define_thread'] = '#include <Thread.h>';	  
	  Blockly.Arduino.definitions_['var_thread'+count] = 'Thread '+count+' = Thread();\n';
	  Blockly.Arduino.definitions_['void_'+count] = 'void bloque_'+count+'(){\n'+branch+'};\n';
	  Blockly.Arduino.setups_['thread1'+count] = count+'.setInterval('+interval+');';
	  Blockly.Arduino.setups_['thread2'+count] = count+'.onRun(bloque_'+count+');\n';	  
	  	
	  return '';
};


//Thread shouldRun
Blockly.Arduino.shouldRun = function() {
	  
	  var count = this.getTitleValue('TEXT');	 	  
	  
	  var code = count+'.shouldRun()';	
	  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


//Thread Run
Blockly.Arduino.thread_run = function() {
	  
	  var count = this.getTitleValue('TEXT');	 	  
	  
	  var code = count+'.run();';	
	  return code;
};


//Thread setInterval
Blockly.Arduino.setInterval = function() {
	  
	  var count = this.getTitleValue('TEXT');	 	  	  
	  var interval = Blockly.Arduino.valueToCode(this, 'STAT', Blockly.Arduino.ORDER_ATOMIC) || '0';
	  
	  return count+'.setInterval('+interval+');\n';
};




//Controller add thread
Blockly.Arduino.controller_addT = function() {
	  var countT = this.getTitleValue('NUMT');
	  var countC = this.getTitleValue('NUMC');
	  
	  Blockly.Arduino.setups_['addT'+countT] = countC+'.add(&'+countT+');\n';	
	  
	  return '';
};


//Controller add controller
Blockly.Arduino.controller_addC = function() {
	  var ccountT = this.getTitleValue('NUMT');
	  var ccountC = this.getTitleValue('NUMC');
	  
	  Blockly.Arduino.setups_['addC'+ccountT] = 'controller_'+ccountC+'.add(&controller_'+ccountT+');\n';	
	  
	  return '';
};


//Controller clear
Blockly.Arduino.controller_clear = function() {
	  var count = this.getTitleValue('NUMT');
	  
	  var code = count+'.clear();\n';	
	  
	  return code;
};


//Controller remove thread
Blockly.Arduino.controller_remove = function() {
	  var countT = this.getTitleValue('NUMT');
	  var countC = this.getTitleValue('NUMC');
	  
	  var code = countC+'.remove(&'+countT+');\n';	
	  
	  return code;
};


//Thread Size
Blockly.Arduino.thread_size = function() {
	  
	  var count = this.getTitleValue('TEXT');	 	  
	  
	  var code = count+'.size()';	
	  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


//Inicio Programa
Blockly.Arduino.inicio2 = function() {	  

	  var branch = Blockly.Arduino.statementToCode(this, 'BLOQ');
	  var interval = this.getTitleValue('NUM');
	 	 
	  Blockly.Arduino.TH = true;
	  
	  var contador = Blockly.Arduino.CONTADOR;
	  
	  Blockly.Arduino.definitions_['define_thread'] = '#include <Thread.h>';
	  Blockly.Arduino.definitions_['define_threadController'] = '#include <ThreadController.h>';
	  Blockly.Arduino.definitions_['var_controller'] = 'ThreadController controlador = ThreadController();\n';	  
	  Blockly.Arduino.definitions_['var_thread'+contador] = 'Thread programa'+contador+' = Thread();\n';
	  Blockly.Arduino.definitions_['void_'+contador] = 'void bloque_'+contador+'(){\n'+branch+'}\n';
	  Blockly.Arduino.setups_['thread'+contador] = 'programa'+contador+'.onRun(bloque_'+contador+');';	  
	//  Blockly.Arduino.setups_['thread1'+contador] = 'programa'+contador+'.setInterval('+interval+');\n';
	  
	  Blockly.Arduino.setups_['addPrograma'+contador] = 'controlador.add(&programa'+contador+');\n';
	  
	  Blockly.Arduino.CONTADOR++;
	  	
	  return '';
};


//Repetir programa x veces
Blockly.Arduino.repetir_veces = function() {	  
	  var count = this.getTitleValue('NUM');	
	  var branch = Blockly.Arduino.statementToCode(this, 'BLOQ');
	  var branch2 = Blockly.Arduino.statementToCode(this, 'BLOQ2');
	  var contador = Blockly.Arduino.CONTADOR;
	  
	  Blockly.Arduino.definitions_['define_count'+contador] = 'int contador'+contador+' = 0;';
	  
	  var code = 'if(contador'+contador+' < '+count+'){\n  contador'+contador+'++;\n'+branch+'}\n';	
	  var code1 = code + 'else {\n'+branch2+'}\n';
	  return code1;
};


//Ejecutar programa durante x milisegundos
Blockly.Arduino.ejecutar_durante = function() {	  
	  var count = this.getTitleValue('NUM');	
	  var branch = Blockly.Arduino.statementToCode(this, 'BLOQ');
	  var branch2 = Blockly.Arduino.statementToCode(this, 'BLOQ2');
	  var contador = Blockly.Arduino.CONTADOR;
	  
	  Blockly.Arduino.definitions_['define_time'+contador] = 'unsigned long previousTime'+contador+' = 0;';
	  
	  var code1 = 'unsigned long currentTime'+contador+' = millis();\n';
	  var code = code1 + 'if(currentTime'+contador+' - previousTime'+contador+' <= '+count+'){\n'+branch+'}\n';	
	  var code2 = code + 'else {\n'+branch2+'}\n';
	  return code2;
};


//Ejecutar programa a intervalos de x milisegundos
Blockly.Arduino.ejecutar_intervalo = function() {	  
	  var count = this.getTitleValue('NUM');	
	  var branch = Blockly.Arduino.statementToCode(this, 'BLOQ');
	  var branch2 = Blockly.Arduino.statementToCode(this, 'BLOQ2');
	  var contador = Blockly.Arduino.CONTADOR;
	  
	  Blockly.Arduino.definitions_['define_intervalo'+contador] = 'unsigned long previousTimeI'+contador+' = 0;';
	  
	  var code1 = 'unsigned long currentTimeI'+contador+' = millis();\n';
	  var code = code1 + 'if(currentTimeI'+contador+' - previousTimeI'+contador+' >= '+count*2+'){\n  previousTimeI'+contador+' = currentTimeI'+contador+';\n'+branch+'}\n';	
	  var code2 = code + 'else if(currentTimeI'+contador+' - previousTimeI'+contador+' >= '+count+'){\n'+branch2+'}\n';
	  return code2;
};

//Eliminar Programa
Blockly.Arduino.eliminar2 = function() {	  
	  var contador = Blockly.Arduino.CONTADOR;
	  	  
	  var code = 'controlador.remove(&programa'+contador+');\n';
	  return code;
};


//Inicio Programa sin arduino thread 
Blockly.Arduino.inicio = function() {	  

	  var branch = Blockly.Arduino.statementToCode(this, 'BLOQ');
	  var interval = this.getTitleValue('NUM');
	  
	  Blockly.Arduino.TH = true;
	 	 
	  var contador = Blockly.Arduino.CONTADOR;
	  var thread = contador;
	  if(contador == 1){
		  Blockly.Arduino.LISTA = Blockly.Arduino.LISTA + thread;
	  }
	  else{
		  Blockly.Arduino.LISTA = Blockly.Arduino.LISTA + ', ' + thread;
	  }
	    
	  var lista = Blockly.Arduino.LISTA;
	  
	  var remove = '  for(i=0; i<numThreads; i++){\n    if(i+1 == id){\n      threads[i] = 0;\n    }\n  }  \n';
	  
	  Blockly.Arduino.definitions_['define_threads'] = 'int threads[] = {' + lista + '};\n';
	  Blockly.Arduino.definitions_['define_numThreads'] = 'int numThreads = ' + contador + ';\n';
	  Blockly.Arduino.definitions_['int_variable'] = 'int i;\n';	  	  
	  Blockly.Arduino.definitions_['remove_'] = 'void remove(int id){\n'+remove+'}\n';
	  Blockly.Arduino.definitions_['void_'+contador] = 'void programa'+contador+'(){\n'+branch+'}\n';
	  	  
	  Blockly.Arduino.CONTADOR++;
	    	
	  return '';
};


//Eliminar Programa sin arduino thread
Blockly.Arduino.eliminar = function() {	  
	  var contador = Blockly.Arduino.CONTADOR;
 
	  var code = 'remove('+contador+');\n';
	  return code;
};


