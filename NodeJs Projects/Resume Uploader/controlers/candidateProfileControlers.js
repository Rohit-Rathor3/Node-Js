import candidateProfileModel from "../models/candidateProfile.js"
class CandidateProfileControllers {
    static saveProfile = async(req, res) => {
        try {

            const { name, email, dob, st, gender, loc } = req.body
            const pimage = req.files['pimage'][0].filename
            const rdoc = req.files['rdoc'][0].filename
            if (name && email && pimage && rdoc) {
                const doc = new candidateProfileModel({
                    name: name,
                    email: email,
                    dob: dob,
                    state: st,
                    gender: gender,
                    location: loc,
                    pimage: pimage,
                    rdoc: rdoc
                })
                const candidate = await doc.save()
                res.status(201).send({
                    "status": "successfull",
                    "message": "Profile Uploaded successfully",
                    "candidate": candidate
                })
            } else {
                res.status(200).send({ "status": "failed", "message": "all fields are required" })
            }
        } catch (error) {
            console.log(error);

        }
    }

    static profileList = async(req, res) => {
        try {

            const candidates = await candidateProfileModel.find()
            res.status(200).send({
                "status": "successfull",
                "message": "Profile Uploaded successfully",
                "candidate": candidates
            })

        } catch (error) {
            res.send(err);
        }
    }
}

export default CandidateProfileControllers;