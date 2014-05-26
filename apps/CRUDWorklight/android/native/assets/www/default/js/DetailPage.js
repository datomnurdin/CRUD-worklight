
/* JavaScript content from js/DetailPage.js in folder common */
currentPage={};

currentPage.init = function() {
	WL.Logger.debug("DetailPage :: init");
};

currentPage.back = function(){
	WL.Logger.debug("DetailPage :: back");
	$("#pagePort").load(pagesHistory.pop());
};