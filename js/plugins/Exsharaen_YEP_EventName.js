//=============================================================================
// Yanfly Message Core Plugins - Event Name
// Exsharaen_YEP_EventName.js
//=============================================================================


 /*:
 * @plugindesc (Requires YEP_MessageCore.js) Get event name for message window
 * @author Exsharaen
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin requires YEP_MessageCore.js to run.
 * Place this plugin under YEP_MessageCore.js in the plugin list.
 *
 * ============================================================================
 * Text Codes
 * ============================================================================
 *
 * By using certain text codes in your messages, you can have the game replace
 * them with the following:
 *
 * \E[x] : Show event x's name.
 * \ET   : Show event's name at which this code is called.
 */

(function() {
	var _Game_Event_initialize = Game_Event.prototype.initialize;
	Game_Event.prototype.initialize = function(mapId, eventId) {
		_Game_Event_initialize.call(this, mapId, eventId);		
		this._name = this.event().name;
	};
	
	Game_Event.prototype.name = function() {
		return this._name;
	};
	
	Game_Map.prototype.thisEvent = function() {
		return this._events[this._interpreter.eventId()];
	}
	
	var _Window_Base_convertExtraEscapeCharacters = Window_Base.prototype.convertExtraEscapeCharacters;
	Window_Base.prototype.convertExtraEscapeCharacters = function(text) {
		text = _Window_Base_convertExtraEscapeCharacters.call(this, text);
		// \E[n]
		text = text.replace(/\x1bE\[(\d+)\]/gi, function() {
			var eventId = parseInt(arguments[1]);
			var eventName = "";
			if(eventId > 0) {
				var event = $gameMap.events()[eventId - 1];
				if(event != undefined)
					eventName = $gameMap.events()[eventId - 1].name();
			}
			return eventName;
		}.bind(this));
		// \ET
		text = text.replace(/\x1bET/gi, function() {
			return $gameMap.thisEvent().name();
		}.bind(this));
		return text;
	};
})();