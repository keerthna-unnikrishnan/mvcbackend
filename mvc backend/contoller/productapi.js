
const product = require("../model/product")


// api to  add
const createproduct = async(req,res) => {
    try{
        await product(req.body).save()
        res.send({message:"data added"})
    } catch (error){
        console.log(error);
    }
}

const viewproduct = async(req,res) => {
    try{
      const data =   await product.find()
        res.send(data)
    } catch (error){
        console.log(error);
    }}


    const deleteproduct = async(req,res) => {
        try{
          await product.findByIdAndDelete(req.params.id)
            res.send({message:"deleted successfull"})
        } catch (error){
            console.log(error);
        }}

        const updateproduct = async(req,res) => {
            try{
              await product.findByIdAndUpdate(req.params.id,req.body)
                res.send({message:"updated successfull"})
            } catch (error){
                console.log(error);
            }}
//

module.exports={createproduct,viewproduct,deleteproduct,updateproduct}