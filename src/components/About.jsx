import React from 'react'
import profile from "../../public/image/main.png";
import Fade from 'react-reveal/Fade';

import { Element, Link as ScrollLink } from 'react-scroll'

function About() {
  return (
<Fade >
  <Element name="about" className="text-white">
        <div className="container pb-2 mx-auto flex flew-wrap">
          <div className="text-center mb-20 sm:text-left mx-auto">
            <h1 className="sm:text-3xl text-2xl font-medium mb-2 text-center">
              <Fade>About</Fade>
            </h1>
            <div className="flex flex-wrap items-center justify-center mx-auto">
              <div>
                <img src={profile} className="items-center w-[80px] pr-[15px]" />
              </div>
              <div>
              <table>
                <tbody>
                  <tr>
                    <th>NAME</th>
                    <td className="pl-[10px]">北　大樹(きた　たいき)</td>
                  </tr>
                  <tr>
                    <th>AGE</th>
                    <td  className="pl-[10px]">23歳</td>
                  </tr>
                  <tr>
                    <th>SCHOOL</th>
                    <td  className="pl-[10px]">明星大学 心理学部 心理学科4年</td>
                  </tr>
                </tbody>
              </table>
              </div>
            </div>
            <br />
            <Fade>
                <p className="pb-10">
                東京都在住の北 大樹と申します。大学では心理学を専攻し、自ら課題を設定し研究に取り組みました。<br/>Web系のプログラミング言語を独学で学習し、インターンにも参加した経験があります。大学ではRを用いて統計的な解析も行いました。<br/>現在アルバイトとして勤務しているレジャーホテルでは、SNSやWebを運用して、売上貢献に繋がるよう努めております。
                </p>
            </Fade>
          </div>
        </div>
      </Element>
    </Fade>
  )
}

export default About
