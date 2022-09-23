function fetchCourseData(){

    $.get('https://codingninjas.in/api/v3/courses',function(data){
        // console.log(data);

        // hide fetch box content
        $('#box').css('display', 'none');
        
        let numberOfCourses = data.data.courses.length;
        console.log(numberOfCourses);
        for(let i=0;i<numberOfCourses;i++){
            
            let courseName = data.data.courses[i].name;
            let courseLevel = data.data.courses[i].level;
            let coursePreviewImage = data.data.courses[i].preview_image_url;

            if(!coursePreviewImage)
                continue;

            let card = ` 
            <div class="cards">
                <div class="preview-images">
                    <img src=${coursePreviewImage} alt="iamge not found">
                </div>
                <div class="course-details">
                    <div class="course-name">
                        ${courseName}
                    </div>
                    <div class="course-level">
                        ${courseLevel}

                    </div>
                </div>
            </div>`;
            
            // console.log(card);
            
            $('#gallary').append(card)


        }




    }).fail(function(){
        alert('\nSomething went wrong\nPlease try After sometimes\nThank You')
    })


}


$('#button').on('click',fetchCourseData);