function drag(oDiv,dragScope){
	
	
	var disX=0;
	var disY=0;
	
	oDiv.onmousedown=function (ev)
	{
		var oEvent=ev||event;
		
		disX=oEvent.clientX-oDiv.offsetLeft;
		disY=oEvent.clientY-oDiv.offsetTop;
		
		document.onmousemove=function (ev)
		{
			var oEvent=ev||event;
			var l=oEvent.clientX-disX;
			var t=oEvent.clientY-disY;
			
			if(l<0)
			{
				l=0;
			}
			else if(l>dragScope.offsetWidth-oDiv.offsetWidth)
			{
				l=dragScope.offsetWidth-oDiv.offsetWidth;
			}
			
			if(t<0)
			{
				t=0;
			}
			else if(t>dragScope.offsetHeight-oDiv.offsetHeight)
			{
				t=dragScope.offsetHeight-oDiv.offsetHeight;
			}

			//以下是针对在游览器客户区范围内拖拽
			/*if(l<0)
			{
				l=0;
			}
			else if(l>document.documentElement.clientWidth-oDiv.offsetWidth)
			{
				l=document.documentElement.clientWidth-oDiv.offsetWidth;
			}
			
			if(t<0)
			{
				t=0;
			}
			else if(t>document.documentElement.clientHeight-oDiv.offsetHeight)
			{
				t=document.documentElement.clientHeight-oDiv.offsetHeight;
			}*/
			
			oDiv.style.left=l+'px';
			oDiv.style.top=t+'px';
		};
		
		document.onmouseup=function ()
		{
			document.onmousemove=null;
			document.onmouseup=null;
		};
		
		return false;
	};
}