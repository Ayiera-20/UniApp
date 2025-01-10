<template>
    <div id = 'LandingPage'>
        <div class="uni-image">
            <h1>Welcome to University of Africa</h1>
            <p>Where Knowledge Meets Innovation, and Futures Are Forged.</p>
        </div>
        <div class="purpose">
            <h2>A Purposeful University</h2>
            <p>Our mission is to provide a transformative educational experience that empowers individuals to achieve their full potential, foster innovation, and contribute to the advancement of society. Through excellence in teaching, research, and community engagement, we aim to cultivate leaders who inspire change and make a positive impact on the world.</p>
            <v-btn 
            color="black" 
            href="/about"
            class="more-btn">
                More About University of Africa
                <v-icon right>mdi-arrow-right</v-icon>
            </v-btn>
        </div>
        <section class="academics">
            <h2>Academics</h2>
            <p class="acad-p">We offer broad and balanced academic programs that are mutually reinforcing and empahsize high quality and creative instruction at the undergraduate and graduate levels.</p>
            <h3>200 major Programs</h3>
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
            <div class="departments">
            <!-- Department 1 -->
            <div class="department-card">
            <img src="./../assets/techathon.jpg" alt="ECE Department">
            <h3 class="department-title">Department of ECE</h3>
            <p>BSc in Electrical & Electronic Engineering - 140</p>
            <p>BSc in Computer Science & Engineering - 140</p>
            <p>BSc in Electronics & Telecommunication Engineering - 140</p>
            <a href="#" class="learn-more">Learn more &rarr;</a>
            </div>

            <!-- Department 2 -->
            <div class="department-card">
            <img src="./../assets/Career day.jpg" alt="School of Law Department">
            <h3 class="department-title">Department of Law</h3>
            <p>Bachelor of Law - 146 Credit Hours</p>
            <a href="#" class="learn-more">Learn more &rarr;</a>
            </div>

            <!-- Department 3 -->
            <div class="department-card">
            <img src="./../assets/young-student-learning-library.jpg" alt="Business Department">
            <h3 class="department-title">Department of Business</h3>
            <p>BBA - 123 Credits</p>
            <p>MBA (Regular) - 60 Credits</p>
            <p>EMBA (Executive) - 45 Credits</p>
            <a href="#" class="learn-more">Learn more &rarr;</a>
            </div>

            <!-- Department 4 -->
            <div class="department-card">
            <img src="./../assets/friends-people-group-teamwork-diversity.jpg" alt="English Department">
            <h3 class="department-title">Department of English</h3>
            <p>BA in English - 120 Credits</p>
            <p>MA in English Language Teaching - 36 Credits</p>
            <a href="#" class="learn-more">Learn more &rarr;</a>
            </div>
            </div>
        </section>
        
            <div class="campus_life">
            <h3>CAMPUS LIFE</h3>
            <p>Build a vibrant community of creative and accomplished people around the world</p>
            </div> 
        <div class="campus_photos">
            <img src="./../assets/full-shot-young-people-hostel.jpg" alt="network" width="30%" height="300px">
            <img src="./../assets/side-view-female-friends-playing-basketball.jpg" alt="students playing-basketball" width="30%" height="300px">
            <img src="./../assets/friends-people-group-teamwork-diversity.jpg" alt="students studying together" width="30%" height="300px">
            <img src="./../assets/students-paying-attention-class.jpg" alt="students-paying-attention-class" width="30%" height="300px">
            <img src="./../assets/multi-ethnic-group-graduates-smiling-with-success-generated-by-ai.jpg" alt="graduating students" width="30%" height="300px">
            <video width="30%" height="300px" autoplay muted>
                <source src="./../assets/university lib.mp4" type="video/mp4">
            </video>
        </div>   
        <section class="research">
            <h4>Research</h4>
            <p>
                University of Africa is a vibrant research community having a good number of research works, 
                initiatives functions of diverse disciplines. The motive of this community is to create sustain a sisgnificant mark inside
                the cointry and globally as well through its research, innovation, ideas actions.
            </p>
            <div class="research-data">
                <div>
                    <p class="research-number">15+</p>
                    <p> Case study</p>
                </div>
                <div>
                    <p class="research-number">13+</p>
                    <p>Publications</p>
                </div>  
            </div>
            <v-btn 
            color="black" 
            href="/about"
            class="more-btn">
                More About Research
                <v-icon right>mdi-arrow-right</v-icon>
            </v-btn>
        </section> 
        <section class="events-section">
            <h4>Upcoming events</h4>
        <p>Explore opportunities to engage with people, ideas, art and education across campus.</p>
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
        <v-btn 
            color="black" 
            href="/about"
            class="more-btn">
                View More
                <v-icon right>mdi-arrow-right</v-icon>
            </v-btn>
        <div class="apply">
            <div>
                <h5>Choose your <br>right department</h5>
                <p>Offer extraordinary freedom to exlore, to collaborate, and <br> to challenge yourself.</p>
                <v-btn 
            color="black" 
            href="/about"
            class="more-btn">
                Apply Now
                <v-icon right>mdi-arrow-right</v-icon>
            </v-btn>
            </div>
            <div>
                <img src="./../assets/portrait-young-woman-with-laptop-hands-outside-school.jpg" alt="a student" width="450" height="300">
            </div>
        </div>
        </section>    

        
    </div>
        
</template>
<script>


</script>

<style>
#LandingPage {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.campus_life{
    padding: 20px;
    margin-top: 40px;
}
.campus_life h2{
    font-weight: bold;
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


.major {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
}

.major-item {
    text-align: center;
    margin-bottom: 20px;
    margin-right: 5px;
}

.uni-image{
    background: url('./../assets/Uni-image.jpg') no-repeat center center/cover;
    height: 600px;
    width: 100%;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-blend-mode: overlay;
    background-color: rgba(0, 0, 0, 0.3)
}

.uni-image h1{
    font-size: 80px;
}

.purpose{
    text-align: center;
    padding: 60px;
    margin-left: 120px;
    margin-right: 120px;
}

.more-btn{
    margin-top: 20px;
}

.departments {
  display: grid;
  grid-template-columns: 1fr 1fr; /* Two equal columns */
  gap: 20px; /* Space between cards */
  max-width: 800px;
  margin: 0 auto; /* Center grid */
}

/* Individual Cards */
.department-card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
}

.department-card:hover {
  transform: translateY(-10px); /* Slight hover effect */
}

.department-card img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.department-title {
  font-size: 1.5rem;
  margin: 15px 0 0 0px;
  color: #2b3d9f; /* Blue title */
}

.department-card p {
  margin: 5px 15px;
  font-size: 0.9rem;
  color: #555;
}

.learn-more {
  display: inline-block;
  margin: 15px;
  font-size: 0.9rem;
  color: #e74c3c; /* Red text */
  text-decoration: none;
  font-weight: bold;
}

.learn-more:hover {
  text-decoration: underline;
}

.academics{
    background-color: rgba(247,237,225,255);
    padding: 60px 100px 100px 100px;
}
.academics h2{
    text-align: center;
    font-weight: bold;
}
.academics h3{
    text-align: center;
    padding-bottom: 20px;
}
.acad-p{
    text-align: center;
    margin: 20px 280px 40px 280px;
}

.research{
    text-align: center;
    background-color: rgba(247,237,225,255);
    padding: 60px 100px 50px 100px;
    margin: 20px 0 30px;
}

.research h4{
    font-weight: bold;
}

.research p{
    padding: 20px 100px 0 100px;
}

.research-data{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px; 
    max-width: 800px;
    margin: 0 auto; 
}
.research-number{
    font-size: 60px;
    font-weight: bold;
    color: #e74c3c;
}

.events-section{
    text-align: center;
    padding: 60px;
}
.events-section h4{
    font-weight: bold;
    margin-bottom: 20px;
}

.apply {
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
    margin-top: 30px;
    /* padding: 60px 300px 100px 300px; */
    text-align: left;
    background-color: rgba(247,237,225,255);
    padding: 60px;
}

.apply div {
    margin-right: 80px;
}

.apply p{
    padding: 10px 0px 0px 0px;
}

.apply h5{
    font-weight: bold;
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
    .departments {
    grid-template-columns: 1fr; /* Single column for small screens */
  }
}




</style>
    
