function prog1()
{
	var car={
		Honda:{color:"white",doors:"4"},
		BMW:{color:"red",doors:"2"},
		Hundai:{color:"black",doors:"4"}
	};
	alert(car.Honda.color);
	alert(car.Hundai.doors);
}

function prog2()
{
	var cars={
		Honda:{color:"white",doors:"4"},
		BMW:{color:"red",doors:"2"},
		Hundai:{color:"black",doors:"4"},
		addcar: function(name,color,doors)
				{
					this[name]={color:color,doors:doors}
				}
	};
	cars.addcar("Audi","Black",2);
	console.log(cars);
}

function prog3()
{
	var vehicles={
		car:{color:"Red",size:"compact"},
		bike:{name:"Honda", color:"blue"},
		addcar: function(name,color,size)
				{
					this[name]={color:color,size:size}
				},
		addbike: function(mile,name,color)
				{
					this[mile]={name:name,color:color}
				}
	};
	vehicles.addcar("Audi","blue","compact");
	vehicles.addbike("51km","passion","black");
	console.log(vehicles);
}