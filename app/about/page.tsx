"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/TracingBeam";
import lemineImage from "@/public/LEMINE.jpg";
import { RichaGrid } from "@/components/ui/Richat";
import richatOne from "@/public/richatImages/richatOne.jpg";
import richatTwo from "@/public/richatImages/richatTwo.jpg";
import richatThree from "@/public/richatImages/richatThree.jpg";
import richatFour from "@/public/richatImages/richatFour.jpg";

interface Card {
  id: number;
  content: React.JSX.Element;
  className: string;
  thumbnail: string;
}

const AboutPage = () => {
  // cards
  const cards: Card[] = [
    {
      id: 1,
      content: <SkeletonOne />,
      className: "md:col-span-2",
      thumbnail: richatOne.src,
    },
    {
      id: 2,
      content: <SkeletonTwo />,
      className: "col-span-1",
      thumbnail: richatTwo.src,
    },
    {
      id: 3,
      content: <SkeletonThree />,
      className: "col-span-1",
      thumbnail: richatThree.src,
    },
    {
      id: 4,
      content: <SkeletonFour />,
      className: "md:col-span-2",
      thumbnail: richatFour.src,
    },
  ];
  return (
    <>
      <TracingBeam className="px-6 bg-transparent mt-20">
        <div className="max-w-2xl mx-auto antialiased pt-4 ">
          {dummyContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-2">
              <p className={twMerge("text-xl mb-4")}>{item.title}</p>

              <div className="text-lg  prose prose-sm dark:prose-invert bg-transparent">
                {item?.image && (
                  <Image
                    src={item.image}
                    alt="blog thumbnail"
                    className="rounded-lg mb-10 object-cover"
                  />
                )}
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
      <div className="h-screen mt-10 w-ful bg-transparent">
        <RichaGrid cards={cards} />
      </div>
    </>
  );
};

const dummyContent = [
  {
    title: (
      <span className=" text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
        About me
      </span>
    ),
    description: (
      <>
        <p className="text-md text-neutral-500">
          My name is Mohamed, but you can call me Lemine. Seven years ago, I won
          a competitive scholarship from the U.S. government&apos;s Fulbright
          Student Exchange Program to pursue a master&apos;s degree in
          communication and media studies. For my thesis project, I dove into
          sentiment analysis, using R to scrape data from Twitter and applying
          various machine learning techniques. This experience ignited a passion
          for using technology to solve problems, and I&apos;m eager to
          transition into a software development career.
        </p>
        <p>
          <br />
        </p>
        <p className="text-md text-neutral-500">
          I was born and raised in Nouakchott, the vibrant capital of
          Mauritania, a land of mesmerizing deserts and rich nomadic traditions.
          But it&apos;s the Richat Structure, the &quot;Eye of the
          Sahara,&quot;that always held a special allure for me. This geological
          enigma, visible from space, sparked my childhood curiosity and
          instilled in me a deep appreciation for the wonders of the natural
          world. It&apos;s fitting, then, that my journey into programming began
          much like the Richat Structure—with a question, a mystery to be
          solved, and a drive to uncover the underlying patterns and
          connections. I see code as a tool to unlock new possibilities and
          create meaningful solutions, just as the Richat Structure has
          captivated explorers and scientists for generations. As I embark on
          this exciting new chapter as a software developer, I carry with me the
          spirit of curiosity and problem-solving that my homeland instilled in
          me.
        </p>
      </>
    ),
    image: lemineImage,
  },
];

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">Facts Card 1</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        This structure is a deeply eroded, slightly elliptical, 40 km in
        diameter, dome. The sedimentary rock exposed in this dome range in age
        from Late Proterozoic within the center of the dome to Ordovician
        sandstone around its edges. Exposed within the interior of the Richat
        Structure are a variety of intrusive and extrusive igneous rocks.
        Spectacular hydrothermal features are a part of the Richat Structure.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">A cool reel</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        In a viral video that racked up over half a million views in just two
        days, YouTube blogger Jimmy Bright argues that the Richat Structure, a
        geologic dome in northwest Sahara also referred to as the Eye of the
        Sahara, is the most likely location of Atlantis.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">Facts Card 2</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        The Richat Structure&apos;s true colors are actually a mix of earth
        tones, not the vibrant blues often seen in satellite images. The blue
        hues in many photos are artificially added to highlight the different
        rock types and geological features. In reality, the structure&apos;s
        rings are composed of various shades of brown, beige, and gray rock.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        The Eye of the Sahara
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Its bullseye-like appearance, with concentric rings and a diameter
        spanning nearly 30 miles, has earned it the nickname &quot;The Eye of
        the Sahara.&quot; For centuries, the Richat Structure remained a
        mystery. Once thought to be the result of a meteorite impact, scientists
        now believe it&apos;s a result of uplifted rock that has been eroded
        over time, revealing the different layers and colors of the sedimentary
        rock beneath. Its unique appearance has captivated scientists,
        explorers, and space travelers alike, as it&apos;s a truly remarkable
        sight from space.
      </p>
    </div>
  );
};

export default AboutPage;
