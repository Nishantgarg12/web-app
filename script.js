$(document).ready(function(){
	$('#us').click(function() {
		$("#selected").attr("src","us.png");
		$('#phone').attr('value','+1 ');
	});
	$('#ind').click(function() {
		$("#selected").attr("src","ind.png");
		$('#phone').attr('value','+91 ');
	});
	var i=0;
	$('#hide').click(function() {
		if(!i){
				$('#pass').prop('type','text');
				$('#change').removeClass('glyphicon-eye-close');
				$('#change').addClass('glyphicon-eye-open');
				i++;
			}
		else{
				$('#pass').prop('type','password');
				$('#change').removeClass('glyphicon-eye-open');
				$('#change').addClass('glyphicon-eye-close');
				i=0;
		}
	});
	$('#activeNotify').click(function() {
		$('#activeNotify').css('color','white');
		$('#activeNotify').css('background','rgba(243, 172, 36, 0.6)');
		$('#activeWarn').css('color','#7e7d7e');
		$('#activeWarn').css('background','white');
		$('#warn').hide();
		$('#not').show();
	});
	$('#activeWarn').click(function() {
		$('#activeWarn').css('color','white');
		$('#activeWarn').css('background','rgba(243, 172, 36, 0.6)');
		$('#activeNotify').css('color','#7e7d7e');
		$('#activeNotify').css('background','white');
		$('#not').hide();
		$('#warn').show();
	});
	$('#acceptButton').click(function() {
		$('#accept').hide();
		$('#accepted').show();
	});
	var openClose=0;
	$('#option').click(function() {
		if(!openClose){
			$('#option').text('Open');
			$('#selected').text('Close');
			$('.opend').hide();
			$('.closed').show();
			openClose=1;
		}
		else{
			$('#option').text('Close');
			$('#selected').text('Open');
			$('.closed').hide();
			$('.opend').show();
			openClose=0;
		}
	});
	$('#account-change').click(function() {
		$('#innerNav li').removeClass('active');
		$('#innerNav li a').removeClass('innerActive');
		$('#innerNav li a').addClass('unactive');
		$('#account-change').addClass('innerActive');
		$('.tabs').hide();
		$('#change-pass').show();
	});
	$('#account-add').click(function() {
		$('#innerNav li').removeClass('active');
		$('#innerNav li a').removeClass('innerActive');
		$('#innerNav li a').addClass('unactive');
		$('#account-add').addClass('innerActive');
		$('.tabs').hide();
		$('#address').show();
	});
	$('#account-more').click(function() {
		$('#innerNav li').removeClass('active');
		$('#innerNav li a').removeClass('innerActive');
		$('#innerNav li a').addClass('unactive');
		$('#account-more').addClass('innerActive');
		$('.tabs').hide();
		$('#more').show();
	});
	$('#account-role').click(function() {
		$('#innerNav li').removeClass('active');
		$('#innerNav li a').removeClass('innerActive');
		$('#innerNav li a').addClass('unactive');
		$('#account-role').addClass('innerActive');
		$('.tabs').hide();
		$('#role').show();
	});
	var str1='<div class="rectangle" tabindex="0"><h5><span class="role-tit">', str2='</span><br><span class="down">&#709;</span></h5><span class="expand-role"><h5><span class="role-tit">', str3='</span><input type="text" class="form-control title-edit" value="', str4='" style="display: none;"> <button type="button" class="btn btn-default edit activate-input"><span class="glyphicon glyphicon-pencil"></span></button><br></h5><h6>Auto approval<input type="checkbox" value="" class="auto-check"></h6><button type="button" class="btn btn-default trash" data-toggle="modal" data-target="#deleteRole"><span class="glyphicon glyphicon-trash"></span></button></span></div>';
	$('#role-add').click(function() {
		if($('#role-text').val())
			$('#add-role').append(str1+$('#role-text').val()+str2+$('#role-text').val()+str3+$('#role-text').val()+str4);
	});
	$('#role-text').keypress(function (e) {
	 if(e.which == 13)
	 	$('#role-add').click();
	});
	$('#activity-add').click(function() {
		if($('#activity-text').val())
		$('#add-activity').append(str1+$('#activity-text').val()+str2+$('#activity-text').val()+str3+$('#activity-text').val()+str4);
	});
	$('#activity-text').keypress(function (e) {
	 if(e.which == 13)
	 	$('#activity-add').click();
	});
	$(document).delegate('.rectangle', 'click', function(){
		$('.expand-role').hide();
		$('h5:first','.rectangle').show();
		$('h5:first',this).hide();
		$('.expand-role',this).show();
		
	});
	$(document).mouseup(function(e) {
	    var container = $(".rectangle");
		    if (!container.is(e.target) && container.has(e.target).length === 0) {
		        $('.expand-role').hide();
				$('h5:first','.rectangle').show();
				$('.role-tit').show();
				$('.title-edit').hide();
		    }
	});
	$(document).delegate('.activate-input', 'click', function(){
		$(this).parent().children('.role-tit').hide();
		$(this).parent().children('.title-edit').show();
	});
	var store;
	$(document).delegate('.trash', 'click', function(){
		store=this;
	});
	$('.confirm-delete').click(function() {
		$(store).parents('.rectangle').hide();
	});
	$(document).delegate('.title-edit', 'input', function(){
		$(this).parents('.rectangle').find('.role-tit').text($(this).val());
	});
	$('#sort-by-name').click(function() {
		$('#sort-by').text('Name');
		sort('name');
	});
	$('#sort-by-rat').click(function() {
		$('#sort-by').text('Rating');
		sort('rat');
	});
	$('#sort-by-del').click(function() {
		$('#sort-by').text('Delivery per day');
		sort('del');
	});
	$('#sort-by-status').click(function() {
		$('#sort-by').text('Status');
		sort('name');
	});
	$('#sort-by-order').click(function() {
		$('#sort-by').text('Order #');
		sort('del');
	});
	var detailShow=0;
	$('.list-group-item.view').click(function() {
		$('#edit-close').click();
		if(n)
			notification();
		if(!detailShow){
			var wid=$('#main-crew').width()-550;
			$('#main-crew').css('float','left');
			$('#main-crew').css('marginRight','0');
			$('.crew-exp').hide();
			$('#main-crew').css('width','550px');
			$('#crew-det').height($('#main-crew').height());
			$('#crew-det').width(wid+'px');
			$('#crew-det').css('display','inline');
			$('#main-crew').css('overflowY','hidden');
			detailShow=1;
		}
		$('.list-group-item').removeClass('active');
		$(this).addClass('active');
		$('#member-name').text($(this).attr('name'));
	});
	$('#det-close').click(function() {
		$('#main-crew').css('overflowY','scroll');
		$('#crew-det').hide();
		$('#crew-list').css('float','initial');
		$('#main-crew').css('marginRight','35px');
		$('.crew-exp').show();
		$('#main-crew').css('width','inherit');
		$('.list-group-item').removeClass('active');
		detailShow=0;
	});
	$('#open-edit').click(function() {
		$('.detail-view').hide();
		$('.edit-details').show();
	});
	$('#edit-close').click(function() {
		$('.edit-details').hide();
		$('.detail-view').show();
	});
	$(document).delegate('.add-cost', 'click', function(){
		var add=[];
		add=$(this).parent().find('.cost');
		$(add[0]).clone().appendTo($(this).parent().children('form'));
	});
	$('#add-more').click(function() {
		$('#add-this-one').clone().appendTo('#add-here');
	});
	$(document).delegate('.remove-extra', 'click', function(){
		$(this).parent().hide();
	});
	$(document).delegate('.float-start', 'input', function(){
		if($(this).val())
			$(this).parent().find('.floating-label').animate({opacity:'1', paddingTop:'0px', paddingBottom:'10px'},100);
		else
			$(this).parent().find('.floating-label').animate({opacity:'0', paddingTop:'10px', paddingBottom:'0px'},100);
	});
	$(document).delegate('.float-select', 'change', function(){
		$(this).parent().find('.floating-label').animate({opacity:'1', paddingTop:'0px', paddingBottom:'10px'},100);
	});
	$('#add').click(function() {
		if(n)
			notification();
		$('#det-close').click();
		$('#main-crew').css('marginTop','15px');
		$('#main-crew').css('overflowY','visible');
		$('#crew-list').hide();
		$('#add-crew').show();
	})
	$('.close-add').click(function() {
		$('#main-crew').css('marginTop','35px');
		$('#main-crew').css('overflowY','auto');
		$('#add-crew').hide();
		$('#crew-list').show();
		$('#det-close').click();
	});
	$('#confirm-delete-member').click(function() {
		$('.list-group-item.active').hide();
		$('#det-close').click();
	});
	$('.list-map').click(function() {
		$('.list-map').removeClass('selected');
		$(this).addClass('selected');
	});
	$('.order-type').click(function() {
		$('.order-type').removeClass('selected');
		$(this).addClass('selected');
		$('#det-close').click();
		if(n)
			notification();
	});
	$('#all-orders').click(function() {
		$('#order-list').hide();
		$('#no-order').hide();
		$('#crew-list').show();
		$('.view').show();
	});
	$('#assigned-orders').click(function() {
		$('#order-list').hide();
		$('#no-order').hide();
		$('#crew-list').show();
		$('.view').hide();
		$('.no-order').css('visibility','visible');
		var ord=$('.view');
		var coun=0;
		for (var i = 0; i < ord.length; i++) {
			if($(ord[i]).attr('name')=='Assigned'){
				$(ord[i]).show();
				coun=1;
			}
		}
		if(!coun){
			$('#no-order').show();
			$('.no-order').css('visibility','hidden');
			$('.list-group').hide();
		}
	});
	$('#unassigned-orders').click(function() {
		$('#crew-list').hide();
		$('#no-order').hide();
		$('#order-list').show();
		$('.no-order').css('visibility','visible');
	});
	$('#transit-orders').click(function() {
		$('#order-list').hide();
		$('#no-order').hide();
		$('.no-order').css('visibility','visible');
		$('#crew-list').show();
		$('.view').hide();
		var ord=$('.view');
		var coun=0;
		for (var i = 0; i < ord.length; i++) {
			if($(ord[i]).attr('name')=='In Transit'){
				coun=1;
				$(ord[i]).show();
			}
		}
		if(!coun){
			$('#no-order').show();
			$('.list-group').hide();
			$('.no-order').css('visibility','hidden');
		}
	});
	$('#delivered-orders').click(function() {
		$('#order-list').hide();
		$('#no-order').hide();
		$('.no-order').css('visibility','visible');
		$('#crew-list').show();
		$('.view').hide();
		var ord=$('.view');
		var coun=0;
		for (var i = 0; i < ord.length; i++) {
			if($(ord[i]).attr('name')=='Delivered'){
				coun=1;
				$(ord[i]).show();
			}
		}
		if(!coun){
			$('#no-order').show();
			$('.list-group').hide();
			$('.no-order').css('visibility','hidden');
		}
	});
	$('.unacknowledged').hover(
		function() {
			$(this).children('.unassign').css('visibility','visible');
		},
		function() {
			$(this).children('.unassign').css('visibility','hidden');
	});
	$('.unassign').click(function() {
		$(this).parent().parent().children('div').toggle();
		$(this).parent().parent().parent().find('.reminder').hide();
		$(this).parent().parent().parent().find('.drag').show();
	});
	var $contextMenu = $("#contextMenu");
  	$(".context").contextmenu( function(e) {
	    $(contextMenu).css({
	      display: "block",
	      left: e.pageX,
	      top: e.pageY
	    });
	    return false;
	  });
	  $("body").click( function() {
	     $contextMenu.hide();
	  });
	  $('#open-context').click(function(e) {
	  	 $(contextMenu).css({
	      display: "block",
	      left: e.pageX-100,
	      top: e.pageY-100
	    });
	  	 return false;
	  });
	 columnChart();
	$('[data-toggle="tooltip"]').tooltip();
	var y2k;
	$('#date-pick').multiDatesPicker({
		maxPicks:2,
		numberOfMonths: 2,
		onSelect:function() {
			y2k=$("#date-pick").multiDatesPicker('getDates');
		}
	});
	$('#date-selected').click(function() {
		var dat1=y2k[0].split('/');
		var dat2=y2k[1].split('/');
		var mon=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
		dat1[0]=mon[dat1[0]-1];
		dat2[0]=mon[dat2[0]-1];
		var dis=dat1[1]+' '+dat1[0]+' ';
		if(dat1[2]!=dat2[2])
			dis+=dat1[2];
		dis+=' - '+dat2[1]+' '+dat2[0]+' '+dat2[2];
		$('#display-dates').text(dis);
	});
	var circles=$('circle');
	for (var i = 0; i < circles.length; i++) {
		if($(circles[i]).attr('cx')==150)
			$(circles[i]).attr('fill','white');
	}
	$('.show-graph').click(function() {
		$(this).parent().children('.graph').show();
		$(this).parent().children('.tab').hide();
	});
	$('.show-tab').click(function() {
		$(this).parent().children('.graph').hide();
		$(this).parent().children('.tab').show();
	});
});
	var programmingSkills = [
    {
      value: 40,
      label: 'Delivered 40%',
      color: '#4dcc95'
    },
    {
      value: 10,
      label: 'Unassigned 10%',
      color: '#ffd073'
    },
    {
      value: 20,
      label: 'Returned 20%',
      color: '#48a0dc'
    },
    {
      value: 30,
      label: 'Cancelled 30%',
      color: '#ed7261'
    }
];
function columnChart(){
    var item = $('.chart', '.column-chart').find('.item'),
    itemWidth = 100 / item.length;
    item.css('width', itemWidth + '%');
    item.css('width', '-=10%');
    itemWidth/=2;
    item.css('marginRight', itemWidth + '%');
    item.css('content','10')
    $('.column-chart').find('.item-progress').each(function(){
        var itemProgress = $(this),
        itemProgressHeight = $(this).parent().height() * ($(this).data('percent') / 100);
        itemProgress.css('height', itemProgressHeight);
    });
    var listItem=$('.list-group-item');
    for (var i = 0; i < listItem.length; i++) {
    	var items=$(listItem[i]).find('.drag');
    	if(items.length>1)
    		$(items[1]).css('background','rgba(244, 72, 93, 0.4)');
    	if(items.length>2)
    		$(items[2]).css('background','rgba(32, 191, 122, 0.4)');
    }
}
var boy, par;
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text/html", ev.target.id);
    boy=$(ev.target).attr('name');
    par=$(ev.target).parent().parent().html();
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text/html");
    if(par==$(ev.target).parent().parent().html()){
	    $(ev.target).parent().children('div').toggle();
	    $(ev.target).parent().find('.delivery-boy').text(boy);
	    $(ev.target).parent().parent().find('.drag').hide();
	     $(ev.target).parent().parent().find('button').show();
	}
}
var c1=0, c2=0, c3=0, c4=0;
function check(){
	var p=$('#newpass').val();
	if(p.length>7){
		c1=1;
		$('#atleast').css('color','teal');
		$('#tick1').addClass('glyphicon-ok-circle');
	}
	else{
		c1=0;
		$('#atleast').css('color','#4a4a4a');
		$('#tick1').removeClass('glyphicon-ok-circle');

	}
	if(p.match(/\d/)){
		c2=1;
		$('#number').css('color','teal');
		$('#tick4').addClass('glyphicon-ok-circle');
	}
	else{
		c2=0;
		$('#number').css('color','#4a4a4a');
		$('#tick4').removeClass('glyphicon-ok-circle');
	}
	if(p.match(/[A-Z]/)){
		c3=1;
		$('#capital').css('color','teal');
		$('#tick3').addClass('glyphicon-ok-circle');
	}
	else{
		c3=0;
		$('#capital').css('color','#4a4a4a');
		$('#tick3').removeClass('glyphicon-ok-circle');
	}
	if(p.match(/[!@#\$%\^&\*\(\)_\-\+=\{\}\[\]:;"'<,>\.\?\/`~\\|]/)){
		c4=1;
		$('#special').css('color','teal');
		$('#tick2').addClass('glyphicon-ok-circle');
	}
	else{
		c4=0;
		$('#special').css('color','#4a4a4a');
		$('#tick2').removeClass('glyphicon-ok-circle');
	}
	if(c1 && c2 && c3 && c4){
		$('#change2').removeClass('glyphicon-remove-circle');
		$('#change2').addClass('glyphicon-ok-circle');
		$('.tooltiptext').css('color','teal');
	}
	else{
		$('#change2').addClass('glyphicon-remove-circle');
		$('#change2').removeClass('glyphicon-ok-circle');
		$('.tooltiptext').css('color','#4a4a4a');
	}
}
function check2() {
	if($('#newpass').val()==$('#conpass').val() && c1 && c2 && c3 && c4){
		$('#change3').removeClass('glyphicon-remove-circle');
		$('#change3').addClass('glyphicon-ok-circle');
	}
	else{
		$('#change3').addClass('glyphicon-remove-circle');
		$('#change3').removeClass('glyphicon-ok-circle');
	}
}
function check3() {
	if($('#ans1').val().trim()!=""){
		$('#ans1').css('border-color','#979797');
		$('#enter1').css('visibility','hidden');
	}
	else{
		$('#enter1').css('visibility','visible');
		$('#ans1').css('border-color','red');
	}
	if($('#ans2').val().trim()!=""){
		$('#ans2').css('border-color','#979797');
		$('#enter2').css('visibility','hidden');
	}
	else{
		$('#enter2').css('visibility','visible');
		$('#ans2').css('border-color','red');
	}
}
function clicked() {
	if($('#termsCheckbox').is(':checked'))
		$('#acceptedButton').css('opacity',1);
	else
		$('#acceptedButton').css('opacity',0.5);
}
function termsAccepted() {
	if($('#termsCheckbox').is(':checked')){
		$('#accept').hide();
		$('#accepted').show();
	}
}
var t=0;
function expand() {
	if(!t){
		$('.expand-hide').hide();
		$('.glyphicon-time').css('marginLeft','0');
		$('h3').css('textAlign','center');
		$('#notifications').animate({width:'1150px'});
		$('.firstHalf').animate({width:'500px'});
		$('.secondHalf').show();
		$('#expandButton').text('>>');
		t=1;
	}
	else{
		$('.expand-hide').show();
		$('.glyphicon-time').css('marginLeft','200px');
		$('h3').css('textAlign','left');
		$('#notifications').animate({width:'360px'});
		$('.firstHalf').css('width','initial');
		$('.secondHalf').hide();
		$('#expandButton').text('<<');
		t=0;
	}
}
var n=0;
function notification() {
	if(!n){
		$('#det-close').click();
		$('.main-reports').animate({width:'75%'});
		$('#main').css('float','left');
		$('#in1').css('marginLeft','0');
		$('#main').animate({width : '900px'});
		$('#sorting').animate({marginLeft : '30%'});
		$('#main-crew').animate({width : '700px'});
		$('#notifications').show('medium');
		$($('.list-map')[0]).animate({marginLeft:'0'});
		$('.assign').animate({marginLeft:'30px'});
		if($('#order-list').css('display')!='none'){
			$('#main-crew').css('marginLeft','10px');
			$('#main-crew').animate({width : '850px'});
		}
		n=1;
	}
	else{
		if(t)
		expand();
		$('#notifications').hide('fast');
		$('#det-close').click();
		$('.main-reports').animate({width:'100%'});
		$('#main').animate({width : 'initial'});
		$('#sorting').css('margin-left','60%');
		$('#in1').animate({marginLeft:'50px'});
		n=0;
		$('#main').css('float','initial');
		$($('.list-map')[0]).animate({marginLeft:'100px'});
		$('.assign').animate({marginLeft:'100px'});
		$('#main-crew').css('marginLeft','100px');
		if($('#add-crew').css('display')!='none')
			$('#main-crew').css('overflowY','visible');
	}
}
var time = 30;
var initialOffset = '75.36';
var i = 1

/* Need initial run as interval hasn't yet occured... */
$('.circle_animation').css('stroke-dashoffset', initialOffset-(1*(initialOffset/time)));

var interval = setInterval(function() {
		$('#count').text(30-i);
		if (i == time) {  	
			$('#resend').css('cursor','pointer');
			$('#resend').css('color','blue');
      clearInterval(interval);
			return;
    }
    $('.circle_animation').css('stroke-dashoffset', initialOffset-((i+1)*(initialOffset/time)));
    i++;  
}, 1000);
function sort(str,){
	var list, i, switching, b, shouldSwitch;
  list = document.getElementById('crew-list');
  order= document.getElementById('order-list');
  switching = true;
    if(str=='name')
  while (switching) {
    switching = false;
    b = list.getElementsByTagName("a");
    for (i = 0; i < (b.length - 1); i++) {
      shouldSwitch = false;
      if ($(b[i]).prop('name') > $(b[i + 1]).prop('name')) {
        shouldSwitch= true;
        break;
      }
    }
    if (shouldSwitch) {
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
  else
while (switching) {
    switching = false;
    b = list.getElementsByTagName("a");
    for (i = 0; i < (b.length - 1); i++) {
      shouldSwitch = false;
      if (parseFloat($(b[i]).attr(str)) > parseFloat($(b[i + 1]).attr(str))) {
        shouldSwitch= true;
        break;
      }
    }
    if (shouldSwitch) {
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
  list= document.getElementById('order-list');
  switching = true;
    if(str=='name')
  while (switching) {
    switching = false;
    b = list.getElementsByTagName("a");
    for (i = 0; i < (b.length - 1); i++) {
      shouldSwitch = false;
      if ($(b[i]).prop('name') > $(b[i + 1]).prop('name')) {
        shouldSwitch= true;
        break;
      }
    }
    if (shouldSwitch) {
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
  else
while (switching) {
    switching = false;
    b = list.getElementsByTagName("a");
    for (i = 0; i < (b.length - 1); i++) {
      shouldSwitch = false;
      if (parseFloat($(b[i]).attr(str)) > parseFloat($(b[i + 1]).attr(str))) {
        shouldSwitch= true;
        break;
      }
    }
    if (shouldSwitch) {
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
}