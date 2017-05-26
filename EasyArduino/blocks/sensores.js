/**
 * @author Jesus Lens Costa
 */
'use strict'; 

goog.provide('Blockly.Blocks.sensores');

goog.require('Blockly.Blocks');

// Boton
Blockly.Blocks['button'] = {
		helpUrl: 'http://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Bundle_V1.0b#Button',
		init: function() {
		    this.setColour(70);
		    this.appendDummyInput("")
		        .appendTitle(Blockly.Msg.BOTON)
		        .appendTitle(new Blockly.FieldImage("../../media/push.png", 94, 84))
		        .appendTitle("PIN#")
		        .appendTitle(new Blockly.FieldDropdown(profile.arduino.digital), "PIN");
		    this.setOutput(true, 'Boolean');
		}					  
};


// Sensor Ultrasonidos 
Blockly.Blocks['ultrasonic_ranger'] = {
    helpUrl: '',
    init: function() {
      this.setColour(70);
      this.appendDummyInput("")
  	    .appendTitle(Blockly.Msg.ULTRASONIDOS)
  	    .appendTitle("ECHO PIN#")
        .appendTitle(new Blockly.FieldDropdown(profile.arduino.digital), "ECHO")
      this.appendDummyInput("")   
      	.appendTitle(new Blockly.FieldImage("../../media/sonic.jpg", 94, 94))
      	.setAlign(Blockly.ALIGN_RIGHT)
	    .appendTitle("       TRIGGER PIN#")
        .appendTitle(new Blockly.FieldDropdown(profile.arduino.digital), "TRIGGER");      
      this.setOutput(true, 'Number');
      this.setTooltip(Blockly.Msg.ULTRASONIDOS_DESCRIPCION);
    }
};


// Sensor de movimiento
Blockly.Blocks['sensor_movimiento'] = {
		helpUrl: 'http://www.seeedstudio.com/wiki/Grove_-_PIR_Motion_Sensor',
		init: function() {
		    this.setColour(70);
		    this.appendDummyInput("")
		        .appendTitle(Blockly.Msg.MOVIMIENTO)
		        .appendTitle(new Blockly.FieldImage("../../media/PIR.png", 94, 94))
		        .appendTitle("PIN#")
		        .appendTitle(new Blockly.FieldDropdown(profile.arduino.digital), "PIN")
		    this.setOutput(true, 'Boolean');
		    this.setTooltip(Blockly.Msg.MOVIMIENTO_DESCRIPCION);
		}				  
};


// Sigue lineas - infrarojo
Blockly.Blocks['sigue_lineas'] = {
		  helpUrl: 'http://www.seeedstudio.com/wiki/Grove_-_Line_Finder',
		  init: function() {
		    this.setColour(70);
		    this.appendDummyInput("")
		        .appendTitle(Blockly.Msg.SIGUELINEAS)
		        .appendTitle(new Blockly.FieldImage("../../media/siguelineas.png", 134, 94))
			    .appendTitle("PIN#")
			    .appendTitle(new Blockly.FieldDropdown(profile.arduino.digital), "PIN");
		    this.setOutput(true, 'Boolean');
		    this.setTooltip(Blockly.Msg.SIGUELINEAS_DESCRIPCION);
		  }
};


// Sensor de luz
Blockly.Blocks['sensor_luz'] = {
		  helpUrl: 'http://www.seeedstudio.com/wiki/Project_Seven_-_Temperature',
		  init: function() {
		    this.setColour(340);
		    this.appendDummyInput("")
		        .appendTitle(Blockly.Msg.SENSOR_LUZ)
		        .appendTitle(new Blockly.FieldImage("../../media/fotorresistencia.png", 94, 74))
		        .appendTitle("PIN#")
		        .appendTitle(new Blockly.FieldDropdown(profile.arduino.analog), "PIN")
		    this.setOutput(true, 'Number');
		    this.setTooltip(Blockly.Msg.SENSOR_LUZ_DESCRIPCION);
		  }
};


// Sensor Temperatura
Blockly.Blocks['sensor_temperatura'] = {
		  helpUrl: 'http://www.seeedstudio.com/wiki/Project_Seven_-_Temperature',
		  init: function() {
		    this.setColour(340);
		    this.appendDummyInput("")
		        .appendTitle(Blockly.Msg.TEMPERATURA)
		        .appendTitle(new Blockly.FieldImage("../../media/temperatura.png", 94, 84))
		        .appendTitle("PIN#")
		        .appendTitle(new Blockly.FieldDropdown(profile.arduino.analog), "PIN")
		    this.setOutput(true, 'Number');
		    this.setTooltip(Blockly.Msg.TEMPERATURA_DESCRIPCION);
		  }
};


// Potenciometro
Blockly.Blocks['potenciometro'] = {
		  helpUrl: '',
		  init: function() {
		    this.setColour(340);
		    this.appendDummyInput("")
		        .appendTitle(Blockly.Msg.POTENCIOMETRO)
		        .appendTitle(new Blockly.FieldImage("../../media/potenciometro.png", 94, 74))
		        .appendTitle("PIN#")
		        .appendTitle(new Blockly.FieldDropdown(profile.arduino.analog), "PIN")
		    this.setOutput(true, 'Number');
		    this.setTooltip(Blockly.Msg.POTENCIOMETRO_DESCRIPCION);
		  }
};


// Leer pin digital
Blockly.Blocks['digital_read'] = {
  helpUrl: 'http://arduino.cc/en/Reference/DigitalRead',
  init: function() {
    this.setColour(20);
    this.appendDummyInput()
	      .appendField(Blockly.Msg.READ_PIN_DIGITAL)
	      .appendField(new Blockly.FieldDropdown(profile.arduino.digital), "PIN");
    this.setOutput(true, 'Boolean');
    this.setTooltip('');
  }
};


// Leer pin analogico
Blockly.Blocks['analog_read'] = {
  helpUrl: 'http://arduino.cc/en/Reference/AnalogRead',
  init: function() {
    this.setColour(20);
    this.appendDummyInput()
        .appendField(Blockly.Msg.READ_PIN_ANALOGICO)
        .appendField(new Blockly.FieldDropdown(profile.arduino.analog), "PIN");
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.READ_PIN_ANALOGICO_DESCRIPCION);
  }
};