var quoteList = [
  "In my school, we don’t have the best things, there are holes in the walls, mice, and cockroaches everywhere. We also have a lot of stress so there is rarely time for us to study and prepare for our tests because we constantly have work to do and there isn’t time for us to relax and do the things that we enjoy. We sleep late and can’t ever focus, but yet that’s our fault and that we are doing something wrong. School has become a place where we just do work, stress, and repeat but there has been nothing changed. We can’t learn what we need to learn because we are constantly occupied with unnecessary work that just pulls us back. — Theodore Loshi, Masterman School", "I think that the American education system can be improved my allowing students to choose the classes that they wish to take or classes that are beneficial for their future. Students aren’t really learning things that can help them in the future such as basic reading and math. — Skye Williams, Sarasota, Florida", "Personally, for me I think standardized tests have a negative impact on my education, taking test does not actually test my knowledge — instead it forces me to memorize facts that I will soon forget. — Aleena Khan, Glenbard West HS Glen Ellyn, IL", "We cannot expect our grades to improve when we give teachers a handicap with poor wages and low supplies. It doesn’t allow teachers to unleash their full potential for educating students. Alas, our government makes teachers work with their hands tied. No wonder so many teachers are quitting their jobs for better careers. Teachers will shape the rest of their students’ lives. But as of now, they can only do the bare minimum. — Jeffery Austin, Hoggard High School", "The big thing that I have struggled with is the class sizes due to overcrowding. It has made it harder to be able to get individual help and be taught so I completely understand what was going on. Especially in math it builds on itself so if you don’t understand the first thing you learn your going to be very lost down the road. I would go to my math teacher in the morning and there would be 12 other kids there. — Skyla Madison, Hoggard High School in Wilmington, NC", "I say one of the biggest problems is the support of families and teachers. I have heard many success stories, and a common element of this story is the unwavering support from their family, teachers, supervisors, etc. Many people need support to be pushed to their full potential, because some people do not have the will power to do it on their own. So, if students lived in an environment where education was supported and encouraged; than their children would be more interested in improving and gaining more success in school, than enacting in other time wasting hobbies that will not help their future education. — Melanie, Danvers", "I personally think that there are many things wrong with the American education system. Everyone is so worried about grades and test scores. People believe that those are the only thing that represents a student. If you get a bad grade on something you start believing that you’re a bad student. GPA doesn’t measure a students’ intelligence or ability to learn. At young ages students stop wanting to come to school and learn. Standardized testing starts and students start to lose their creativity. — Andrew Gonthier, Hoggard High School in Wilmington, NC" ];

var student = document.getElementById("student");
var quote = document.getElementById("quote");
var count = 0;

if (student) {
  student.addEventListener("click", displayQuote);
}

function displayQuote() {
  quote.innerHTML = quoteList[count];
  count ++;
  if (count == quoteList.length) {
    count = 0;
  }
}


var factList = [
  "[D]istricts serving low-income students are spending significantly less than more affluent districts across the country, about $1,200 less per student. And in some states, that can be $3,000 less, $5,000 less, $10,000 less per student for the highest-needs kids. <a href= 'https://www.usnews.com/news/articles/2016-02-16/the-costs-of-inequality-education-is-the-key-to-it-all' ><sup>2</sup></a>",

  "Atlanta's fourth graders face a 60% achievement gap between races. On that path, despite gains in math and reading, Black fourth-graders at APS won’t catch their white peers until 2136. <a href= 'https://www.bizjournals.com/atlanta/news/2020/06/26/a-walk-together-education-atlanta-public-schools.html'><sup>3</sup></a></p>",

  "Studies show reading proficiency by the end of the third grade to be ​among the greatest predictors of landing on a path to college and earning a livable wage <a href= 'https://media.bizj.us/view/img/11683370/the-state-of-atlanta-public-schools2019finalenglishdigital.pdf'><sup>4</sup></a>",

  "In Washington, D.C., 8 percent of black eighth-graders are proficient in math, while 80 percent of their white counterparts are. <a href= 'https://www.usnews.com/news/articles/2016-02-16/the-costs-of-inequality-education-is-the-key-to-it-all'><sup>2</sup></a>"
  ];

var statBtn = document.getElementById("statBtn");
var fact = document.getElementById("fact");
var count = 0;

if (statBtn) {
  statBtn.addEventListener("click", displayFact);
}

function displayFact() {
  fact.innerHTML = factList[count];
  count ++;
  if (count == factList.length) {
    count = 0;
  }
}