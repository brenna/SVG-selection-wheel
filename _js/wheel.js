var draw = SVG('paper').size(460, 460);


//Colours and Measures

var arcEFill = '#71adae'; //colaborative 
var arcSFill = '#a02817'; //litigation
var arcWFill = '#79a5be'; //negotiation
var arcNFill = '#1f6e82'; //mediation

var arcMaskFill = '#b8b6a7';

var iconWidth = 151;
var buttonWidth = 50;

var scaleUp = iconWidth / buttonWidth;     
       

// Wheel Elements

//draw the four coloured segments
var arcN =draw.path('M0 190 h70 a120 120 0 0 1 120 -120 v-70 a190 190 0 0 0 -190 190').attr({fill: arcNFill}).x(0).y(0);
var arcE =draw.path('M190 0 v70 a120 120 0 0 1 120 120 h70 a190 190 0 0 0 -190 -190').attr({fill: arcEFill}).x(190).y(0);
var arcS =draw.path('M380 190 h-70 a120 120 0 0 1 -120 120 v70 a190 190 0 0 0 190 -190').attr({fill: arcSFill}).x(190).y(190);
var arcW =draw.path('M190 380 v-70 a120 120 0 0 1 -120 -120 h-70 a190 190 0 0 0 190 190').attr({fill: arcWFill}).y(190);

//draw the coloured keylines for each segment (1 dark, 1 light)
var arcNline = draw.path('M34 190 a156 156 0 0 1 156 -156').attr({stroke: '#1a5d6b', fill: 'transparent'}).x(34).y(34);
var arcEline = draw.path('M0 0 a156 156 0 0 1 156 156').attr({stroke: '#6b9a98',fill: 'transparent'}).x(190).y(34);
var arcSline = draw.path('M0 0 a156 156 0 0 1 -156 156').attr({stroke: '#96321a',fill: 'transparent'}).x(190).y(190);
var arcWline = draw.path('M190 346 a156 156 0 0 1 -156 -156').attr({stroke: '#7598a4',fill: 'transparent'}).x(34).y(190);

var arcNlineLt = draw.path('M35 190 a155 155 0 0 1 155 -155').attr({stroke: '#288ea2', fill: 'transparent'}).x(35).y(35);
var arcElineLt = draw.path('M0 0 a155 155 0 0 1 155 155').attr({stroke: '#aad0cf',fill: 'transparent'}).x(190).y(35);
var arcSlineLt = draw.path('M0 0 a155 155 0 0 1 -155 155').attr({stroke: '#d5562d',fill: 'transparent'}).x(190).y(190);
var arcWlineLt = draw.path('M190 345 a155 155 0 0 1 -155 -155').attr({stroke: '#bbd3db',fill: 'transparent'}).x(35).y(190);

// group all segments & keylines and transform to start position
var arcs = draw.group().attr({ class: 'wheel'});;
arcs.add(arcN).add(arcE).add(arcS).add(arcW).add(arcNline).add(arcNlineLt).add(arcEline).add(arcElineLt).add(arcWline).add(arcWlineLt).add(arcSline).add(arcSlineLt).rotate(45).move(40,40);

// draw the top mask for the wheel
var arcMaskBg = draw.path('M190 0 v70 a120 120 0 1 0 120 120 h 70 a190 190 0 1 1 -190 -190').attr({fill: arcMaskFill});

//add keylines to the top mask
var arcMaskLines = draw.path('M190 34 a156 156 0 1 0 156 156').attr({stroke: '#a8a699', fill: 'transparent'}).move(34, 34);
var arcMaskLinesLt = draw.path('M190 34 a155 155 0 1 0 155 155').attr({stroke: '#dbdacf', fill: 'transparent'}).move(35, 35);

//group the top mask & keylines and transform to start position
var arcMask = draw.group().attr({ class: 'wheel-mask'});
arcMask.add(arcMaskBg).add(arcMaskLines).add(arcMaskLinesLt).rotate(45).move(40,40);


//Button Elements

//setup child SVG elements for each button, so we can transofrm internal contents relative to the button
var buttonN = draw.nested().size(iconWidth, iconWidth).move(114.5, -40.5);
var buttonE = draw.nested().size(iconWidth, iconWidth).move(269.5, 114.5);
var buttonS = draw.nested().size(iconWidth, iconWidth).move(114.5,269.5);
var buttonW = draw.nested().size(iconWidth, iconWidth).move(-40.5,114.5);


//draw the white circle background at the centre of each button
var buttonNbg = buttonN.image('http://f.cl.ly/items/2t2s2L2N3O2b1T050s3b/process-icon-bg.png', 50, 50).move(50.5, 50.5);
var buttonEbg = buttonE.image('http://f.cl.ly/items/2t2s2L2N3O2b1T050s3b/process-icon-bg.png', 50, 50).scale(scaleUp);
var buttonWbg = buttonW.image('http://f.cl.ly/items/2t2s2L2N3O2b1T050s3b/process-icon-bg.png', 50, 50).move(50.5, 50.5);
var buttonSbg = buttonS.image('http://f.cl.ly/items/2t2s2L2N3O2b1T050s3b/process-icon-bg.png', 50, 50).move(50.5, 50.5);


//add the plus symbols 
var buttonNplus = buttonN.text('+').move(71, 66).attr({fill: '#47768e'});
var buttonEplus = buttonE.text('+').move(71, 66).attr({fill: '#47768e'}).opacity(0);
var buttonSplus = buttonS.text('+').move(71, 66).attr({fill: '#47768e'});
var buttonWplus = buttonW.text('+').move(71, 66).attr({fill: '#47768e'});

//add the pictograph icons
var buttonNicon = buttonN.image('http://f.cl.ly/items/3K1w2f1C1p3v1E0X1V3P/process-icon-mediation.png', 150, 150).opacity(0);
var buttonEicon = buttonE.image('http://f.cl.ly/items/410r032p0o3c0s113e2g/process-icon-collab.png', 150, 150);
var buttonSicon = buttonS.image('http://f.cl.ly/items/3S2b040G0T193W1d3G3U/process-icon-litigation.png', 150, 150).opacity(0);
var buttonWicon = buttonW.image('http://f.cl.ly/items/3l011G3n250N222a1X3y/process-icon-negotiation.png', 150, 150).opacity(0);

//group each button's contents together
var buttonNcontent = buttonN.group().add(buttonNbg).add(buttonNplus).add(buttonNicon);
var buttonEcontent = buttonE.group().add(buttonEbg).add(buttonEplus).add(buttonEicon);
var buttonScontent = buttonS.group().add(buttonSbg).add(buttonSplus).add(buttonSicon);
var buttonWcontent = buttonW.group().add(buttonWbg).add(buttonWplus).add(buttonWicon);

var buttonContents = [buttonNcontent, buttonEcontent, buttonScontent, buttonWcontent];

//group all the button SVG elements and transform to initial position
var buttons = draw.group().attr({class: 'buttons'}).style({cursor: 'pointer'});
buttons.add(buttonN).add(buttonE).add(buttonW).add(buttonS).move(40, 40);


//Animations

// starting conditions
var rotateCount = 0;
var activeBg = buttonEbg;
var activeIcon = buttonEicon;
var activePlus = buttonEplus;

function updateRotation(deg, newActiveBg, newActiveIcon, newActivePlus){

  if (rotateCount%360 == deg || deg%360 == rotateCount) {
    //don't move or scale anything, you're here already!
    return false;
  } else if (rotateCount > deg) {
    rotateCount = 360*(Math.ceil((rotateCount - deg)/360)) + deg;
  } else {
    rotateCount = deg;
  }
  
  // rotate the wheel and buttons
  arcs.animate().rotate(rotateCount + 45);
  buttons.animate().rotate(rotateCount);
  
  // counter rotate button contents
  $.each(buttonContents, function(){
    this.animate().rotate(-rotateCount);
  });
 
  
  // fade in/out plus signs and icons
  activeIcon.animate().opacity(0);
  activeIcon = newActiveIcon;
  activeIcon.animate().opacity(1);
  
  activePlus.animate().opacity(1);
  activePlus = newActivePlus;
  activePlus.animate(500).opacity(0);
  
  // scale down old active button and scale up the new one
  activeBg.animate().scale(1).move(50.5, 50.5);
  activeBg = newActiveBg;
  activeBg.animate().scale(scaleUp).move(0,0);
  
}

//Trigger approrpriate animation for each button

buttonN.click(function(){
  updateRotation(90, buttonNbg, buttonNicon, buttonNplus);  
  return false;
});

buttonE.click(function(){
  updateRotation(360, buttonEbg, buttonEicon, buttonEplus);
  return false;
});

buttonS.click(function(){
  updateRotation(270, buttonSbg, buttonSicon, buttonSplus);    
  return false;
});

buttonW.click(function(){
  updateRotation(180, buttonWbg, buttonWicon, buttonWplus);
  return false;
});