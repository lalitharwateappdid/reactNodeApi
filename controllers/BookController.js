const db = require("../database/database");

exports.get = (req,res) => {
    db.query("SELECT * FROM books ORDER BY id desc",(err,results)=>{
        if(err){
            console.error("Error in fetching book data");
            res.status(500).json({"status":false})
            
            return;
        }
        // res.send("Hello wrdl");
        return res.status(200).json({
            "data":results
        })
    })
}

exports.create = (req,res) => {
    const {name,description,pages_in_books,price} = req.body;
    console.log(req.body);
    db.query("INSERT INTO books(name,description,pages_in_book,price) VALUES(?,?,?,?)",[name,description,pages_in_books,price],(err,results)=> {
        if(err){
            res.status(400).json({error:"Error creating book"});
           
        }
            res.status(200).json({status:true,message:"Book created successfully",data:results});
    })
}

exports.destroy  = (req, res) => {
    
    const { id } = req.body;

   
    if (!id) {
        return res.status(400).json({ message: 'Book ID is required', status: false });
    }

 
    db.query('DELETE FROM books WHERE id=?', [id], (err, results) => {
        if (err) {
            console.error('Error deleting book:', err);
            return res.status(500).json({ message: 'Something went wrong', status: false });
        }
        
       
    

       
        res.status(200).json({ message: 'Book deleted', status: true });
    });
};

exports.edit = (req,res) => {
    const {id} = req.params;

    if(!id){
        return res.status(404).status({
            "message":"Book not found"
        })
    }
    db.query("SELECT * FROM books WHERE id=?",[id],(err,result)=>{
        if(err){
            return res.status(400).json({
                message:"Something went wrong"
            })
        }

        return res.status(200).json({
            data:result
        });
    });
};

exports.update = (req,res) => {
    const {id,name,description,pages_in_book,price,status} = req.body;

    if(!id){
        return res.json({
            message:"Unable to find id",
            status:false
        });
        
    }

    db.query("UPDATE books SET name=?,description=?,pages_in_book=?,price=?,status=? WHERE id=?",[name,description,pages_in_book,price,status,id],(err,results)=>{
        if(err){
            return res.json({message:"something went wrong",err:err});
        }
        else{
            return res.status(200).json(
                {
                    message:"Data updated successfully"
                }
            )
        }
    })
};
    
