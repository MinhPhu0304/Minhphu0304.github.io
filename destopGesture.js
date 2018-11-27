 const initScaleSliderValue = 5; //Used for indicating if user zoom in or zoom out 
                                  // if slider value is less then zoom out otherwise zoom in
                                  // this variable only useful if user uses desktop
const defaultScale = {x: 0.1, y: 0.1, z: 0.1};    


if( !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )) {
  let pageContent = document.getElementById('zoom-slider');

///////////////////////////////////////////////////
//    Code seperator
////////////////////////////////////////////////// 
  var slider = document.createElement("input");
  slider.type="range";
  slider.min = 1;
  slider.max = 10;
  slider.value = initScaleSliderValue;
  slider.class = "modelScale";
  slider.id  = "currentScale";
  slider.oninput = updateScale;  //callback function for the other one
  pageContent.appendChild(slider);
}

function updateScale(){
  var allMarker = document.getElementsByClassName("marker");
  
  console.log(allMarker);
  
  /////////////////////////////////////////////////////////////////////////
  // iterate through all marker to check if that marker is visible or not then 
  //                    scale for all visible marker
  //   Performance issue when the website has more than 10 marker
  //       This might be fixed by tick function of each marker
  //        By making array of visible marker. Still a performance issue if
  //             There are more than 10 markers visisble at the same time
  ////////////////////////////////////////////////////////////////////////
  for (var i = 0; i < allMarker.length; i++) {
    if(allMarker[i].object3D.visible){
      let currentModel  = allMarker[i].children[0].children[0]; //chaining method to get to the 3D object
                                                                // since I wrapped gltf tag inside entity tag
      
      let currentScale = currentModel.getAttribute('scale');
      let newScale = currentScale;
      let zoomFactor = Math.abs(slider.value - initScaleSliderValue) /50 ; // since every model has to
                                                                           //   scale down 10 to 100 times
                                                                           //    so zoomFactor has to go midway which is 50
      
      if (slider.value < initScaleSliderValue ){
          
          newScale ={ x: defaultScale.x - zoomFactor,
                      y: defaultScale.y - zoomFactor,
                      z: defaultScale.z - zoomFactor,
                    }
                     
      }
      else if (slider.value > initScaleSliderValue){
          newScale = {  x: defaultScale.x + zoomFactor,
                        y: defaultScale.y + zoomFactor,
                        z: defaultScale.z + zoomFactor          
                     }
      }
      else {
        newScale = defaultScale;
      }
      
      currentModel.setAttribute("scale",newScale);
    }
}
}