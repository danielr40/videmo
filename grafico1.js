export var dps = {
	neutralidade: [{}],
	alegria: [],
	tristeza: [],
	nojo: [],
	raiva: [],
	medo: [],
	surpresa: []
};

export var config = {
title :{
	text: "Predições com o tempo"
},
axisX:{
	title: "Tempo de vídeo(s)"
},
axisY: {
	title: "probabilidade"
}, 
legend:{
	fontSize: 16
},
toolTip:{
	shared: true
},     
	data: [{
		name: "neutralidade",
		type: "line",
		showInLegend: true,
		dataPoints: dps.neutralidade
	},
	{
		name: "alegria",
		type: "line",
		showInLegend: true,
		dataPoints: dps.alegria
	},
	{
		name: "tristeza",
		type: "line",
		showInLegend: true,
		dataPoints: dps.tristeza
	},
	{
		name: "raiva",
		type: "line",
		showInLegend: true,
		dataPoints: dps.raiva
	},
	{
		name: "medo",
		type: "line",
		showInLegend: true,
		dataPoints: dps.medo
	},
	{
		name: "nojo",
		type: "line",
		showInLegend: true,
		dataPoints: dps.nojo
	},
	{
		name: "surpresa",
		type: "line",
		showInLegend: true,
		dataPoints: dps.surpresa
	}],
};