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
			text:'进度示意图',
			margin:1,
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
                    selected: true,
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
