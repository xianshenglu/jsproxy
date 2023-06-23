const HISTORY_SITE_LIST = 'HISTORY_SITE_LIST'
function addSiteToLocalStorage(siteUrl){
    const siteList = getHistorySiteListFromLocalStorage()
    if(siteList.includes(siteUrl)){
        return;
    }
    siteList.unshift(siteUrl);
    localStorage.setItem(HISTORY_SITE_LIST,JSON.stringify(siteList));
}
function getHistorySiteListFromLocalStorage(endIndex=50){
    return JSON.parse(localStorage.getItem(HISTORY_SITE_LIST) || '[]').slice(0, endIndex)
}