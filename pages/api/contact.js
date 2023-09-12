import { mailOptions, transporter } from "@config/nodemailer"
const handler = async (req,res) => {
    if(req.method == "POST"){
        const data = req.body;
        if(!data.name || !data.email || !data.message){
            res.status(400).json({message: 'Bad request' })
        }
        try{
            await transporter.sendMail({
                ...mailOptions,
                text: 'test',
                html:"<h1>Test title</h1>"
            })
            return res.status(200).json({success: true})
        }catch(err){
            console.log(err)
            return res.status(400).json({message: err.message})
        }
    }
    res.status(400).json({message: 'Bad request' })
}
export default handler