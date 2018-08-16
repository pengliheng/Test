// JavaScript Document
$(document).ready(function () {

	$("nav>div").click(function () {
		$("header").animate({
			"margin-top": "0px",
		})
	})

	$("header").hover(function () {
		$("header").animate({
			"margin-top": "0px"
		}).fadeIn(ture)
	}, function () {
		$("header").delay(800).animate({
			"margin-top": "-80px"
		}).fadeIn(ture)
	})

	$(".setMain>div").eq(0).siblings().hide()
	$(".setTab img").eq(0).css({
		"-webkit-filter": "grayscale(0)"
	})
	$(".setTab img").click(function () {
		$(this).css({
			"-webkit-filter": "grayscale(0)"
		}).siblings().css({
			"-webkit-filter": "grayscale(1)"
		});
		var i = $(this).index();
		$(this).parent().next().children().eq(i).show().siblings().hide();
	})

	$(".shft01").click(function () {
		$(".setBlack").animate({
			"height": "100%",
			"width": "100%",
			"top": "0",
			"left": "0"
		})
		$(".del01").delay(200).animate({
			"height": "48px",
			"width": "48px"
		})
		$(".hft01").delay(400).fadeIn()
	})

	$(".del01").click(function () {
		$(".setBlack").delay(200).animate({
			"height": "0",
			"width": "0",
			"top": "50%",
			"left": "50%"
		});
		$(".hft01").fadeOut()
		$(".del01").delay(100).animate({
			"height": "0",
			"width": "0"
		})
	})

	$(".shft02").click(function () {
		$(".setBlack").animate({
			"height": "100%",
			"width": "100%",
			"top": "0",
			"left": "0"
		})
		$(".del02").delay(200).animate({
			"height": "48px",
			"width": "48px"
		})
		$(".hft02").delay(400).fadeIn()
	})


	$(".del02").click(function () {
		$(".setBlack").delay(200).animate({
			"height": "0",
			"width": "0",
			"top": "50%",
			"left": "50%"
		});
		$(".hft02").fadeOut()
		$(".del02").delay(100).animate({
			"height": "0",
			"width": "0"
		})
	})


	$(".shft03").click(function () {
		$(".setBlack").animate({
			"height": "100%",
			"width": "100%",
			"top": "0",
			"left": "0"
		})
		$(".del03").delay(200).animate({
			"height": "48px",
			"width": "48px"
		})
		$(".hft03").delay(400).fadeIn()
	})

	$(".del03").click(function () {
		$(".setBlack").delay(200).animate({
			"height": "0",
			"width": "0",
			"top": "50%",
			"left": "50%"
		});
		$(".hft03").fadeOut()
		$(".del03").delay(100).animate({
			"height": "0",
			"width": "0"
		})
	})


	$(".shft04").click(function () {
		$(".setBlack").animate({
			"height": "100%",
			"width": "100%",
			"top": "0",
			"left": "0"
		})
		$(".del04").delay(200).animate({
			"height": "48px",
			"width": "48px"
		})
		$(".hft04").delay(400).fadeIn()
	})

	$(".del04").click(function () {
		$(".setBlack").delay(200).animate({
			"height": "0",
			"width": "0",
			"top": "50%",
			"left": "50%"
		});
		$(".hft04").fadeOut()
		$(".del04").delay(100).animate({
			"height": "0",
			"width": "0"
		})
	})


	$(".szkzh01").click(function () {
		$(".setBlack").animate({
			"height": "100%",
			"width": "100%",
			"top": "0",
			"left": "0"
		})
		$(".del05").delay(200).animate({
			"height": "48px",
			"width": "48px"
		})
		$(".zkzh01").delay(400).fadeIn()
	})

	$(".del05").click(function () {
		$(".setBlack").delay(200).animate({
			"height": "0",
			"width": "0",
			"top": "50%",
			"left": "50%"
		});
		$(".zkzh01").fadeOut()
		$(".del05").delay(100).animate({
			"height": "0",
			"width": "0"
		})
	})


	$(".szkzh02").click(function () {
		$(".setBlack").animate({
			"height": "100%",
			"width": "100%",
			"top": "0",
			"left": "0"
		})
		$(".del06").delay(200).animate({
			"height": "48px",
			"width": "48px"
		})
		$(".zkzh02").delay(400).fadeIn()
	})

	$(".del06").click(function () {
		$(".setBlack").delay(200).animate({
			"height": "0",
			"width": "0",
			"top": "50%",
			"left": "50%"
		});
		$(".zkzh02").fadeOut()
		$(".del06").delay(100).animate({
			"height": "0",
			"width": "0"
		})
	})


	$(".szkzh03").click(function () {
		$(".setBlack").animate({
			"height": "100%",
			"width": "100%",
			"top": "0",
			"left": "0"
		})
		$(".del07").delay(200).animate({
			"height": "48px",
			"width": "48px"
		})
		$(".zkzh03").delay(400).fadeIn()
	})

	$(".del07").click(function () {
		$(".setBlack").delay(200).animate({
			"height": "0",
			"width": "0",
			"top": "50%",
			"left": "50%"
		});
		$(".zkzh03").fadeOut()
		$(".del07").delay(100).animate({
			"height": "0",
			"width": "0"
		})
	})


	$(".szkzh04").click(function () {
		$(".setBlack").animate({
			"height": "100%",
			"width": "100%",
			"top": "0",
			"left": "0"
		})
		$(".del08").delay(200).animate({
			"height": "48px",
			"width": "48px"
		})
		$(".zkzh04").delay(400).fadeIn()
		$(".over14").show()
	})

	$(".del08").click(function () {
		$(".setBlack").delay(200).animate({
			"height": "0",
			"width": "0",
			"top": "50%",
			"left": "50%"
		});
		$(".zkzh04").fadeOut()
		$(".del08").delay(100).animate({
			"height": "0",
			"width": "0"
		})
		$(".over14").hide()
	})



	$(".sweb01").click(function () {
		$(".setBlack").animate({
			"height": "100%",
			"width": "100%",
			"top": "0",
			"left": "0"
		})
		$(".del09").delay(200).animate({
			"height": "48px",
			"width": "48px"
		})
		$(".web01").delay(400).fadeIn()
		$(".over01").show()
	})

	$(".del09").click(function () {
		$(".setBlack").delay(200).animate({
			"height": "0",
			"width": "0",
			"top": "50%",
			"left": "50%"
		});
		$(".web01").fadeOut()
		$(".del09").delay(100).animate({
			"height": "0",
			"width": "0"
		})
		$(".over01").hide()
	})


	$(".sweb02").click(function () {
		$(".setBlack").animate({
			"height": "100%",
			"width": "100%",
			"top": "0",
			"left": "0"
		})
		$(".del10").delay(200).animate({
			"height": "48px",
			"width": "48px"
		})
		$(".web02").delay(400).fadeIn()
		$(".over02").show()
	})

	$(".del10").click(function () {
		$(".setBlack").delay(200).animate({
			"height": "0",
			"width": "0",
			"top": "50%",
			"left": "50%"
		});
		$(".web02").fadeOut()
		$(".del10").delay(100).animate({
			"height": "0",
			"width": "0"
		})
		$(".over02").hide()
	})


	$(".sweb03").click(function () {
		$(".setBlack").animate({
			"height": "100%",
			"width": "100%",
			"top": "0",
			"left": "0"
		})
		$(".del11").delay(200).animate({
			"height": "48px",
			"width": "48px"
		})
		$(".web03").delay(400).fadeIn()
		$(".over03").show()
	})

	$(".del11").click(function () {
		$(".setBlack").delay(200).animate({
			"height": "0",
			"width": "0",
			"top": "50%",
			"left": "50%"
		});
		$(".web03").fadeOut()
		$(".del11").delay(100).animate({
			"height": "0",
			"width": "0"
		})
		$(".over03").hide()
	})


	$(".sweb04").click(function () {
		$(".setBlack").animate({
			"height": "100%",
			"width": "100%",
			"top": "0",
			"left": "0"
		})
		$(".del12").delay(200).animate({
			"height": "48px",
			"width": "48px"
		})
		$(".web04").delay(400).fadeIn()
		$(".over04").show()
	})

	$(".del12").click(function () {
		$(".setBlack").delay(200).animate({
			"height": "0",
			"width": "0",
			"top": "50%",
			"left": "50%"
		});
		$(".web04").fadeOut()
		$(".del12").delay(100).animate({
			"height": "0",
			"width": "0"
		})
		$(".over04").hide()
	})


	$(".sweb05").click(function () {
		$(".setBlack").animate({
			"height": "100%",
			"width": "100%",
			"top": "0",
			"left": "0"
		})
		$(".del13").delay(200).animate({
			"height": "48px",
			"width": "48px"
		})
		$(".web05").delay(400).fadeIn()
		$(".over05").show()
	})

	$(".del13").click(function () {
		$(".setBlack").delay(200).animate({
			"height": "0",
			"width": "0",
			"top": "50%",
			"left": "50%"
		});
		$(".web05").fadeOut()
		$(".del13").delay(100).animate({
			"height": "0",
			"width": "0"
		})
		$(".over05").hide()
	})



	$(".sapp01").click(function () {
		$(".setBlack").animate({
			"height": "100%",
			"width": "100%",
			"top": "0",
			"left": "0"
		})
		$(".del14").delay(200).animate({
			"height": "48px",
			"width": "48px"
		})
		$(".app01").delay(400).fadeIn()
	})

	$(".del14").click(function () {
		$(".setBlack").delay(200).animate({
			"height": "0",
			"width": "0",
			"top": "50%",
			"left": "50%"
		});
		$(".app01").fadeOut()
		$(".del14").delay(100).animate({
			"height": "0",
			"width": "0"
		})
	})


	$(".sapp02").click(function () {
		$(".setBlack").animate({
			"height": "100%",
			"width": "100%",
			"top": "0",
			"left": "0"
		})
		$(".del15").delay(200).animate({
			"height": "48px",
			"width": "48px"
		})
		$(".app02").delay(400).fadeIn()
	})

	$(".del15").click(function () {
		$(".setBlack").delay(200).animate({
			"height": "0",
			"width": "0",
			"top": "50%",
			"left": "50%"
		});
		$(".app02").fadeOut()
		$(".del15").delay(100).animate({
			"height": "0",
			"width": "0"
		})
	})


	$(".sapp03").click(function () {
		$(".setBlack").animate({
			"height": "100%",
			"width": "100%",
			"top": "0",
			"left": "0"
		})
		$(".del16").delay(200).animate({
			"height": "48px",
			"width": "48px"
		})
		$(".app03").delay(400).fadeIn()
	})

	$(".del16").click(function () {
		$(".setBlack").delay(200).animate({
			"height": "0",
			"width": "0",
			"top": "50%",
			"left": "50%"
		});
		$(".app03").fadeOut()
		$(".del16").delay(100).animate({
			"height": "0",
			"width": "0"
		})
	})


	$(".sapp04").click(function () {
		$(".setBlack").animate({
			"height": "100%",
			"width": "100%",
			"top": "0",
			"left": "0"
		})
		$(".del17").delay(200).animate({
			"height": "48px",
			"width": "48px"
		})
		$(".app04").delay(400).fadeIn()
		$(".over10").show()
	})

	$(".del17").click(function () {
		$(".setBlack").delay(200).animate({
			"height": "0",
			"width": "0",
			"top": "50%",
			"left": "50%"
		});
		$(".app04").fadeOut()
		$(".del17").delay(100).animate({
			"height": "0",
			"width": "0"
		})
		$(".over10").hide()
	})


	$(".sapp05").click(function () {
		$(".setBlack").animate({
			"height": "100%",
			"width": "100%",
			"top": "0",
			"left": "0"
		})
		$(".del18").delay(200).animate({
			"height": "48px",
			"width": "48px"
		})
		$(".app05").delay(400).fadeIn()
		$(".over11").show()
	})

	$(".del18").click(function () {
		$(".setBlack").delay(200).animate({
			"height": "0",
			"width": "0",
			"top": "50%",
			"left": "50%"
		});
		$(".app05").fadeOut()
		$(".del18").delay(100).animate({
			"height": "0",
			"width": "0"
		})
		$(".over11").hide()
	})



	$(".sapp06").click(function () {
		$(".setBlack").animate({
			"height": "100%",
			"width": "100%",
			"top": "0",
			"left": "0"
		})
		$(".del19").delay(200).animate({
			"height": "48px",
			"width": "48px"
		})
		$(".app06").delay(400).fadeIn()
		$(".over12").show()
	})

	$(".del19").click(function () {
		$(".setBlack").delay(200).animate({
			"height": "0",
			"width": "0",
			"top": "50%",
			"left": "50%"
		});
		$(".app06").fadeOut()
		$(".del19").delay(100).animate({
			"height": "0",
			"width": "0"
		})
		$(".over12").hide()
	})


	$(".sapp07").click(function () {
		$(".setBlack").animate({
			"height": "100%",
			"width": "100%",
			"top": "0",
			"left": "0"
		})
		$(".del20").delay(200).animate({
			"height": "48px",
			"width": "48px"
		})
		$(".app07").delay(400).fadeIn()
		$(".over13").show()
	})

	$(".del20").click(function () {
		$(".setBlack").delay(200).animate({
			"height": "0",
			"width": "0",
			"top": "50%",
			"left": "50%"
		});
		$(".app07").fadeOut()
		$(".del20").delay(100).animate({
			"height": "0",
			"width": "0"
		})
		$(".over13").hide()
	})



	$(".sother01").click(function () {
		$(".setBlack").animate({
			"height": "100%",
			"width": "100%",
			"top": "0",
			"left": "0"
		})
		$(".del21").delay(200).animate({
			"height": "48px",
			"width": "48px"
		})
		$(".other01").delay(400).fadeIn()
		$(".over06").show()
	})

	$(".del21").click(function () {
		$(".setBlack").delay(200).animate({
			"height": "0",
			"width": "0",
			"top": "50%",
			"left": "50%"
		});
		$(".other01").fadeOut()
		$(".del21").delay(100).animate({
			"height": "0",
			"width": "0"
		})
		$(".over06").hide()
	})


	$(".sother02").click(function () {
		$(".setBlack").animate({
			"height": "100%",
			"width": "100%",
			"top": "0",
			"left": "0"
		})
		$(".del22").delay(200).animate({
			"height": "48px",
			"width": "48px"
		})
		$(".other02").delay(400).fadeIn()
	})

	$(".del22").click(function () {
		$(".setBlack").delay(200).animate({
			"height": "0",
			"width": "0",
			"top": "50%",
			"left": "50%"
		});
		$(".other02").fadeOut()
		$(".del22").delay(100).animate({
			"height": "0",
			"width": "0"
		})
	})

	$(".scode").click(function () {
		$(".setBlack").animate({
			"height": "100%",
			"width": "100%",
			"top": "0",
			"left": "0"
		})
		$(".del23").delay(200).animate({
			"height": "48px",
			"width": "48px"
		})
		$(".bcode").delay(400).fadeIn()
	})

	$(".del23").click(function () {
		$(".setBlack").delay(200).animate({
			"height": "0",
			"width": "0",
			"top": "50%",
			"left": "50%"
		});
		$(".bcode").fadeOut()
		$(".del23").delay(100).animate({
			"height": "0",
			"width": "0"
		})
	})
	// Array.prototype.slice.call(
	// 	document.querySelectorAll('.lazy')
	// ).forEach(function(img,i){
	// 	console.log(img);
	// 	img.src = img.dataset.src;
	// 	img.removeAttribute('data-src')
	// })

	$('.lazy').Lazy();
})