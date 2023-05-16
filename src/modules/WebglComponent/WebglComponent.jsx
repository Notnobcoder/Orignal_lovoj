import React, { useState } from 'react'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import BGSrc from '../../assests/images/BGSrc.jpeg';
import $ from 'jquery';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import TWEEN from '@tweenjs/tween.js';

// const CheckBoxCard = ({ value, handler, checked, checkClick }) => {
//   const [_checked, setCheck] = useState(false);
  
//   return (
//     <Wrapper isDesktop = { window.innerWidth > 900 ? true : false } onClick={() => {setCheck(!_checked); checkClick(value)}}>
//       <RadioInput checked={_checked || false} type='radio' value={value} />
//       <RadioMark isActive={_checked} />
//       <RadioLabel>{value}</RadioLabel>
//     </Wrapper>
//   )
// }

class WebGlContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      mobile: false,
      isKurti: false
    }

    this.data = null;
    this.fabrics = null;
    this.scene = null;
    this.model = new THREE.Group();
    this.camera = null;
    this.light5 = null;
    this.light4 = null;
    this.cloud = null;
    this.models = [];
    this.mapOutside = [];
    this.visibility = {};
    this.renderer = null;
    this.mtlLoader = null;
    this.objLoader = null;
    this.onProgress = null;
    this.onError = null;
    this.container = null;
    this.stats = null;
    this.bar = 0;
    this.TileX = 30;
    this.TileY = 30;
    this.fabricId = 7;
    this.tileNo = 30;
    this.barwidth = 250;
    this.backTimer = 0;
    this.currentSelection = null;
    this.order = null;
    this.parent = null;
    this.mobile = false;
    this.animate = this.animate.bind(this);
    this.onWindowResize = this.onWindowResize.bind(this);
    this.menu = this.menu.bind(this);
    this.buildObject = this.buildObject.bind(this);
    this.checkMobile = this.checkMobile.bind(this);
    this.getColor = this.getColor.bind(this);
    this.rgbToHsl = this.rgbToHsl.bind(this);
    this.getJson = this.getJson.bind(this);
    this.createMesh = this.createMesh.bind(this);
    this.updateVisibility = this.updateVisibility.bind(this);
    this.updateKurtiVisibility = this.updateKurtiVisibility.bind(this);
    this.turnOffSelection = this.turnOffSelection.bind(this);
    this.hideShirt = this.hideShirt.bind(this);
    this.showShirt = this.showShirt.bind(this);
    this.HeaderClick = this.HeaderClick.bind(this);
    this.additionalMenuCheck = this.additionalMenuCheck.bind(this);
    this.changeView = this.changeView.bind(this);
    this.mount = null;
    this.LeftMenuClick = this.LeftMenuClick.bind(this);
    this.FabricChange = this.FabricChange.bind(this);
    this.checkCardClick = this.checkCardClick.bind(this);
    this.TileChange = this.TileChange.bind(this);
  }

  TileChange(values, Axis){
    if (Axis === 'X'){
        this.TileX = values;
        this.mapOutside[this.fabnumber].wrapS = THREE.RepeatWrapping;
        this.mapOutside[this.fabnumber].wrapT = THREE.RepeatWrapping;
        this.mapOutside[this.fabnumber].repeat.set( this.TileX, this.TileY );    
    }else if (Axis === 'Y'){
        this.TileY = values;
        this.mapOutside[this.fabnumber].wrapS = THREE.RepeatWrapping;
        this.mapOutside[this.fabnumber].wrapT = THREE.RepeatWrapping;
        this.mapOutside[this.fabnumber].repeat.set( this.TileX, this.TileY );
    }
}

  checkMobile(){
    if ( window.innerWidth < 640 ) {
        this.setState({
            mobile: true
        })
        $('.mini-container').css('width','20%');
        $('.mini-container').css('height','55px');
        $('.controls').css('width','100%');
    } else {
        this.setState({
            mobile: false
        })
        $('.mini-container').css('height','55px');
        $('.mini-container').css('width','100%');
        $('.controls').css('width','560px');
    }
}

menu() {   
    $('#cssmenu li.active').addClass('open').children('ul').show();	
    $('#cssmenu li.has-sub>a').on('click', function(){
            $(this).removeAttr('href');
            var element = $(this).parent('li');
            if (element.hasClass('open')) {
                element.removeClass('open');
                element.find('li').removeClass('open');
                element.find('ul').slideUp();
            }
            else {
                element.addClass('open');
                element.children('ul').slideDown();
                element.siblings('li').children('ul').slideUp();
                element.siblings('li').removeClass('open');
                element.siblings('li').find('li').removeClass('open');
                element.siblings('li').find('ul').slideUp();
            }
        });
    
    $('#cssmenu>ul>li.has-sub>a').append('<span class="holder"></span>');
    this.getColor();
}


getColor(){
    var r, g, b;
    var textColor = $('#cssmenu').css('color');
    textColor = textColor.slice(4);
    r = textColor.slice(0, textColor.indexOf(','));
    textColor = textColor.slice(textColor.indexOf(' ') + 1);
    g = textColor.slice(0, textColor.indexOf(','));
    textColor = textColor.slice(textColor.indexOf(' ') + 1);
    b = textColor.slice(0, textColor.indexOf(')'));
    var l = this.rgbToHsl(r, g, b);
    if (l > 0.7) {
        $('#cssmenu>ul>li>a').css('text-shadow', '0 1px 1px rgba(0, 0, 0, .35)');
        $('#cssmenu>ul>li>a>span').css('border-color', 'rgba(0, 0, 0, .35)');
    }
    else
    {
        $('#cssmenu>ul>li>a').css('text-shadow', '0 1px 0 rgba(255, 255, 255, .35)');
        $('#cssmenu>ul>li>a>span').css('border-color', 'rgba(255, 255, 255, .35)');
    }

} 

rgbToHsl(r,g,b){
    r = r / 255;
    g = g / 255;
    b = b / 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max === min){
        h = s = 0;
    }
    else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max){
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return l;
}

async getJson(){
    let _this = this;
    await fetch('/final_old.json', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    .then(function(response){
        //console.log(response);
        return response.json();
    })
    .then(function(myJson){
        console.log(myJson)
        _this.data = myJson;
    })

    await fetch('/fabric_detail.json', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    .then(function(response){
        //console.log(response);
        return response.json();
    })
    .then(function(myJson){
        _this.fabrics = myJson;
    })

    // $.getJSON('fabric_detail.json', async function(info){
    //     this.fabrics = await info;
    
    //     //console.log(this.fabrics);
    
    // });
}

BuffertoImage = (arr) => {
    if (arr){
      return arr.reduce((data, byte) => data + String.fromCharCode(byte), '')
      
    }else{
        return '';
    }
  }

componentDidMount(){
    this.getJson();
    this.checkMobile();
    // this.container = document.createElement('div');
    // document.body.appendChild(this.container);
    this.scene = new THREE.Scene();
    var cloudTexture = new THREE.TextureLoader().load(BGSrc);
    var cloudMaterial = new THREE.MeshPhongMaterial({
        color: 0x999999,
        map: cloudTexture,
        shininess: 40,
        transparent: true,
        side: THREE.DoubleSide
    });

    // var canvasName = document.getElementById('modelname')

    var cloudGeometry = new THREE.SphereBufferGeometry( 200, 32, 32 );
    this.cloud = new THREE.Mesh( cloudGeometry, cloudMaterial );
    this.cloud.rotation.y = Math.PI;

    this.model.add( this.cloud );

    this.camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );
    this.camera.position.set(0,10,55);
    this.camera.position.z = 100;
    this.scene.add(this.camera);

    this.light4 = new THREE.AmbientLight( 0xffffff, 0.5 ); // soft white light

    this.scene.add( this.light4 );


    this.light5 = new THREE.DirectionalLight( 0xE3E0FE, 0.7 );

    this.light5.position.set( 0, 30, 30 );

    this.light5.castShadow = true;

    this.light5.shadow.mapSize.width = 1024;

    this.light5.shadow.mapSize.height = 1024;

    this.light5.shadow.camera.far = 20;



    this.light5.shadow.camera.left = -20;

    this.light5.shadow.camera.right = 20;

    this.light5.shadow.camera.top = 20;

    this.light5.shadow.camera.bottom = -10;
    this.scene.add(this.light5);

    this.mtlLoader = new MTLLoader();
    this.objLoader = new OBJLoader();
    let _this = this;

    THREE.DefaultLoadingManager.onProgress = function ( item, loaded, total ) {
        _this.bar = Math.floor( this.barwidth * loaded / total );
        var percent = (100 * loaded / total).toFixed(2);
        $("#bar").css("width", ""+_this.bar+"px");
        $("#percent").html(percent+" %");
        if (loaded/total === 1) {
            $('#progressbar').fadeOut('300');
            $( "#progress" ).fadeOut('300');
            $(".loader2").fadeOut("slow");
            _this.animate();
            //_this.menu();
        }
    };

    this.onProgress = function ( xhr ) {
        if ( xhr.lengthComputable ) {
            //var percentComplete = xhr.loaded / xhr.total * 100;
            ////console.log( Math.round(percentComplete, 2) + '% downloaded' );
        }
    };
    this.onError = function ( xhr ) { };

    var mapsArray = [
        "tex/173-texture1.jpg",
        "tex/173-texture2.jpg",
        "tex/173-texture3.jpg",
        "tex/173-texture4.jpg",
        "tex/173-texture5.jpg",
        "tex/173-texture6.jpg",
        "tex/173-texture7.jpg"
    ];

    // var mapsArray = [
    //     "tex/173-texture1.jpg",
    //     "tex/173-texture2.jpg",
    //     "tex/173-texture3.jpg",
    //     "tex/173-texture4.jpg",
    //     "tex/173-texture5.jpg",
    //     "tex/173-texture6.jpg",
    //     "tex/173-texture7.jpg",
    //     "tex/173-texture8.jpg",
    //     "tex/173-texture9.jpg",
    //     "tex/173-texture10.jpg",
    //     "tex/173-texture11.png",
    //     "tex/173-texture12.png",
    //     "tex/173-texture13.png",
    //     "tex/173-texture14.png",
    //     "tex/173-texture15.png"
    // ];

    //console.log("this.props.allFabs",this.props.allFabs[0].fabimage.data);
    for (var i = 0; i<mapsArray.length; i++) {
        this.mapOutside[i] = new THREE.TextureLoader().load( mapsArray[i] );
        this.mapOutside[i].wrapS = THREE.RepeatWrapping;
        this.mapOutside[i].wrapT = THREE.RepeatWrapping;
        this.mapOutside[i].repeat.set( 30, 30 );
        this.mapOutside[i].name = 'map'+i;

        $( "#colors-panel" ).append(
            '<div class="color" id="'+i+'"><img class="color-image" src="'+mapsArray[i]+'"></div>'
        ); 
    } 

    setTimeout(() => {
        this.buildObject();        
    }, 2000);
    
    this.renderer = new THREE.WebGLRenderer({canvas:this.mount, antialias: true});
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(300, 600);
    this.renderer.setClearColor(0xffffff);
    //this.container.appendChild(this.renderer.domElement);

    

    var controls  = new OrbitControls(this.camera, this.renderer.domElement);
    controls.enableRotate = false;
    controls.minDistance = 20;
    controls.maxDistance = 180;

    var isDragging = false;
    var previousMousePosition = {
        x: 0,
        y: 0
    };

    

    $(this.renderer.domElement).bind('touchstart', function(e){
        isDragging = true;

        previousMousePosition = {
            x: e.originalEvent.touches[0].pageX,
            y: e.originalEvent.touches[0].pageY
        };

        return false
    }).on('touchmove', function(e){
        var deltaMove = {

            x: e.originalEvent.touches[0].pageX-previousMousePosition.x,

            y: e.originalEvent.touches[0].pageY-previousMousePosition.y

        };

        if(isDragging) {
            var deltaRotationQuaternion = new THREE.Quaternion()
                    .setFromEuler(new THREE.Euler(0,deltaMove.x * Math.PI/180,0,'XYZ'));
            _this.model.quaternion.multiplyQuaternions(deltaRotationQuaternion, _this.model.quaternion);
            if (_this.model.position.y > -25 && _this.model.position.y < 75) {
                _this.model.position.y -=deltaMove.y/15;
            }
            if (_this.model.position.y < -25) {_this.model.position.y = -24.999}
            if (_this.model.position.y > 75) {_this.model.position.y = 74.999}
        }

        previousMousePosition = {

            x: e.originalEvent.touches[0].pageX,

            y: e.originalEvent.touches[0].pageY

        };
    });

    $(document).on('touchend', function(e){
        isDragging = false;
        //console.log('Stopped Dragging');
    });

    $(this.renderer.domElement).on('mousedown', function(e) {

        isDragging = true;
    })

    .on('mousemove', function(e) {

        //console.log(e);

        var deltaMove = {

            x: e.offsetX-previousMousePosition.x,

            y: e.offsetY-previousMousePosition.y

        };
        if(isDragging) {
            var deltaRotationQuaternion = new THREE.Quaternion()
                .setFromEuler(new THREE.Euler(0,deltaMove.x * Math.PI/180/5,0,'XYZ'));
            // //console.log(model.rotation.y);
            _this.model.quaternion.multiplyQuaternions(deltaRotationQuaternion, _this.model.quaternion);

            _this.model.quaternion.multiplyQuaternions(deltaRotationQuaternion, _this.model.quaternion);
            if (_this.model.position.y > -25 && _this.model.position.y < 75) {
                _this.model.position.y -=deltaMove.y/15;
            }
            if (_this.model.position.y < -25) {_this.model.position.y = -24.999}
            if (_this.model.position.y > 75) {_this.model.position.y = 74.999}
        }

        previousMousePosition = {
            x: e.offsetX,
            y: e.offsetY
        };

    });

    $(document).on('mouseup', function(e) {
        isDragging = false;
    });

    window.addEventListener( 'resize', _this.onWindowResize, false );

    $('body').on('click', '.ctrlm', function() {

        var nameClicked = $(this).data('name');
        _this.HeaderClick(nameClicked);
    });

    $('body').on('click', '.ctrl', function(event) {

        $('#colors-panel').addClass('on');
    
        event.stopPropagation();
    
        //console.log('CTRL clicked');
        //console.log($(this));
    
        _this.backTimer = 2;
    
        var nameClicked = $(this).data('name');
    
        // priority = 'sub';
    
        _this.currentSelection = nameClicked;
    
        // if ( nameClicked === 'Shirt Pleat' || nameClicked === 'Shirt Yoke' || nameClicked === 'Shirt Elbow Patch' ) {
        //     changeView(180);
        // } else {
        //     changeView(0);
        // }
    
        if ( nameClicked === 'Shirt_Cuff' ) {
            if ( _this.mobile ) {
                _this.changeView(90,-5,5);
            } else {
                _this.changeView(0,-5,5);
            }
        }
        if ( nameClicked === 'Shirt_Pocket' ) {
            _this.changeView(0,2,10);
        }
        if ( nameClicked === 'Shirt_Collar' ) {
            _this.changeView(0,5,12);
        }
        if ( nameClicked === 'Shirt_Elbow_Patch' ) {
            if ( _this.mobile ) {
                _this.changeView(90,0,5);
            } else {
                _this.changeView(180,0,5);
            }
            
        }
        if ( nameClicked === 'Shirt_Pleat' ) {
            _this.changeView(180,0,0);
        }
        if ( nameClicked === 'Shirt_Fit' ) {
            _this.changeView(0,0,0);
        }
        if ( nameClicked === 'Shirt_Yoke' ) {
            _this.changeView(180,5,5);
        }
        if ( nameClicked === 'Shirt_Sleeve' ) {
            _this.changeView(0,0,0);
        }
    
    
    
        //console.log('SSSSSSSSSSSSSSSSS',_this.currentSelection);
        // HIGHLIGHT SELECTED ITEM
        _this.scene.traverse( function( node ) {
    
            if ( node instanceof THREE.Mesh ) {
    
                if ( node.material.emissive ) {
                    node.material.emissive.r = 0;
                    node.material.emissive.g = 0;
                    node.material.emissive.b = 0;
        
                    if ( node.name === nameClicked) {
        
                        node.material.emissive.r = 43/255;
                        node.material.emissive.g = 65/255;
                        node.material.emissive.b = 92/255;
        
                    }
                }
    
    
            }
    
        } );
    
    });

    $('body').on('click', '.ctrl2', function(event) {
        event.stopPropagation();
    
        var nameClicked = $(this).data('name');
    
        _this.currentSelection = nameClicked;
    
        var id = $(this).attr('id');
        var bossId = $(this).parent().parent().parent().attr('id');
    
        var boss = _this.scene.getObjectByName( bossId );
        for (var i = 0; i<boss.children.length; i++) {
            boss.children[i].visible = false;
        }
    
        var object = _this.scene.getObjectByName( id );
        object.visible = true;
    });

    $('body').on('click', '.ctrl3', function(event) {

        event.stopPropagation();
    
        var id = $(this).attr('id');
        var nameClicked = $(this).data('name');
    
        _this.currentSelection = nameClicked;
        //console.log(_this.currentSelection);
        var bossId = $(this).parent().parent().parent().attr('id');
    
        //console.log($(this).parent().parent().parent().attr('id'),'BossId: ', bossId)
    
        var boss = _this.scene.getObjectByName( bossId );
    
        //console.log(boss, id);
        for (var i = 0; i<boss.children.length; i++) {
            boss.children[i].visible = false;
        }
    
    
        var object = _this.scene.getObjectByName( _this.currentSelection );
        object.visible = true;
    
        // var container = 'mc2-'+id;
        // var childCounter = $('#mc2-'+id)[0].children.length/2;
    
        // var desiredHeight = childCounter * 55;
    
    
    
        // if ( mobile ) {
        //     $('.mini-container').css('width','20%');
        //     $('.controls').css('width','20%');
        // } else {
        //     $('.mini-container').css('height','55px');    
        // }
    
    });

    $('body').on('click', 'a#order', function() {
        
        _this.order = [];
    
        for (var i = 0; i<_this.model.children.length; i++) {
    
            _this.order.push({name:_this.model.children[i].name,submenu:[]});
            // checkChildren(model.children[i]);
            if (_this.model.children[i].children.length>0) {
    
                for (var j = 0; j<_this.model.children[i].children.length; j++) {
    
                    if (_this.model.children[i].children[j].visible === true) {
    
                        _this.order[i].submenu[j] = {};
                        _this.order[i].submenu[j].name = _this.model.children[i].children[j].name;
                        if (_this.model.children[i].children[j].children.length>0) {
                            _this.order[i].submenu[j].submenu = [];
                            for (var k = 0; k<_this.model.children[i].children[j].children.length; k++) {
                                _this.order[i].submenu[j].submenu[k] = {};
                                _this.order[i].submenu[j].submenu[k].name = _this.model.children[i].children[j].children[k].name;
    
                                if (_this.model.children[i].children[j].children[k].children.length>0) {
                                    for (var l = 0; l<_this.model.children[i].children[j].children[k].children.length; l++) {
                                        if (_this.model.children[i].children[j].children[k].children[l].material.map){
                                            _this.order[i].submenu[j].submenu[k].fabric = _this.model.children[i].children[j].children[k].children[l].material.map.name;
                                        }
                                    }
                                } else {
                                    _this.order[i].submenu[j].submenu[k].fabric = _this.model.children[i].children[j].children[k].material.map.name;
                                }
                            }
    
                        }
                    } else {
                        _this.order[i].submenu[j] = 'not selected';
                    }
                }
            }
    
        }
    
        //console.log(_this.order);
    
        var success = function(){
            //console.log('Order sent!', _this.order);
        }
        $.ajax({
          type: "POST",
          url: "https://www.obpoomail.com/app/fabric_software/three_js.php",
          data: _this.order,
          success: success,
          dataType: 'json'
        });
        
        
    });

    $('body').on('click', 'a#reset', function() {
        $('#colors-panel').removeClass('on');
        _this.changeView(0,0,0);
        _this.scene.traverse( function( node ) {
    
            if ( node instanceof THREE.Mesh ) {
                node.material.emissive.r = 0;
                node.material.emissive.g = 0;
                node.material.emissive.b = 0;
            }
    
        } );
    });

    $('body').on('click', '#test', function() {
        var id = 0;
        //console.log('TEST_TEST');
    
        _this.currentSelection = 'Shirt_Collar';
    
        _this.model.traverse( function( node ) {
    
                if ( node.name === _this.currentSelection) {
    
                    //console.log('Found node with that name: ', node);
    
                    node.traverse( function( subNode ) {
    
    
                        if ( subNode instanceof THREE.Mesh ) {
    
                            //console.log('SUBNODES that are meshes: ', subNode);
                            subNode.material.map = _this.mapOutside[id];
                            subNode.material.needsUpdate = true;
    
                        }
    
                    });
    
    
                }
    
    
        } );
    
    
    });

    $('body').on('click', '.color', function() {
        var id = $(this).attr('id');
        _this.FabricChange(id);
        //console.log('################### NEW COLOR CHANGE REQUEST #################');
        //console.log('Changing color for: ',_this.currentSelection);
    
        // _this.model.traverse( function( node ) {
    
        //         if ( node.name === _this.currentSelection) {
    
        //             foundStatus = true;
    
        //             //console.log('Found node with that name: ', node);
    
        //             node.traverse( function( subNode ) {
    
    
        //                 if ( subNode instanceof THREE.Mesh ) {
    
        //                     //console.log('SUBNODES that are meshes: ', subNode);
        //                     subNode.material.map = _this.mapOutside[id];
        //                     subNode.material.needsUpdate = true;
    
        //                 }
    
        //             });
    
    
        //         }
    
    
        // } );
    
        // if ( _this.currentSelection === 'Shirt' ) {
        //     _this.model.traverse( function( node ) {
    
        //         if ( node.name === 'Waistcoat_Shirt') {
    
        //             node.traverse( function( subNode ) {
    
    
        //                 if ( subNode instanceof THREE.Mesh ) {
    
        //                     subNode.material.map = _this.mapOutside[id];
        //                     subNode.material.needsUpdate = true;
    
        //                 }
    
        //             });
    
        //         }
    
    
        // } );
        // }
    
        // if (!foundStatus) {
        //     //console.log( 'Node with that name not found :(');
        // }
    
    
    });
    
}

HideUnHideFab(nameClicked, isShow){
    this.currentSelection = nameClicked;
    // console.log("this.visibility[nameClicked]",this.visibility[nameClicked]);
    console.log("this.visibility[nameClicked]",this.visibility[nameClicked]);
    this.visibility[nameClicked] = !this.visibility[nameClicked];
    // var boss = this.scene.getObjectByName( nameClicked );
    // for (var i = 0; i<boss.children.length; i++) {
    //     //console.log(boss.children[i]);
    //     boss.children[i].visible = false;
    // }
    //this.updateVisibility(nameClicked);
}

HeaderClick(nameClicked){
    this.currentSelection = nameClicked;
    $('#colors-panel').addClass('on');
    
    if (!$(this).hasClass('open') && $(this).hasClass('enabled')) {
        this.visibility[nameClicked] = false;
        $(this).removeClass('enabled');
        $(this).addClass('disabled');
    } else {
        if ($(this).hasClass('disabled')){
            this.visibility[nameClicked] = true;
            $(this).removeClass('disabled');
            $(this).addClass('enabled'); 
        }
    }
    this.updateVisibility(nameClicked);
}

FabricChange(id){
    var foundStatus = false;
    let _this = this;
    this.fabricId = id; 
    this.model.traverse( function( node ) {
        if ( node.name === _this.currentSelection) {
            foundStatus = true;
            //console.log('Found node with that name: ', node);
            node.traverse( function( subNode ) {
                if ( subNode instanceof THREE.Mesh ) {
                    //console.log('SUBNODES that are meshes: ', subNode);
                    subNode.material.map = _this.mapOutside[id];
                    subNode.material.needsUpdate = true;
                }
            });
        }
    } );

    if ( this.currentSelection === 'Shirt' ) {
        this.model.traverse( function( node ) {
            if ( node.name === 'Waistcoat_Shirt') {
                node.traverse( function( subNode ) {
                    if ( subNode instanceof THREE.Mesh ) {
                        subNode.material.map = _this.mapOutside[id];
                        subNode.material.needsUpdate = true;
                    }
            });
        }
    });
}

if (!foundStatus) {
    //console.log( 'Node with that name not found :(');
}
}

LeftMenuClick(_nameClicked, parentName){
    var id = _nameClicked;
    var bossId = parentName;
    var nameClicked = bossId;
    var boss = this.scene.getObjectByName( bossId );
    for (var i = 0; i<boss.children.length; i++) {
        boss.children[i].visible = false;
    }
    //boss.children[0].visible = true;
    var object = this.scene.getObjectByName( _nameClicked );
    console.log(object);
    object.visible = true;
    this.currentSelection = parentName;
    this.scene.traverse( function( node ) {
    
        if ( node instanceof THREE.Mesh ) {
    
            if ( node.material.emissive ) {
                node.material.emissive.r = 0;
                node.material.emissive.g = 0;
                node.material.emissive.b = 0;
        
                if ( node.name === nameClicked) {
                    node.material.emissive.r = 43/255;
                    node.material.emissive.g = 65/255;
                    node.material.emissive.b = 92/255;
                }
            }
        }
    
    });
}

changeView(desiredAngle,heigth,zoom) {
    let _this = this;
    var cpA = {rotY: this.model.rotation.y * Math.cos(this.model.rotation.x) + this.model.rotation.x, modY: this.model.position.y, modZ: this.model.position.z};
    
    var y = (desiredAngle/180)*Math.PI;

    var tpA = {rotY: y, modY: -heigth*2, modZ: zoom*2};

    if (desiredAngle === 180){

        if (cpA.rotY < 0){
            tpA.rotY = - tpA.rotY;
        }
    }

    var tween = new TWEEN.Tween(cpA).to(tpA, 1000);
    tween.easing(TWEEN.Easing.Quartic.Out);

    tween.onUpdate(function () {
        _this.model.rotation.y = cpA.rotY * Math.cos(_this.model.rotation.x) + _this.model.rotation.x;
        _this.model.position.set(0, cpA.modY, cpA.modZ);

    });

    tween.start();

}

onWindowResize() {
    var container = document.getElementById('webglparent');

    this.camera.aspect = $(container).width() / $(container).height();

    this.camera.updateProjectionMatrix();

    this.renderer.setSize( $(container).width(), $(container).height() );

    this.checkMobile();

}

animate(){
    TWEEN.update();
    this.renderer.render(this.scene, this.camera);
    this.onWindowResize();
    if (this.backTimer > 0){
        this.backTimer -= 0.05;
    }

    if (this.backTimer <= 0){
        this.turnOffSelection();
    }

    requestAnimationFrame(this.animate);
}

buildObject() {
    this.scene.add(this.model);

    var menu = $( "#main" );
    
    for (var m = 0; m<Object.keys(this.data.menu).length; m++) {
        
        this.models[m] = new THREE.Group();  
        this.model.add(this.models[m]);
        this.models[m].name = this.data.menu[m].name;

        // if ( models[m].name==='Waistcoat') {
        //     models[m].scale.set(1.05,1.05,1.15);
        //     models[m].position.set(0,-0.5,-0.1);
        //     models[m].rotation.x = Math.PI/180*1;
        // }

        // if ( models[m].name==='Jacket') {
        //     models[m].scale.set(1.05,1.05,1.05);
        //     models[m].position.set(0,-0.5,-0.1);
        //     // models[m].rotation.x = Math.PI/180*1;
        // }

        // if (m === Object.keys(data.menu).length) {
        //     menu.append(
        //         '</ul>'
        //     );
        // }
        this.visibility[this.data.menu[m].name] = !this.data.menu[m].skip;
        if (this.data.menu[m].skip) {
            var btnStatus = 'disabled';
            this.models[m].visible = false;
        } else {
            var btnStatus = 'enabled';
            this.models[m].visible = true;
        }
        if (this.data.menu[m].display) {
            // menu.append(
            //     '<li id="'+this.data.menu[m].name+'" class="'+btnStatus+' has-sub ctrlm menu" data-name="'+this.data.menu[m].name+'"><a class="top" href="#"><img class="menu-main-icon" src="'+this.data.menu[m].icon+'"></a></li>'
            //     );
        }

        var subMenu = $( '#'+this.data.menu[m].name+'' );
        if (this.data.menu[m].submenu) { 
            // subMenu.addClass('has-sub');
            subMenu.append(
                '<ul id="'+this.data.menu[m].name+'-submenu1"></ul>'
            );
            var subMenu1 =  $( '#'+this.data.menu[m].name+'-submenu1' );
        }

        for (var i = 0; i<Object.keys(this.data.menu[m].submenu).length; i++) {

            // var name = data.menu[m].submenu[i].name.replace('_', ' ');
            var name = this.data.menu[m].submenu[i].name.split('_').join(' ');
            if (this.data.menu[m].submenu[i].submenu) { 
                var addClass='has-sub';
            } else {
                var addClass='';
            }
            subMenu1.append(
                '<li id="'+this.data.menu[m].submenu[i].name+'" class="'+addClass+'"><a class="sub1 ctrl menu" href="#" data-name="'+this.data.menu[m].submenu[i].name+'" class="ctrl"><img class="menu-icon" src="'+this.data.menu[m].submenu[i].icon+'"><span class="btn-txt">'+name+'</span></a></li>'
            );

            var subMenu2 = $( '#'+this.data.menu[m].submenu[i].name );
            subMenu2.append('<ul id="'+this.data.menu[m].submenu[i].name+'-submenu2"></ul>');

            var subMenu3 = $( '#'+this.data.menu[m].submenu[i].name+'-submenu2' );
            if (this.data.menu[m].submenu[i].model) {
                
                var obj = new THREE.Group();
                obj.name = this.data.menu[m].submenu[i].name;
                this.models[m].add(obj)
                
                //console.log('we got a higher lvl model', this.data.menu[m].submenu[i].model);
                var status = this.data.menu[m].submenu[i].skip;
                
                if (status) {
                    obj.visible = false;
                } else {
                    obj.visible = true;
                }
                
                for (var k = 0; k<Object.keys(this.data.menu[m].submenu[i].model).length; k++) {

                    // subMenu3.append(
                    //     '<li id="'+data.menu[m].submenu[i].model[k].name+'" class="ctrl3" data-name="'+data.menu[m].submenu[i].model[k].name+'"><img class="menu-icon" src="modelsNew/Shirt/'+data.menu[m].submenu[i].name+'/'+data.menu[m].submenu[i].name+'/'+data.menu[m].submenu[i].name+'.png"><span class="btn-txt">'+data.menu[m].submenu[i].model[k].name+'</span></li>'
                    // );


                    var name = this.data.menu[m].submenu[i].model[k].name;
                    var path = this.data.menu[m].submenu[i].model[k].path;
                    var boss = this.data.menu[m].name;

                    // order.main_menu[i].sub_elements[j].model.push({name: data.menu[m].submenu[i].submenu[j].model[k].name, texture:'tex1'})

                    this.createMesh(name,path,k,this.mapOutside[0],obj,boss,status);

                }
            }

            if (this.data.menu[m].submenu[i].submenu) {

                var obj = new THREE.Group();
                obj.name = this.data.menu[m].submenu[i].name;
                this.models[m].add(obj)

                if (this.data.menu[m].submenu[i].model) {

                    //console.log('we got a higher lvl model', this.data.menu[m].submenu[i].model);
                    var status = this.data.menu[m].submenu[i].skip;

                    // if (status) {
                    //     obj.visible = false;
                    // } else {
                    //     obj.visible = true;
                    // }

                    for (var k = 0; k<Object.keys(this.data.menu[m].submenu[i].model).length; k++) {

                        // subMenu3.append(
                        //     '<a id="'+data.menu[m].submenu[i].model[k].name+'" class="ctrl3 mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" data-name="'+data.menu[m].submenu[i].model[k].name+'"><img class="menu-icon" src="modelsNew/Shirt/'+data.menu[m].submenu[i].name+'/'+data.menu[m].submenu[i].submenu[j].name+'/'+data.menu[m].submenu[i].submenu[j].model[k].name+'.png"><span class="btn-txt">'+data.menu[m].submenu[i].submenu[j].model[k].name+'</span></a>'
                        // );


                        var name = this.data.menu[m].submenu[i].model[k].name;
                        var path = this.data.menu[m].submenu[i].model[k].path;
                        var boss = this.data.menu[m].name;

                        // order.main_menu[i].sub_elements[j].model.push({name: data.menu[m].submenu[i].submenu[j].model[k].name, texture:'tex1'})

                        this.createMesh(name,path,k,this.mapOutside[0],obj,boss,status);
                    }
                }



                for (var j = 0; j<Object.keys(this.data.menu[m].submenu[i].submenu).length; j++) {
                    
                    var obj2 = new THREE.Group();
                    obj2.name = this.data.menu[m].submenu[i].submenu[j].name;
                    obj.add(obj2);

                    // subMenu2.append('<div class="mini-container2" id="mc2-'+data.menu[m].submenu[i].submenu[j].name+'"></div>');

                    // var subMenuContainer = $( '#mc2-'+data.menu[m].submenu[i].submenu[j].name+'' );
                    var name = this.data.menu[m].submenu[i].submenu[j].name.split('_').join(' ');
                    subMenu3.append(
                        '<li><a  id="'+this.data.menu[m].submenu[i].submenu[j].name+'" data-name="'+this.data.menu[m].submenu[i].submenu[j].name+'" class="ctrl2"><img class="menu-icon" src="'+this.data.menu[m].submenu[i].submenu[j].icon+'"><span class="btn-txt">'+name+'</span></a></li>'
                    );

                    if (this.data.menu[m].submenu[i].submenu[j].model) {

                        var status = this.data.menu[m].submenu[i].submenu[j].skip;

                        if (status) {
                            obj2.visible = false;
                        } else {
                            obj2.visible = true;
                        }

                        for (var k = 0; k<Object.keys(this.data.menu[m].submenu[i].submenu[j].model).length; k++) {

                            // subMenuContainer.append(
                            //     '<a id="'+data.menu[m].submenu[i].submenu[j].model[k].name+'" class="ctrl3 mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" data-name="'+data.menu[m].submenu[i].submenu[j].model[k].name+'"><img class="menu-icon" src="modelsNew/Shirt/'+data.menu[m].submenu[i].name+'/'+data.menu[m].submenu[i].submenu[j].name+'/'+data.menu[m].submenu[i].submenu[j].model[k].name+'.png"><span class="btn-txt">'+data.menu[m].submenu[i].submenu[j].model[k].name+'</span></a>'
                            // );


                            var name = this.data.menu[m].submenu[i].submenu[j].model[k].name;
                            var path = this.data.menu[m].submenu[i].submenu[j].model[k].path;
                            var boss = this.data.menu[m].submenu[i].name;

                            // order.main_menu[i].sub_elements[j].model.push({name: data.menu[m].submenu[i].submenu[j].model[k].name, texture:'tex1'})

                            this.createMesh(name,path,k,this.mapOutside[0],obj2,boss,status);
                        }
                    }
                }
            }
            // subMenu.append(
            //     '</ul>'
            // );
        }
    }
    this.visibility["Shirt"] = true;
    this.visibility["Shoe_Body"] = true;
    this.visibility["Trouser"] = true;
    this.visibility["Waistcoat"] = false;
    this.visibility["Jacket"] = false;
    this.visibility["Waistcoat_Shirt"] = false;
    this.visibility["Jacket_Waistcoat"] = false;
    this.currentSelection = "Shirt";
    this.checkCardClick("Reset");
    // this.visibility['Body_Peplum'] = false;
    // this.visibility['Body_Top'] = true;
    // this.visibility['Body_With_Collar'] = false;
    // this.visibility['Neck_Log_Boat'] = false;
    // this.visibility['Neck_Long_Round'] = false;
    // this.visibility['Neck_Long_Square'] = false;
    // this.visibility['Neck_Long_V'] = false;
    // this.visibility['Skirt_Long'] = false;
    // this.visibility['Sleeve'] = false;
    if (this.state.isKurti){
        var selectModel = this.scene.getObjectByName('Body_Top');
        this.showShirt(selectModel);

        const entries = Object.entries(this.visibility);

        for (const [key, value] of entries) {
            this.scene.traverse( function( node ) {
                if ( node.name === key ) {
                    node.visible = value;
                }
            });
        }
        //this.updateKurtiVisibility('Body_Top');
    }
    // //console.log('ORDER: ',order);
}

createMesh(name,path,i,map,obj,boss,status) {
    let _this = this;
    this.mtlLoader.load( path.slice(0,-4)+".mtl", function( materials ) {
        materials.preload();
        
        _this.objLoader.setMaterials( materials );
        _this.objLoader.load(path, function ( object ) {

            object.position.y = -65;
            object.scale.set(0.05,0.05,0.05);



            // if ( object.children.length > 1 ) {

            //     for (var i = 0; i<object.children.length; i++) {
            //         object.children[i].material.map = map;
            //         object.children[i].material.transparent = true;
            //         object.children[i].material.side = THREE.DoubleSide;
            //         object.children[i].name = boss;
            //     }

            // } else {
            //     object.children[0].material.map = map;
            //     object.children[0].material.transparent = true;
            //     object.children[0].material.side = THREE.DoubleSide;
            //     object.children[0].name = boss;
            // }

            if ( object.children.length > 1 ) {

                for (var i = 0; i<object.children.length; i++) {
                    object.children[i].material.map = map;
                    object.children[i].material.transparent = true;
                    object.children[i].material.side = THREE.DoubleSide;
                    // object.children[i].name = name;
                }

            } else {
                object.children[0].material.map = map;
                object.children[0].material.transparent = true;
                object.children[0].material.side = THREE.DoubleSide;
                // object.children[0].name = name;
            }

            object.name = name;
            // object.children[0].material.bumpMap = map;
            // object.children[0].material.bumpScale = 0.1;


            obj.add(object);

            // //console.log(object);

        }, _this.onProgress, _this.onError );
    });

}



updateKurtiVisibility(nameClicked){
    var a = false;
    var selectModel = this.scene.getObjectByName(nameClicked);
    this.showShirt(selectModel);

    const entries = Object.entries(this.visibility);

    for (const [key, value] of entries) {
        this.scene.traverse( function( node ) {
            if ( node.name === key ) {
                node.visible = value;
            }
        });
    }

}

///<summary>
/// Update Visibility for the Shirt for current selection
/// <param name = { Current selection name } 
///<summary>
updateVisibility(nameClicked){
    if (this.state.isKurti){
        this.updateKurtiVisibility(nameClicked);
        return;
    }
    var a = false;

    var map = this.scene.getObjectByName( 'Pattern2D_160' ).material.map; // shirt map
    var map2 = this.scene.getObjectByName( 'Waistcoat' ).children[0].children[0].children[0].material.map; // waistcoat map
    ////console.log(map.name);

    var shirt = this.scene.getObjectByName( 'Shirt' );

    var obj = this.scene.getObjectByName( 'Waistcoat_Shirt' ).children[0].children[0];
    var obj2 = this.scene.getObjectByName( 'Jacket_Waistcoat' ).children[0].children[0];

    var collar = this.scene.getObjectByName( 'Shirt_Collar' );
    var cuff = this.scene.getObjectByName( 'Shirt_Cuff' );

    for (var i = 0; i<obj.children.length; i++) {
        obj.children[i].material.map = map;
    }

    for (var i = 0; i<obj2.children.length; i++) {
        obj2.children[i].material.map = map2;
    }

    if ( nameClicked === 'Shirt' ) {
        if (this.visibility['Shirt']===true){
            //console.log('SHIRT(ON): ',this.visibility['Shirt']);
            this.showShirt(shirt);
            if (this.visibility['Waistcoat']===true){
                this.hideShirt(shirt);
                this.visibility['Waistcoat_Shirt'] = true;
                this.visibility['Jacket_Waistcoat'] = false;
            }
            if (this.visibility['Jacket']===true){
                this.hideShirt(shirt);
                this.visibility['Waistcoat_Shirt'] = true;
            }
            if (this.visibility['Waistcoat']===true && this.visibility['Jacket']===true){
                this.visibility['Waistcoat_Shirt'] = true;
                this.visibility['Jacket_Waistcoat'] = true;
                // visibility['Shirt']=false;
                this.visibility['Waistcoat']=false;
                // hideShirt(nameClicked);
                a = true;
            }
            if (this.visibility['Waistcoat']===false && this.visibility['Jacket']===false){
                this.visibility['Waistcoat_Shirt'] = false;
            }
        } else {
            //console.log('SHIRT(OFF): ',this.visibility['Shirt']);
            if (this.visibility['Waistcoat']===true){
                this.visibility['Waistcoat_Shirt'] = false;
            } else {
                // visibility['Jacket_Waistcoat'] = false;
            }
            if (this.visibility['Jacket']===true){
                this.visibility['Waistcoat_Shirt'] = false;
            }
            if (this.visibility['Waistcoat']===true && this.visibility['Jacket']===true){
                this.visibility['Waistcoat_Shirt'] = false;
                this.visibility['Waistcoat']=false;
                this.visibility['Jacket_Waistcoat'] = true;
                this.visibility['Shirt']=false;
                a = true;
            }
            if (this.visibility['Waistcoat']===false && this.visibility['Jacket']===false){
                this.visibility['Waistcoat_Shirt'] = false;
            }
            if (this.visibility['Waistcoat']===true && this.visibility['Jacket']===false){
                this.visibility['Waistcoat_Shirt'] = false;
                this.visibility['Jacket_Waistcoat'] = false;
                this.visibility['Shirt']=false;
                this.visibility['Waistcoat']=true;
            }
        }
    }

    if ( nameClicked === 'Waistcoat' ) {
        if (this.visibility['Waistcoat']===true){
            if (this.visibility['Jacket']===true){
                this.visibility['Jacket_Waistcoat'] = true;
                this.visibility['Waistcoat'] = false;
            } else {
                this.visibility['Jacket_Waistcoat'] = false;
                this.visibility['Waistcoat'] = true;
            }
        } else {
            this.visibility['Jacket_Waistcoat'] = false;
            this.visibility['Waistcoat'] = false;
        }
        if (this.visibility['Shirt']===true){
            this.hideShirt(shirt);
            this.visibility['Waistcoat_Shirt'] = true;
        }
    }

    if ( nameClicked === 'Jacket' ) {
        if (this.visibility['Waistcoat']===true){
            this.visibility['Jacket_Waistcoat'] = true;
            this.visibility['Waistcoat'] = false;
            if (this.visibility['Shirt']===true){
                this.hideShirt(shirt);
                this.visibility['Waistcoat_Shirt'] = true;
            }
        }
        if (this.visibility['Shirt']===true){
            this.hideShirt(shirt);
            this.visibility['Waistcoat_Shirt'] = true;
        }
    }

    this.additionalMenuCheck();

    const entries = Object.entries(this.visibility);

    for (const [key, value] of entries) {
        this.scene.traverse( function( node ) {
            if ( node.name === key ) {
                node.visible = value;
            }
        });
    }

    if (!a){
        //console.log('additional switch XXXXXXXXXXXXXXXX');
        if (this.visibility['Jacket_Waistcoat'] === true) {
            this.visibility['Waistcoat'] = true;
        }
    }
    //console.log(nameClicked, this.visibility);
}

turnOffSelection() {
    let _this = this;
    this.scene.traverse( function( node ) {
        if ( node instanceof THREE.Mesh ) {
            if ( node.name === _this.currentSelection ) {
                node.material.emissive.r = 0;
                node.material.emissive.g = 0;
                node.material.emissive.b = 0;
            }
        }
    } );

}

///<summary>
/// Hide Visibility for the Shirt for current selection
/// <param name = { Current selection name } 
///<summary>
hideShirt(shirt){
    for (var i = 0; i<shirt.children.length; i++) {
        shirt.children[i].visible = false;
        if (shirt.children[i].name === 'Shirt_Collar'){
            shirt.children[i].visible = true;
        }
        if (shirt.children[i].name === 'Shirt_Cuff'){
            shirt.children[i].visible = true;
        }
    }
    // if (name === 'Jacket'){
    //     scene.getObjectByName( 'Shirt_Collar' ).visible = false;
    // }
}


///<summary>
/// Show Visibility for the Shirt for current selection
/// <param name = { Current selection name } 
///<summary>
showShirt(shirt){
    for (var i = 0; i<shirt.children.length; i++) {
        shirt.children[i].visible = true;
    }
}

additionalMenuCheck(){
    if ( $('#waistcoat').hasClass('enabled') ) {
        this.visibility['Waistcoat'] = true;
        //console.log('additionally checked and changed waistcoat')
    }
}

checkCardClick(name){
    console.log("name",name);
    if (name === "Front"){
        this.changeView(0,-5,5);
        this.camera.position.set(0,10,100);
    }
    else if (name === "Side"){
        this.changeView(90,-5,5);
        this.camera.position.set(0,10,100);
    }else if (name === "Back"){
        this.changeView(180,-5,5);
        this.camera.position.set(0,10,100);
    }else if (name === "Reset"){
        this.changeView(0,0,0);
        this.camera.position.set(0,2,80);
        // this.scene.traverse( function( node ) {
        //     if ( node instanceof THREE.Mesh ) {
        //         node.material.emissive.r = 0;
        //         node.material.emissive.g = 0;
        //         node.material.emissive.b = 0;
        //     }
        // } );
    }
}

  render(){
    return(
<div id='webglparent'>
        {/* <CheckBoxWrapper>
            <CheckBoxCard value='Front' checkClick={(name) => {this.checkCardClick(name)}}/>
            <CheckBoxCard value='Side' checkClick={(name) => {this.checkCardClick(name)}}/>
            <CheckBoxCard value='Back' checkClick={(name) => {this.checkCardClick(name)}}/>
            <CheckBoxCard value='Reset' checkClick={(name) => {this.checkCardClick(name)}}/>
        </CheckBoxWrapper> */}
        <canvas id='webGl' name='webGl' ref={(ref) => (this.mount = ref)} />
        <div id='cssmenu'>
            <ul id='main'>
            </ul>
        </div>
        <div class="loader2">
			<div id="progress" style={{display: 'block'}}>
                <img class="logo_load" style={{ height: '30px', width:'50px' }} src='favicon.ico' alt='Logo'/>
				    <center>
					    LOADING
					    <div id="progressbar" class="shadow"><div id="bar" class="shadow"></div></div>
					    <div class="percent" id="percent">60%</div>
				    </center>
			    </div>
		    </div>
      </div>      
    )
  }
}

export default WebGlContainer;

// export default function WebGLContainer () {
//   return (
//     <WebGLContainerWrapper>
//       <CheckBoxWrapper>
//         <CheckBoxCard value='Front' checked />
//         <CheckBoxCard value='Side' />
//         <CheckBoxCard value='Back' />
//       </CheckBoxWrapper>
//       {/* <DemoImage src={Design} alt='Demo Image' /> */}
//       <Obpoo/>
//       {/* <ShareIcon src={Share} alt='Icon' /> */}
//       {/* <ZoomContainer>
//         <span>+</span>
//         <HRLine />
//         <span>-</span>
//       </ZoomContainer> */}
//     </WebGLContainerWrapper>
//   )
// }
