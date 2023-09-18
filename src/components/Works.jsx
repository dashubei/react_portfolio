import React from 'react'
import { Element, Link as ScrollLink } from 'react-scroll'
import Fade from 'react-reveal/Fade';

import work1 from "../../public/image/work1.png";
import work2 from "../../public/image/work2.png";
import work3 from "../../public/image/work3.png";
import work4 from "../../public/image/work4.png";
import work5 from "../../public/image/work5.png";
import work6 from "../../public/image/work6.png";



function Works() {
  return (
  <Fade>
    <Element name="works" className="text-white pb-[50px]">
    <h1 className="sm:text-3xl text-2xl font-medium text-center">Works</h1>

      <div className="flex flex-wrap container mx-auto">
                <Fade>
                <a href="https://dashubei.github.io/test" className="block w-[100%] md:w-[50%] p-4" target="_blank">
                    <div className="bg-gray-100 h-full p-8 rounded-lg cursor-pointer hover:opacity-30 duration-200">
                      <div className="flex items-center mb-3">
                        <img src={work1} alt="" />
                      </div>
                        <h2 className="text-[20px] md:text-[30px] text-black">簡易掲示板</h2>
                        <p className="leading-relaxed text-base text-gray-400">
                          Reactを用いて外部APIからJSONを取得しました。SPAでもあります。
                        </p>
                    </div>
                </a>
                </Fade>
                <Fade>
                <a href="https://dashubei.github.io/test2/" className="block w-[100%] md:w-[48%] p-4" target="_blank">
                    <div className="bg-gray-100 h-full p-8 rounded-lg cursor-pointer hover:opacity-30 duration-200">
                      <div className="flex items-center mb-3">
                        <img src={work2} alt="" />
                      </div>
                      <h2 className="text-[20px] md:text-[30px] text-black">ポートフォリオサイト</h2>
                        <p className="leading-relaxed text-base text-gray-400">
                          Bootstrapを用いて作成しました。
                        </p>
                    </div>
                </a>
                </Fade>
                <Fade>
                <a href="https://dashubei.github.io/vue_typing/" className="block w-[100%] md:w-[50%] p-4" target="_blank">

                    <div className="bg-gray-100 h-full p-8 rounded-lg cursor-pointer hover:opacity-30 duration-200">
                      <div className="flex items-center mb-3">
                        <img src={work3} alt="" />
                      </div>
                      <h2 className="text-[20px] md:text-[30px] text-black">タイピングゲーム</h2>
                      <p className="leading-relaxed text-base text-gray-400">
                        Vueを用いて作成しました。
                      </p>
                    </div>
                </a>
                </Fade>
                <Fade>
                <a href="https://dashubei.github.io/react_portfolio/" className="block w-[100%] md:w-[48%] p-4" target="_blank">
                    <div className="bg-gray-100 h-full p-8 rounded-lg cursor-pointer hover:opacity-30 duration-200">
                      <div className="flex items-center mb-3">
                        <img src={work4} alt="" />
                      </div>
                      <h2 className="text-[20px] md:text-[30px] text-black">本サイト</h2>
                      <p className="leading-relaxed text-base text-gray-400">
                        ReactとTailwindCSSを用いて作成しました。
                      </p>
                    </div>
                </a>
                </Fade>
                <Fade>
                <a href="https://dashubei.github.io/portfolio_hp3/" className="block w-[100%] md:w-[50%] p-4" target="_blank">

                    <div className="bg-gray-100 h-full p-8 rounded-lg cursor-pointer hover:opacity-30 duration-200">
                      <div className="flex items-center mb-3">
                        <img src={work5} alt="" />
                      </div>
                      <h2 className="text-[20px] md:text-[30px] text-black">練習用サイト</h2>
                      <p className="leading-relaxed text-base text-gray-400">
                        Web制作の独学をしている際に、課題にて作成したものです。
                      </p>
                    </div>
                </a>
                </Fade>
                <Fade>
                <a href="https://dashubei.github.io/portfolio_hp4/" className="block w-[100%] md:w-[48%] p-4" target="_blank">

                    <div className="bg-gray-100 h-full p-8 rounded-lg cursor-pointer hover:opacity-30 duration-200">
                      <div className="flex items-center mb-3">
                        <img src={work6} alt="" />
                      </div>
                      <h2 className="text-[20px] md:text-[30px] text-black">練習用サイト2</h2>
                      <p className="leading-relaxed text-base text-gray-400">
                        Web制作の独学をしている際に、課題にて作成したものです。
                      </p>
                    </div>
                </a>
                </Fade>
      </div>
  </Element>
  </Fade>
  )
}

export default Works
