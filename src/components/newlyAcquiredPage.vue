<template>
    <h1>Newly Acquired Skills</h1>
    <div>
        <!-- This is where I list all my newly acquired skills. -->
    </div>
    <br/>
    <br/>
    <div class = "text">
        In 2019 I decided to return to school to learn about Computer Science towards making a career change. Having witnessed the advancements in technology over the years and seeing how widespread its reach is with day to day living, I knew it would be an ever-growing industry I wanted to be a part of.
        <br/>
        <br/>
        <br/>
        <b><i>From my time in Champlain College’s Computer Technology program I have acquired the following skills and experience:</i></b>
        <br/>
        <br/>
            <table>
                <tr>
                    <td><b>Programming</b>:</td>
                    <td class="left">Java, C#, Python</td>
                </tr>
                <tr>
                    <td><b>Front-End Design</b>:</td>
                    <td class="left">HTML, CSS</td>
                </tr>
                <tr>
                    <td><b> Web Development</b>:</td>
                    <td class="left">Spring Boot Framework, ASP.NET, PHP, JavaScript, jQuery, Vue.js</td>
                </tr>
                <tr>
                    <td><b>Databases</b>:</td>
                    <td class="left">TSQL, SQL, MS SQL Server</td>
                </tr>
                <tr>
                    <td><b>Systems Analysis</b>:</td>
                    <td class="left">Object-Oriented Programming, Agile(SCRUM)</td>
                </tr>
                <tr>
                    <td><b>Development Tools</b>:</td>
                    <td class="left">IntelliJ Idea Ultimate Ed., Visual Studio Enterprise with .NET, Android Studio, Unity Development Platform, Git Hub, Jira, Docker</td>    
                </tr>
            </table>
        <br/>
        <br/>
        As I am currently finishing up my final semester, here are some highlights of projects I have enjoyed working on along the different languages, frameworks and concepts learned along the way.

    <br/>
    <br/>
    <div class = "right">
        <h4>UMCL Inventory Management System</h4>

        <p>
            <img class="right" src = "@/assets/ecp.jpg" height="65%" width="65%">
            For our third year Final Project course, I am working on an external client project for Universal Marketing Co., Limited, a wholesale supplier of plumbing equipment situated overseas. The project is done using Spring Boot framework with Vue.js as the frontend framework. 
            <!-- Developing this system using the Agile methodology and as part of a group effort has so far been a challenging yet fulfilling experience: from backend business logic programming to frontend user interface design along with unit, integration and end-to-end testing, this is my most complete full-stack experience to date. -->
        </p>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <div>
     <h4>Web Design and User Interface Experience</h4>
<p><img class="left" src="@/assets/website_screencap.jpg" width="50%" height="50%"/>One of the first courses I had taught HTML, CSS and how to create and design a functional user   interface. I really enjoyed the balance of visual design and programming using tags while learning about internet protocols and communication. For this course’s final project I created a web page sharing some favourite family recipes in highlighting my appreciating for cooking. 
</p>
        <br/>

    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <div class = "right">
        <p>
        <h4>Mobile Application Development</h4>
        <img class="right" src="@/assets/meal_stash2.png"/><img class="right" src="@/assets/android1.jpg" height="32%" width="32%"/>
        There were a few courses dealing with application development with Android Studio and Xamarin. I appreciated being able to develop and demonstrate an application in a short amount of time and learning how to program a variety of functionalities and create components that we interact with every day on our mobile devices.
        </p>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div class = "left">
        <h4>Game Development</h4> 
        <p>
        <img src = "@/assets/cupcake_escape.jpg" height="60%" width="60%"/>
        Written in C# using the Unity Development platform, Cupcake Escape was a final project for my second year Game Development course. 
        <!-- This course was particularly enjoyable for me, having previous experience in video and film production, a lot of the programming concepts were easier to comprehend which made programming camera movement, lighting, object physics and other game functionality quite fun.  -->
        To date, Cupcake Escape is one of the most fulfilling projects I have completed as the result practically matched the conceptual iteration and it is a fully functional game I programmed on my own.
        </p>
        <br/>

    </div>
</div>
</template>

<script>
export default{
name: 'NewlyAcquiredPage'
}
</script>

<style scoped>
.text {
    text-align: center;
    margin: 0% 10% 0% 10%;
    padding: 0% 10% 0% 10%;
    font-size: larger;
}
img {
    float: left;
    padding: 5%;
}
.right {
    float: right;
    padding: 5%;
}
table {
    align-content: center;
    margin-left: 20%;
}
td.left {
    text-align: left;
}


</style>