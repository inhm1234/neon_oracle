# 오늘의 운세코드

AI 운세 분석 웹사이트 개발 버전입니다.

## 현재 버전

V2-4

## 핵심 기능

- 생년월일 / 태어난 시간 기반 오늘의 운세 분석
- 루미 / 모코 / 노바 파트너 시스템
- 파트너 직접 선택 / 랜덤 뽑기 / 교체
- 운세 결과에 따른 파트너 해석
- EXP / 레벨업 / 성장 단계
- 오늘의 운세 기록 자동 저장
- 이전 운세 다시보기
- 개별 기록 삭제 / 전체 기록 삭제
- 개발 점검 체크리스트
- 체크리스트 상태 새로고침 후 유지

## 적용 방법

GitHub Pages 저장소에 아래 파일을 덮어씌웁니다.

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

현재는 로그인 없이 브라우저의 localStorage에 저장됩니다.

- 파트너 기록: `fortune_partner_guest_v1`
- 운세 기록: `fortune_history_guest_v1`
- 개발 점검표: `fortune_dev_checklist_state`

나중에 Supabase 또는 Firebase를 붙이면 계정 기반 저장으로 확장할 수 있습니다.
