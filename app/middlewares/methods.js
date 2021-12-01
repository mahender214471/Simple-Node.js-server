/*
<====================== ABOUT FILE ======================>
MOTIVE => FILE FOR DEFINE GLOBAL METHODS AND PROPERTIES FOR THIS SERVER ;
WRITER => MAHENDER RAJPUT ;
 */

const fs = require ('fs');
class Methods{
      // CONNSTRUCTER FOR DEFINE GLOBAL METHODS AND PROPERTIES  FOR THIS CLASSS ; 
     constructor(rootDir){
          this.rootDir = rootDir ;
     }
    
     //METHOD FOR FIND PUBLIC FILE ACCORDING TO THE URL ;
     FindPublicFile ( fileName ){
          try{
              if( fileName === '/' ){
               const file = fs.readFileSync(`${this.rootDir}/pages/public/home.htm` , 'utf-8' );
               return file ;
              }
              else{
               const file = fs.readFileSync(`${this.rootDir}/pages/public${fileName}.htm` , 'utf-8' );
               return file ;
              }
          }
          catch(e){
              if(e){
                   const file = fs.readFileSync(`${this.rootDir}/pages/public/404.htm` , 'utf-8' );
                   return file ;
              }
          }
     }

      //METHOD FOR FIND PRIVATE FILE ACCORDING TO THE FILE NAME WITH EXTENTION ;
      FindPrivateFile( fileName ){
          try{
               const file = fs.readFileSync(`${this.rootDir}/pages/private/${fileName}` , 'utf-8' );
               return file ;
           }
           catch(e){
               if(e){
                    return 'file not exist with this name ' ;
               }
           } 
      }
}
module.exports = Methods ;