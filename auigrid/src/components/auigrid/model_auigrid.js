export default {
  name: "infiot-component-auigrid",
  type: "auigrid",

  tag: {
    tagId: {control:'input', type:'text', subType:'TagModal', value:""},
    tagName: {control:'input', type:'text', value:""}
  },

  layout: {
    width: {control:'input', type:'number', value:300},
    height: {control:'input', type:'number', value:175},
    x: {control:'input', type:'number', value:0},
    y: {control:'input', type:'number', value:0},
    zIndex: {control:'input', type:'number', value:0}
  },
/*
  gridInfo: {
    headerOrder: {control:'input', type:'text', value:""}
  },
*/
  background: {
    gradient: {control:'input', type:'checkbox', value:false},
    gradientYn: {control:'input', type:'checkbox', value:true},
    color: {control:'input', type:'text', subType:'ColorModal', value:"rgba(255,255,255,1)"},
    color1: {control:'input', type:'text', subType:'ColorModal', value:""},
    color2: {control:'input', type:'text', subType:'ColorModal', value:""},
    color3: {control:'input', type:'text', subType:'ColorModal', value:""}
  },

  border: {
    borderColor: {control:'input', type:'text', subType:'ColorModal', value:"rgba(0,0,0,1)"},
    borderStyle: {control:'input', type:'text', value:"solid"},
    borderWidth: {control:'input', type:'number', value:1}
  },

  shape: {
    rotationAngle: {control:'input', type:'number', value:0}
  },

  imageSrc:require('./auigrid.png')
};