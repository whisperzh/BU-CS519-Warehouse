module.exports = async function (context,input) {
    try{
        var documents = await context.bindings.inputDocument;
        console.log(documents)

         var returnBody={
          Date:documents[0]["Date"],
          WarehouseID:documents[0]["WarehouseID"],
          ShippingPO:documents[0]["ShippingPO"],
          ShipmentID:documents[0]["ShipmentID"],
          BoxesRcvd:documents[0]["BoxesRcvd"],
          ShipperID:documents[0]["ShipperID"]
      };
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
      body: returnBody
    };
    // "sqlQuery": "SELECT * from c where c.ShipmentID = {ShipmentID}"

}