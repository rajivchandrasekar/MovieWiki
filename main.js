  var input = document.getElementById("val_search");

  var print = document.querySelector("#out");
  var total= document.querySelector("#out1");
input.addEventListener("keyup", function(event) {

  if (event.keyCode === 13) {

    event.preventDefault();

    document.getElementById("press").click();
  }
});
function check()
{
  let input = document.getElementById('val_search').value;
  if(input.length==0){
    console.log('error');
      alert("Please enter a valid name");
    }
    else{
      search()
    }
}
  function search()
  {    
    let input = document.getElementById('val_search').value;

    print.textContent = "Showing result for '"+input+"'";
    console.log(input);
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=871c4c3d&s=${input}`)
      .then(response => response.json())
      .then((data) => {
      //a.href="test.html?cname="+data.;  
      let output='<div class="row">'
      let counter=0,c=0,flag=0;
      
      for(let i = 0 ; i <data.Search.length;i++)
      {
        total.textContent = "Total Results for search '"+data.totalResults+"'";
          c++;
      output += `
     <div class="col-lg-4">        
          <a href="test.html?cname=${data.Search[i].Title}" onclick="window.open('file:///C:/Users/preet/Downloads/MovieWiki/MovieInfo/test.html)">

              <img src="${data.Search[i].Poster}">
              <h3 style="color:white;">${data.Search[i].Title}</h3>
              </a>           
      </div>
          `;
      if(c==6)
      {
         flag=1;
        break;
      }
      if(counter<2)
          {
            counter++;
          }
          else
          {
            output+='</div><div class="row">';
            counter=0;
          }
        }
        
        output+='</div>';
        if(flag==1)
        {
          output+='<center><button class="btn btn-success" value="Show more" onclick="show()">Show more</button><div><br>'
        }
          document.getElementById('results').innerHTML = output;
      });
  }
  function show()
  {
    
    document.body.style.backgroundColor = "black";
    
    let input = document.getElementById('val_search').value;
    
    console.log(input);
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=871c4c3d&s=${input}`)
      .then(response => response.json())
      
      .then((data) => {
        
      let output='<div class="row">'
      let counter=0,c=0,flag=0;
      
      for(let i = 0 ; i <data.Search.length;i++)
      {
          
     output += `
     <div class="col-lg-4">
            
            <a href="https://www.imdb.com/title/${data.Search[i].imdbID}" onclick="update()">
              <img src="${data.Search[i].Poster}">
              <h3 style="color:white;">${data.Search[i].Title}</h3>
              </a>
            
      </div>
          `;
      if(counter<2)
          {
            counter++;
          }
          else
          {
            output+='</div><div class="row">';
            counter=0;
          }
        }
        
        output+='</div>';
         output+='<center><button class="btn btn-danger" value="Show Less" onclick="search()">Show less</button><div><br>'
          document.getElementById('results').innerHTML = output;
      });
  }
  function update()
  {
    document.getElementById('val_search').value = '';
  }