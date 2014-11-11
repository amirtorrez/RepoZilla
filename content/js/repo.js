function install(){
	var scop = document.getElementById('m').value;
	var manifestUrl = document.getElementById('repo').value;
	if(manifestUrl != ''){
		switch(scop){
			case 'host':
				var request = window.navigator.mozApps.install(manifestUrl);
			break;
			case 'pack':
				var request = navigator.mozApps.installPackage(manifestUrl);
			break;
		}
		request.onsuccess = function () {
			alert(msgints);
		};
		request.onerror = function () {
			alert('Install failed, error: ' + this.error.name + '\nRepo: ' + manifestUrl);
		};	
	} else {
		alert("Insert a url like:\nhttp://example.com/app/manifest.webapp");
	}
}
$(document).ready(function(){
	var plhd;
	$("select[id=m]").change(function(){
		var opt = $('select[id=m]').val();
		if(opt == 'host'){
				plhd = "http://example.com/app/manifest.webapp";				
		} else if(opt == 'pack'){
				plhd = "http://example.com/app/package.webapp";
		}
		$("#repo").attr("placeholder", plhd);
	});
});
