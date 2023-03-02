module.exports = async function (context, req) {
    const newData = {
        Date: req.body.Date,
        WarehouseID: req.body.WarehouseID,
        ShippingPO: req.body.ShippingPO,
        ShipmentID: req.body.ShipmentID,
        BoxesRcvd: req.body.BoxesRcvd,
        ShipperID:req.body.ShipperID
      };
      console.log(req.body)
    try{
      context.bindings.inputDocument=JSON.stringify(newData);
      
      context.res = {
        status: 200,
        body: "Data inserted successfully"
      };
    }catch(error)
    {
        console.log(error);
    }
}