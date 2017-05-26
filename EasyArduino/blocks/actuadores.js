/**
 * @author Jesus Lens Costa
 */
'use strict';

goog.provide('Blockly.Blocks.actuadores');

goog.require('Blockly.Blocks');
 

// LED
Blockly.Blocks['led'] = {
	  helpUrl: 'http://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Bundle_V1.0b#LED',
	  init: function() {
		  this.setColour(70);
		  this.appendDummyInput("")
		  	.appendTitle("LED")
	      	.appendTitle(new Blockly.FieldImage("../../media/led.png", 94, 94))
	      	.appendTitle("PIN#")
	      	.appendTitle(new Blockly.FieldDropdown(profile.arduino.digital), "PIN")
	      this.appendDummyInput("")
	   	  	.setAlign(Blockly.ALIGN_RIGHT)
	   	  	.appendTitle(Blockly.Msg.LED_ESTADO)
	   	  	.appendTitle(new Blockly.FieldDropdown([[Blockly.Msg.LED_ENCENDER, "HIGH"], [Blockly.Msg.LED_APAGAR, "LOW"]]), "STAT"); 
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setTooltip('LED');
	  }
};


// Bocina
Blockly.Blocks['bocina'] = {
		helpUrl: 'http://www.seeedstudio.com/wiki/GROVE_-_Starter_Kit_V1.1b#Grove_.E2.80.93_Buzzer',
		init: function() {
		    this.setColour(70);
		    this.appendDummyInput("")
		        .appendTitle(Blockly.Msg.BOCINA)
		        .appendTitle(new Blockly.FieldImage("../../media/horn.png", 94, 74))
		        .appendTitle("PIN#")
		        .appendTitle(new Blockly.FieldDropdown(profile.arduino.digital), "PIN")
		    this.appendDummyInput("")    
		        .setAlign(Blockly.ALIGN_RIGHT)
		        .appendTitle(Blockly.Msg.TONO)
		        .appendField(new Blockly.FieldTextInput('0', Blockly.FieldTextInput.numberValidator), 'NUM');    
		    this.appendDummyInput("")    
	        	.setAlign(Blockly.ALIGN_RIGHT)
	        	.appendTitle(Blockly.Msg.TIEMPO)
	        	.appendField(new Blockly.FieldTextInput('0', Blockly.FieldTextInput.numberValidator), 'TEMP');		   
		    this.setPreviousStatement(true, null);
		    this.setNextStatement(true, null);
		    this.setTooltip(Blockly.Msg.DESCRIPCION);
		}				  
};


//Pantalla LCD
Blockly.Blocks['serial_LCD'] = {
		  helpUrl: 'http://www.arduino.cc/en/Reference/LiquidCrystalConstructor',
		  init: function() {
		    this.setColour(70);
		    this.appendDummyInput("")
		        .appendTitle(Blockly.Msg.LCD)    
		        .appendTitle("PIN: ")
		        .appendTitle("RS")
		        .appendTitle(new Blockly.FieldDropdown(profile.arduino.digital), "RS")
		        .appendTitle("   Enable")
		        .appendTitle(new Blockly.FieldDropdown(profile.arduino.digital), "Enable")
		    this.appendDummyInput("")  
		    	.appendTitle(new Blockly.FieldImage("../../media/lcd.png", 94, 74))
		        .appendTitle(" D4")
		        .appendTitle(new Blockly.FieldDropdown(profile.arduino.digital), "D4")
		        .appendTitle("D5")
		        .appendTitle(new Blockly.FieldDropdown(profile.arduino.digital), "D5")
		        .appendTitle("D6")
		        .appendTitle(new Blockly.FieldDropdown(profile.arduino.digital), "D6")
		        .appendTitle("D7")
		        .appendTitle(new Blockly.FieldDropdown(profile.arduino.digital), "D7");
		    this.setPreviousStatement(true, null);
		    this.setNextStatement(true, null);
		    this.setTooltip(Blockly.Msg.LCD_DESCRIPCION);
		  }
};


//Pantalla imprimir
Blockly.Blocks['serial_lcd_print'] = {
  helpUrl: '',
  init: function() {
    this.setColour(70);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.LCD_IMPRIMIR)
        .appendTitle(new Blockly.FieldImage("../../media/lcd.png", 24, 18))
    this.appendValueInput("TEXT", 'String')    
        .appendTitle(Blockly.Msg.LCD_IMPRIMIR_FILA)
        .appendTitle(new Blockly.FieldDropdown([["1", "ONE"], ["2", "TWO"]]), "LINE") 
        .setCheck('String')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.LCD_IMPRIMIR_TEXTO);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.LCD_IMPRIMIR_DESCRIPCION);
  }
};


//Pantalla Borrar
Blockly.Blocks['serial_lcd_borrar'] = {
		  helpUrl: '',
		  init: function() {
		    this.setColour(70);
		    this.appendDummyInput("")
		        .appendTitle(Blockly.Msg.LCD_BORRAR)
		        .appendTitle(new Blockly.FieldImage("../../media/lcd.png", 24, 18));
		    this.setPreviousStatement(true, null);
		    this.setNextStatement(true, null);
		    this.setTooltip(Blockly.Msg.LCD_BORRAR_DESCRIPCION);
		  }
};


//Motor DC
Blockly.Blocks['motor_DC'] = {
		  helpUrl: '',
		  init: function() {
		    this.setColour(220);
		    this.appendDummyInput("")
		        .appendTitle(Blockly.Msg.MOTOR_DC)
		        .appendTitle(new Blockly.FieldImage("../../media/motor.png", 94, 74))
		        .appendTitle(" ")
		        .appendTitle(new Blockly.FieldDropdown([[Blockly.Msg.MOTOR_DC_PARAR, "stop"], [Blockly.Msg.MOTOR_DC_ADELANTE, "forward"], [Blockly.Msg.MOTOR_DC_ATRAS, "backward"]]), "DIRECTION")
		    this.appendDummyInput("")			    	
		        .appendTitle("PIN1#")
		    	.appendTitle(new Blockly.FieldDropdown(profile.arduino.digital), "PIN1") 
		    	.setAlign(Blockly.ALIGN_RIGHT)
		    	.appendTitle("     ")
		    	.appendTitle("PIN2#")
		    	.appendTitle(new Blockly.FieldDropdown(profile.arduino.digital), "PIN2"); 
		    this.setPreviousStatement(true, null);
		    this.setNextStatement(true, null);
		    this.setTooltip('Motor de corriente continua DC');
		  }
};


//Controlador Motores
Blockly.Blocks['motor_Controller'] = {
		  helpUrl: 'http://robologs.net/2014/11/14/tutorial-de-arduino-controlador-de-motores-dual-h-bridge/',
		  init: function() {
		    this.setColour(220);   
		    this.appendDummyInput("")
		    	.appendTitle(Blockly.Msg.MOTOR_CONTROLADOR)
		    	.appendTitle(new Blockly.FieldImage("../../media/bridge.png", 94, 74))
		    this.appendDummyInput("")	
		    	.appendTitle("Motor A")
		    	.appendTitle(new Blockly.FieldDropdown([[Blockly.Msg.MOTOR_CONTROLADOR_SI, "SI"], ["No", "NO"]]), "OPTION1")
		    	.appendTitle(" I1")
		    	.appendTitle(new Blockly.FieldDropdown(profile.arduino.digital), "I1")
		    	.appendTitle("  I2")
		    	.appendTitle(new Blockly.FieldDropdown(profile.arduino.digital), "I2")
		    	.appendTitle("  EA")	
		    	.appendTitle(new Blockly.FieldDropdown(profile.arduino.analog), "EA")
		    this.appendDummyInput("")		    	
		    	.appendTitle("Motor B")	    	
		    	.appendTitle(new Blockly.FieldDropdown([[Blockly.Msg.MOTOR_CONTROLADOR_SI, "SI"], ["No", "NO"]]), "OPTION2")
		    	.appendTitle(" I3")
		    	.appendTitle(new Blockly.FieldDropdown(profile.arduino.digital), "I3")
		    	.appendTitle("  I4")
		    	.appendTitle(new Blockly.FieldDropdown(profile.arduino.digital), "I4")
		    	.appendTitle("  EB")
		    	.appendTitle(new Blockly.FieldDropdown(profile.arduino.analog), "EB")		    	
		    this.setPreviousStatement(true, null);
		    this.setNextStatement(true, null);
		    this.setTooltip(Blockly.Msg.MOTOR_CONTROLADOR_DESCRIPCION);
		  }
};

//Motor Adelante
Blockly.Blocks['motor_adelante'] = {
		  helpUrl: 'http://robologs.net/2014/11/14/tutorial-de-arduino-controlador-de-motores-dual-h-bridge/',
		  init: function() {
		    this.setColour(220);
		    this.appendDummyInput("")
		    	.appendTitle(Blockly.Msg.MOTOR_ADELANTE)
		    	.appendTitle(new Blockly.FieldDropdown([["A", "1"], ["B", "2"]]), "MOTOR")
		        .appendTitle(Blockly.Msg.MOTOR_VELOCIDAD)	
		        .appendField(new Blockly.FieldTextInput('100', Blockly.FieldTextInput.numberValidator), 'VELOCIDAD');		     
		    this.setPreviousStatement(true, null);
		    this.setNextStatement(true, null);
		    this.setTooltip(Blockly.Msg.MOTOR_ADELANTE_DESCRIPCION);
		  }
};

//Motor Atras
Blockly.Blocks['motor_atras'] = {
		  helpUrl: 'http://robologs.net/2014/11/14/tutorial-de-arduino-controlador-de-motores-dual-h-bridge/',
		  init: function() {
		    this.setColour(220);
		    this.appendDummyInput("")
		    	.appendTitle(Blockly.Msg.MOTOR_ATRAS)
		    	.appendTitle(new Blockly.FieldDropdown([["A", "1"], ["B", "2"]]), "MOTOR")
		        .appendTitle(Blockly.Msg.MOTOR_VELOCIDAD)	
		        .appendField(new Blockly.FieldTextInput('100', Blockly.FieldTextInput.numberValidator), 'VELOCIDAD');		     
		    this.setPreviousStatement(true, null);
		    this.setNextStatement(true, null);
		    this.setTooltip(Blockly.Msg.MOTOR_ATRAS_DESCRIPCION);
		  }
};

//Motor Parar
Blockly.Blocks['motor_parar'] = {
		  helpUrl: 'http://robologs.net/2014/11/14/tutorial-de-arduino-controlador-de-motores-dual-h-bridge/',
		  init: function() {
		    this.setColour(220);
		    this.appendDummyInput("")
		    	.appendTitle(Blockly.Msg.MOTOR_PARAR)
		    	.appendTitle(new Blockly.FieldDropdown([["A", "1"], ["B", "2"]]), "MOTOR")
		    this.setPreviousStatement(true, null);
		    this.setNextStatement(true, null);
		    this.setTooltip(Blockly.Msg.MOTOR_PARAR_DESCRIPCION);
		  }
};



// Esribir en pin digital
Blockly.Blocks['digital_write'] = {
  helpUrl: 'http://arduino.cc/en/Reference/DigitalWrite',
  init: function() {
    this.setColour(20);
    this.appendDummyInput()
	    .appendField(Blockly.Msg.PIN_DIGITAL)
	    .appendField(new Blockly.FieldDropdown(profile.arduino.digital), "PIN")
      	.appendField(Blockly.Msg.PIN_ESTADO)
      	.appendField(new Blockly.FieldDropdown([[Blockly.Msg.PIN_ESTADO_ALTO, "HIGH"], [Blockly.Msg.PIN_ESTADO_BAJO, "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.PIN_DIGITAL_DESCRIPCION);
  }
};


// Escribir en pin analogico
Blockly.Blocks['analog_write'] = {
  helpUrl: 'http://arduino.cc/en/Reference/AnalogWrite',
  init: function() {
    this.setColour(20);
    this.appendDummyInput()
        .appendField(Blockly.Msg.PIN_ANALOGICO)
        .appendField(new Blockly.FieldDropdown(profile.arduino.analog), "PIN");
    this.appendValueInput("NUM", 'Number')
        .appendField(Blockly.Msg.PIN_VALOR)
        .setCheck('Number');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.PIN_ANALOGICO_DESCRIPCION);
  }
};


// Imprimir en puerto serie
Blockly.Blocks['serial_print'] = {
  helpUrl: 'http://www.arduino.cc/en/Serial/Print',
  init: function() {
    this.setColour(20);
    this.appendValueInput("CONTENT", 'String')
        .appendField(Blockly.Msg.IMPRIMIR_PUERTO_SERIE);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.IMPRIMIR_PUERTO_SERIE_DESCRIPCION);
  }
};


// HIGH-LOW
Blockly.Blocks['highlow'] = {
  helpUrl: 'http://arduino.cc/en/Reference/Constants',
  init: function() {
    this.setColour(20);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PIN_ESTADO_ALTO, "HIGH"], [Blockly.Msg.PIN_ESTADO_BAJO, "LOW"]]), 'BOOL')
    this.setOutput(true, 'Boolean');
    this.setTooltip('');
  }
};


// LED de placa
Blockly.Blocks['buildin_led'] = {
   helpUrl: 'http://arduino.cc/en/Reference/DigitalWrite',
   init: function() {
     this.setColour(20);
     this.appendDummyInput()
	       .appendField(Blockly.Msg.LED_PLACA)
	       .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LED_ENCENDER, "HIGH"], [Blockly.Msg.LED_APAGAR, "LOW"]]), "STAT");
     this.setPreviousStatement(true, null);
     this.setNextStatement(true, null);
     this.setTooltip(Blockly.Msg.LED_PLACA_DESCRIPCION);
   }
};