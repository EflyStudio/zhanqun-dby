// sdpie
$(function () {
    $('#container').highcharts({
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45,
                beta: 0
            }
        },
		title:{
			text:'',
			margin:1
			},
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 15,
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }
        },
        series: [{
            type: 'pie',
            name: '占所有网站',
            data: [
				{
					name:'未迁移',
					y: 80,
                    sliced: true,
                    selected: true
					},
                {
                    name: '已迁移',
                    y: 43,
                    sliced: true,
                    selected: true
                },
                
            ]
        }]
    });
});

// 轮播
$(function(){
    var current=0;
    var width = "226px";
    var picList=$(".pic-list");
    var len =picList.find("li").length; 
    
    $("#prev").click(function(){
        if (!picList.is(":animated")){
            if(current >=len-4){
            $(this).hide();
            current=len-4;
        }
    else {
        $("#next").show();
        current++;
        picList.stop(true).animate({left: "-=" + width},500);
        }
    }   
    });
   

    
     $("#next").hide();
    $("#next").click(function(){
        if (!picList.is(":animated")){
            if(current<=0){
            $(this).hide();
            current=0;  

        }else {
            current--;
        $("#prev").show();
        picList.stop(true).animate({left: "+=" + width},500);
        }
    }
    
    });
})
