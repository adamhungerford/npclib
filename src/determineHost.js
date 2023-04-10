function determineHost (){
    let host = window.location.host;

    const hostInfo = {
        dbName: "",
        title: ""
    };

    if(host == "bsbs.edsite.black"){
      hostInfo.dbName = "bsbs";
      hostInfo.title = "Blue Skies, Black Smoke";
    } else if (host == "shadowsong.edsite.black"){
        hostInfo.dbName = "shadowsong";
        hostInfo.title = "Shadowsong";
    } else if (host == "gradia.edsite.black"){
        hostInfo.dbName = "gradia";
        hostInfo.title = "Tails of Gradia";
    } else {
         hostInfo.dbName = "bsbs";
      hostInfo.title = "Blue Skies, Black Smoke";
    }
  
    return hostInfo;
  }

  export default determineHost;