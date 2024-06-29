import * as React from "react";
import {motion} from "framer-motion";
import logoImage from "./assets/logo.png";
// import learnIcon from "./assets/learn-icon.png";
import downIcon from "./assets/downIcon.png";

// import buildIcon from "./assets/build-icon.png";
// import networkIcon from "./assets/network-icon.png";
import communityIcon from "./assets/hero-image.png";
import heroImage from "./assets/hero-image.png";
import solanaDevCourseImage from "./assets/solana-dev-course.png";
import buildspaceImage from "./assets/buildspace.png";
import solanaBytesImage from "./assets/solana-bytes.png";
import scaffoldSeriesImage from "./assets/scaffold-series.png";
import knoxDevImage from "./assets/knox-dev.png";
import anybodiesImage from "./assets/anybodies.png";
import anybodiesLogoImage from "./assets/anybodies-logo.png";
import partnerLogo1 from "./assets/partner-logo-1.png";
import partnerLogo2 from "./assets/partner-logo-2.png";
import partnerLogo3 from "./assets/partner-logo-3.png";
import partnerLogo4 from "./assets/partner-logo-4.png";
import metaplexLogo from "./assets/docarrow.png";
// import anchorLogo from "./assets/anchor-logo.png";
import changelogImage from "./assets/changelog-image.png";
import playIcon from "./assets/play-icon.png";
import youtubeIcon from "./assets/youtube-icon.png";
import podcastIcon from "./assets/podcast-icon.png";
import footerLogo from "./assets/footer-logo.png";
import solanaFooterLogo from "./assets/solana-footer-logo.png";
import languageIcon from "./assets/language-icon.png";
import ViewAll from "./assets/viewall.png";
// import arrowDownIcon from "./assets/arrow-down-icon.png";

const NavItem = ({text, iconSrc}) => (
  <motion.div
    className="flex gap-0.5"
    whileHover={{scale: 1.05}}
    whileTap={{scale: 0.95}}
  >
    <div className="grow my-auto">{text}</div>
    <img
      loading="lazy"
      src={iconSrc}
      alt=""
      className="shrink-0 w-6 aspect-square"
    />
  </motion.div>
);

const CourseCard = ({chapters, title, imageSrc}) => (
  <motion.div
    className="flex overflow-hidden relative flex-col grow gap-5 justify-between items-end px-6 pt-20 pb-10 text-white aspect-[1.08] max-md:pl-5 max-md:mt-6"
    whileHover={{scale: 1.03}}
    transition={{type: "spring", stiffness: 300}}
  >
    <img
      loading="lazy"
      src={imageSrc}
      alt={title}
      className="object-cover absolute inset-0 size-full"
    />
    <div className="flex relative flex-col mt-36 max-md:mt-10">
      <div className="justify-center px-3 py-1 text-xs leading-5 bg-purple-500 rounded-2xl">
        {chapters} Chapters
      </div>
      <div className="mt-4 text-lg leading-6">{title}</div>
    </div>
    <img
      loading="lazy"
      src={playIcon}
      alt=""
      className="shrink-0 mt-44 aspect-square w-[30px] max-md:mt-10"
    />
  </motion.div>
);

const Button = ({children, variant, icon}) => (
  <motion.button
    className={`flex gap-3 px-6 py-4 rounded-3xl border border-solid ${
      variant === "primary"
        ? "bg-emerald-400 text-black border-black"
        : "bg-black text-white border-white"
    } max-md:px-5`}
    whileHover={{scale: 1.05}}
    whileTap={{scale: 0.95}}
  >
    {children}
    {icon && (
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="shrink-0 w-4 aspect-[0.8]"
      />
    )}
  </motion.button>
);

function HomepageV3() {
  return (
    <div className="flex flex-col bg-black shadow-sm">
      <motion.header
        className="flex justify-center items-center px-16 py-5 w-full text-lg leading-7 text-center whitespace-nowrap bg-black bg-opacity-60 text-slate-500 max-md:px-5 max-md:max-w-full"
        initial={{opacity: 0, y: -50}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.5}}
      >
        <nav className="flex gap-5 justify-between max-w-full w-[1084px] max-md:flex-wrap">
          <img
            loading="lazy"
            src={logoImage}
            alt="Logo"
            className="shrink-0 max-w-full aspect-[6.67] w-[182px]"
          />
          <div className="flex gap-5 justify-between self-start max-md:flex-wrap">
            <NavItem text="Learn" iconSrc={downIcon} />
            <NavItem text="Build" iconSrc={downIcon} />
            <NavItem text="Network" iconSrc={downIcon} />
            <NavItem text="Community" iconSrc={downIcon} />
          </div>
        </nav>
      </motion.header>

      <main className="flex flex-col self-center px-5 mt-2 w-full max-w-[1211px] max-md:max-w-full">
        <motion.section
          className="max-md:max-w-full"
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 0.5, delay: 0.2}}
        >
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                <motion.h1
                  className="text-8xl tracking-wide text-white leading-[96px] max-md:max-w-full max-md:text-4xl max-md:leading-10"
                  initial={{x: -50, opacity: 0}}
                  animate={{x: 0, opacity: 1}}
                  transition={{duration: 0.5, delay: 0.3}}
                >
                  Developer Resources
                </motion.h1>
                <motion.p
                  className="mt-9 text-xl leading-6 text-stone-300 max-md:max-w-full"
                  initial={{x: -50, opacity: 0}}
                  animate={{x: 0, opacity: 1}}
                  transition={{duration: 0.5, delay: 0.4}}
                >
                  A manual for joining the Solana ecosystem. By builders for
                  builders.
                </motion.p>
                <motion.div
                  className="flex gap-2 mt-10 text-base leading-5 text-center uppercase max-md:flex-wrap"
                  initial={{y: 50, opacity: 0}}
                  animate={{y: 0, opacity: 1}}
                  transition={{duration: 0.5, delay: 0.5}}
                >
                  <Button variant="primary">Build Now</Button>
                  <Button icon={communityIcon}>Stack Exchange</Button>
                </motion.div>
              </div>
            </div>
            <motion.div
              className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full"
              initial={{x: 50, opacity: 0}}
              animate={{x: 0, opacity: 1}}
              transition={{duration: 0.5, delay: 0.3}}
            >
              <img
                loading="lazy"
                src={heroImage}
                alt="Developer Resources"
                className="grow w-full aspect-[0.86] max-md:mt-10 max-md:max-w-full"
              />
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          initial={{opacity: 0, y: 50}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 0.4}}
        >
          <h2 className="mt-1 text-4xl tracking-wider leading-10 text-white max-md:max-w-full">
            Get started.
          </h2>
          <p className="mt-4 text-xl leading-7 text-stone-300 max-md:max-w-full">
            Use these Solana Foundation and community courses to begin your
            journey into Solana development.
          </p>
          <motion.div
            className="flex overflow-hidden relative flex-col items-start px-20 py-20 mt-9 max-w-full text-white min-h-[370px] w-[1084px] max-md:px-5"
            whileHover={{scale: 1.02}}
            transition={{type: "spring", stiffness: 300}}
          >
            <img
              loading="lazy"
              src={solanaDevCourseImage}
              alt="Background"
              className="object-cover absolute inset-0 size-full"
            />
            <div className="relative justify-center px-3 py-1 mt-1.5 text-xs leading-5 bg-purple-500 rounded-2xl max-md:ml-2">
              17 Chapters
            </div>
            <h3 className="relative mt-5 text-4xl leading-10 max-md:max-w-full">
              Solana Development Course
            </h3>
            <p className="relative mt-9 text-lg leading-7 w-[388px] max-md:max-w-full">
              Quickstart your Solana development starting from nothing to
              complex programs.
            </p>
            <img
              loading="lazy"
              src={playIcon}
              alt=""
              className="mt-6 aspect-square w-[30px] max-md:ml-2"
            />
          </motion.div>
        </motion.section>

        <motion.section
          className="mt-6 max-md:pr-5 max-md:max-w-full"
          initial={{opacity: 0, y: 50}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 0.5}}
        >
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <CourseCard
              chapters="14"
              title="Buildspace"
              imageSrc={buildspaceImage}
            />
            <CourseCard
              chapters="12"
              title="Solana Bytes"
              imageSrc={solanaBytesImage}
            />
            <CourseCard
              chapters="1"
              title="Scaffold Series"
              imageSrc={scaffoldSeriesImage}
            />
          </div>
        </motion.section>

        <motion.section
          className="mt-6 max-md:pr-5 max-md:max-w-full"
          initial={{opacity: 0, y: 50}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 0.6}}
        >
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src={buildspaceImage}
                alt="Course"
                className="grow w-full aspect-[1.09] max-md:mt-6"
              />
            </div>
            <CourseCard
              chapters="167"
              title="Solana Development by Knox"
              imageSrc={knoxDevImage}
            />
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src={scaffoldSeriesImage}
                alt="Course"
                className="grow w-full aspect-[1.09] max-md:mt-6"
              />
            </div>
          </div>
        </motion.section>

        <motion.section
          className="flex gap-5 mt-28 w-full text-white max-md:flex-wrap max-md:pr-5 max-md:mt-10 max-md:max-w-full"
          initial={{opacity: 0, y: 50}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 0.7}}
        >
          <h2 className="flex-auto my-auto text-4xl tracking-wider leading-10">
            Build for growth.
          </h2>
          <div className="flex gap-4 text-base leading-7 text-center whitespace-nowrap max-md:flex-wrap">
            {["NFTs", "DeFi", "Payments", "Gaming", "DAOs"].map((item) => (
              <motion.div
                key={item}
                className="justify-center px-4 py-5 rounded-2xl border border-solid bg-neutral-900 border-neutral-900"
                whileHover={{scale: 1.05, backgroundColor: "#4A4A4A"}}
                whileTap={{scale: 0.95}}
              >
                {item}
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mt-8 rounded-xl bg-zinc-900 max-md:max-w-full"
          initial={{opacity: 0, y: 50}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 0.8}}
        >
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src={anybodiesImage}
                alt="Anybodies"
                className="grow w-full aspect-[1.37] max-md:mt-10 max-md:max-w-full"
              />
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  src={anybodiesLogoImage}
                  alt="Anybodies Logo"
                  className="w-60 max-w-full aspect-[4.55]"
                />
                <p className="mt-5 text-xl leading-7 text-white max-md:max-w-full">
                  It's time to bridge the digital and physical. Anybodies helps
                  established brands like Toys'R'Us connect real-life places and
                  products with NFTs.
                </p>
                <div className="flex gap-1.5 mt-6 text-purple-500 max-md:flex-wrap">
                  <div className="flex gap-1.5 mt-6 text-purple-500 max-md:flex-wrap">
                    <div className="flex-auto text-xl leading-7">
                      Learn more about
                    </div>
                    <div className="flex flex-auto gap-px">
                      <div className="text-xl leading-7">NFTs</div>
                      <div className="flex-auto text-xl leading-7">
                        on Solana
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <div className="flex gap-5 justify-between px-20 py-2 mt-5 rounded-2xl bg-neutral-800 bg-opacity-30 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
          <img
            loading="lazy"
            src={partnerLogo1}
            alt="Partner 1"
            className="shrink-0 my-auto max-w-full aspect-[3.33] w-[100px]"
          />
          <img
            loading="lazy"
            src={partnerLogo2}
            alt="Partner 2"
            className="shrink-0 aspect-[0.85] w-[39px]"
          />
          <img
            loading="lazy"
            src={partnerLogo3}
            alt="Partner 3"
            className="shrink-0 aspect-square w-[46px]"
          />
          <img
            loading="lazy"
            src={partnerLogo4}
            alt="Partner 4"
            className="shrink-0 my-auto max-w-full aspect-[3.33] w-[100px]"
          />
        </div>

        <motion.section
          className="flex justify-center items-center px-16 py-20 mt-28 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full"
          initial={{opacity: 0, y: 50}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 0.9}}
        >
          <div className="flex flex-col mb-5 max-w-full w-[1084px]">
            <h2 className="text-4xl tracking-wider leading-10 text-white max-md:max-w-full">
              Go to the source.
            </h2>
            <p className="mt-4 text-xl leading-7 text-stone-300 max-md:max-w-full">
              Read the documentation for Solana and popular tools1.
            </p>
            <div className="flex justify-between gap-5 mt-12 w-full text-3xl leading-8 text-white max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                <div className="flex-1 items-start flex">
                <div className="flex-auto self-start">Solana Docs</div>
                <div className="flex gap-5">
                  <motion.img
                    loading="lazy"
                    src={ViewAll}
                    alt="Metaplex"
                    className="shrink-0 max-w-full border border-white border-solid aspect-[3.23] w-[148px]"
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: 0.95}}
                  />
                </div>
                </div>

                <div className="flex-1 items-start flex justify-between">

                <div>
                  <div className="flex-auto my-auto">Metaplex Docs</div>
                </div>
                <motion.img
                  loading="lazy"
                  src={ViewAll}
                  alt="Anchor"
                  className="shrink-0 max-w-full border border-white border-solid aspect-[3.23] w-[147px]"
                  whileHover={{scale: 1.05}}
                  whileTap={{scale: 0.95}}
                />
                </div>
            </div>
            <div className="flex gap-5 mt-8 text-xl leading-7 text-white max-md:flex-wrap">
              <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit max-md:max-w-full">
                <div className="shrink-0 h-px bg-white bg-opacity-50 max-md:max-w-full" />
                <div className="mt-9 max-md:max-w-full">
                  Learn how Solana works and get a high-level understanding of
                  Solana's architecture.
                </div>
              </div>
              <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit max-md:max-w-full">
                <div className="shrink-0 h-px bg-white bg-opacity-50 max-md:max-w-full" />
                <div className="mt-9 max-md:max-w-full">
                  Learn what you build with Metaplex, make the process of
                  creating and launching NFTs easier.
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="mt-36 max-md:mt-10 max-md:max-w-full"
          initial={{opacity: 0, y: 50}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 1}}
        >
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col text-white max-md:mt-10 max-md:max-w-full">
                <h2 className="text-4xl leading-10 max-md:max-w-full">
                  Solana Changelog
                </h2>
                <p className="mt-9 text-xl leading-7 max-md:max-w-full">
                  Some more Solana changes from Jacob & Joe. Subscribe to the
                  newsletter: https://solana.us17.list-manage.com/s... Proposal
                  - Priced Compute Units: ...
                </p>
                <Button variant="secondary" icon={playIcon}>
                  Latest episode
                </Button>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src={changelogImage}
                alt="Changelog"
                className="grow w-full aspect-[1.72] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </motion.section>

        <div className="self-center mt-2 max-w-full w-[1084px]">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-14 py-12 w-full rounded-2xl shadow-2xl bg-zinc-900 max-md:px-5 max-md:mt-6 max-md:max-w-full">
                <h2 className="text-4xl leading-9 text-white">
                  Solana Developer Update
                </h2>
                <p className="mt-9 text-lg leading-7 text-stone-300">
                  Sign up to the newsletter and learn about new resources, new
                  commits, new proposals, and more.
                </p>
                <div className="flex gap-5 justify-between px-2.5 py-2.5 mt-20 text-base leading-5 text-center bg-neutral-950 rounded-[800px] max-md:pr-5 max-md:mt-10">
                  <div className="my-auto font-semibold capitalize text-slate-500">
                    Email
                  </div>
                  <Button variant="primary">Sign up</Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-14 py-14 w-full text-white rounded-2xl shadow-2xl bg-zinc-900 max-md:px-5 max-md:mt-6 max-md:max-w-full">
                <h2 className="text-4xl leading-9">Even more resources</h2>
                <p className="mt-11 text-lg leading-7 text-stone-300 max-md:mt-10 max-md:mr-2.5">
                  More videos, more episodes. Discussions between industry
                  leaders in both blockchain and technology, our team, and
                  community developers.
                </p>
                <div className="flex gap-5 justify-between mt-16 text-center uppercase whitespace-nowrap max-md:mt-10">
                  <Button variant="secondary" icon={youtubeIcon}>
                    YouTube
                  </Button>
                  <Button variant="secondary" icon={podcastIcon}>
                    Podcast
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="flex justify-center items-center px-16 py-20 mt-20 w-full bg-black rounded-xl border border-solid border-neutral-900 max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 mb-4 max-w-full w-[1096px] max-md:flex-wrap">
            <div className="flex flex-col self-start text-base leading-7">
              <img
                loading="lazy"
                src={footerLogo}
                alt="Footer Logo"
                className="aspect-[1.15] w-[31px]"
              />
              <div className="mt-7 text-white">
                Managed by Solana Foundation
              </div>
              <img
                loading="lazy"
                src={solanaFooterLogo}
                alt="Solana"
                className="mt-6 max-w-full aspect-[6.67] w-[206px]"
              />
              <div className="flex gap-1.5 mt-7 text-slate-500">
                <div className="grow">©</div>
                <div className="flex flex-auto gap-0">
                  <div>2023</div>
                  <div className="flex-auto">
                    Solana Foundation. All rights reserved.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-auto max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[34%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-base leading-7 text-slate-500 max-md:mt-10">
                    <div className="text-white uppercase leading-[117%]">
                      Solana
                    </div>
                    <div className="mt-6 text-base leading-7">Grants</div>
                    <div className="mt-7 text-base leading-7">Break Solana</div>
                    <div className="mt-7">Media Kit</div>
                    <div className="mt-7">Careers</div>
                    <div className="mt-7">Disclaimer</div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[47%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col mt-1 text-base leading-6 text-slate-500 max-md:mt-10">
                    <div className="text-white uppercase leading-[124.8%]">
                      Get Connected
                    </div>
                    <div className="mt-6 text-base">Ecosystem</div>
                    <div className="mt-6 leading-[182%]">Blog</div>
                    <div className="mt-6 text-base">Newsletter</div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[19%] max-md:ml-0 max-md:w-full">
                  <div className="flex gap-1.5 items-center text-base leading-6 text-center uppercase whitespace-nowrap text-slate-500 max-md:mt-10">
                    <img
                      loading="lazy"
                      src={languageIcon}
                      alt="Language"
                      className="shrink-0 self-stretch aspect-[0.95] w-[19px]"
                    />
                    <div className="self-stretch my-auto">en</div>
                    <img
                      loading="lazy"
                      src={languageIcon}
                      alt="Arrow Down"
                      className="shrink-0 self-stretch my-auto aspect-square w-[17px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default HomepageV3;
