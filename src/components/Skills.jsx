import React from 'react'
import { Element, Link as ScrollLink } from 'react-scroll'
import Fade from 'react-reveal/Fade';

function Skills() {
  return (
    <Fade>
    <Element name="skills" className="text-white">
    <h1 className="sm:text-3xl text-2xl font-medium text-center">Skills</h1>


    <div className="flex flex-wrap justify-between container px-3 pt-5 mx-auto  w-[100%] mb-16">
      <Fade>
      <div className="w-[100%] sm:w-[48%] flex flex-start justify-between mx-auto">
        <div className="w-[20px] h-auto mr-[50px]"><i className="fa-solid fa-laptop fa-3x"></i></div>
          <div>
            <h2 className="font-bold mb-[10px]">HTML/CSS/JavaScript</h2>
            <p>1番初めに触れたプログラミング言語です。自分のプログラムが即座に反映され、開発ツールを用いながら、どのようにしたら表示させたいようにできるのか工夫するのが楽しいです。</p>
          </div>
        </div>
      </Fade>
      <Fade>
      <div className="w-[100%] sm:w-[48%] flex flex-start mx-auto mb-[20px]">
        <div className="w-[20px] h-auto mr-[50px]"><i className="fa-brands fa-php fa-3x"></i></div>
        <div>
          <h2 className="font-bold mb-[10px]">PHP</h2>
          <p>ローカル上でWebアプリを作成する際に主に使用していた言語になります。PHPはLaravelやLumenなどのフレームワークを用いていた経験もあります。コードを書く際には、論理的に思考する必要があり、そこが難しくもあり、またエラーが出ずに上手くいった時の達成感もありました。</p>
        </div>
      </div>
      </Fade>

      <Fade>
      <div className="w-[100%] sm:w-[48%] flex flex-start mx-auto mb-[20px]">
        <div className="w-[20px] h-auto mr-[50px]"><i className="fa-solid fa-database fa-3x"></i></div>
        <div>
          <h2 className="font-bold mb-[10px]">MySQL</h2>
          <p>PHPでWebアプリケーションを作成する際に、MAMPを用いてローカル上でデータバースを触った経験があります。</p>
        </div>
      </div>
      </Fade>

      <Fade>
      <div className="w-[100%] sm:w-[48%] flex flex-start mx-auto mb-[20px]">
        <div className="w-[20px] h-auto mr-[50px]"><i className="fa-brands fa-wordpress fa-3x"></i></div>
        <div>
          <h2 className="font-bold mb-[10px]">WordPress</h2>
          <p>少し触った経験があります。プログラミングコードを直接書くことが少ない、CMSの一つということでWebやプログラミングの知識がなくてもHPやサイトが作れるということで感激しました。現在勤務するレジャーホテルにおいても、CMSを用いたWebサイトを運用しております。</p>
        </div>
      </div>
      </Fade>

      <Fade>
      <div className="w-[100%] sm:w-[48%] flex flex-start mx-auto mb-[20px]">
        <div className="w-[20px] h-auto mr-[50px]"><i className="fa-brands fa-react fa-3x"></i><i className="fa-brands fa-vuejs fa-3x"></i></div>
        <div>
          <h2 className="font-bold mb-[10px]">React/Vue</h2>
          <p>JavaScriptのモダンなフレームワークとして独学していた経験があります。Reactの方が触っていました、外部のJSONを取得して表示させるという処理を行うプログラムなどを作成しました。</p>
        </div>
      </div>
      </Fade>

      <Fade>
      <div className="w-[100%] sm:w-[48%] flex flex-start mx-auto mb-[20px]">
        <div className="w-[20px] h-auto mr-[50px]"><i className="fa-brands fa-r fa-3x"></i></div>
        <div>
          <h2 className="font-bold mb-[10px]">R/RStudio</h2>
          <p>大学で統計的な解析を行う際に用いていました。</p>
        </div>
      </div>
      </Fade>

      <Fade>
      <div className="w-[100%] sm:w-[48%] flex flex-start mx-auto mb-[20px]">
        <div className="w-[20px] h-auto mr-[50px]"><i className="fa-brands fa-docker fa-3x"></i></div>
        <div>
          <h2 className="font-bold mb-[10px]">Docker</h2>
          <p>開発環境の構築に用いた経験があります。</p>
        </div>
      </div>
      </Fade>

      <Fade>
      <div className="w-[100%] sm:w-[48%] flex flex-start mx-auto mb-[20px]">
        <div className="w-[20px] h-auto mr-[50px] text-center"><i className="fa-solid fa-file-word fa-2x"></i><i className="fa-solid fa-file-excel fa-2x"></i><i className="fa-solid fa-file-powerpoint fa-2x"></i></div>
        <div>
          <h2 className="font-bold mb-[10px]">Word/Excell/PowerPoint</h2>
          <p>大学の講義で常に使用していましたので、問題なく利用できます。</p>
        </div>
      </div>
      </Fade>

    </div>
  </Element>
  </Fade>
  )
}

export default Skills
