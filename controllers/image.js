const Clarifai=require('clarifai');
const app=new Clarifai.App({
    apiKey:'093b740c1b314604a3332e6f394be08d'
  });
  const handleApiCall=(req,res)=>{
    app.models.predict(Clarifai.FACE_DETECT_MODEL,req.body.input)
    .then(data=>{
        res.json(data);
    })
    .catch(err=>res.status(400).json('unable to fetch api'));

  }
const handleImage=(req,res,db)=>{
    const {id}=req.body;
    db('users').where('id','=',id)
   .increment('enteries',1)
   .returning('enteries')
   .then(enteries=>{
       res.json(enteries[0])
   })
   .catch(err=>res.status(400).json('unable to update'))}
    module.exports={
        handleImage:handleImage,
        handleApiCall:handleApiCall
    }

    