function setup() 
{
  createCanvas(3000,3000);
  noLoop();
}

function draw() 
{
  fill('black');
  chart1 ={  "Dataset" :
  [
  {
    "Month": "Apr'55",
    "Zymotic_Disease": 177.5,
    "Wounds": 17.9,
    "Other_Causes": 21.2,
    "Size_of_Army": 32252
  },
  {
    "Month": "May'55",
    "Zymotic_Disease": 171.8,
    "Wounds": 16.6,
    "Other_Causes": 12.5,
    "Size_of_Army": 35473
  },
  {
    "Month": "Jun'55",
    "Zymotic_Disease": 247.6,
    "Wounds": 64.5,
    "Other_Causes": 9.6,
    "Size_of_Army": 38863
  },
  {
    "Month": "Jul'55",
    "Zymotic_Disease": 107.5,
    "Wounds": 37.7,
    "Other_Causes": 9.3,
    "Size_of_Army": 42647
  },
  {
    "Month": "Aug'55",
    "Zymotic_Disease": 129.9,
    "Wounds": 44.1,
    "Other_Causes": 6.7,
    "Size_of_Army": 44614
  },
  {
    "Month": "Sep'55",
    "Zymotic_Disease": 47.5,
    "Wounds": 69.4,
    "Other_Causes": 5,
    "Size_of_Army": 47751
  },
  {
    "Month": "Oct'55",
    "Zymotic_Disease": 32.8,
    "Wounds": 13.6,
    "Other_Causes": 4.6,
    "Size_of_Army": 46852
  },
  {
    "Month": "No'55",
    "Zymotic_Disease": 56.4,
    "Wounds": 10.5,
    "Other_Causes": 10.1,
    "Size_of_Army": 37853
  },
  {
    "Month": "Dec'55",
    "Zymotic_Disease": 25.3,
    "Wounds": 5,
    "Other_Causes": 7.8,
    "Size_of_Army": 43217
  },
  {
    "Month": "Jan'56",
    "Zymotic_Disease": 11.4,
    "Wounds": 0.5,
    "Other_Causes": 13,
    "Size_of_Army": 44212
  },
  {
    "Month": "Feb'56",
    "Zymotic_Disease": 6.6,
    "Wounds": 0,
    "Other_Causes": 5.2,
    "Size_of_Army": 43485
  },
  {
    "Month": "Mar'56",
    "Zymotic_Disease": 3.9,
    "Wounds": 0,
    "Other_Causes": 9.1,
    "Size_of_Army": 46140
  }
]
 }
  chart ={  "Dataset" :[
    {
      "Month": "Apr'54",
      "Size_of_Army": 8571, 
      "Zymotic_Disease": 1, 
      "Wounds": 0, 
      "Other_Causes": 5 
    },
    {
      "Month": "May'54", 
      "Size_of_Army": 23333, 
      "Zymotic_Disease": 12, 
      "Wounds": 0,   
      "Other_Causes": 9 
    },
    {
      "Month": "Jun'54", 
      "Size_of_Army": 28333, 
      "Zymotic_Disease": 11, 
      "Wounds": 0, 
      "Other_Causes": 6 
    },
    {
      "Month": "Jul'54", 
      "Size_of_Army": 28722, 
      "Zymotic_Disease": 359, 
      "Wounds": 0, 
      "Other_Causes": 23 
    },
    {  
      "Month": "Aug'54", 
      "Size_of_Army": 30246, 
      "Zymotic_Disease": 828, 
      "Wounds": 1, 
      "Other_Causes": 30 
    },
    {
      "Month": "Sep'54", 
      "Size_of_Army": 30290, 
      "Zymotic_Disease": 788, 
      "Wounds": 81, 
      "Other_Causes": 70 
    },
    {
      "Month": "Oct'54", 
      "Size_of_Army": 30643, 
      "Zymotic_Disease": 503, 
      "Wounds": 132, 
      "Other_Causes": 128 
    },
    {
      "Month": "Nov'54", 
      "Size_of_Army": 29736, 
      "Zymotic_Disease": 844, 
      "Wounds": 287, 
      "Other_Causes": 106 
    },
    {
      "Month": "Dec'54", 
      "Size_of_Army": 32779, 
      "Zymotic_Disease": 1725, 
      "Wounds": 114, 
      "Other_Causes": 131 
    },
    {
      "Month": "Jan'55", 
      "Size_of_Army": 32393, 
      "Zymotic_Disease": 2761, 
      "Wounds": 83, 
      "Other_Causes": 324 
    },
    {
      "Month": "Feb'55", 
      "Size_of_Army": 30919, 
      "Zymotic_Disease": 2120, 
      "Wounds": 42, 
      "Other_Causes": 361 
    },
    {
      "Month": "Mar'55", 
      "Size_of_Army": 30107, 
      "Zymotic_Disease": 1205, 
      "Wounds": 32, 
      "Other_Causes": 172 
    }
  ]
}

var startAngle = radians(0);
var len_of_Data = 0;
len_of_Data = chart.Dataset.length;
console.log(len_of_Data);

for(i in chart.Dataset)
  {
    ////Scaling down the values to fit the chart
    var t = ((10000 / chart.Dataset[i].Size_of_Army)*12)/PI;
    var Zymotic_Disease = sqrt(chart.Dataset[i].Zymotic_Disease * t); 
    var Wounds = sqrt(chart.Dataset[i].Wounds * t); 
    var Other_Causes = sqrt(chart.Dataset[i].Other_Causes * t);

    ///////The following function is used for creation of chart
    FirstChart(Zymotic_Disease,Wounds,Other_Causes,startAngle,len_of_Data); 

    ////////The following function is used for displaying the date on the chart
    value=Highest_Value(Zymotic_Disease,Wounds,Other_Causes);
    ////////The following if loop is used to give a minimum radius values so that the text on the chart does not get crowed if the value of radiues is too small
    if (value<15)
    {
      value =14;
    } 
    x=1500+1500/5+value*10*cos(startAngle+(radians(15)));
    y=1500/2-100+value*10*sin(startAngle+(radians(15)));
    
    //Stroke Sets the color of the dot which is on each individual segment of pie chart
    //Set to Black currently
    stroke(0);
    //StrokeWeight sets the size of the dot
    //strokeWeight(5);
    
    //Sets the coordinates of the dot
    point(x,y);
    strokeWeight(0.5);
    textSize(18);
    fill(0);
    //textStyle(BOLD);
    textAlign(CENTER);
    text(chart.Dataset[i].Month,x+5,y+5);
    startAngle+=radians(360/len_of_Data);
}


var startAngle = radians(0);
var len_of_Data=0;
len_of_Data=chart1.Dataset.length;
console.log(len_of_Data);
 
for(k in chart1.Dataset)
{
  var t = ((10000 / chart1.Dataset[k].Size_of_Army)*12)/PI;
  var Zymotic_Disease = sqrt(chart1.Dataset[k].Zymotic_Disease * t); 
  var Wounds = sqrt(chart1.Dataset[k].Wounds * t); 
  var Other_Causes = sqrt(chart1.Dataset[k].Other_Causes * t);

///////The following function is used for creation of ARC
  SecondChart(Zymotic_Disease,Wounds,Other_Causes,startAngle,len_of_Data);

////////The following function is used for display the date on the chart
  value1=Highest_Value(Zymotic_Disease,Wounds,Other_Causes);
    
////////The following if loop is used to give a minimum radius values so that the text on the chart does not get crowed if the value of radiues is too small
    if (value1<8)
    {
      value1 =9;
    } 

    x=1500/2+value1*15*cos(startAngle+(radians(15)));
    y=1500/2 -100+value1*15*sin(startAngle+(radians(15)));
    //Stroke Sets the color of the dot which is on each individual segment of pie chart
    //Set to Black currently
    stroke(0);
    //Sets the coordinates of the dot
    point(x,y);
    strokeWeight(0.5);
    textSize(18);
    fill(0);
    text(chart1.Dataset[k].Month,x+5,y+5);
    startAngle+=radians(360/len_of_Data);
  }
}

function Highest_Value(Zymotic_Disease, Wounds, Other_Causes)
{
  if((Zymotic_Disease > Wounds) && (Zymotic_Disease > Other_Causes))
  {
    fill(color('#ffe100'));
    return Zymotic_Disease;
  }
  if((Wounds>Zymotic_Disease) && (Wounds>Other_Causes))
  {
    fill(color('#FF0046'));
    return Wounds;
  }
  if((Other_Causes>Zymotic_Disease) && (Wounds<Other_Causes))
  {
    fill(color('#323232'));
    return Other_Causes;
  }
}


function Middle_Value(a, b, c)
{
  if (a > b && b > c)                                                                             
  {  
    fill(color('#FF0046'));                                                                                             
    return b;                                                                                   
  }                                                                                                                                                                                  
  else if (a > c && c > b)                                                                        
  {
    fill(color('#323232'));                                                                                               
    return c;                                                                                   
  }                                                                                                                                                                    
  else                                                                                            
  {        
    fill(color('#ffe100'));                                                                                     
    return a;                                                                                  
  }        
}

function Smallest_Value (Zymotic_Disease, Wounds, Other_Causes)
{
  if((Zymotic_Disease < Wounds) && (Zymotic_Disease < Other_Causes))
  {
    fill(color('#ffe100'));
    return Zymotic_Disease;
  }
  if((Wounds < Zymotic_Disease) && (Wounds < Other_Causes))
  {
    fill(color('#FF0046'));
    return Wounds;
  }
  if((Other_Causes < Zymotic_Disease) && (Wounds > Other_Causes))
  {
    fill(color('#323232'));
    return Other_Causes;
  }
}

//For plotting the first chart
function FirstChart(Zymotic_Disease, Wounds, Other_Causes, startAngle, len_of_Data)
{
  var angle = radians(360/len_of_Data);
  arc(1500+1500/5,1500/2 -100, Highest_Value(Zymotic_Disease,Wounds,Other_Causes)*20, Highest_Value(Zymotic_Disease,Wounds,Other_Causes)*20, startAngle, startAngle+angle,PIE);
  arc(1500+1500/5,1500/2 -100, Middle_Value(Zymotic_Disease,Wounds,Other_Causes)*20, Middle_Value(Zymotic_Disease,Wounds,Other_Causes)*20, startAngle, startAngle+angle,PIE)
  arc(1500+1500/5,1500/2 -100, Smallest_Value(Zymotic_Disease,Wounds,Other_Causes)*20, Smallest_Value(Zymotic_Disease,Wounds,Other_Causes)*20, startAngle, startAngle+angle,PIE);
}

//For plotting the second chart
function SecondChart(Zymotic_Disease, Wounds, Other_Causes, startAngle, len_of_Data)
{
  var angle = radians(360/len_of_Data);    
  arc(1500/2,1500/2 -100, Highest_Value(Zymotic_Disease,Wounds,Other_Causes)*30, Highest_Value(Zymotic_Disease,Wounds,Other_Causes)*30, startAngle, startAngle+angle,PIE);
  arc(1500/2,1500/2 -100, Middle_Value(Zymotic_Disease,Wounds,Other_Causes)*30, Middle_Value(Zymotic_Disease,Wounds,Other_Causes)*30, startAngle, startAngle+angle,PIE)
  arc(1500/2,1500/2 -100, Smallest_Value(Zymotic_Disease,Wounds,Other_Causes)*30, Smallest_Value(Zymotic_Disease,Wounds,Other_Causes)*30, startAngle, startAngle+angle,PIE);
}