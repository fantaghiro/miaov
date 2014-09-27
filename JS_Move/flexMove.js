function startMove(obj,json,fn){
        clearInterval(obj.timer);
        
        var iSpeed = {};
        for(var attr in json){
                iSpeed[attr] = 0;
        }
        
        obj.timer = setInterval(function(){
                
                var bBtn = true;
                
                for(var attr in json){
                        
                        var iCur = 0;
                        if(attr == 'opacity'){
                                iCur = Math.round(getStyle(obj,attr)*100);
                        }
                        else{
                                iCur = parseInt(getStyle(obj,attr));
                        }
                        
                        iSpeed[attr] += (json[attr] - iCur)/6;
                        iSpeed[attr] *= 0.75;
                        
                        if( Math.abs(iSpeed[attr])>1 || Math.abs(json[attr] - iCur)>1 ){
                                
                                bBtn = false;
                        }
                        
                        var value = iCur + iSpeed[attr];
                        
                        if(value < 0 && (attr == 'width'||attr == 'height')){
                                value = 0;
                        }
                        
                        if(attr == 'opacity'){
                                obj.style.filter = 'alpha(opacity='+ value +')';
                                obj.style.opacity = value/100; 
                        }
                        else{
                                obj.style[attr] = value + 'px';
                        }
                        
                        
                }
                
                if(bBtn){
                        clearInterval(obj.timer);
                        for(var attr in json){
                                iSpeed[attr] = 0;
                                if(attr == 'opacity'){
                                        obj.style.filter = 'alpha(opacity='+ json[attr] +')';
                                        obj.style.opacity = json[attr]/100; 
                                }
                                else{
                                        obj.style[attr] = json[attr] + 'px';
                                }
                        }
                        
                        if(fn){
                                fn.call(obj);
                        }
                        
                }
                
        },30);
}
        
        
function getStyle(obj,attr){
        if(obj.currentStyle){
                return obj.currentStyle[attr];
        }
        else{
                return getComputedStyle(obj,false)[attr];
        }
}
