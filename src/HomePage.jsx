

import * as React from "react";

const NavItem = ({text, iconSrc}) => (
  <div className="flex gap-0.5">
    <div className="grow my-auto">{text}</div>
    <img
      loading="lazy"
      src={iconSrc}
      alt=""
      className="shrink-0 w-6 aspect-square"
    />
  </div>
);

const CourseCard = ({chapters, title, imageSrc}) => (
  <div className="flex overflow-hidden relative flex-col grow gap-5 justify-between items-end px-6 pt-20 pb-10 text-white aspect-[1.08] max-md:pl-5 max-md:mt-6">
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
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/cdaf55ae8be81cbff923da6ba62b51003bd1041d6da1d8fd487b81e10e091524?apiKey=857b0bb016744a848d1c5cf13339d933&"
      alt=""
      className="shrink-0 mt-44 aspect-square w-[30px] max-md:mt-10"
    />
  </div>
);

const Button = ({children, variant, icon}) => (
  <button
    className={`flex gap-3 px-6 py-4 rounded-3xl border border-solid ${
      variant === "primary"
        ? "bg-emerald-400 text-black border-black"
        : "bg-black text-white border-white"
    } max-md:px-5`}
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
  </button>
);

export function Homepage() {
  return (
    <div className="flex flex-col bg-black shadow-sm">
      <header className="flex justify-center items-center px-16 py-5 w-full text-lg leading-7 text-center whitespace-nowrap bg-black bg-opacity-60 text-slate-500 max-md:px-5 max-md:max-w-full">
        <nav className="flex gap-5 justify-between max-w-full w-[1084px] max-md:flex-wrap">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f92b2e3e304a7615829e436c871910fff4842371c1bea9df6b79653cd1ddf86?apiKey=857b0bb016744a848d1c5cf13339d933&"
            alt="Logo"
            className="shrink-0 max-w-full aspect-[6.67] w-[182px]"
          />
          <div className="flex gap-5 justify-between self-start max-md:flex-wrap">
            <NavItem
              text="Learn"
              iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/1dd0ee44ce5d12556efb1e745e70309d0cd9396c191ec28f16987b7a4bc4a52a?apiKey=857b0bb016744a848d1c5cf13339d933&"
            />
            <NavItem
              text="Build"
              iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/91edb545c201f0ea6872c4d274320f01d7c1feb04f7bf45d5172ad807d6691ec?apiKey=857b0bb016744a848d1c5cf13339d933&"
            />
            <NavItem
              text="Network"
              iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/54f9317aa8a2bb4628192aee7184affcfd698dc3719b5fd4de1464da15f6a255?apiKey=857b0bb016744a848d1c5cf13339d933&"
            />
            <NavItem
              text="Community"
              iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/bc08533ee2b0811bed0bddd79e5d55016a1a0db267eb2e7d0e5c94985c19ffc8?apiKey=857b0bb016744a848d1c5cf13339d933&"
            />
          </div>
        </nav>
      </header>

      <main className="flex flex-col self-center px-5 mt-2 w-full max-w-[1211px] max-md:max-w-full">
        <section className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                <h1 className="text-8xl tracking-wide text-white leading-[96px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
                  Developer Resources
                </h1>
                <p className="mt-9 text-xl leading-6 text-stone-300 max-md:max-w-full">
                  A manual for joining the Solana ecosystem. By builders for
                  builders.
                </p>
                <div className="flex gap-2 mt-10 text-base leading-5 text-center uppercase max-md:flex-wrap">
                  <Button variant="primary">Build Now</Button>
                  <Button icon="https://cdn.builder.io/api/v1/image/assets/TEMP/d85032750e04fb59a85d177e607029261ec86947e09c52b62741d54c9e50c119?apiKey=857b0bb016744a848d1c5cf13339d933&">
                    Stack Exchange
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5a0d334b3a93a057713b742af9718ab73bcfe865fc4296dbbe794fb7f9d52ac?apiKey=857b0bb016744a848d1c5cf13339d933&"
                alt="Developer Resources"
                className="grow w-full aspect-[0.86] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </section>

        <section>
          <h2 className="mt-1 text-4xl tracking-wider leading-10 text-white max-md:max-w-full">
            Get started.
          </h2>
          <p className="mt-4 text-xl leading-7 text-stone-300 max-md:max-w-full">
            Use these Solana Foundation and community courses to begin your
            journey into Solana development.
          </p>
          <div className="flex overflow-hidden relative flex-col items-start px-20 py-20 mt-9 max-w-full text-white min-h-[370px] w-[1084px] max-md:px-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d793813266889f4c7b0cd7a01198192c3dde2b6589e72afbd8a8106032bb98b1?apiKey=857b0bb016744a848d1c5cf13339d933&"
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
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c1d994b99e5fb80815bccef0212d9ac8995d70239793306f29651da1bf8330d?apiKey=857b0bb016744a848d1c5cf13339d933&"
              alt=""
              className="mt-6 aspect-square w-[30px] max-md:ml-2"
            />
          </div>
        </section>

        <section className="mt-6 max-md:pr-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <CourseCard
              chapters="14"
              title="Buildspace"
              imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/986e73017361ad819a8ad6b9e83b2b377f6d3871eabeb2d48fb17e7050e31267?apiKey=857b0bb016744a848d1c5cf13339d933&"
            />
            <CourseCard
              chapters="12"
              title="Solana Bytes"
              imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/26550f765af7810f991e4632fc1558fc416980772b8e5220099914b4644b6c5f?apiKey=857b0bb016744a848d1c5cf13339d933&"
            />
            <CourseCard
              chapters="1"
              title="Scaffold Series"
              imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/d7f488e331941c723d873680f114dda974f7906135eeef7aff8a1f8c4d397bc8?apiKey=857b0bb016744a848d1c5cf13339d933&"
            />
          </div>
        </section>

        <section className="mt-6 max-md:pr-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/03ab866af3371117ef1ed32990f0a79f90316067d54d5caad3b7baee3de6b8e7?apiKey=857b0bb016744a848d1c5cf13339d933&"
                alt="Course"
                className="grow w-full aspect-[1.09] max-md:mt-6"
              />
            </div>
            <CourseCard
              chapters="167"
              title="Solana Development by Knox"
              imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/342fc1c3716ec0c53d6cd69edac532acc252c03b065f67f07260d2b2e440e930?apiKey=857b0bb016744a848d1c5cf13339d933&"
            />
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/853fde06b0d4b59ba8b5aecfaa86b55c02aca2115d4077a014e6090e97798a64?apiKey=857b0bb016744a848d1c5cf13339d933&"
                alt="Course"
                className="grow w-full aspect-[1.09] max-md:mt-6"
              />
            </div>
          </div>
        </section>

        <section className="flex gap-5 mt-28 w-full text-white max-md:flex-wrap max-md:pr-5 max-md:mt-10 max-md:max-w-full">
          <h2 className="flex-auto my-auto text-4xl tracking-wider leading-10">
            Build for growth.
          </h2>
          <div className="flex gap-4 text-base leading-7 text-center whitespace-nowrap max-md:flex-wrap">
            {["NFTs", "DeFi", "Payments", "Gaming", "DAOs"].map((item) => (
              <div
                key={item}
                className="justify-center px-4 py-5 rounded-2xl border border-solid bg-neutral-900 border-neutral-900"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-xl bg-zinc-900 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5acff7bd3d7913a54d9375c94d403f2b05b1dbb16cd7c7526fc4be75246ea2b7?apiKey=857b0bb016744a848d1c5cf13339d933&"
                alt="Anybodies"
                className="grow w-full aspect-[1.37] max-md:mt-10 max-md:max-w-full"
              />
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e80921b0df084a375d8b6c5ee8c2313429289a82b98e3c113a2aa2e59353af3?apiKey=857b0bb016744a848d1c5cf13339d933&"
                  alt="Anybodies Logo"
                  className="w-60 max-w-full aspect-[4.55]"
                />
                <p className="mt-5 text-xl leading-7 text-white max-md:max-w-full">
                  It's time to bridge the digital and physical. Anybodies helps
                  established brands like Toys'R'Us connect real-life places and
                  products with NFTs.
                </p>
                <div className="flex gap-1.5 mt-6 text-purple-500 max-md:flex-wrap">
                  <div className="flex-auto text-xl leading-7">
                    Learn more about
                  </div>
                  <div className="flex flex-auto gap-px">
                    <div className="text-xl leading-7">NFTs</div>
                    <div className="flex-auto text-xl leading-7">on Solana</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="flex gap-5 justify-between px-20 py-2 mt-5 rounded-2xl bg-neutral-800 bg-opacity-30 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
          {[
            "https://cdn.builder.io/api/v1/image/assets/TEMP/5ef9cd9407ab395decca3c9e3f18534ca785947f89103d82798d5961ddbb864d?apiKey=857b0bb016744a848d1c5cf13339d933&",
            "https://cdn.builder.io/api/v1/image/assets/TEMP/83302307b47304450745ba894e1372f025c4ab6c7e41338cd4de4014cf62fb7f?apiKey=857b0bb016744a848d1c5cf13339d933&",
            "https://cdn.builder.io/api/v1/image/assets/TEMP/f1006325192116a4841df299566f2c286908bcf1f6d2f6badf2c9d62e5b7d879?apiKey=857b0bb016744a848d1c5cf13339d933&",
            "https://cdn.builder.io/api/v1/image/assets/TEMP/d27814f212d4ceff3cb9135832f5bca55e0471a2248fa1aa8574f4087417d5a3?apiKey=857b0bb016744a848d1c5cf13339d933&",
          ].map((src, index) => (
            <img
              key={index}
              loading="lazy"
              src={src}
              alt=""
              className="shrink-0 my-auto max-w-full aspect-[3.33] w-[100px]"
            />
          ))}
        </div>

        <section className="flex justify-center items-center px-16 py-20 mt-28 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col mb-5 max-w-full w-[1084px]">
            <h2 className="text-4xl tracking-wider leading-10 text-white max-md:max-w-full">
              Go to the source.
            </h2>
            <p className="mt-4 text-xl leading-7 text-stone-300 max-md:max-w-full">
              Read the documentation for Solana and popular tools.
            </p>
            <div className="flex gap-5 mt-12 w-full text-3xl leading-8 text-white max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
              <div className="flex-auto self-start">Solana Docs</div>
              <div className="flex gap-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b85dd7e-8d3c-4d6f-825b-b79a588e0184?apiKey=857b0bb016744a848d1c5cf13339d933&"
                  alt="Metaplex"
                  className="shrink-0 max-w-full border border-white border-solid aspect-[3.23] w-[148px]"
                />
                <div className="flex-auto my-auto">Metaplex Docs</div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/edf96dd6-30e8-43e0-b9c2-84a7147ff61f?apiKey=857b0bb016744a848d1c5cf13339d933&"
                alt="Documentation"
                className="shrink-0 max-w-full border border-white border-solid aspect-[3.23] w-[147px]"
              />
            </div>
            <div className="flex gap-5 mt-8 text-xl leading-7 text-white max-md:flex-wrap">
              <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit max-md:max-w-full">
                <div className="shrink-0 h-px bg-white bg-opacity-50 max-md:max-w-full" />
                <p className="mt-9 max-md:max-w-full">
                  Learn how Solana works and get a high-level understanding of
                  Solana's architecture.
                </p>
              </div>
              <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit max-md:max-w-full">
                <div className="shrink-0 h-px bg-white bg-opacity-50 max-md:max-w-full" />
                <p className="mt-9 max-md:max-w-full">
                  Learn what you build with Metaplex, make the process of
                  creating and launching NFTs easier.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-36 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col text-white max-md:mt-10 max-md:max-w-full">
                <h2 className="text-4xl leading-10 max-md:max-w-full">
                  Solana Changelog
                </h2>
                <p className="mt-9 text-xl leading-7 max-md:max-w-full">
                  <p className="mt-9 text-xl leading-7 max-md:max-w-full">
                    Some more Solana changes from Jacob & Joe. Subscribe to the
                    newsletter: https://solana.us17.list-manage.com/s...
                    Proposal - Priced Compute Units: ...
                  </p>
                  <Button
                    variant="primary"
                    icon="https://cdn.builder.io/api/v1/image/assets/TEMP/c54ff1f7f6220162abe398961307cefe9b4c622de359f1a3c3eb82499f155118?apiKey=857b0bb016744a848d1c5cf13339d933&"
                  >
                    Latest episode
                  </Button>
                </p>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/388a4432843cbc30fd483d6b19377981b4ed9dd3168304b844c3b519a80e723b?apiKey=857b0bb016744a848d1c5cf13339d933&"
                alt="Solana Changelog"
                className="grow w-full aspect-[1.72] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </section>

        <section className="self-center mt-2 max-w-full w-[1084px]">
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
                <form className="flex gap-5 justify-between px-2.5 py-2.5 mt-20 text-base leading-5 text-center bg-neutral-950 rounded-[800px] max-md:pr-5 max-md:mt-10">
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    className="my-auto font-semibold capitalize text-slate-500 bg-transparent border-none"
                  />
                  <button
                    type="submit"
                    className="justify-center px-6 py-5 bg-emerald-400 border border-black border-solid rounded-[800px] text-black uppercase max-md:px-5"
                  >
                    Sign up
                  </button>
                </form>
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
                  <Button
                    variant="secondary"
                    icon="https://cdn.builder.io/api/v1/image/assets/TEMP/3c9d5e08ae1c772942ab97d56e98612d7500cace5184f6d0ab7c821e0f2ce73e?apiKey=857b0bb016744a848d1c5cf13339d933&"
                  >
                    YouTube
                  </Button>
                  <Button
                    variant="secondary"
                    icon="https://cdn.builder.io/api/v1/image/assets/TEMP/208272bcaa3fe0781b03c5d3661080691f8cd30782928950b3fae2ab3f8f233b?apiKey=857b0bb016744a848d1c5cf13339d933&"
                  >
                    Podcast
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="flex justify-center items-center px-16 py-20 mt-20 w-full bg-black rounded-xl border border-solid border-neutral-900 max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 mb-4 max-w-full w-[1096px] max-md:flex-wrap">
            <div className="flex flex-col self-start text-base leading-7">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/15b3de5425414e5b0b5e385a6628de3a2043b2e190f8c9f51bd3c4d7a5d1c47f?apiKey=857b0bb016744a848d1c5cf13339d933&"
                alt=""
                className="aspect-[1.15] w-[31px]"
              />
              <p className="mt-7 text-white">Managed by Solana Foundation</p>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf5e2b342e8f65c1979a0f7f217d92804bb776b2b0b782178999d7f5c59897d0?apiKey=857b0bb016744a848d1c5cf13339d933&"
                alt="Solana Logo"
                className="mt-6 max-w-full aspect-[6.67] w-[206px]"
              />
              <p className="flex gap-1.5 mt-7 text-slate-500">
                <span>©</span>
                <span>2023 Solana Foundation. All rights reserved.</span>
              </p>
            </div>
            <nav className="flex-auto max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[34%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-base leading-7 text-slate-500 max-md:mt-10">
                    <h3 className="text-white uppercase leading-[117%]">
                      Solana
                    </h3>
                    <ul className="mt-6 space-y-7 list-none p-0">
                      <li>
                        <a href="#" className="text-slate-500 hover:text-white">
                          Grants
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-slate-500 hover:text-white">
                          Break Solana
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-slate-500 hover:text-white">
                          Media Kit
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-slate-500 hover:text-white">
                          Careers
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-slate-500 hover:text-white">
                          Disclaimer
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[47%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col mt-1 text-base leading-6 text-slate-500 max-md:mt-10">
                    <h3 className="text-white uppercase leading-[124.8%]">
                      Get Connected
                    </h3>
                    <ul className="mt-6 space-y-6 list-none p-0">
                      <li>
                        <a href="#" className="text-slate-500 hover:text-white">
                          Ecosystem
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-slate-500 hover:text-white">
                          Blog
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-slate-500 hover:text-white">
                          Newsletter
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[19%] max-md:ml-0 max-md:w-full">
                  <div className="flex gap-1.5 items-center text-base leading-6 text-center uppercase whitespace-nowrap text-slate-500 max-md:mt-10">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/647ec4ffaf75c47d616201cc83a7ea741df59043f6585a01f3fad754ca603ebe?apiKey=857b0bb016744a848d1c5cf13339d933&"
                      alt=""
                      className="shrink-0 self-stretch aspect-[0.95] w-[19px]"
                    />
                    <span className="self-stretch my-auto">en</span>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/01bb04d5629b3f2487e7c6132e7001c73052fcb5e7424d255b518d0777043569?apiKey=857b0bb016744a848d1c5cf13339d933&"
                      alt=""
                      className="shrink-0 self-stretch my-auto aspect-square w-[17px]"
                    />
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default Homepage;
