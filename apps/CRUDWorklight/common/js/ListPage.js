currentPage = {};

currentPage.init = function(){
	WL.Logger.debug("ListPage :: init");
};

currentPage.loadPage = function(pageIndex){
	WL.Logger.debug("ListPage :: loadPage :: pageIndex: " + pageIndex);
	pagesHistory.push(path + "pages/ListPage.html");
	$("#pagePort").load(path + "pages/" + pageIndex + ".html");
};
