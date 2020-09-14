
exports.parseV1 = async (req, res) => {

    var requestBody = req.body;
    var str = requestBody.data;
    var name = str.split('0000')
    var firstName = name[0]+"0000";
    var name2 = str.split('000')
    var lastName = name2[1].slice(1) +'000'
   res.status(200).json( {statusCode : "200", data : {firstName : firstName ,lastName: lastName ,clientId: name2[2]}  });
}

exports.parseV2 = async (req, res) => {
    var requestBody = req.body;
    var str = requestBody.data;
    var name = str.split(new RegExp('0'));
    res.status(200).json( {statusCode : "200", data : {firstName :name[0] ,lastName: name[4] ,clientId: name[7].slice(0,3) +"-"+name[7].slice(3)}});
}