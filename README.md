#### 파일 디렉토리 구조 설명
|Layer|설명|
|------|---------------|
|app|애플리케이션 로직이 초기화되는 곳이다.|
|components|페이지에 사용되는 독립적인 곳이다.|
|entities|비즈니스 엔티티를 나타내는 곳이다.|
|features|비즈니스 가치를 전달하는 사용자 시나리오와 기능을 다루는 곳이다.|
|page|애플리케이션의 페이지가 포함되는 곳이다.|
|shared|특정 비즈니스 로직에 종속되지 않은 재사용 가능한 컴포넌트와 유틸리티가 포함되어 있는 곳이다.|

<br>

#### 계층 구조 설명
|Layer|Can use|Can be used by|
|------|---------------|--------|
|app|shared, entites, features, components, pages|없음|
|pages|shared, entites, features, components|app|
|components|shared, entites, features|pages, app|
|features|shared, entites|components, pages, app|
|entities|shared|features, components, pages, app|
|shared|없음|shared, features, components, pages, app|

<br><br>

#### 파일 디렉토리 구조 (FSD 아키텍처)
<img src="https://github.com/hyunho4532/movieTok/assets/118269278/39eac767-aa09-43da-8452-a653d6116487" />
