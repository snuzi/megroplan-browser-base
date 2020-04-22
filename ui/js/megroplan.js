var Megroplan = function() {
    var megroplanSaveUrl = 'https://megroplan.com/app/recipe/scrape';

    function scrapeWebsite(url, callback) {
        url = megroplanSaveUrl + '?url=' + url;

        if (callback) {
            callback(url);
        }
    }   
    
    return {
        scrapeWebsite: scrapeWebsite
    }
};