# 오늘의 운세코드

AI 운세 분석 웹사이트 개발 버전입니다.

## 현재 버전

V2-6

## 이전 안정 버전

V2-5

## 핵심 기능

- 생년월일 / 태어난 시간 기반 오늘의 운세 분석
- 루미 / 모코 / 노바 파트너 시스템
- 파트너 직접 선택 / 랜덤 뽑기 / 교체
- 운세 결과에 따른 파트너 해석
- 운세 결과에 따른 파트너 감정 반응 / 표정 분위기 변화
- 파트너 감정 배지 / 반응 힌트 표시
- EXP / 레벨업 / 성장 단계
- 오늘의 기록 저장 / 이전 운세 다시보기
- 이전 운세 기록에 파트너 반응 상태 저장
- 파트너 도감 / 현재 파트너 프로필
- 발견 / 미발견 파트너 표시
- Lv.5 성장형 / Lv.10 각성형 조건 안내
- 개발 점검 체크리스트
- 체크리스트 상태 새로고침 후 유지

## 적용 방법

GitHub Pages 저장소에 아래 파일을 덮어씁니다.

- index.html
- style.css
- app.js
- manifest.json
- service_worker.js
- README.md
- CHANGELOG.md
- VERSION.txt

업로드 후 Ctrl + F5로 강력 새로고침합니다.

## 저장 방식

현재는 로그인 없이 브라우저 localStorage에 저장됩니다.

- 파트너 정보: `fortune_partner_guest_v1`
- 운세 기록: `fortune_history_guest_v1`
- 파트너 도감: `fortune_partner_dex_guest_v1`
- 개발 점검표: `fortune_dev_checklist_state`

나중에 Firebase 또는 Supabase 로그인 구조를 붙일 때 이 저장 구조를 서버 저장 구조로 옮길 수 있습니다.
