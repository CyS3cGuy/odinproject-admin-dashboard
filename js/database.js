// Assume all the data is fetched from backend and stored in array of objects
let announcements = [];
let projects = [];
let trendings = [];
let users = [];
let metadata = {
    trendingIntervalID: null,
    trendingAnimationSpeed: 20,  // Control speed here. Lesser number means higher speed       
    trendingAnimationMotion: 1,  // Ensure smoothness, increase by 1px for every interval    
}

function Announcement(date, title, summary) {
    this.date = date;
    this.title = title;
    this.summary = summary;
    this.ellipsisVar = null;
}

function Project(title, summary) {
    this.title = title,
    this.summary = summary;
}

function User(username, fullName, bgColor) {
    this.username = username;
    this.fullName = fullName;
    this.imgPath = `./images/pics/${username.toLowerCase()}/${username.toLowerCase()}-avatar-xs.png`;
    this.altText = `${username} Profile Pic`;
    this.bgColor = bgColor;
    this.userTag = `@${username.toLowerCase()}`;
}

function Trending(userObj, trendTitle) {
    this.user = userObj;
    this.trendTitle = trendTitle;
}

let tegan = new User("Tegan", "Tegan Kin", "pink");
let morgan = new User("Morgan", "Morgan Oakley", "yellow");
let kendali = new User("Kendali", "Kendali Lambghi", "grey");
let alex = new User("Alex", "Alex Turner", "lightblue");

users = [tegan, morgan, kendali, alex];
let currUser = morgan; 

announcements.push(new Announcement("03 Feb 2024", "Site Maintenance", 
    `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur unde consequuntur modi incidunt iure vel suscipit quaerat! Tenetur consequuntur incidunt ab?

    Voluptatem excepturi laudantium ipsa, iure cumque pariatur ipsam provident?`
));

announcements.push(new Announcement("27 Aug 2024", "Community Share Day", 
    `The warm glow of the evening sun bathed the quiet village in hues of orange and gold. A gentle breeze carried the scent of blooming jasmine, weaving through the narrow cobblestone streets. Children's laughter echoed faintly from a distant meadow, blending harmoniously with the chirping of crickets. Overhead, a lone sparrow darted across the sky, disappearing into the silhouette of the mountains beyond.`
));

announcements.push(new Announcement("02 Jan 2025", "Updated Privacy Policy", 
    `The sound of waves crashing against the shore filled the air as the sun dipped below the horizon. A lone fisherman stood at the edge of the pier, his silhouette framed by the fading light. Overhead, seagulls circled, their calls blending with the rhythm of the ocean.`
));

projects.push(new Project("Super Cool Project", 
    `The old oak tree swayed gently in the wind, its leaves whispering secrets to the dusk. Nearby, a fox darted through the tall grass, vanishing into the shadows of the forest.`
));

projects.push(new Project("Less Cool Project", 
    `The city streets buzzed with life as neon lights reflected off rain-soaked pavement. A street musician played a soulful tune on his saxophone, drawing a small crowd under the glow of a lamppost. In the distance, the rumble of thunder hinted at a storm rolling in.`
));

projects.push(new Project("Impossible Project", 
    `The scent of freshly brewed coffee filled the cozy café as rain tapped softly against the windows. A young artist sketched quietly in the corner, her pencil dancing across the page. 
    
    Outside, a passing stranger paused to share his umbrella with a stray dog, their shadows merging under the dim streetlights.`
));

projects.push(new Project("Easy Peasy App", 
    `The mountain peaks glistened with fresh snow, glowing pink under the first light of dawn. In the stillness, a lone eagle soared high above, its cry echoing across the valley below.`
));

projects.push(new Project("Ad Blocker", 
    `The lanterns swayed gently in the evening breeze, casting warm, flickering light across the cobblestone square. A group of travelers huddled around a storyteller, his voice weaving tales of distant lands and hidden treasures. Nearby, a black cat perched on a barrel, its green eyes glinting with curiosity. Above it all, the stars began to appear, painting the night sky with a thousand shimmering points of light.`
));

projects.push(new Project("Money Maker", 
    `The forest was alive with the rustle of leaves and the soft hum of cicadas. 
    
    A deer stepped cautiously into the clearing, its ears twitching at the faintest sound. Overhead, the moon cast a silvery glow, illuminating the serene wilderness below.`
));



trendings.push(new Trending(tegan, "World Peace Builder"));

trendings.push(new Trending(morgan, "Super Cool Project"));

trendings.push(new Trending(kendali, "Life Changing App"));

trendings.push(new Trending(alex, "No Traffic Maker"));