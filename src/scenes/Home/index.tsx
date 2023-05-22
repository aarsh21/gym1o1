import useMediaQuery from "@/hooks/newMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const index = (setSelectedPage: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="home" className="gap-16 py-10 bg-gray-20 md:h-full md:pb-0">
      {/* image and main header */}
      <div>
        {/* main header */}
        <div>
          {/* Heading */}
          <div>
            <div>
              <div>
                <img src={HomePageText} alt="home-page-text" />
              </div>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia reprehenderit nemo natus similique ducimus veritatis, adipisci ratione facere aperiam enim iusto obcaecati ea id sed harum possimus animi. Sequi, veniam?
            </p>
          </div>
        </div>
        {/* image */}
        <div></div>
      </div>
    </section>
  );
};

export default index;
