/**
 * @author Jesus Lens Costa
 */
'use strict';

goog.provide('Blockly.Blocks.servos');

goog.require('Blockly.Blocks');

// Servo rotacion Continua
Blockly.Blocks['servo_continua'] = {
		  helpUrl: 'http://www.arduino.cc/playground/ComponentLib/servo',		  
		  init: function() {
			    this.setColour(230);
			    this.appendDummyInput("")
			        .appendTitle(Blockly.Msg.SERVO_CONTINUA)	
			        .appendTitle(new Blockly.FieldImage("../../media/servocontinua.png", 94, 74))			       
			        .appendTitle("PIN#")
			        .appendTitle(new Blockly.FieldDropdown(profile.arduino.digital), "PIN")	
			    this.appendDummyInput("")  
			    	.setAlign(Blockly.ALIGN_RIGHT)
			    	.appendTitle(Blockly.Msg.SERVO_CONTINUA_SENTIDO)	
			        .appendTitle(new Blockly.FieldDropdown([[Blockly.Msg.SERVO_CONTINUA_HORARIO, "Horario"], [Blockly.Msg.SERVO_CONTINUA_ANTIHORARIO, "AntiHorario"], [Blockly.Msg.SERVO_CONTINUA_DETENER, "Detener"]]), 'SENTIDO')
			    this.setPreviousStatement(true, null);
			    this.setNextStatement(true, null);
			    this.setTooltip(Blockly.Msg.SERVO_CONTINUA_DESCRIPCION);
		  }
};

// Servo mover x grados
Blockly.Blocks['servo_move'] = {
  helpUrl: 'http://www.arduino.cc/playground/ComponentLib/servo',
  init: function() {
	    this.setColour(230);
	    this.appendDummyInput("")
	        .appendTitle("Servo")
	        .appendTitle(new Blockly.FieldImage("../../media/servogrados.png", 94, 74))
	        .appendTitle("PIN#")    
	        .appendTitle(new Blockly.FieldDropdown(profile.arduino.digital), "PIN")
	    this.appendDummyInput("")  
		    .setAlign(Blockly.ALIGN_RIGHT)
		    .appendTitle(Blockly.Msg.SERVO_GRADOS)	
		    .appendField(new Blockly.FieldTextInput('0', Blockly.FieldTextInput.numberValidator), 'GRADOS');   
	    this.setPreviousStatement(true, null);
	    this.setNextStatement(true, null);
	    this.setTooltip(Blockly.Msg.SERVO_GRADOS_DESCRIPCION);
	  }
};



// Servo Up
Blockly.Blocks['servo_up'] = {
		  helpUrl: 'http://www.arduino.cc/playground/ComponentLib/servo',		  
		  init: function() {
			    this.setColour(210);
			    this.appendDummyInput("")
			        .appendTitle(Blockly.Msg.ROBOT_UP)	
			        .appendTitle(new Blockly.FieldImage("../../media/adelante.png", 74, 74))			       
			    this.appendDummyInput("")    
			    	.setAlign(Blockly.ALIGN_RIGHT)
			        .appendTitle(Blockly.Msg.ROBOT_PIN_IZQUIERDO)
			        .appendTitle(new Blockly.FieldDropdown(profile.arduino.digital), "PIN1")	
			    this.appendDummyInput("")
			    	.setAlign(Blockly.ALIGN_RIGHT)
			        .appendTitle(Blockly.Msg.ROBOT_PIN_DERECHO)
			        .appendTitle(new Blockly.FieldDropdown(profile.arduino.digital), "PIN2")
			    this.setPreviousStatement(true, null);
			    this.setNextStatement(true, null);
			    this.setTooltip(Blockly.Msg.ROBOT_UP_DESCRIPCION);
		}
};


// Servo Down
Blockly.Blocks['servo_down'] = {
		  helpUrl: 'http://www.arduino.cc/playground/ComponentLib/servo',		  
		  init: function() {
			    this.setColour(210);
			    this.appendDummyInput("")
			        .appendTitle(Blockly.Msg.ROBOT_DOWN)
			        .appendTitle(new Blockly.FieldImage("../../media/atras.png", 74, 74))
			    this.appendDummyInput("")   
			    	.setAlign(Blockly.ALIGN_RIGHT)
			        .appendTitle(Blockly.Msg.ROBOT_PIN_IZQUIERDO)
			        .appendTitle(new Blockly.FieldDropdown(profile.arduino.digital), "PIN1")	
			    this.appendDummyInput("") 
			    	.setAlign(Blockly.ALIGN_RIGHT)
			        .appendTitle(Blockly.Msg.ROBOT_PIN_DERECHO)
			        .appendTitle(new Blockly.FieldDropdown(profile.arduino.digital), "PIN2")		        
			    this.setPreviousStatement(true, null);
			    this.setNextStatement(true, null);
			    this.setTooltip(Blockly.Msg.ROBOT_DOWN_DESCRIPCION);
		}
};


// Servo Left
Blockly.Blocks['servo_left'] = {
		  helpUrl: 'http://www.arduino.cc/playground/ComponentLib/servo',		  
		  init: function() {
			    this.setColour(210);
			    this.appendDummyInput("")
			        .appendTitle(Blockly.Msg.ROBOT_LEFT)
			        .appendTitle(new Blockly.FieldImage("../../media/izquierda.png", 74, 74))
			    this.appendDummyInput("")   
			    	.setAlign(Blockly.ALIGN_RIGHT)
			        .appendTitle(Blockly.Msg.ROBOT_PIN_IZQUIERDO)
			        .appendTitle(new Blockly.FieldDropdown(profile.arduino.digital), "PIN1")    
			    this.appendDummyInput("")
			    	.setAlign(Blockly.ALIGN_RIGHT)
			        .appendTitle(Blockly.Msg.ROBOT_PIN_DERECHO)
			        .appendTitle(new Blockly.FieldDropdown(profile.arduino.digital), "PIN")		    		        			        
			    this.setPreviousStatement(true, null);
			    this.setNextStatement(true, null);
			    this.setTooltip(Blockly.Msg.ROBOT_LEFT_DESCRIPCION);
		}
};


// Servo Right
Blockly.Blocks['servo_right'] = {
		  helpUrl: 'http://www.arduino.cc/playground/ComponentLib/servo',		  
		  init: function() {
			    this.setColour(210);
			    this.appendDummyInput("")
			        .appendTitle(Blockly.Msg.ROBOT_RIGHT)
			        .appendTitle(new Blockly.FieldImage("../../media/derecha.png", 74, 74))	
			    this.appendDummyInput("") 
			    	.setAlign(Blockly.ALIGN_RIGHT)
			        .appendTitle(Blockly.Msg.ROBOT_PIN_IZQUIERDO)
			        .appendTitle(new Blockly.FieldDropdown(profile.arduino.digital), "PIN")
			    this.appendDummyInput("")   
			    	.setAlign(Blockly.ALIGN_RIGHT)
			        .appendTitle(Blockly.Msg.ROBOT_PIN_DERECHO)
			        .appendTitle(new Blockly.FieldDropdown(profile.arduino.digital), "PIN2")			        
			    this.setPreviousStatement(true, null);
			    this.setNextStatement(true, null);
			    this.setTooltip(Blockly.Msg.ROBOT_RIGHT_DESCRIPCION);
		}
};


//Servo Detener
Blockly.Blocks['servo_detener'] = {
		  helpUrl: 'http://www.arduino.cc/playground/ComponentLib/servo',		  
		  init: function() {
			    this.setColour(210);
			    this.appendDummyInput("")
			        .appendTitle(Blockly.Msg.ROBOT_STOP)
			        .appendTitle(new Blockly.FieldImage("../../media/stop.png", 74, 74))	
			    this.appendDummyInput("") 
			    	.setAlign(Blockly.ALIGN_RIGHT)
			        .appendTitle(Blockly.Msg.ROBOT_PIN_IZQUIERDO)
			        .appendTitle(new Blockly.FieldDropdown(profile.arduino.digital), "PIN")
			    this.appendDummyInput("")   
			    	.setAlign(Blockly.ALIGN_RIGHT)
			        .appendTitle(Blockly.Msg.ROBOT_PIN_DERECHO)
			        .appendTitle(new Blockly.FieldDropdown(profile.arduino.digital), "PIN2")			        
			    this.setPreviousStatement(true, null);
			    this.setNextStatement(true, null);
			    this.setTooltip(Blockly.Msg.ROBOT_STOP_DESCRIPCION);
		}
};


// Levantar brazos
Blockly.Blocks['levantar_brazos'] = {
		  helpUrl: 'http://www.arduino.cc/playground/ComponentLib/servo',
		  init: function() {
			    this.setColour(190);
			    this.appendDummyInput("")
			        .appendTitle(Blockly.Msg.ROBOT_BRAZOS_UP)
			        .appendTitle(new Blockly.FieldImage("../../media/flecha_s.png", 94, 74))
			    this.appendDummyInput("")   
			    	.setAlign(Blockly.ALIGN_RIGHT)    
			        .appendTitle(Blockly.Msg.ROBOT_BRAZOS_DERECHO)    
			        .appendTitle(new Blockly.FieldDropdown(profile.arduino.digital), "PIN")
			    this.appendDummyInput("")   
			    	.setAlign(Blockly.ALIGN_RIGHT)    
			        .appendTitle(Blockly.Msg.ROBOT_BRAZOS_IZQUIERDO)    
			        .appendTitle(new Blockly.FieldDropdown(profile.arduino.digital), "PIN2")
			    this.appendDummyInput("")  
			    	.setAlign(Blockly.ALIGN_RIGHT)
			    	.appendTitle(Blockly.Msg.ROBOT_BRAZOS_SUBIR)	
			        .appendTitle(new Blockly.FieldDropdown([[Blockly.Msg.ROBOT_BRAZO_DERECHO, "DERECHO"], [Blockly.Msg.ROBOT_BRAZO_IZQUIERDO, "IZQUIERDO"], [Blockly.Msg.ROBOT_BRAZO_AMBOS, "DOS"]]), 'BRAZO')			        
			    this.setPreviousStatement(true, null);
			    this.setNextStatement(true, null);
			    this.setTooltip(Blockly.Msg.ROBOT_BRAZOS_UP_DESCRIPCION);
			}
};


// Bajar brazos
Blockly.Blocks['bajar_brazos'] = {
		  helpUrl: 'http://www.arduino.cc/playground/ComponentLib/servo',
		  init: function() {
			    this.setColour(190);
			    this.appendDummyInput("")
			        .appendTitle(Blockly.Msg.ROBOT_BRAZOS_DOWN)
			        .appendTitle(new Blockly.FieldImage("../../media/flecha_b.png", 96, 74))
			    this.appendDummyInput("")   
			    	.setAlign(Blockly.ALIGN_RIGHT)    
			        .appendTitle(Blockly.Msg.ROBOT_BRAZOS_DERECHO)    
			        .appendTitle(new Blockly.FieldDropdown(profile.arduino.digital), "PIN")
			    this.appendDummyInput("")   
			    	.setAlign(Blockly.ALIGN_RIGHT)    
			        .appendTitle(Blockly.Msg.ROBOT_BRAZOS_IZQUIERDO)    
			        .appendTitle(new Blockly.FieldDropdown(profile.arduino.digital), "PIN2")
			    this.appendDummyInput("")  
			    	.setAlign(Blockly.ALIGN_RIGHT)
			    	.appendTitle(Blockly.Msg.ROBOT_BRAZOS_BAJAR)	
			        .appendTitle(new Blockly.FieldDropdown([[Blockly.Msg.ROBOT_BRAZO_DERECHO, "DERECHO"], [Blockly.Msg.ROBOT_BRAZO_IZQUIERDO, "IZQUIERDO"], [Blockly.Msg.ROBOT_BRAZO_AMBOS, "DOS"]]), 'BRAZO')			        
			    this.setPreviousStatement(true, null);
			    this.setNextStatement(true, null);
			    this.setTooltip(Blockly.Msg.ROBOT_BRAZOS_DOWN_DESCRIPCION);
			}
};


