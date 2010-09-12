if (typeof require != "undefined") {
	var StyleDeclaration = require("./StyleDeclaration").StyleDeclaration
}

/**
 * @constructor
 * @param {string|Array.<StyleDeclaration|string>} rule
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleRule
 */
function StyleRule(rule){
	if (typeof rule == "string") {
		//FIXME parse it
	} else {
	//FIXME
	}
}

StyleRule.prototype = {
	CHARSET_RULE: 2,
	FONT_FACE_RULE: 5,
	IMPORT_RULE: 3,
	MEDIA_RULE: 4,
	PAGE_RULE: 6,
	STYLE_RULE: 1,
	UNKNOWN_RULE: 0,
	VARIABLES_RULE: 7,
	WEBKIT_KEYFRAMES_RULE: 8,
	WEBKIT_KEYFRAME_RULE: 9,

	get cssText(){
		return this.selectorText + " {" + this.style.cssText + "}"
	}
}

if (typeof exports != "undefined") {
	exports.StyleRule = StyleRule
}
