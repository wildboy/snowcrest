(function($) {
	$.fn.snowcrest = function(options) {
		var settings = $.extend({
			'layerCount'         : 4
		}, options);

		return this.each(function() {

			var snowWrapper = $('<div id="snow" />');
			for (var l = 1; l < settings.layerCount; l++)
			{
				for (var i = 0; i < Math.floor(100 / l); i++)
				{
					var flakeStyle = Math.floor(Math.random() * (3 * l)) + (1 * l);
					var flakeLeft = Math.floor(Math.random() * 98) +3;
					var flakeDelay = (Math.random() * (12 / l));
					var snowflake = $('<div class="snowflake snowflake'+flakeStyle+'" style="left: '+flakeLeft+'%; -webkit-animation-delay: '+flakeDelay+'s; -moz-animation-delay: '+flakeDelay+'s; -ms-animation-delay: '+flakeDelay+'s;"></div>');
					snowWrapper.append(snowflake);
				}	
			}
			$(this).prepend(snowWrapper);
		});
	};
})(jQuery);