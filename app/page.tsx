"use client";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import lemineImage from "@/public/LEMINE.jpg";
import richatOne from "@/public/richatImages/richatOne.jpg";
import richatTwo from "@/public/richatImages/richatTwo.jpg";
import richatThree from "@/public/richatImages/richatThree.jpg";
import richatFour from "@/public/richatImages/richatFour.jpg";

const content = [
  {
    title: "About me",
    description: (
      <>
        <span>
          My name is Mohamed Lemine, but you can call me Lemine. Seven years
          ago, I won a competitive scholarship from the U.S. government&apos;s
          Fulbright Student Exchange Program to pursue a master&apos;s degree in
          communication and media studies. For my thesis project, I dove into
          sentiment analysis, using R to scrape data from Twitter and applying
          various machine learning techniques. This experience ignited a passion
          for using technology to solve problems, and I&apos;m eager to
          transition into a software development career.
        </span>
        <br />
        <br />
        <span>
          I was born and raised in Nouakchott, the vibrant capital of
          Mauritania, a land of mesmerizing deserts and rich nomadic traditions.
          But it&apos;s the Richat Structure, the &quot;Eye of the
          Sahara,&quot;that lways held a special allure for me. This geological
          enigma, visible from space, sparked my childhood curiosity and
          instilled in me a deep preciation for the wonders of the natural
          world. It&apos;s fitting, then, that my journey into programming began
          much like the Richat Structure—with a uestion, a mystery to be solved,
          and a drive to uncover the underlying patterns and connections. I see
          code as a tool to unlock new possibilities and create meaningful
          solutions, just as the Richat Structure has captivated explorers and
          scientists for generations. As I embark on this exciting new chapter
          as a software developer, I carry with me the spirit of curiosity and
          problem-solving that my homeland instilled in me.
        </span>
      </>
    ),
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center">
        <Image
          src={lemineImage}
          className="h-full w-full object-cover"
          alt="Lemine's Image"
        />
      </div>
    ),
  },
  {
    title: "The Richat Structure",
    description:
      "This structure is a deeply eroded, slightly elliptical, 40 km in diameter, dome. The sedimentary rock exposed in this dome range in age from Late Proterozoic within the center of the dome to Ordovician sandstone around its edges. Exposed within the interior of the Richat Structure are a variety of intrusive and extrusive igneous rocks. Spectacular hydrothermal features are a part of the Richat Structure.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center">
        <Image
          src={richatOne}
          className="h-full w-full object-cover"
          alt="Richat Structure's Image-1"
        />
      </div>
    ),
  },
  {
    title: "A cool Fact About it",
    description:
      "In a viral video that racked up over half a million views in just two days, YouTube blogger Jimmy Bright argues that the Richat Structure, a geological dome in northwest Sahara also referred to as the Eye of the Sahara, is the most likely location of Atlantis.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src={richatTwo}
          className="h-full w-full object-cover"
          alt="Richat Structure's Image-2"
        />
      </div>
    ),
  },
  {
    title: "Another Cool Fact",
    description:
      "The Richat Structure&apos;s true colors are actually a mix of earth tones, not the vibrant blues often seen in satellite images. The blue hues in many photos are artificially added to highlight the different rock types and geological features. In reality, the structure&apos;s rings are composed of various shades of brown, beige, and gray rock.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src={richatThree}
          className="h-full w-full object-cover"
          alt="Richat Structure's Image"
        />
      </div>
    ),
  },
  {
    title: "The Eye Shape",
    description:
      "Its bullseye-like appearance, with concentric rings and a diameter spanning nearly 30 miles, has earned it the nickname &quot;The Eye of the Sahara.&quot; For centuries, the Richat Structure remained a mystery. Once thought to be the result of a meteorite impact, scientists now believe it&apos;s a result of uplifted rock that has been eroded over time, revealing the different layers and colors of the sedimentary rock beneath. Its unique appearance has captivated scientists, explorers, and space travelers alike, as it&apos;s a truly remarkable sight from space.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src={richatFour}
          className="h-full w-full object-cover"
          alt="Richat Structure's Image"
        />
      </div>
    ),
  },
];
export default function Home() {
  return <StickyScroll content={content} />;
}
