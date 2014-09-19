function ajax(conf){
	var type = conf.type;
	var url = conf.url;
	var data = conf.data;
	var success = conf.success;

	if(!type) {
		type = 'get';
	}
	if(!data) {
		data = '';
	}
	var xhr = null;
	
	try{
		xhr = new XMLHttpRequest();
	} catch(e) {
		xhr = new ActiveXObject('Microsoft.XMLHTTP');
	}

	if (type == 'get' || type == 'GET') {
		url = url + '?' + data;
		xhr.open(type, url, true);
		xhr.send();
	} else if(type == 'post' || type == 'POST') {
		xhr.open(type, url, true);
		xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
		xhr.send(data);
	}

	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4){
			if(xhr.status == 200){
				success && success(JSON.parse(xhr.responseText));
			} else {
				alert('出错了，Error：' + xhr.status);
			}
		}
	}
}