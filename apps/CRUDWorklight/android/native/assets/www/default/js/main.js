
/* JavaScript content from js/main.js in folder common */
var pagesHistory = [];
var currentPage = {};
var path = "";

function wlCommonInit(){
	// Special case for Windows Phone 8 only.
	if (WL.Client.getEnvironment() == WL.Environment.WINDOWS_PHONE_8) {
	    path = "www/default/";
	}
	
	$("#pagePort").load(path + "pages/ListPage.html", function(){
		$.getScript(path + "js/ListPage.js", function() {
			if (currentPage.init) {
				currentPage.init();
			}
		});
	});
}
/* JavaScript content from js/main.js in folder android */
// This method is invoked after loading the main HTML and successful initialization of the Worklight runtime.
function wlEnvInit(){
    wlCommonInit();
    // Environment initialization code goes here
}