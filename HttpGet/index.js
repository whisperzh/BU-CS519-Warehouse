module.exports = async function (context,input) {
    try{
        var documents = await context.bindings.inputDocument;
        console.log(documents)
    }catch(error)
    {
        console.log(error);
        context.res = {
            status: 500,
            body: error
          };
    }
    
    // Return the matching documents as the response
    context.res = {
      status: 200,
      body: documents
    };
    // "sqlQuery": "SELECT * from c where c.ShipmentID = {ShipmentID}"

}