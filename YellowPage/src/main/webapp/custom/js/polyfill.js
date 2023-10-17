(function () {
	(function () {
		if (typeof window.CustomEvent === 'function') return false; //If not IE

		function CustomEvent(event, params) {
			params = params || { bubbles: false, cancelable: false, detail: undefined };
			var evt = document.createEvent('CustomEvent');
			evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
			return evt;
		}

		CustomEvent.prototype = window.Event.prototype;

		window.CustomEvent = CustomEvent;		
	})();
	
	(function () {
		if (window.Element && !Element.prototype.closest) {
		  Element.prototype.closest = function (s) {
		    var matches = (this.document || this.ownerDocument).querySelectorAll(s),
		      i,
		      el = this;
		    do {
		      i = matches.length;
		      while (--i >= 0 && matches.item(i) !== el) {}
		    } while (i < 0 && (el = el.parentElement));
		    return el;
		  };
		}
	})();
})();