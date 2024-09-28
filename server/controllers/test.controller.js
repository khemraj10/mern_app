// To fill Data in DB

let fillData = async (req, res) => {
    try {
        // let db = req.app.get("dsdDB");
        
        // let entryArr = req.body.entryArr;

        // let resp = await db.collection("search").insertMany(entryArr);

        // return res.status(200).json({ message: resp });
        return res.status(200).json({ message: 'ok' });

    } catch (error) {
        console.log(`Error in fillData : ${error}`);
        return res.status(500).json({ message: "Error" });
    }
}

module.exports = { fillData }