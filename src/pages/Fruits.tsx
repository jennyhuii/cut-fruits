import React, { ReactElement, useState } from "react";
import { useTrail, a } from "@react-spring/web";
import { ReactTyped } from "react-typed";
import "../App.css";
import { TYPE_SPEED } from "../constants";

const CuttingFruits = require("../assets/videos/cut-fruits-final.mp4");

const Trail: React.FC<{
  open: boolean;
  children: ReactElement[] | ReactElement;
}> = ({ open, children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 50 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className="trail-text" style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};

const Fruits = () => {
  const [startTyping, setStartTyping] = useState(false);
  const [chickenSoup, setChickenSoup] = useState(false);
  const [snowing, setSnowing] = useState(false);
  const [goToBed, setGoToBed] = useState(false);
  const [getMarried, setGetMarried] = useState(false);
  const [takeCareOfFamily, setTakeCareOfFamily] = useState(false);
  const [callMe, setCallMe] = useState(false);

  const onVideoPlaySubtitles = () => {
    setStartTyping(true);
    setTimeout(() => setChickenSoup(true), 90000);
    setTimeout(() => setSnowing(true), 210000);
    setTimeout(() => setGoToBed(true), 330000);
    setTimeout(() => setGetMarried(true), 450000);
    setTimeout(() => setTakeCareOfFamily(true), 570000);
    setTimeout(() => setCallMe(true), 720000);
  };

  const [startStory1, setStartStory1] = useState(false);
  const [startStory2, setStartStory2] = useState(false);

  const [startStory3, setStartStory3] = useState(false);
  const [startStory4, setStartStory4] = useState(false);

  const [startStory5, setStartStory5] = useState(false);
  const [startStory6, setStartStory6] = useState(false);

  const [startStory7, setStartStory7] = useState(false);
  const [startStory8, setStartStory8] = useState(false);

  const [startStory9, setStartStory9] = useState(false);
  const [startStory10, setStartStory10] = useState(false);

  const onVideoPlayStories = () => {
    //start apple
    setTimeout(() => setStartStory1(true), 30000);
    setTimeout(() => setStartStory2(true), 40000);
    //stop apple
    setTimeout(() => {
      setStartStory1(false);
      setStartStory2(false);
    }, 150000);

    //start strawberries
    setTimeout(() => setStartStory3(true), 185000);
    setTimeout(() => setStartStory4(true), 195000);
    //stop strawberries
    setTimeout(() => {
      setStartStory3(false);
      setStartStory4(false);
    }, 240000);

    //start mango
    setTimeout(() => setStartStory5(true), 255000);
    setTimeout(() => setStartStory6(true), 265000);
    //stop mango
    setTimeout(() => {
      setStartStory5(false);
      setStartStory6(false);
    }, 360000);

    //start pear
    setTimeout(() => setStartStory7(true), 390000);
    setTimeout(() => setStartStory8(true), 400000);
    //stop pear
    setTimeout(() => {
      setStartStory7(false);
      setStartStory8(false);
    }, 545000);

    //start dragon fruit
    setTimeout(() => setStartStory9(true), 660000);
    setTimeout(() => setStartStory10(true), 675000);
    //stop dragon fruit
    setTimeout(() => {
      setStartStory9(false);
      setStartStory10(false);
    }, 780000);
  };

  return (
    <div className="fruit-container">
      <video
        src={CuttingFruits}
        controls
        onPlay={() => {
          onVideoPlaySubtitles();
          onVideoPlayStories();
        }}
      />
      <div className="content">
        {/* subtitles */}
        {startTyping && (
          <span className="subtitle">
            <ReactTyped
              strings={["have you eaten yet?"]}
              typeSpeed={TYPE_SPEED}
              onComplete={() => setTimeout(() => setStartTyping(false), 1500)}
            />
          </span>
        )}
        {chickenSoup && (
          <span className="subtitle">
            <ReactTyped
              strings={[
                "remember the other day",
                "i told you to make this chicken soup with red dates and goji berries",
                "did you make it for dinner?",
                "i’ll send you a cooking video if you still don’t know how",
                "remember to eat more",
              ]}
              typeSpeed={TYPE_SPEED}
              onComplete={() => setTimeout(() => setChickenSoup(false), 1500)}
            />
          </span>
        )}
        {snowing && (
          <span className="subtitle">
            <ReactTyped
              strings={[
                "is it snowing outside?",
                "remember to put on more layers",
                "don’t try to be pretty. wear jackets",
              ]}
              typeSpeed={TYPE_SPEED}
              onComplete={() => setTimeout(() => setSnowing(false), 1500)}
            />
          </span>
        )}
        {goToBed && (
          <span className="subtitle">
            <ReactTyped
              strings={["go to bed early"]}
              typeSpeed={TYPE_SPEED}
              onComplete={() => setTimeout(() => setGoToBed(false), 1500)}
            />
          </span>
        )}
        {getMarried && (
          <span className="subtitle">
            <ReactTyped
              strings={[
                "last month, my best friend’s daughter got married",
                "i want you to get married too",
                "so i can be a grandma soon",
              ]}
              typeSpeed={TYPE_SPEED}
              onComplete={() => setTimeout(() => setGetMarried(false), 1500)}
            />
          </span>
        )}
        {takeCareOfFamily && (
          <span className="subtitle">
            <ReactTyped
              strings={[
                "what’s your brother been up to lately?",
                "he’s studying very hard these days",
                "you need to take care of him and text him more often",
              ]}
              typeSpeed={TYPE_SPEED}
              onComplete={() =>
                setTimeout(() => setTakeCareOfFamily(false), 1500)
              }
            />
          </span>
        )}
        {callMe && (
          <span className="subtitle">
            <ReactTyped
              strings={[
                "what are you doing today?",
                "you didn’t answer my calls",
                "are you busy? i miss you",
              ]}
              typeSpeed={TYPE_SPEED}
              onComplete={() => setTimeout(() => setCallMe(false), 1500)}
            />
          </span>
        )}
        {/* stories */}
        {startStory1 && (
          <span className="story">
            <Trail open={true}>
              <span className="text-background">
                In China, raw produce is often unclean.
              </span>
              <span className="text-background">
                Peeling fruits is a way to make sure the fruits are edible.
              </span>
            </Trail>
          </span>
        )}
        {startStory2 && (
          <span className="story">
            <Trail open={true}>
              <span className="text-background">
                Apples are said to represent harmony and peace,
              </span>
              <span className="text-background">
                as the Chinese word for “apple”
              </span>
              <span className="text-background">
                sounds like the words for “peaceful” and “harmony.”
              </span>
            </Trail>
          </span>
        )}
        {startStory3 && (
          <span className="story">
            <Trail open={true}>
              <span className="text-background">
                Strawberries are vigorously washed and trimmed before
                consumption.
              </span>
            </Trail>
          </span>
        )}
        {startStory4 && (
          <span className="story">
            <Trail open={true}>
              <span className="text-background">They bruise easily.</span>
            </Trail>
          </span>
        )}
        {startStory5 && (
          <span className="story">
            <Trail open={true}>
              <span className="text-background">Unripe mangos are sour.</span>
              <span className="text-background">They take time to ripen.</span>
            </Trail>
          </span>
        )}
        {startStory6 && (
          <span className="story">
            <Trail open={true}>
              <></>
              <span className="text-background">
                The sweetest chunks are smooth, sweet, and non-fibrous.
              </span>
            </Trail>
          </span>
        )}
        {startStory7 && (
          <span className="story">
            <Trail open={true}>
              <span className="text-background">
                “Kong Rong Shared Pears” is a well-known Chinese story
              </span>
              <span className="text-background">
                about the values of respect, love, and thoughtfulness towards
                others.
              </span>
            </Trail>
          </span>
        )}
        {startStory8 && (
          <span className="story">
            <Trail open={true}>
              <span className="text-background">
                In Chinese, “sharing a pear” is also a homophone of “to
                separate.”
              </span>
            </Trail>
          </span>
        )}
        {startStory9 && (
          <span className="story">
            <Trail open={true}>
              <span className="text-background">
                Red dragon fruits are widely known as
              </span>
              <span className="text-background">
                the most auspicious fruit in Chinese culture.
              </span>
            </Trail>
          </span>
        )}
        {startStory10 && (
          <span className="story">
            <Trail open={true}>
              <span className="text-background">
                Growing up, I rarely get them.
              </span>
            </Trail>
          </span>
        )}
      </div>
    </div>
  );
};

export default Fruits;
