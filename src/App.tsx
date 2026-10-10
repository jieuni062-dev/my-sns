import Feed from './components/Feed'
import './App.css'

function App() {
  return (
    <>
      {/* 손그림 낙서와 삐뚤빼뚤한 선을 만드는 필터 */}
      <svg className="defs" width="0" height="0" aria-hidden="true">
        <filter id="wobble">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.03"
            numOctaves="2"
            seed="4"
            result="noise"
          />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
        </filter>
        <symbol id="loaf" viewBox="0 0 32 32">
          <path d="M6 14c-2-6 4-9 10-9s12 3 10 9c-.5 1.5-1.5 2-2 2v9c0 1.200-1 2-2 2H10c-1 0-2-.8-2-2v-9c-.5 0-1.500-.5-2-2z" />
          <path d="M13 18.500v1M19 18.500v1M14 22.500q2 2 4 0" fill="none" />
        </symbol>
        <symbol id="baguette" viewBox="0 0 32 32">
          <path d="M5 25C2 21 19 4 24.500 5.500S29 9 27 11.500C22 17 9 29 5 25z" />
          <path d="M11 17l3 3M15 13l3 3M19 9.500l3 3" fill="none" />
        </symbol>
        <symbol id="donut" viewBox="0 0 32 32">
          <path d="M16 5c7 0 11 4.500 11 11s-4.500 11-11 11S5 22.500 5 16 9.500 5 16 5z" />
          <path
            d="M16 12.500c2.200 0 3.500 1.500 3.500 3.500s-1.500 3.500-3.500 3.500-3.500-1.500-3.500-3.500 1.500-3.500 3.500-3.500z"
            fill="#fffaf1"
          />
          <path
            d="M10 10l1.500 1M22 9.500l-1 1.500M9 20l1.500-.5M22.500 21l-1.500-1M16 23.500v1.500"
            fill="none"
          />
        </symbol>
      </svg>

      <div className="phone">
        <header className="header">
          <h1>
            <svg className="doodle" aria-hidden="true">
              <use href="#loaf" />
            </svg>
            빵지순례
          </h1>
          <p>
            동네 빵집을 순례하며
            <br />
            남기는 사진 기록
          </p>
        </header>

        <Feed />
      </div>
    </>
  )
}

export default App
