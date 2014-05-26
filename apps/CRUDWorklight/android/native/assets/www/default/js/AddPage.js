
/* JavaScript content from js/AddPage.js in folder common */
currentPage={};

currentPage.init = function() {
	WL.Logger.debug("AddPage :: init");
};

currentPage.back = function(){
	WL.Logger.debug("AddPage :: back");
	$("#pagePort").load(pagesHistory.pop());
};