window.onload= async function (){

    
    // Display artworks item
    showArtist();
    

    async function showArtist(){
        let artistList = await searchArtist();   // get artworks item
        let artistWrap = document.getElementById('artistWrap');
        let artistListItem = artistList.data;
        let pagination = document.querySelector('#pagination');
        let artistListItemLen = artistListItem.length; 
        let pages = Math.ceil(artistListItemLen / 6); // 6 items for 1 page
        

        let pageNum =''; // page number

        for(let i = 1; i <= pages; i++){
            let aTag = '<a href="#">'+ i +'</a>';
            pageNum += aTag;
            pagination.innerHTML = pageNum;
        }        
        
        pagination.childNodes[0].className = "active"; // the first item is active
        if(pagination.childNodes.length > 1){
            
        }
        
         
        // initial is 6 items for the page
        for(let i = 0; i < 6; i++){  
            artistWrap.innerHTML += `
                <div class="artistItems" id="artistItems" data-title="${artistList.data[i].title}">
                    <div class="artistImgWrap">
                        <img class="artistImg" src="https://lakeimagesweb.artic.edu/iiif/2/${artistList.data[i].image_id}/full/843,/0/default.jpg">
                    </div>
                    <div class="artistTitle">${artistList.data[i].title}</div>
                </div>             
            `;
        }
         
         
        //點級頁數事件
        pagination.addEventListener('click',function(e){
            e.target.parentNode.childNodes.forEach(ele => {  
                ele.className = '';
            });
            e.target.className += "active";

            let artistMin = 0; 
            let artistMax = 6; 
            let pageBtn = e.target.innerText; 
            artistWrap.innerHTML = ``; 

            if(pageBtn){
                artistMax *= pageBtn; // click pageBtn is 2，6 * 2 = 12 (12 items)
                artistMin = artistMax - 6; //If content_Max is 12，12 - 6 = 6 (6 items)
            } 

            // display the artistMin items to artistMax items
            for(let i = artistMin; i < artistMax; i++)
            {
                artistWrap.innerHTML += `
                    <div class="artistItems" id="artistItems" data-title="${artistList.data[i].title}">
                        <div class="artistImgWrap">
                            <img class="artistImg" src="https://lakeimagesweb.artic.edu/iiif/2/${artistList.data[i].image_id}/full/843,/0/default.jpg">
                        </div>
                        <div class="artistTitle">${artistList.data[i].title}</div>
                    </div>             
                `;
            }
            artistMax = 6;
            artistMin = 0;
        });
    }

    // Search artworks 
    async function searchArtist() {
        let response = await fetch(`https://api.artic.edu/api/v1/artworks`);
        let data = await response.json();
        return data;
    }

    // Search Bar
    document.addEventListener('keyup', searchKey);

    function searchKey() {
        let searchBar = document.getElementById('searchBar');
        let filter = searchBar.value.toUpperCase();  // search bar value
        let artistItems = document.getElementsByClassName('artistItems');

        for (i = 0; i < artistItems.length; i++) { 
            if (artistItems[i].dataset.title.toUpperCase().indexOf(filter) > -1) {
                artistItems[i].style.display = "block";
            }
            else {
                artistItems[i].style.display = "none";              
            }
        }
    }

}
