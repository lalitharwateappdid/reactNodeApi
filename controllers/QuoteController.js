const Quote = require("../models/QuoteModel");

exports.get = async (req, res) => {
    try {
        const quote = await Quote.findAll();
        res.status(200).json({
            "data": quote,
            "status": true
        })
    }
    catch (err) {
        res.status(400).json({
            "message": "Something went wrong " + err
        })
    }
}

exports.create = (req, res) => {
    const { quote } = req.body


    try {
        const quotes = Quote.create({
            quote: quote
        })

        res.status(200).json({

            "message": "Quote Added successfully"
        })
    }

    catch (err) {
        res.status(400).json({
            "message": "Something went wrong " + err
        })
    }
}

exports.destroy = (req, res) => {
    const { id } = req.body;

    db.query("DELETE  FROM quotes WHERE id=?", [id], (err, result) => {
        if (err) {
            return res.status(400).json({
                "message": "Something went wrong " + err,
                "status": false
            })
        }

        return res.status(200).json({
            "message": "Quote deleted successfully",
            "status": true
        })
    })
}

exports.edit = (req, res) => {
    const { id } = req.params;
    db.query("SELECT * FROM quotes WHERE id=?", [id], (err, result) => {
        if (err) {
            return res.status(200).json({
                "message": "Something went wrong " + err
            })
        }

        return res.status(200).json({
            "data": result
        })
    })

}


exports.update = (req, res) => {
    const { id, quote } = req.body

    db.query("UPDATE quotes SET quote=? WHERE id=?", [quote, id], (err, result) => {
        if (err) {
            return res.status(400).json({
                "message": "Something went wrong " + err
            })
        }

        return res.status(200).json({
            "data": result,
            "message": "Data Updated Successfully"
        })
    })
}

