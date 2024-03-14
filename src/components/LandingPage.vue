<script>


</script>

<template>
    <div id = 'LandingPage'>
        
        <div class="awards">
            <h1>Welcome to University of Africa</h1>
            <br>
        </div>
        <div class="logos">
                <img src="./../assets/research-logo-design.jpg" alt="research award logo" width="80" height="60" >
                <br>
                <img src="./../assets/robotics.jpg" alt="robotics logo" width="60" height="60">
                <br>              
                <img src="./../assets/diversity.jpg" alt="diversity & Inclusion award logo" width="60" height="60">
                <br>            
                <img src="./../assets/Innovation.png" alt="innovation hub award logo" width="200" height="50">
              
        </div>
        <br>
        <br>
        <h2>200 major Programs</h2>
        <br>
        <div class="major">
            <div class="major-item">
                <img src="./../assets/young-student-learning-library.jpg" alt="young student studying" width="300" height="200">
                <p>Graduate</p>
            </div>
            <div class="major-item">
                <img src="./../assets/portrait-woman-with-laptop-working.jpg" alt="portrait-woman-with-laptop-working" width="300" height="200">
                <p>Lifelong learning</p>
            </div>
            <div class="major-item">
                <img src="./../assets/beautiful-day-campus.jpg" alt="young student smiling" width="300" height="200">
                <p>Undergraduate</p>
            </div>
        </div>    
        <div class="courses">
            <p id="schools">SIX schools in which to pursue your passions</p>
                <ul id="schools">
                    <li>Business</li>
                    <li>Computer technology</li>
                    <li>Psychology</li>
                    <li>Pharmacy</li>
                    <li>Engineering</li>
                    <li>Law</li>
                </ul>
            <button class="button">Learn more</button> 
        </div>
            <h3>CAMPUS LIFE</h3>
            <div class="campus_life">
            <p>Build a vibrant community of creative and accomplished people around the world</p>
            </div> 
        <div class="campus_photos">
            <img src="./../assets/full-shot-young-people-hostel.jpg" alt="network" width="40%" height="400px">
            <img src="./../assets/side-view-female-friends-playing-basketball.jpg" alt="students playing-basketball" width="40%" height="400px">
            <img src="./../assets/friends-people-group-teamwork-diversity.jpg" alt="students studying together" width="40%" height="400px">
            <video width="40%" height="400px" autoplay muted>
                <source src="./../assets/university lib.mp4" type="video/mp4">
            </video>
            <img src="./../assets/students-paying-attention-class.jpg" alt="students-paying-attention-class" width="40%" height="400px">
            <img src="./../assets/multi-ethnic-group-graduates-smiling-with-success-generated-by-ai.jpg" alt="graduating students" width="40%" height="400px">
        </div>    
        <h4>Upcoming events</h4>
        <div class="events">
            <div>
                <img src="./../assets/Career day.jpg" alt="career advisors" width="320" height="240">
                <p>Career day</p>  
            </div>
            <div>
                <img src="./../assets/culture week.jpg" alt="students dressed in cultural attires" width="360" height="240">
                <p>Cultural week</p>
            </div>
            <div>
                <img src="./../assets/tech.jpg" alt="computer technology" width="320" height="240">
                <p>Techathon</p>
            </div>
        </div>
        <button class="button1">View more</button>
        <div class="apply">
            <div>
                <h5>Choose your right department</h5>
                <p>Lorem ipsum........</p>
                <button>Apply here</button>
            </div>
            <div>
                <img src="./../assets/portrait-young-woman-with-laptop-hands-outside-school.jpg" alt="a student" width="600" height="400">
            </div>
        </div>
    </div>
        
</template>

<style>
#LandingPage {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
}

.awards,
.major,
.courses,
.campus_life,
.events,
.apply {
    text-align: center;
}

.logos,
.major,
.campus_photos,
.events {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.campus_photos img,
.campus_photos video {
    margin: 10px;
}

.events div {
    margin: 20px;
}

.apply {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
}

.apply div {
    margin-right: 20px;
}

.button,
.button1,
.apply button {
    margin-top: 20px;
}

/* Adjustments for mobile responsiveness */
@media (max-width: 768px) {
    .campus_photos img,
    .campus_photos video {
        width: 100%;
    }

    .apply {
        flex-direction: column;
        align-items: center;
    }

    .apply div {
        margin-right: 0;
        margin-bottom: 20px;
    }
}
.major {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-bottom: 20px;
}

.major-item {
    text-align: center;
    margin-bottom: 20px;
    margin-right: 5px;
}

</style>
    
