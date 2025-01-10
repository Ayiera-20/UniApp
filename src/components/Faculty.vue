<template>
    <div class="faculty">
        <h1>Faculty Profile</h1>
        <p>Explore opportunities to engage with people, ideas, art, and education across campus.</p>
        <form class="form-container">
            <input type="text" placeholder="Keyword in name, title etc"/>
            <select>
                <option value="" disabled selected>Select department</option>
                <option value="HR">HR</option>
                <option value="Finance">Finance</option>
                <option value="Marketing">Marketing</option>
            </select>
            <button type="submit">Submit</button>
        </form>

        <div class="profiles">
          <div>
          <img src="./../assets/lec.jpg" alt="faculty profile photo" class="photo">
          <p class="p-text1">John Doe</p>
          <p class="p-text">Assistant Professor(School of Hospitaliy)</p>
          <a href="#">  View Details</a>
          </div>
          <div>
          <img src="./../assets/lec.jpg" alt="faculty profile photo" class="photo">
          <p class="p-text1">John Doe</p>
          <p class="p-text">Assistant Professor(School of Hospitaliy)</p>
          <a href="#">  View Details</a>
          </div>
          <div>
          <img src="./../assets/lec.jpg" alt="faculty profile photo" class="photo">
          <p class="p-text1">John Doe</p>
          <p class="p-text">Assistant Professor(School of Hospitaliy)</p>
          <a href="#">  View Details</a>
          </div>
          <div>
          <img src="./../assets/lec.jpg" alt="faculty profile photo" class="photo">
          <p class="p-text1">John Doe</p>
          <p class="p-text">Assistant Professor(School of Hospitaliy)</p>
          <a href="#">  View Details</a>
          </div>
          <div>
          <img src="./../assets/lec.jpg" alt="faculty profile photo" class="photo">
          <p class="p-text1">John Doe</p>
          <p class="p-text">Assistant Professor(School of Hospitaliy)</p>
          <a href="#">  View Details</a>
          </div>
          <div>
          <img src="./../assets/lec.jpg" alt="faculty profile photo" class="photo">
          <p class="p-text1">John Doe</p>
          <p class="p-text">Assistant Professor(School of Hospitaliy)</p>
          <a href="#">  View Details</a>
          </div>
        </div>
        <v-btn 
            color="black" 
            href="#"
            class="more-btn">
                View More
                <v-icon right>mdi-arrow-right</v-icon>
            </v-btn>

       
        
    </div>

</template>

<style>
.faculty{
  justify-content: center;
  display: grid;
}
.faculty p, h1{
  text-align: center;
}
.form-container{
    display: flex;
    gap: 10px;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
}
.form-container input,
.form-container select,
.form-container button{
  border: 1px solid black;
  border-radius: 4px;
  padding: 8px 12px;
}

.form-container button {
      background-color: red;
      color: white;
      border: none;
      cursor: pointer;
    }
    .form-container button:hover {
      background-color: darkred;
    }

.photo{
  max-width: 200px;
  width: 100%;
  height: auto;
  margin: 0 auto;
}

.profiles{
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    gap: 20px;
    margin-top: 50px;
}

.profiles div {
    display: flex; /* Flexbox for vertical stacking */
    flex-direction: column; /* Stack content vertically */
    align-items: center; /* Align items to the left */
    text-align: left; /* Ensure text is aligned to the left */
}

.p-text{
  color: gray;
}

.p-text1{
  font-weight: bold;
  text-align: left;
}

</style>
