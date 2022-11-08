import styles from './App.module.scss';
import { ToggleButton, Banner } from 'components';

export default function App() {
  return (
    <div className={styles.App}>
      <Banner
        url="banner-good.jpg"
        width={374}
        height={800}
        style={{ border: '20px solid #51489e' }}
      >
        선한 영향력 = 플라스틱으로부터 바다를 지키는 능력 우리 모두를 생각하는
        '선한 영향력'이 더 큰 영향력이 되도록 SK도 노력하겠습니다. 모두가 함께,
        행복하도록 OK! SK
      </Banner>
      <Banner
        url="banner-happy.jpg"
        width={750 / 2}
        height={1234 / 2}
        style={{ border: '20px solid #d7aa79' }}
      >
        세상.행복하길 지구가 더 깨끗해지길 사회는 함께 더 따뜻해지길 기업은
        신뢰와 함께 더 따뜻해지길 SK가 ESG로 만들어가는 길 지구도 사회도 기업도
        지속가능한 행복으로 가는길입니다 ESG로 세상.행복하도록
      </Banner>
      <div role="group" style={{ marginTop: 100 }}>
        <ToggleButton
          onText="ON"
          offText="OFF"
          onToggle={() => console.log('hi toggle button')}
        />
        <ToggleButton onText="ON" offText="OFF" on />
      </div>
    </div>
  );
}
