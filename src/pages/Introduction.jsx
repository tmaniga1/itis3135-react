import headshot from "../assets/tyson_picture.jpg";
import "../assets/default.css";

export default function Introduction() {
  return (
    <main className="wrap">
      <h2>Introduction Page</h2>

      <section className="card" aria-labelledby="about">
        <h3 id="about">About Me</h3>
        <img
          src={headshot}
          alt="Me After Eating a Candy Apple"
          className="headshot"
        />
        <p>Hello everyone my name is Tyson! I don’t really do much around campus but I do want to get involved for sure. I enjoy going to the gym, watching anime, and spending time with friends. I do plan on joining one or two clubs to fill up my time but hopefully my schedule doesn’t ruin that. I don’t have much left to say but I feel like my paragraph is really short so shout out my girlfriend she’s pretty cool.</p>
      <p><strong>Personal Background:</strong> I was born here in Charlotte, NC and have lived a good 19 years here.</p>
      <p><strong>Academic Background:</strong> I am a second-year student majoring in Computer Science, hoping to graduate by May 2027. I have a concentration in Information Technology.</p>
      <p><strong>Professional Background:</strong> Lowkey nothing yet I got no bag fr 😭</p>
      <p><strong>Primary Computer:</strong> I have a Lenovo Windows Laptop that I mainly use at my dorm or in the library.</p>
      <ul><strong>Courses I'm Taking and Why:</strong>
        <li><strong>ITIS 3135 - Web Application Development</strong>: This course is about learning how to make websites and applications I believe, so I picked it because that sounds cool.</li>
        <li><strong>CTCM 2530 - Exploring News Media Literacy in a Complex Information Environment</strong>: This course interests me because news is at a crazy point in this day and age and I want to learn how to navigate through it.</li>
        <li><strong>ANTH 1501 - Global Social Science</strong>: I’m just taking this class because I know a little about anthropology and it should be really easy.</li>
        <li><strong>ITIS 3130 - Human-Centered Computing</strong>: I’m taking this class because I find it interesting how things are designed to be used by people specifically.</li>
        <li><strong>ITSC 2610 - Computing Leadership Dev</strong>: This course was required with a scholarship I have but it seems useful for gaining leadership skills and networking.</li>
        <li><strong>ECON 2102 - Principles of Economics-Micro</strong>: I’m taking this course to see if I want to minor in economics but if not just for the easy A.</li>
      </ul>
      <p><strong>Funny/Interesting Item to Remember Me by:</strong> If I’m not studying or at the gym, I’m most likely playing Clash Royale.</p>
      <p>“Pirates will feast on the meat, but the hero will distribute it among the people! I want to eat meat!” - <i>Monkey D. Luffy</i></p>
    </section>
    </main>
  );
}