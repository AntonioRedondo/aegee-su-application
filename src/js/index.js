
WebFont.load({
	google: {
		families: ["Open Sans:300,800", "Open Sans Condensed:300", "Black Ops One:400", "Bungee Shade:400", "Caveat:400", "Pacifico", "Monofett" ]
	},
	active: function() {
		initIntro();
	},
	inactive: function() {
		window.location.reload();
	},
	classes: false,
	timeout: 8000
});
