// mask text  [###-#######-#] 
export const maskText = ( text ) => {

    let newText = text.replace( "-", "" ).split( "" );

    if( newText.length > 3){

       newText.splice(3, 0, '-');
    }

    if( newText.length >= 12 && newText[11] !== "-" ) {
       newText.splice( 11, 0, '-');
    }

    return newText.join("");
}