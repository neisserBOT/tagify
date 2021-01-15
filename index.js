/////////////////////////////////////////
// API NEUROMETRICS LAB
/////////////////////////////////////////
function uploadImage(image){
    var data = {"image":encodeURI(image.toDataURL())}

    fetch(`http://0.0.0.0:8080/tagify-api`, {
        method : "POST",
        body : JSON.stringify(data),
        headers : new Headers({
            "content-type": "application/json"
        })
    }).then(function(response){
        if(response.status !== 200){
            console.log(`There is a problem: ${response.status}`);
            return;
        }
        response.json().then(function(data){
            document.getElementById("results").innerHTML = data["response"]
        });
    }).catch(function(error){
        console.log(error);
    });
}

