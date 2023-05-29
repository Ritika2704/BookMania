import ExploreHeroSection from "./components/ExploreHeroSection";
import { useProductContext } from "./context/productcontex";
import styled from "styled-components";
const Explore = () => {
  const { myName } = useProductContext();

  const data = {
    name: "BookMania",
  };
  const Wrapper = styled.section`
  .bookh {
    padding-top:5%;
    text-align: center;
    padding-bottom:4%;
    font-weight: bold;
  }
  .bookp {
    padding-left:5%;
    padding-right:5%;
    text-align: center;
    justify-content:center;
    line-height: 3rem;
  }
  .bookpd {
    padding-left:5%;
    padding-right:5%;
    text-align: center;
    justify-content:center;
    padding-bottom:10%;
    line-height: 3rem;
  }
  .wrapper {
    margin-left: 10%;
    margin-right:10%;
    justify-content: center;
    font-family: "Arimo";
    background-color:#D9D7F1;
    -webkit-box-shadow: 9px 13px 25px 0px rgba(0, 0, 0, 0.18);
    -moz-box-shadow: 9px 13px 25px 0px rgba(0, 0, 0, 0.18);
    box-shadow: 9px 13px 25px 0px rgba(0, 0, 0, 0.18);
    ${'' /* animation: slideUp 2000ms ease; */}
}

@keyframes slideUp {
    0% {
        -webkit-transform: translateY(100%);
        transform: translateY(100%);
        visibility: visible;
    }

    100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);

    }
}
 .genre{ text-align: center;
    justify-content:center;

    padding-top:1%;
    color:rgb(98 84 243);
    font-weight: 900;
 }
  `;

  return (
    <Wrapper>
    <>
      {myName}
      <ExploreHeroSection myData={data} />
    </>
     
    <div class="wrapper">
    <h3 class="genre">Genres</h3>
   <h2 class="bookh"> Fantasy </h2>


<p class="bookp">The fantasy book genre is a type of speculative fiction that has captured the imaginations of readers for centuries. It is a genre that typically involves imaginary worlds or universes with supernatural or magical elements. Fantasy novels often explore themes such as heroism, magic, mythical creatures, and alternate realities. They may also delve into complex political and social systems, and frequently include epic battles between good and evil.

One of the most significant aspects of the fantasy genre is its ability to transport readers to new and imaginative worlds. Whether it is a world with magic, mythical creatures, or alternate dimensions, fantasy literature provides a form of escapism that can transport readers to places they have never been before. It is a genre that encourages readers to suspend their disbelief and immerse themselves in a story that is entirely different from their everyday lives.

In addition to its ability to transport readers to new and imaginative worlds, fantasy literature also allows authors to explore themes and ideas that are not possible in other genres. For example, the use of magic in fantasy literature can provide a way for authors to explore complex philosophical and moral questions. The epic battles between good and evil that are common in fantasy novels can provide commentary on issues such as war, politics, and social justice.

The fantasy genre is also known for its sub-genres, which include high fantasy, urban fantasy, fairy tales, and sword and sorcery. High fantasy, also known as epic fantasy, is characterized by its expansive and complex world-building. It often features a quest or journey undertaken by a hero or group of heroes, as they seek to overcome evil and restore balance to their world. Examples of high fantasy include J.R.R. Tolkien's "The Lord of the Rings" and Robert Jordan's "Wheel of Time" series.
</p>

<h2 class="bookh">Science Fiction</h2>

<p class="bookp">If you're looking for a genre that will take you on a journey to the unknown and unexplored, then the science fiction book genre is definitely worth exploring. Science fiction has been a popular genre for decades, and it continues to captivate readers with its unique blend of futuristic technology, mind-bending concepts, and otherworldly adventures.

One of the most exciting things about science fiction is its ability to transport you to different worlds and times. From interstellar space travel to time travel to parallel universes, science fiction allows you to explore new and fascinating ideas that are not bound by the constraints of our current reality. This can be a thrilling and thought-provoking experience, as you get to imagine and explore what might be possible in the future or in alternate realities.

Science fiction also has a way of exploring some of the most pressing issues facing society today. Many science fiction novels deal with themes such as environmentalism, social justice, and the impact of technology on humanity. By presenting these issues in a futuristic or otherworldly context, science fiction allows us to examine them from a fresh perspective and consider new solutions and perspectives.

In addition to its imaginative concepts and themes, science fiction also features some of the most memorable and iconic characters in literature. From the courageous space explorers of "Star Trek" to the time-traveling doctors of "Doctor Who" to the androids of "Blade Runner," science fiction has given us some of the most memorable and fascinating characters in all of literature.

Finally, science fiction can also be a lot of fun. Whether you're exploring new worlds, battling intergalactic foes, or uncovering the mysteries of the universe, science fiction provides a sense of adventure and excitement that is hard to find in any other genre.

In conclusion, the science fiction genre offers readers a thrilling journey into the unknown, as well as an opportunity to explore important themes and issues in a fresh and imaginative way. Whether you're a longtime fan of the genre or are just starting to explore it, there is a science fiction novel out there that is sure to captivate and entertain you. So why not pick one up today and start exploring the limitless possibilities of the future?</p>
   
   <h2 class="bookh">Self Help</h2>
   
   <p class="bookp">If you're looking for a genre that can help you improve your life and achieve your goals, then the self-help book genre is definitely worth exploring. Self-help books have been a popular form of literature for decades, and they continue to inspire readers with their practical advice, motivational insights, and strategies for personal growth.

One of the most exciting things about the self-help genre is the sense of empowerment that comes with it. A good self-help book can help you take control of your life and make positive changes, whether you're looking to improve your health, build stronger relationships, or achieve your career goals. With its focus on practical tips and techniques, the self-help genre can provide a roadmap for success and help you achieve your full potential.

Self-help books can also provide a unique perspective on some of the most pressing issues facing modern society. Whether you're struggling with stress, anxiety, or depression, or looking to overcome obstacles in your personal or professional life, a good self-help book can provide insights and strategies for coping with these challenges and moving forward in a positive direction.

In addition to their practical advice and motivational insights, self-help books can also be a lot of fun. Many self-help authors use humor, anecdotes, and real-life examples to make their points, and this can make for an engaging and enjoyable reading experience. A good self-help book can be both informative and entertaining, and can leave you feeling inspired and energized.

Finally, self-help books can also provide a sense of community and support. Many self-help authors have built strong followings of readers who share similar goals and aspirations, and these communities can provide a valuable source of inspiration, encouragement, and accountability. By connecting with others who are on a similar journey of self-discovery and personal growth, you can find a sense of belonging and support that can help you achieve your goals.

In conclusion, the self-help genre offers readers a wealth of practical advice, motivational insights, and strategies for personal growth. Whether you're looking to improve your health, build stronger relationships, or achieve your career goals, there is a self-help book out there that can provide the guidance and inspiration you need. So why not pick one up today and start your journey toward a happier, more fulfilling life?</p>

<h2 class="bookh">Mystery </h2>
<p class="bookp">If you're looking for a genre that will keep you guessing until the very end, then the mystery book genre is definitely worth exploring. Mystery novels have been a popular form of entertainment for decades, and they continue to captivate readers with their intriguing plots and complex characters.

One of the most exciting things about the mystery genre is the challenge it presents to readers. A good mystery novel will keep you engaged and guessing until the very end, as you try to piece together the clues and solve the puzzle before the big reveal. This can be a thrilling and satisfying experience, as you get to match wits with the author and test your own deductive abilities.

Mystery novels can also provide a unique insight into the criminal mind and the justice system. Many mystery novels feature detectives, private investigators, or other law enforcement professionals as their protagonists, and these characters can provide a glimpse into the inner workings of the criminal justice system. Through their investigations, they may uncover corruption, expose flaws in the legal system, or shed light on social issues such as poverty or inequality.

In addition to their engaging plots and complex characters, mystery novels can also provide a window into different cultures and historical periods. Many mystery novels are set in specific time periods or geographic regions, and these settings can provide a fascinating backdrop for the mystery itself. Whether you're exploring Victorian London with Sherlock Holmes or modern-day Tokyo with Inspector Iida, a good mystery novel can transport you to a different time and place and immerse you in a whole new world of intrigue and suspense.

In conclusion, the mystery genre offers readers a unique blend of suspense, intrigue, and intellectual challenge. Whether you're a fan of classic whodunits, modern thrillers, or something in between, there is a mystery novel out there that is sure to captivate and entertain you. So why not pick up a mystery novel today and start unraveling the clues? You never know where they might lead you!</p>

<h2 class="bookh">History</h2>
<p class="bookp">If you're looking for a genre that can transport you to different times and places, and help you gain a deeper understanding of the world around you, then the history book genre is definitely worth exploring. History books have been a popular form of literature for centuries, and they continue to captivate readers with their fascinating stories, vivid characters, and insights into the events and forces that have shaped our world.

One of the most exciting things about the history genre is the sense of discovery that comes with it. A good history book can take you on a journey through time, introducing you to new cultures, societies, and ways of life. As you explore different eras and events, you can gain a deeper appreciation for the complexities of human history and the ways in which our world has evolved over time.

History books can also provide a unique perspective on some of the most pressing issues facing our world today. By examining past events and analyzing their impact on our current society, historians can help us understand the root causes of contemporary issues such as inequality, conflict, and political unrest. By gaining a better understanding of the past, we can make more informed decisions about the present and future.

In addition to their educational value, history books can also be a lot of fun. Many history authors use storytelling techniques to bring their subjects to life, weaving together narrative threads to create a compelling and engaging story. Whether you're interested in the rise and fall of empires, the lives of famous figures, or the behind-the-scenes dramas of important events, there is a history book out there that can capture your imagination and leave you eager to learn more.

Finally, history books can also provide a sense of connection and continuity with the past. By learning about the triumphs and struggles of our ancestors, we can gain a greater appreciation for the sacrifices and achievements that have made our world what it is today. By understanding our shared history, we can feel a sense of connection to the broader human story, and a greater appreciation for the diversity and resilience of the human spirit.

In conclusion, the history genre offers readers a window into different times and places, and a chance to gain a deeper understanding of the world around us. Whether you're looking to learn more about a specific era, explore the stories of famous figures, or gain insights into contemporary issues, there is a history book out there that can provide the knowledge and perspective you need. So why not pick one up today and start exploring the rich and fascinating world of human history?</p>

<h2 class="bookh">Thriller</h2>
<p class="bookpd">If you're looking for a genre that will keep you on the edge of your seat and leave you breathless with anticipation, then the thriller book genre is definitely worth exploring. Thriller novels have been a popular form of entertainment for decades, and they continue to captivate readers with their high-stakes plots, fast-paced action, and heart-pounding suspense.

One of the most exciting things about the thriller genre is the sense of danger and unpredictability that permeates every page. A good thriller will keep you guessing until the very end, as you try to figure out who the bad guys are, who can be trusted, and what will happen next. This can be a thrilling and addictive experience, as you get caught up in the plot and become invested in the fate of the characters.

Thriller novels can also provide a unique insight into the darker side of human nature. Many thrillers deal with themes such as crime, corruption, and terrorism, and these themes can shed light on the complex motivations and psychological struggles that drive people to commit acts of violence and betrayal. Through their protagonists, thriller novels can explore the depths of human depravity and the struggle to maintain one's moral compass in the face of extreme danger.

In addition to their gripping plots and complex characters, thriller novels can also provide a window into different cultures and settings. Many thrillers are set in specific geographic regions or time periods, and these settings can provide a fascinating backdrop for the action. Whether you're exploring the gritty streets of New York City or the sun-drenched beaches of the Mediterranean, a good thriller can transport you to a different world and immerse you in a heart-pounding adventure.

Finally, thrillers can also be a lot of fun. Whether you're rooting for the hero, trying to solve the mystery, or just enjoying the thrill of the chase, a good thriller can provide an adrenaline rush like no other genre.

In conclusion, the thriller genre offers readers a thrilling and suspenseful ride, as well as an opportunity to explore some of the darker aspects of human nature. Whether you're a fan of classic espionage thrillers, fast-paced action thrillers, or something in between, there is a thriller novel out there that is sure to captivate and entertain you. So why not pick one up today and get ready for a wild ride?</p>
</div>
    </Wrapper>
  );
};

export default Explore;


