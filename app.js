const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://goutham:goutham123@cluster0.umdwywd.mongodb.net/hackathonTeamsDB")
.then(
    () => {
        console.log("MongoDB Connected")
    }
).catch(
    (error) => {
        console.log(error)
    }
)

const TeamData = mongoose.model("HackathonTeamDatas",new mongoose.Schema({
    teamId : String,
    Name : String,
    leaderName : String,
    leaderEmail : String,
    leaderPhone : String,
    college : String,
    numOfMembers : String,
    projectTitle : String,
    problemStatement : String,
    techStack : String,
    mentorName : String,
    regDate : String,
    tableNo : String
}))

app.get("/test", (req,res) => {
    res.send("Hello")
})

app.listen(3000, () => {
    console.log("Server Started")
})