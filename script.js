
$(window).on('load',function(){
    $("#splash-logo").delay(1200).fadeOut('slow');//ロゴを1.2秒でフェードアウトする記述

    
    //=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
    $("#splash").delay(1500).fadeOut('slow',function(){//ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述
    
        $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与
  
    });
    //=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
    
   //=====ここから背景が伸びた後に動かしたいJSをまとめたい場合は
    $('.splashbg').on('animationend', function() {    
        //この中に動かしたいJSを記載


    });
    //=====ここまで背景が伸びた後に動かしたいJSをまとめる
        
});
//ヘッダー色変える
var _window = $(window),
    _header = $('header'),
    heroBottom;
 
_window.on('scroll',function(){
    heroBottom = $('.area_top_view').height();
	const active = heroBottom - 50;
    if(_window.scrollTop() > active ){
        _header.addClass('transform');   
    }
    else{
        _header.removeClass('transform');   
    }
});
 
_window.trigger('scroll');

document.addEventListener('DOMContentLoaded', function () {
	var typed = new Typed('.typed', {
	  strings: ['GYOKUSHOUKAI × Information Technology × \nDigital Transformation Club'],
	  typeSpeed: 85, //数字が小さいほど早い
	  startDelay:2000,
	});
  });

  document.addEventListener('DOMContentLoaded', function () {
	var typed = new Typed('.typed2', {
	  strings: ['GYOKUSHOUKAI × \nInformation Technology × \nDigital Transformation Club'],
	  typeSpeed: 85, //数字が小さいほど早い
	  startDelay:2000,
	});
  });
  //page link
  $('a[href*="#"]').click(function () {//全てのページ内リンクに適用させたい場合はa[href*="#"]のみでもOK
	var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
	var pos = $(elmHash).offset().top - 20;	//idの上部の距離を取得
	$('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
	return false;
});

$(function () {
	$('.burger-btn').on('click', function () {
	  $('.burger-btn').toggleClass('close');
	  $('.nav-wrapper').toggleClass('fade');
	  $('body').toggleClass('noscroll');
	});
  });
  //spナビのリンクをクリックしたら
  $('.nav-item').on('click',function() {
	$('.burger-btn').toggleClass('close');
	$('.nav-wrapper').toggleClass('fade');
	$('body').removeClass('noscroll');
  });

/*
$.scrollify({
	section : ".box",//1ページスクロールさせたいエリアクラス名
	scrollbars:"false",//スクロールバー表示・非表示設定
	interstitialSection : "#header,#footer",//ヘッダーフッターを認識し、1ページスクロールさせず表示されるように設定
	easing: "swing", // 他にもlinearやeaseOutExpoといったjQueryのeasing指定可能
	scrollSpeed: 300, // スクロール時の速度
	
	//以下、ページネーション設定
	before:function(i,panels) {
	var ref = panels[i].attr("data-section-name");
	$(".pagination .active").removeClass("active");
	$(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
	},
	afterRender:function() {
	var pagination = "<ul class=\"pagination\">";
	var activeClass = "";
	$(".box").each(function(i) {//1ページスクロールさせたいエリアクラス名を指定
	activeClass = "";
	if(i===$.scrollify.currentIndex()) {
	activeClass = "active";
	}
	pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
	});
	pagination += "</ul>";
	
	$("#box1").append(pagination);//はじめのエリアにページネーションを表示
	$(".pagination a").on("click",$.scrollify.move);
	}
	
	});
	*/
	

	//トップに戻るボタン
	  function PageTopAnime() {
		var scroll = $(window).scrollTop();
		if (scroll >= 200){//上から200pxスクロールしたら
			$('#page-top').removeClass('DownMove');//#page-topについているDownMoveというクラス名を除く
			$('#page-top').addClass('UpMove');//#page-topについているUpMoveというクラス名を付与
		}else{
			if($('#page-top').hasClass('UpMove')){//すでに#page-topにUpMoveというクラス名がついていたら
				$('#page-top').removeClass('UpMove');//UpMoveというクラス名を除き
				$('#page-top').addClass('DownMove');//DownMoveというクラス名を#page-topに付与
			}
		}
	}
	
	// 画面をスクロールをしたら動かしたい場合の記述
	$(window).scroll(function () {
		PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
	});
	
	// ページが読み込まれたらすぐに動かしたい場合の記述
	$(window).on('load', function () {
		PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
	});
	
	// #page-topをクリックした際の設定
	$('#page-top a').click(function () {
		$('body,html').animate({
			scrollTop: 0//ページトップまでスクロール
		}, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
		return false;//リンク自体の無効化
	});

	//リロードしたらトップに行く。
	$(function() {
    	$('html,body').animate({ scrollTop: 0 }, '1');
	});

//scroll_effect
$(window).scroll(function () {
	var scrollAnimationElm = document.querySelectorAll('.fade-in');
	var scrollAnimationFunc = function () {
	  for (var i = 0; i < scrollAnimationElm.length; i++) {
		var triggerMargin = 100;
		if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
		  scrollAnimationElm[i].classList.add('on');
		}
	  }
	}
	window.addEventListener('load', scrollAnimationFunc);
	window.addEventListener('scroll', scrollAnimationFunc);
  });

  		//aboutusとfeatureの高さを取得してparticles.jsのcssに代入したい。
		  $(document).ready(function areaheight() {
			const areaheight = $("#area2").outerHeight(true) + $("#area3").outerHeight(true) + $("#cardlayout-wrap").outerHeight(true);
			$(".container2").css("height", areaheight)+ 'px';
	  
			});

		//高さ取得がウィンドウサイズ変えると崩れるのでリロード
				var timer = 0;
				var currentWidth = window.innerWidth;
				$(window).resize(function(){
					if (currentWidth == window.innerWidth) {
						return;
					}
					if (timer > 0) {
						clearTimeout(timer);
					}
			 
					timer = setTimeout(function () {
						location.reload();
					}, 200);
					
				});	

		//同じ日付で2回目以降ならローディング画面非表示の設定

var splash_text = $.cookie('accessdate'); //キーが入っていれば年月日を取得
var myD = new Date();//日付データを取得
var myYear = String(myD.getFullYear());//年
var myMonth = String(myD.getMonth() + 1);//月
var myDate = String(myD.getDate());//日
    
if (splash_text != myYear + myMonth + myDate) {//cookieデータとアクセスした日付を比較↓
        $("#splash").css("display", "block");//１回目はローディングを表示
        setTimeout(function () {
            $("#splash_logo").fadeIn(1000, function () {//1000ミリ秒（1秒）かけてロゴがフェードイン
                setTimeout(function () {
            $("#splash_logo").fadeOut(1000);//1000ミリ秒（1秒）かけてロゴがフェードアウト
                }, 1000);//1000ミリ秒（1秒）後に処理を実行
        setTimeout(function () {
            $("#splash").fadeOut(1000, function () {//1000ミリ秒（1秒）かけて画面がフェードアウト
            var myD = new Date();
            var myYear = String(myD.getFullYear());
            var myMonth = String(myD.getMonth() + 1);
            var myDate = String(myD.getDate());
            $.cookie('accessdate', myYear + myMonth + myDate); //accessdateキーで年月日を記録
        });
        }, 1700);//1700ミリ秒（1.7秒）後に処理を実行
    });
}, 1000);//1000ミリ秒（1秒）後に処理を実行
}else {
    $("#splash").css("display", "none");//同日2回目のアクセスでローディング画面非表示
}  
