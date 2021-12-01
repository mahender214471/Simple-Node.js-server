/*
<====================== ABOUT FILE ======================>
MOTIVE => FILE FOR DEFINE ALL ROUTES OF THIS SERVER ;
WRITER => MAHENDER RAJPUT ;
 */
const GlobalMethod = require('./middlewares/methods');
class Route{
    // CONNSTRUCTER FOR DEFINE GLOBAL METHODS AND PROPERTIES  FOR THIS CLASSS ; 
    constructor(app , db , rootDir ){
          // GLOBAL VARIABLE FOR THIS CLASS ;
          this.app     = app ;
          this.db      = db ;
          this.rootDir = rootDir ;
          this.Method = new GlobalMethod (this.rootDir);
          // CALL THE HTTP REQUIST METHODS ;
          this.Get();
          this.Post();
          this.Update();
          this.Delete();
    }

    //METHOD FOR GET ROUTES ;
    Get (){
         // DEFINE YOUR ALL GET  ROUTE HERE ....
          
         // ROUTE FOR RENDER PUBLIC FILES ;
         this.app.get('*' , ( req ,res ) => {
            const ReqUrl = req.url;
            const file = this.Method.FindPublicFile(ReqUrl);
            res.set('Content-Type', 'text/html');
            res.send(file);
        })
    }

    //METHOD FOR GET ROUTES ;
    Post (){
         // DEFINE YOUR ALL POST ROUTE HERE ....
    }

    //METHOD FOR GET ROUTES ;
    Update (){
         // DEFINE YOUR ALL UPDATE ROUTE HERE ....
    }

    //METHOD FOR GET ROUTES ;
    Delete (){
         // DEFINE YOUR ALL DELETE ROUTE HERE ....
    }
}

module.exports = Route ;