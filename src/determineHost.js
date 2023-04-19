class determineHost {

host = window.location.host;

 determineTitle (){
    if(this.host == "bsbs.edsite.black"){
      return "Blue Skies, Black Smoke";
    } else if (this.host == "shadowsong.edsite.black"){
        return "Shadowsong";
    } else if (this.host == "gradia.edsite.black"){
        return "Tails of Gradia";
    }
    return "Blue Skies, Black Smoke";
  }

   determineFetch (){
    if(this.host == "bsbs.edsite.black"){
      return "bsbs";
    } else if (this.host == "shadowsong.edsite.black"){
        return "shadowsong";
    } else if (this.host == "gradia.edsite.black"){
        return "gradia";
    }
    return "bsbs";
  }

}

  export default determineHost;