import $ from "jquery";

class CountUp {
	constructor() {
		this.progressTriggerElement = $(".progress__title");
		this.progressAnimateElement = $(".progress-bar-fill");
		this.createProgressWaypoint();
	}

	

	createProgressWaypoint() {
		var that = this;
		new Waypoint({
			element: this.progressTriggerElement[0],
			handler: function(direction){
				if(direction == "down"){
					$('.counter').each(function() {
					var $this = $(this),
					countTo = $this.attr('data-count');
					$({ countNum: $this.text()}).animate({
						countNum: countTo
					},
					{
						duration: 3000,
						easing:'linear',
						step: function() {
							$this.text(Math.floor(this.countNum) + "%");
							that.progressAnimateElement.addClass("progress-bar-animate");
						},
						complete: function() {
							$this.text(this.countNum + "%");
							$this.removeClass("counter");
						}
					});  
				});
				}
			},
			offset: "85%"
		});

		new Waypoint({
			element: this.progressTriggerElement[0],
			handler: function(direction){
				if(direction == "up"){
					$('.counter').each(function() {
					var $this = $(this),
					countTo = $this.attr('data-count');
					$({ countNum: $this.text()}).animate({
						countNum: countTo
					},
					{
						duration: 3000,
						easing:'linear',
						step: function() {
							$this.text(Math.floor(this.countNum) + "%");
						},
						complete: function() {
							$this.text(this.countNum + "%");
							$this.removeClass("counter");
						}
					});  
				});
				}
			},
			offset: "-35%"
		});
	}

}


export default CountUp;


