
//client class
const { MongoClient } = require('mongodb');
const uri = "mongodb://localhost:27017"

//saveQueryData();
//connect to mongoDb
async function saveQueryData(){
    const client = new MongoClient(uri);
    try{
        await client.connect();
        const db = client.db("logAdmin");
        const logDetails = db.collection("log");
        const searchCursor = await logDetails.find();
        const result = await searchCursor.toArray();
        console.table(result)

        const searchBy 

        if(document.getElementById("rbTopic").checked){
            searchBy = document.getElementById("rbTopic").value
        }else{
            searchBy = document.getElementById("rbLanguage").value
        }

        //insert into db
        const insertCursor = await logDetails.insertOne({
            "keyword" : keyword,
            "searchBy" : searchBy,
            "language" : document.getElementById("inputSearch").value, //refer to language/topic
            "url" : document.getElementById("urlHidden").value,
            "status" : document.getElementById("statusHidden").value,
            "executionTime" : document.getElementById("executionTimeHidden").value,
            "dateExecuted" : new Date.now()
        })
    }catch(ex){
        console.error(`error ${ex}`)
    }finally{
        client.close();
    }
}
async function retrieveAdminReport(){
    const client = new MongoClient(uri);
    try{
        await client.connect();
        const db = client.db("logAdmin");
        const logDetails = db.collection("log");
        const searchCursor = await logDetails.find();
        const result = JSON.stringify(await searchCursor.toArray());
        
        result.items.forEach(i => {

            const keyword = document.createElement("span")
            keyword.textContent = i.keyword; 
            const searchBy = document.createElement("span")
            searchBy.textContent = i.searchBy; 
            const language = document.createElement("span")
            language.textContent = i.language; 
            const url = document.createElement("span")
            url.textContent = i.url; 
            const status = document.createElement("span")
            status.textContent = i.status; 
            const executionTime = document.createElement("span")
            executionTime.textContent = i.executionTime; 
            const dateExecuted = document.createElement("span")
            dateExecuted.textContent = i.dateExecuted;            
            
            divResult.appendChild(keyword)
            divResult.appendChild(searchBy)
            divResult.appendChild(language)
            divResult.appendChild(url)
            divResult.appendChild(status)
            divResult.appendChild(executionTime)
            divResult.appendChild(dateExecuted)
            divResult.appendChild(document.createElement("br"))
        })

    }catch(ex){
        console.error(`error ${ex}`)
    }finally{
        client.close();
    }
}
