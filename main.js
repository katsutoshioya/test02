$(document).ready(function(){

  $('.Box').on('click', function(){
    //alert('押されたよ');
    //console.log('押されたよ');
  });

  $('#js').on('click', function(){
    var elem ='<a href="#">次のページ</a>';
    $('#js').html(elem);
    $('#js').text(elem);
    $('#js').css('color','red');
    $('#js').show(4000);
    //$('#js').prepend(elem);
    $('#js').append(elem);
    //$('#js').empty();
    //$('#js').remove();
  });

  var elem ='<a href="#">次のページ</a>';
  //$('#js').empty();
  //$('#js').remove();




//演習01
  $('#hide').on('click', function(){
    $('#ex').hide(2000);
  });

  var cnt = 0;
	$("#show").click(function () {
		cnt ++;
		$("#ex").html(cnt);
    $('#ex').show(2000);
    $('#ex').css('border','#ea952b '+cnt+'px solid');
	})

//演習02
  $('#ex02').fadeIn(2000);
  var elem ='<p>かきくけこ</p>';
  $('#ex02').html(elem);
  $('#ex02').css({
    'background': '#000',
    'color': '#fff'
  });
  $('#ex02').prepend('<p>あいうえお</p>');
  $('#ex02').append('<p>さしすせそ</p>');
  $('#ex02 p:nth-child(even)').css({
    'background': '#fff',
  });







});
