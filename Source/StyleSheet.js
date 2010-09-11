var StyleRule = require("StyleRule").StyleRule

/**
 * @constructor
 * @param {string|Array.<StyleRule|string>} rules
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleSheet
 */
function StyleSheet(rules){
	this.cssRules = []
	var length
	if (typeof rules == "string") {
		//FIXME parse it into array of StyleRules
	} else if (length = rules.length) {
		for (var i=0; i<length; i++) {
			var rule = rules[i]
			if (rule instanceof StyleRule) {
				this.cssRules[i] = rule
			} else {
				this.cssRules[i] = new StyleRule(rule)
			}
		}
	}
}


/**
 * Used to insert a new rule into the style sheet. The new rule now becomes part of the cascade.
 *
 *   sheet = new Sheet("body {margin: 0}")
 *   sheet.toString()
 *   -> "body{margin:0;}"
 *   sheet.insertRule("img {border: none}", 0)
 *   -> 0
 *   sheet.toString()
 *   -> "img{border:none;}body{margin:0;}"
 *
 * @param {string} rule
 * @param {number} index
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleSheet-insertRule
 * @return {number} The index within the style sheet's rule collection of the newly inserted rule.
 */
StyleSheet.prototype.insertRule = function(rule, index){
	if (index < 0 || index > this.cssRules.length) {
		throw new RangeError("INDEX_SIZE_ERR")
	}
	this.cssRules.splice(index, 0, new StyleRule(rule))
	return index
}


/**
 * Used to delete a rule from the style sheet.
 *
 *   sheet = new Sheet("img{border:none} body{margin:0}")
 *   sheet.toString()
 *   -> "img{border:none;}body{margin:0;}"
 *   sheet.deleteRule(0)
 *   sheet.toString()
 *   -> "body{margin:0;}"
 *
 * @param {number} index
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleSheet-deleteRule
 * @return {number} The index within the style sheet's rule list of the rule to remove.
 */
StyleSheet.prototype.deleteRule = function(index){
	if (index < 0 || index > this.cssRules.length) {
		throw new RangeError("INDEX_SIZE_ERR")
	}
	this.cssRules.splice(index, 1)
}


if (typeof exports != "undefined") {
	exports.StyleSheet = StyleSheet
}
