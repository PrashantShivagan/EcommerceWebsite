import { Component, OnInit } from '@angular/core';
import { AppSharedDataService } from '../shared/app-shared-data.service';
import * as resize from '../../assets/JS/dragResize.js';
import * as customText from '../../assets/JS/addText.js';


declare var $: any;
declare var browseImage:any;
declare var addCustomText:any;

@Component({
  selector: 'app-customize-product',
  templateUrl: './customize-product.component.html',
  styleUrls: ['./customize-product.component.scss']
})
export class CustomizeProductComponent implements OnInit {
  currentProd:any;
  constructor(private appData:AppSharedDataService) { 
    this.currentProd = appData.currentProductDetails;
  }

  selectedFile = null;
  dragDisabled = true;
  customText = false;
  customTextArr=[];
  customImgArr=[];
  customImgNum = 0;
  curCustomText="Enter Your Text Here";
  curCustomTextField;
  customTextClicked = false;

  ngOnInit() {
    this.customTextArr.push("0");
    document.addEventListener("dragEvent",function(event){
      //console.log("dispatch before called..."+this.dragDisabled);
      this.dragDisabled = true;;
      console.log("dispatch after called..."+this.dragDisabled);
    })

    $(document).ready(function() {
     console.log('ready...')
      $("#imgload").change(function () {
        // let customImg = document.createElement('img');
        // this.customImgNum = this.customImgNum + 1;
        // let customImgId = "customImg0";
        // customImg.setAttribute("id",customImgId);
        // customImg.setAttribute("class","fileInputImg");
        // document.getElementById("fileInputImgContainer").appendChild(customImg);

        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
              $('.fileInputImg').attr('src', reader.result);
            }
            reader.readAsDataURL(this.files[0]);
            browseImage();
        }
      });
       $("#customTextPanel").hide();
       $(".resizer").hide();

      //  $('.customText').css({"width":"250px"});
      //  $('.customText').css({"height":"250px"});
        $('.customText').css({"font-size":"30px"});
        $('.customText').css({"text-align":"center"});

    });
  }

  customImgDown(event){
    console.log("customImgDown called..."+this.dragDisabled);
    this.customTextClicked = false;
    this.dragDisabled = false;
    this.curCustomTextField = event.target;
    $("#customTextPanel").show();
    $(".resizer").show();
  }

  onTextSelect(){
    var _val = $("#objSize").val();
    $(this.curCustomTextField).css({"font-size":_val});
  }

  onFileChange(event){
    this.customImgArr.push("0");
  }

  dragStarted(){
    console.log('Drag Started');
  }

  dragEnded(){
    console.log('Drag Ended');
  }

  addTextField(){
    this.customText = true;
    this.customTextArr.push("0");
  }

  customTxtClose(){
    this.customText = false;
    $("#customTextPanel").hide();
    this.customTextClicked = false;
    $(".resizer").hide();
  }

  customTextClick(event){
    this.customText = true;
    this.customTextClicked = true;

    $("#customTextPanel").show();

    this.curCustomTextField = event.target;
    $(this.curCustomTextField).attr('ng-model', this.curCustomText);
    this.curCustomText = event.target.value;
    $("#customText :input").prop("disabled", true);
  }

  onCustomTextChange(event){
    this.curCustomText = this.curCustomTextField.value;
    $(this.curCustomTextField).css({"width":(this.curCustomText.length*15)});
  }

  chooseColor(){
    var _color = $("#colorPicker").val();
    $(this.curCustomTextField).css({"color":_color});
  }

  removeCustomText(){
    if(this.customTextClicked){  // for text field
      this.curCustomTextField.parentNode.removeChild(this.curCustomTextField);
    }else{  // for image only
      this.curCustomTextField.setAttribute("src","");
      $(".resizer").hide();
    }
   
    $("#customTextPanel").hide();
  }
}
