var obj ;
var image;
var mainImage;
var  isResizing = false;
let result;

//alert('resize running outside...');

function browseImage(){
    obj = document.querySelector(".fileInputImgContainer");
    image = document.querySelector(".fileInputImg");
    mainImage = document.querySelector(".mainImg");
    console.log("script running");

    let dragEve = new Event("dragEvent",{
        bubbles:true
    })

    var resizers = document.querySelectorAll('.resizer');

    for(let resizer of resizers){
        resizer.addEventListener('mousedown',resizeDown);
        let currentResizer;

        function resizeDown(e){
            currentResizer = e.target;
            isResizing = true;

            obj.dispatchEvent(dragEve);
            console.log('down');
            window.addEventListener('mousemove',mouseResizeMove);
            window.addEventListener('mouseup',mouseResizeUp);

            let prevX = e.clientX;
            let prevY = e.clientY;

            function mouseResizeMove(e){
                const rect = obj.getBoundingClientRect();
                const rect1 = image.getBoundingClientRect();
                if(currentResizer.classList.contains('se')){
                    obj.style.width = rect.width - (prevX - e.clientX)+"px";
                    obj.style.height = rect.height - (prevY - e.clientY)+"px";

                    image.style.width = rect1.width - (prevX - e.clientX)+"px";
                    image.style.height = rect1.height - (prevY - e.clientY)+"px";
                }else if(currentResizer.classList.contains('sw')){
                     //obj.style.width = rect.width + (prevX - e.clientX)+"px";
                    // obj.style.height = rect.height - (prevY - e.clientY)+"px";
                    // obj.style.left = rect.left - (prevX - e.clientX)+"px";

                     //image.style.width = rect1.width + (prevX - e.clientX)+"px";
                     //image.style.height = rect1.height - (prevY - e.clientY)+"px";
                     //image.style.left = rect1.left - (prevX - e.clientX)+"px";
                }else if(currentResizer.classList.contains('ne')){
                    // obj.style.width = rect.width - (prevX - e.clientX)+"px";
                    // obj.style.height = rect.height + (prevY - e.clientY)+"px";
                    // obj.style.top = rect.top - (prevY - e.clientY)+"px";

                    // image.style.width = rect1.width - (prevX - e.clientX)+"px";
                    // image.style.height = rect1.height + (prevY - e.clientY)+"px";
                    // image.style.top = rect1.top - (prevY - e.clientY)+"px";
                }else if(currentResizer.classList.contains('nw')){
                    // obj.style.width = rect.width + (prevX - e.clientX)+"px";
                    // obj.style.height = rect.height + (prevY - e.clientY)+"px";
                    // obj.style.top = rect.top - (prevY - e.clientY)+"px";
                    // obj.style.left = rect.left - (prevX - e.clientX)+"px";

                    // image.style.width = rect1.width + (prevX - e.clientX)+"px";
                    // image.style.height = rect1.height + (prevY - e.clientY)+"px";
                    // image.style.top = rect1.top - (prevY - e.clientY)+"px";
                    // image.style.left = rect1.left - (prevX - e.clientX)+"px";
                }
                prevX = e.clientX;
                prevY = e.clientY;
            }

            function mouseResizeUp(){
               
                window.removeEventListener('mousemove',mouseResizeMove);
                window.removeEventListener('mouseup',mouseResizeUp);
                isResizing = false;
                //obj.dispatchEvent(dragEve);
            }
        }
    }
}
