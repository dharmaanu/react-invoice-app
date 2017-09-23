 /**
    HTML5 input type date field stores date in yyyy-mm-dd format. 
    Util function to convert it to mm/dd/yyyy format while saving state.
     */
export function convertToTraditionalFormat(htmlformat) {
        let datearray = htmlformat.toString().split("-");
        let mmddFormat = datearray[1] + '/' + datearray[2] + '/' + datearray[0];
        return mmddFormat;
    }
