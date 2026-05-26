const form = document.getElementById("fortuneForm");
const analyzeBtn = document.getElementById("analyzeBtn");

const userNameEl = document.getElementById("userName");
const genderEl = document.getElementById("gender");
const birthDateEl = document.getElementById("birthDate");
const birthTimeEl = document.getElementById("birthTime");

const statusText = document.getElementById("statusText");
const resultCard = document.getElementById("resultCard");

const analysisCode = document.getElementById("analysisCode");
const completeRate = document.getElementById("completeRate");
const resultTitle = document.getElementById("resultTitle");
const baseInfo = document.getElementById("baseInfo");

const totalFortune = document.getElementById("totalFortune");
const moneyFortune = document.getElementById("moneyFortune");
const loveFortune = document.getElementById("loveFortune");
const workFortune = document.getElementById("workFortune");
const healthFortune = document.getElementById("healthFortune");
const cautionFortune = document.getElementById("cautionFortune");
const luckyItems = document.getElementById("luckyItems");
const finalAdvice = document.getElementById("finalAdvice");

const meetPartnerBtn = document.getElementById("meetPartnerBtn");
const resetPartnerBtn = document.getElementById("resetPartnerBtn");
const changePartnerBtn = document.getElementById("changePartnerBtn");
const partnerChoiceButtons = document.querySelectorAll("[data-partner-id]");
const partnerDrawStage = document.getElementById("partnerDrawStage");
const partnerDrawName = document.getElementById("partnerDrawName");
const partnerEmpty = document.getElementById("partnerEmpty");
const partnerActive = document.getElementById("partnerActive");
const partnerOrb = document.getElementById("partnerOrb");
const partnerSymbol = document.getElementById("partnerSymbol") || document.getElementById("partnerEmoji");
const partnerName = document.getElementById("partnerName");
const partnerType = document.getElementById("partnerType");
const partnerLevel = document.getElementById("partnerLevel");
const partnerStage = document.getElementById("partnerStage");
const partnerExpText = document.getElementById("partnerExpText");
const partnerBond = document.getElementById("partnerBond");
const partnerMoodBadge = document.getElementById("partnerMoodBadge");
const partnerExpFill = document.getElementById("partnerExpFill");
const partnerSpeech = document.getElementById("partnerSpeech");
const partnerMoodHint = document.getElementById("partnerMoodHint");
const partnerInsightBox = document.getElementById("partnerInsightBox");
const partnerInsightLabel = document.getElementById("partnerInsightLabel");
const partnerInsightText = document.getElementById("partnerInsightText");
const levelToast = document.getElementById("levelToast");
const levelToastTitle = document.getElementById("levelToastTitle");
const levelToastText = document.getElementById("levelToastText");
const fortuneHistoryEmpty = document.getElementById("fortuneHistoryEmpty");
const fortuneHistoryList = document.getElementById("fortuneHistoryList");
const clearHistoryBtn = document.getElementById("clearHistoryBtn");
const activePartnerProfile = document.getElementById("activePartnerProfile");
const partnerDexGrid = document.getElementById("partnerDexGrid");
const partnerDexProgress = document.getElementById("partnerDexProgress");
const attendanceStreak = document.getElementById("attendanceStreak");
const attendanceBest = document.getElementById("attendanceBest");
const attendanceTotal = document.getElementById("attendanceTotal");
const attendanceTodayStatus = document.getElementById("attendanceTodayStatus");
const attendanceRewardText = document.getElementById("attendanceRewardText");
const attendanceClaimBtn = document.getElementById("attendanceClaimBtn");
const attendanceLogList = document.getElementById("attendanceLogList");
const devVersionBadge = document.getElementById("devVersionBadge");
const devChecklistItems = document.querySelectorAll("[data-check-id]");
const devChecklistProgress = document.getElementById("devChecklistProgress");
const devChecklistFill = document.getElementById("devChecklistFill");
const resetChecklistBtn = document.getElementById("resetChecklistBtn");
const checklistJumpBtn = document.getElementById("checklistJumpBtn");
const devCheckCard = document.getElementById("devCheckCard");
const dataManagerStatus = document.getElementById("dataManagerStatus");
const dataPartnerState = document.getElementById("dataPartnerState");
const dataHistoryState = document.getElementById("dataHistoryState");
const dataDexState = document.getElementById("dataDexState");
const dataAttendanceState = document.getElementById("dataAttendanceState");
const dataChecklistState = document.getElementById("dataChecklistState");
const backupDataBtn = document.getElementById("backupDataBtn");
const importDataBtn = document.getElementById("importDataBtn");
const resetAllDataBtn = document.getElementById("resetAllDataBtn");
const dataImportFile = document.getElementById("dataImportFile");
const dataManagerMessage = document.getElementById("dataManagerMessage");
const profileSelect = document.getElementById("profileSelect");
const profileCurrentBadge = document.getElementById("profileCurrentBadge");
const profileCountText = document.getElementById("profileCountText");
const profileMigrationState = document.getElementById("profileMigrationState");
const profileMessage = document.getElementById("profileMessage");
const newProfileName = document.getElementById("newProfileName");
const createProfileBtn = document.getElementById("createProfileBtn");
const switchProfileBtn = document.getElementById("switchProfileBtn");
const dataProfileState = document.getElementById("dataProfileState");
const renameProfileName = document.getElementById("renameProfileName");
const renameProfileBtn = document.getElementById("renameProfileBtn");
const duplicateProfileBtn = document.getElementById("duplicateProfileBtn");
const deleteProfileBtn = document.getElementById("deleteProfileBtn");
const loginReadyBadge = document.getElementById("loginReadyBadge");
const loginActiveProfileName = document.getElementById("loginActiveProfileName");
const loginSchemaVersionText = document.getElementById("loginSchemaVersionText");
const loginDataBundleState = document.getElementById("loginDataBundleState");
const loginStorageModeText = document.getElementById("loginStorageModeText");
const loginPartnerKeyState = document.getElementById("loginPartnerKeyState");
const loginHistoryKeyState = document.getElementById("loginHistoryKeyState");
const loginDexKeyState = document.getElementById("loginDexKeyState");
const loginAttendanceKeyState = document.getElementById("loginAttendanceKeyState");
const loginChecklistKeyState = document.getElementById("loginChecklistKeyState");
const loginSchemaPreview = document.getElementById("loginSchemaPreview");
const refreshLoginSchemaBtn = document.getElementById("refreshLoginSchemaBtn");
const copyLoginSchemaBtn = document.getElementById("copyLoginSchemaBtn");
const loginInspectorMessage = document.getElementById("loginInspectorMessage");
const firebaseLoginStatus = document.getElementById("firebaseLoginStatus");
const firebaseProjectState = document.getElementById("firebaseProjectState");
const firebaseDomainState = document.getElementById("firebaseDomainState");
const firebaseProviderState = document.getElementById("firebaseProviderState");
const firebaseFirestoreState = document.getElementById("firebaseFirestoreState");
const firebaseUserBox = document.getElementById("firebaseUserBox");
const firebaseUserPhoto = document.getElementById("firebaseUserPhoto");
const firebaseUserName = document.getElementById("firebaseUserName");
const firebaseUserEmail = document.getElementById("firebaseUserEmail");
const firebaseSignInBtn = document.getElementById("firebaseSignInBtn");
const firebaseSignOutBtn = document.getElementById("firebaseSignOutBtn");
const firebaseLoginMessage = document.getElementById("firebaseLoginMessage");
const cloudSaveStatus = document.getElementById("cloudSaveStatus");
const cloudSaveUser = document.getElementById("cloudSaveUser");
const cloudSaveProfile = document.getElementById("cloudSaveProfile");
const cloudSaveLocalState = document.getElementById("cloudSaveLocalState");
const cloudSaveServerState = document.getElementById("cloudSaveServerState");
const cloudLastSaved = document.getElementById("cloudLastSaved");
const cloudSaveBtn = document.getElementById("cloudSaveBtn");
const cloudLoadBtn = document.getElementById("cloudLoadBtn");
const cloudRefreshBtn = document.getElementById("cloudRefreshBtn");
const cloudSaveMessage = document.getElementById("cloudSaveMessage");

const PARTNER_KEY = "fortune_partner_guest_v1";
const EXP_PER_LEVEL = 20;
const DEV_VERSION = "V3-1";
const CHECKLIST_KEY = "fortune_dev_checklist_state";
const CHECKLIST_LEGACY_KEYS = ["fortune_dev_checklist_v231", "fortune_dev_checklist_v232"];
const HISTORY_KEY = "fortune_history_guest_v1";
const HISTORY_LIMIT = 20;
const DEX_KEY = "fortune_partner_dex_guest_v1";
const ATTENDANCE_KEY = "fortune_attendance_guest_v1";
const ATTENDANCE_LOG_LIMIT = 10;
const DATA_BACKUP_KEYS = [
  { key: PARTNER_KEY, label: "파트너" },
  { key: HISTORY_KEY, label: "이전 운세" },
  { key: DEX_KEY, label: "파트너 도감" },
  { key: ATTENDANCE_KEY, label: "출석" },
  { key: CHECKLIST_KEY, label: "개발 점검표" }
];
const PROFILE_STORE_KEY = "fortune_profile_store_v1";
const PROFILE_ACTIVE_KEY = "fortune_active_profile_v1";
const PROFILE_DEFAULT_ID = "default";
const PROFILE_DATA_KEYS = DATA_BACKUP_KEYS.map((item) => item.key);
const LOGIN_SCHEMA_VERSION = "profile_bundle_v1";
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyAFtB38nYFrqFMN5f7Wx4m8YVTnmpCpgXc",
  authDomain: "today-fortune-code.firebaseapp.com",
  projectId: "today-fortune-code",
  storageBucket: "today-fortune-code.firebasestorage.app",
  messagingSenderId: "129903053075",
  appId: "1:129903053075:web:3f6b8d16e8408039eb72e6",
  measurementId: "G-9VXED2HZC2"
};
const FIREBASE_SDK_VERSION = "10.12.5";
const FIREBASE_ALLOWED_DOMAIN = "inhm1234.github.io";
let firebaseAuth = null;
let firebaseProvider = null;
let firebaseSignInWithPopup = null;
let firebaseSignOut = null;
let firebaseDb = null;
let firebaseDoc = null;
let firebaseGetDoc = null;
let firebaseSetDoc = null;
let firebaseServerTimestamp = null;
let firebaseLoginReady = false;
let isProfileSystemReady = false;


function setFirebaseLoginMessage(message) {
  if (firebaseLoginMessage) {
    firebaseLoginMessage.textContent = message;
  }
}

function setFirebaseLoginStatus(text) {
  if (firebaseLoginStatus) {
    firebaseLoginStatus.textContent = text;
  }
}

function setCloudSaveMessage(message) {
  if (cloudSaveMessage) {
    cloudSaveMessage.textContent = message;
  }
}

function formatCloudSavedAt(value) {
  if (!value) return "기록 없음";

  if (value && typeof value.toDate === "function") {
    return formatSavedAt(value.toDate().toISOString());
  }

  if (typeof value === "string") {
    return formatSavedAt(value);
  }

  return "기록 있음";
}

function getCloudLocalSummaryText() {
  const summary = getCurrentDataSummary();
  return `${summary.partner} · 기록 ${summary.historyCount}개 · 출석 ${summary.attendance}`;
}

function setCloudButtonsEnabled(enabled) {
  [cloudSaveBtn, cloudLoadBtn, cloudRefreshBtn].forEach((button) => {
    if (button) button.disabled = !enabled;
  });
}

function getCloudUserDocRef() {
  const user = firebaseAuth ? firebaseAuth.currentUser : null;

  if (!user || !firebaseDb || !firebaseDoc) {
    return null;
  }

  return firebaseDoc(firebaseDb, "users", user.uid);
}

function renderCloudSaveState() {
  if (!cloudSaveStatus || !cloudSaveUser || !cloudSaveProfile || !cloudSaveLocalState) return;

  const user = firebaseAuth ? firebaseAuth.currentUser : null;
  const activeProfile = getActiveProfile();

  cloudSaveProfile.textContent = activeProfile ? activeProfile.name : "기본 프로필";
  cloudSaveLocalState.textContent = getCloudLocalSummaryText();

  if (!firebaseDb) {
    cloudSaveStatus.textContent = "Firestore 준비 중";
    cloudSaveUser.textContent = "연결 대기";
    setCloudButtonsEnabled(false);
    return;
  }

  if (!user) {
    cloudSaveStatus.textContent = "로그인 필요";
    cloudSaveUser.textContent = "로그인 전";
    setCloudButtonsEnabled(false);
    return;
  }

  cloudSaveStatus.textContent = "저장 가능";
  cloudSaveUser.textContent = user.email || user.displayName || "Google 사용자";
  setCloudButtonsEnabled(true);
}

function buildCloudSaveDocument(user) {
  persistActiveProfileData();

  const profileStore = ensureProfileStore();
  const activeProfile = getActiveProfile();
  const savedAt = new Date().toISOString();

  return {
    app: "today_fortune_code",
    version: DEV_VERSION,
    schemaVersion: LOGIN_SCHEMA_VERSION,
    savedAt,
    serverSavedAt: firebaseServerTimestamp ? firebaseServerTimestamp() : savedAt,
    storageMode: "firebase_firestore_user_document",
    user: {
      uid: user.uid,
      email: user.email || "",
      displayName: user.displayName || ""
    },
    activeProfileId: getActiveProfileId(),
    activeProfileName: activeProfile ? activeProfile.name : "기본 프로필",
    profileStore,
    currentStorage: getCurrentLegacyStorage(),
    summary: getCurrentDataSummary(),
    loginReadyData: buildLoginReadyDataBundle()
  };
}

function restoreProfileStoreFromCloud(data) {
  if (!data || !data.profileStore || !data.profileStore.profiles || typeof data.profileStore.profiles !== "object") {
    throw new Error("서버 데이터 안에 profileStore가 없습니다.");
  }

  const profileStore = data.profileStore;
  const profileIds = Object.keys(profileStore.profiles);

  if (!profileIds.length) {
    throw new Error("서버 프로필 데이터가 비어 있습니다.");
  }

  const targetProfileId = data.activeProfileId && profileStore.profiles[data.activeProfileId]
    ? data.activeProfileId
    : profileIds[0];

  localStorage.setItem(PROFILE_STORE_KEY, JSON.stringify(profileStore));
  localStorage.setItem(PROFILE_ACTIVE_KEY, targetProfileId);
  applyProfileStorage(profileStore.profiles[targetProfileId].storage || {});
}

async function refreshCloudServerState() {
  renderCloudSaveState();

  const ref = getCloudUserDocRef();

  if (!ref || !firebaseGetDoc) {
    if (cloudSaveServerState) cloudSaveServerState.textContent = "로그인 필요";
    if (cloudLastSaved) cloudLastSaved.textContent = "기록 없음";
    return;
  }

  try {
    if (cloudSaveServerState) cloudSaveServerState.textContent = "확인 중";
    const snapshot = await firebaseGetDoc(ref);

    if (!snapshot.exists()) {
      if (cloudSaveServerState) cloudSaveServerState.textContent = "아직 없음";
      if (cloudLastSaved) cloudLastSaved.textContent = "기록 없음";
      setCloudSaveMessage("아직 서버에 저장된 운세 데이터가 없습니다. 먼저 ‘현재 데이터를 서버에 저장’을 눌러주세요.");
      return;
    }

    const data = snapshot.data();
    const profileCount = data.profileStore && data.profileStore.profiles ? Object.keys(data.profileStore.profiles).length : 0;
    if (cloudSaveServerState) cloudSaveServerState.textContent = `있음 · 프로필 ${profileCount}개`;
    if (cloudLastSaved) cloudLastSaved.textContent = formatCloudSavedAt(data.serverSavedAt || data.savedAt);
    setCloudSaveMessage("서버 저장 데이터를 확인했습니다. 필요하면 서버에서 불러올 수 있습니다.");
  } catch (error) {
    console.error("서버 데이터 확인 실패", error);
    if (cloudSaveServerState) cloudSaveServerState.textContent = "확인 실패";
    setCloudSaveMessage(`서버 데이터 확인 중 오류가 생겼습니다. ${error.message || error.code || "알 수 없음"}`);
  }
}

async function saveCurrentDataToCloud() {
  const user = firebaseAuth ? firebaseAuth.currentUser : null;
  const ref = getCloudUserDocRef();

  if (!user || !ref || !firebaseSetDoc) {
    setCloudSaveMessage("먼저 Google 로그인을 완료해주세요.");
    return;
  }

  try {
    if (cloudSaveBtn) cloudSaveBtn.disabled = true;
    if (cloudSaveStatus) cloudSaveStatus.textContent = "저장 중";
    setCloudSaveMessage("현재 브라우저의 프로필 데이터를 서버에 저장하는 중입니다.");

    await firebaseSetDoc(ref, buildCloudSaveDocument(user), { merge: true });

    if (cloudSaveStatus) cloudSaveStatus.textContent = "저장 완료";
    if (cloudSaveServerState) cloudSaveServerState.textContent = "있음 · 방금 저장";
    if (cloudLastSaved) cloudLastSaved.textContent = formatSavedAt(new Date().toISOString());
    setCloudSaveMessage("현재 프로필 데이터가 로그인 계정에 저장되었습니다.");
    statusText.textContent = "로그인 계정에 현재 데이터를 저장했습니다.";
  } catch (error) {
    console.error("서버 저장 실패", error);
    if (cloudSaveStatus) cloudSaveStatus.textContent = "저장 실패";
    setCloudSaveMessage(`서버 저장 중 오류가 생겼습니다. ${error.message || error.code || "알 수 없음"}`);
  } finally {
    renderCloudSaveState();
  }
}

async function loadCurrentDataFromCloud() {
  const ref = getCloudUserDocRef();

  if (!ref || !firebaseGetDoc) {
    setCloudSaveMessage("먼저 Google 로그인을 완료해주세요.");
    return;
  }

  const ok = confirm("서버에 저장된 데이터로 현재 브라우저 데이터를 교체할까요? 필요하면 먼저 백업 파일을 받아두세요.");
  if (!ok) return;

  try {
    if (cloudLoadBtn) cloudLoadBtn.disabled = true;
    if (cloudSaveStatus) cloudSaveStatus.textContent = "불러오는 중";
    setCloudSaveMessage("서버에 저장된 데이터를 불러오는 중입니다.");

    const snapshot = await firebaseGetDoc(ref);

    if (!snapshot.exists()) {
      if (cloudSaveStatus) cloudSaveStatus.textContent = "저장 데이터 없음";
      setCloudSaveMessage("서버에 저장된 데이터가 없습니다. 먼저 현재 데이터를 서버에 저장해주세요.");
      return;
    }

    const data = snapshot.data();
    restoreProfileStoreFromCloud(data);
    refreshAllViewsAfterDataChange();
    renderCloudSaveState();

    if (cloudSaveServerState) cloudSaveServerState.textContent = "있음 · 불러오기 완료";
    if (cloudLastSaved) cloudLastSaved.textContent = formatCloudSavedAt(data.serverSavedAt || data.savedAt);
    if (cloudSaveStatus) cloudSaveStatus.textContent = "불러오기 완료";
    setCloudSaveMessage("서버 데이터를 이 브라우저로 불러왔습니다.");
    statusText.textContent = "로그인 계정의 데이터를 불러왔습니다.";
  } catch (error) {
    console.error("서버 불러오기 실패", error);
    if (cloudSaveStatus) cloudSaveStatus.textContent = "불러오기 실패";
    setCloudSaveMessage(`서버 데이터 불러오기 중 오류가 생겼습니다. ${error.message || error.code || "알 수 없음"}`);
  } finally {
    renderCloudSaveState();
  }
}

function renderFirebaseSignedOut() {
  if (firebaseUserPhoto) {
    firebaseUserPhoto.textContent = "?";
    firebaseUserPhoto.style.backgroundImage = "";
  }

  if (firebaseUserName) {
    firebaseUserName.textContent = "로그인 전";
  }

  if (firebaseUserEmail) {
    firebaseUserEmail.textContent = "Google 로그인 버튼을 눌러 연결을 확인하세요.";
  }

  if (firebaseSignInBtn) {
    firebaseSignInBtn.classList.remove("hidden");
    firebaseSignInBtn.disabled = !firebaseLoginReady;
  }

  if (firebaseSignOutBtn) {
    firebaseSignOutBtn.classList.add("hidden");
  }
}

function renderFirebaseSignedIn(user) {
  if (!user) {
    renderFirebaseSignedOut();
    return;
  }

  if (firebaseUserPhoto) {
    const photoUrl = user.photoURL || "";

    if (photoUrl) {
      firebaseUserPhoto.textContent = "";
      firebaseUserPhoto.style.backgroundImage = `url("${photoUrl}")`;
      firebaseUserPhoto.style.backgroundSize = "cover";
      firebaseUserPhoto.style.backgroundPosition = "center";
    } else {
      firebaseUserPhoto.style.backgroundImage = "";
      firebaseUserPhoto.textContent = (user.displayName || user.email || "G").slice(0, 1).toUpperCase();
    }
  }

  if (firebaseUserName) {
    firebaseUserName.textContent = user.displayName || "Google 사용자";
  }

  if (firebaseUserEmail) {
    firebaseUserEmail.textContent = user.email || "이메일 정보 없음";
  }

  if (firebaseSignInBtn) {
    firebaseSignInBtn.classList.add("hidden");
  }

  if (firebaseSignOutBtn) {
    firebaseSignOutBtn.classList.remove("hidden");
    firebaseSignOutBtn.disabled = false;
  }
}

async function initFirebaseLoginTest() {
  if (!firebaseLoginStatus || !firebaseSignInBtn) return;

  firebaseLoginReady = false;
  firebaseSignInBtn.disabled = true;
  setFirebaseLoginStatus("SDK 확인 중");
  setFirebaseLoginMessage("Firebase SDK를 불러오는 중입니다. 잠시만 기다려주세요.");

  try {
    const [appModule, authModule, firestoreModule] = await Promise.all([
      import(`https://www.gstatic.com/firebasejs/${FIREBASE_SDK_VERSION}/firebase-app.js`),
      import(`https://www.gstatic.com/firebasejs/${FIREBASE_SDK_VERSION}/firebase-auth.js`),
      import(`https://www.gstatic.com/firebasejs/${FIREBASE_SDK_VERSION}/firebase-firestore.js`)
    ]);

    const firebaseApp = appModule.initializeApp(FIREBASE_CONFIG);
    firebaseAuth = authModule.getAuth(firebaseApp);
    firebaseDb = firestoreModule.getFirestore(firebaseApp);
    firebaseDoc = firestoreModule.doc;
    firebaseGetDoc = firestoreModule.getDoc;
    firebaseSetDoc = firestoreModule.setDoc;
    firebaseServerTimestamp = firestoreModule.serverTimestamp;
    firebaseProvider = new authModule.GoogleAuthProvider();
    firebaseSignInWithPopup = authModule.signInWithPopup;
    firebaseSignOut = authModule.signOut;
    firebaseLoginReady = true;

    if (firebaseProjectState) {
      firebaseProjectState.textContent = FIREBASE_CONFIG.projectId;
    }

    if (firebaseDomainState) {
      firebaseDomainState.textContent = FIREBASE_ALLOWED_DOMAIN;
    }

    if (firebaseProviderState) {
      firebaseProviderState.textContent = "Google · 사용 설정됨";
    }

    if (firebaseFirestoreState) {
      firebaseFirestoreState.textContent = "준비 완료 · 저장 테스트 가능";
    }

    setFirebaseLoginStatus("준비 완료");
    setFirebaseLoginMessage("Firebase 연결 준비 완료. Google 로그인 후 서버 저장 테스트를 진행하세요.");
    renderCloudSaveState();

    authModule.onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        renderFirebaseSignedIn(user);
        setFirebaseLoginStatus("로그인 완료");
        setFirebaseLoginMessage("Google 로그인 연결이 정상 작동합니다. 이제 서버 저장 테스트를 진행할 수 있습니다.");
        renderCloudSaveState();
        refreshCloudServerState();
      } else {
        renderFirebaseSignedOut();
        setFirebaseLoginStatus("준비 완료");
        renderCloudSaveState();
      }
    });

    renderFirebaseSignedOut();
  } catch (error) {
    console.error("Firebase SDK 초기화 실패", error);
    firebaseLoginReady = false;
    if (firebaseSignInBtn) firebaseSignInBtn.disabled = true;
    setFirebaseLoginStatus("연결 실패");
    setFirebaseLoginMessage(`Firebase SDK를 불러오지 못했습니다. Ctrl + F5 후 다시 시도하세요. 오류: ${error.message || error.code || "알 수 없음"}`);
  }
}

async function handleFirebaseSignIn() {
  if (!firebaseLoginReady || !firebaseAuth || !firebaseProvider || !firebaseSignInWithPopup) {
    setFirebaseLoginMessage("아직 Firebase 준비가 끝나지 않았습니다. 잠시 기다린 뒤 다시 눌러주세요.");
    return;
  }

  try {
    if (firebaseSignInBtn) firebaseSignInBtn.disabled = true;
    setFirebaseLoginStatus("로그인 중");
    setFirebaseLoginMessage("Google 로그인 창을 여는 중입니다. 팝업이 차단되면 주소창 오른쪽을 확인해주세요.");

    const result = await firebaseSignInWithPopup(firebaseAuth, firebaseProvider);
    renderFirebaseSignedIn(result.user);
    setFirebaseLoginStatus("로그인 완료");
    setFirebaseLoginMessage("Google 로그인 테스트가 완료되었습니다. 이제 현재 데이터를 서버에 저장할 수 있습니다.");
    renderCloudSaveState();
    refreshCloudServerState();
  } catch (error) {
    console.error("Google 로그인 실패", error);
    const code = error.code || "알 수 없는 오류";
    const message = error.message || "오류 메시지 없음";

    if (code === "auth/popup-closed-by-user") {
      setFirebaseLoginMessage("Google 로그인 창이 닫혔습니다. 다시 로그인 버튼을 눌러주세요.");
    } else if (code === "auth/unauthorized-domain") {
      setFirebaseLoginMessage(`승인되지 않은 도메인입니다. Firebase Authentication 승인된 도메인에 ${window.location.hostname} 를 추가해야 합니다.`);
    } else {
      setFirebaseLoginMessage(`Google 로그인 중 오류가 생겼습니다. ${code} · ${message}`);
    }

    setFirebaseLoginStatus("로그인 실패");
  } finally {
    if (firebaseSignInBtn && !firebaseAuth.currentUser) {
      firebaseSignInBtn.disabled = false;
    }
  }
}

async function handleFirebaseSignOut() {
  if (!firebaseAuth || !firebaseSignOut) {
    setFirebaseLoginMessage("로그아웃 준비가 아직 끝나지 않았습니다.");
    return;
  }

  try {
    if (firebaseSignOutBtn) firebaseSignOutBtn.disabled = true;
    await firebaseSignOut(firebaseAuth);
    renderFirebaseSignedOut();
    setFirebaseLoginStatus("준비 완료");
    setFirebaseLoginMessage("로그아웃했습니다. 서버 저장 테스트를 하려면 다시 로그인해주세요.");
    renderCloudSaveState();
  } catch (error) {
    console.error("로그아웃 실패", error);
    setFirebaseLoginMessage(`로그아웃 중 오류가 생겼습니다. ${error.message || error.code || "알 수 없음"}`);
  } finally {
    if (firebaseSignOutBtn) firebaseSignOutBtn.disabled = false;
  }
}

const relationMeta = {
  support: {
    label: "도움을 받는 흐름",
    mood: "warm",
    short: "외부의 도움과 협력이 살아나는 날",
    emotion: "따뜻한 응원 반응"
  },
  output: {
    label: "표현이 살아나는 흐름",
    mood: "bright",
    short: "생각을 밖으로 꺼낼수록 좋아지는 날",
    emotion: "반짝이는 표현 반응"
  },
  control: {
    label: "주도권을 잡는 흐름",
    mood: "focus",
    short: "정리와 판단이 중요한 날",
    emotion: "집중 분석 반응"
  },
  pressure: {
    label: "속도를 줄여야 하는 흐름",
    mood: "caution",
    short: "조급함보다 안정이 필요한 날",
    emotion: "조심 경보 반응"
  },
  balance: {
    label: "균형을 맞추는 흐름",
    mood: "calm",
    short: "기본과 루틴이 힘을 주는 날",
    emotion: "차분한 균형 반응"
  }
};

const moodMeta = {
  warm: {
    badge: "따뜻한 응원",
    title: "따뜻한 응원 모드",
    hint: "도움을 받아도 좋은 흐름이라 파트너가 부드럽고 다정하게 반응합니다."
  },
  bright: {
    badge: "반짝 표현",
    title: "반짝 표현 모드",
    hint: "말과 행동을 밖으로 꺼내기 좋은 흐름이라 눈빛과 오라가 더 밝아집니다."
  },
  focus: {
    badge: "집중 분석",
    title: "집중 분석 모드",
    hint: "정리와 판단이 중요한 흐름이라 파트너가 차분하고 날카롭게 반응합니다."
  },
  caution: {
    badge: "조심 경보",
    title: "조심 경보 모드",
    hint: "속도를 줄여야 하는 흐름이라 파트너가 걱정스러운 표정으로 조심 신호를 보냅니다."
  },
  calm: {
    badge: "균형 안정",
    title: "균형 안정 모드",
    hint: "큰 변화보다 루틴이 중요한 흐름이라 파트너가 안정적으로 하루를 정리해줍니다."
  }
};

const reactionBonusLines = {
  lumy: {
    support: [
      "오늘은 누군가의 작은 말이 큰 힘이 될 수 있어. 고마운 마음을 숨기지 말고 받아들여봐.",
      "따뜻한 흐름이 네 주변에 있어. 혼자 해결하려는 마음을 조금 내려놓아도 괜찮아."
    ],
    output: [
      "오늘은 네 진심이 빛처럼 전달될 수 있어. 짧은 말이라도 따뜻하게 꺼내봐.",
      "마음속에 있던 표현을 조금만 보여줘도 관계의 온도가 달라질 수 있어."
    ],
    control: [
      "중심을 잡기 좋은 날이지만, 부드러운 말투가 네 판단을 더 빛나게 해줄 거야.",
      "오늘의 결정은 따뜻함을 잃지 않을 때 더 좋은 방향으로 흐를 수 있어."
    ],
    pressure: [
      "걱정이 커질 수 있는 날이야. 답을 빨리 내기보다 마음을 먼저 다독여줘.",
      "조금 흔들려도 괜찮아. 오늘은 속도보다 네 마음을 보호하는 게 먼저야."
    ],
    balance: [
      "잔잔한 하루의 힘이 있어. 평소처럼 해내는 것만으로도 충분히 좋은 운이야.",
      "오늘은 작은 루틴이 마음을 밝혀줘. 무리하지 말고 차분하게 이어가자."
    ]
  },
  moko: {
    support: [
      "오늘은 기대도 괜찮아. 누군가가 도와주면 고맙게 받고 체력을 아껴두자.",
      "혼자 끙끙대기보다 나눠서 하면 훨씬 가벼워질 흐름이야."
    ],
    output: [
      "움직임이 좋은 날이야. 그래도 쉬는 시간을 중간에 꼭 끼워 넣자.",
      "하고 싶은 걸 작게 시작해봐. 한 번에 다 하려고만 하지 않으면 좋아."
    ],
    control: [
      "정리하기 좋은 흐름이야. 오늘은 딱 하나만 치워도 기분이 꽤 좋아질 거야.",
      "계획표를 너무 빡빡하게 만들지 말고, 지킬 수 있는 만큼만 정리해보자."
    ],
    pressure: [
      "몸이 먼저 신호를 보낼 수 있어. 피곤하면 그건 게으른 게 아니라 쉬라는 뜻이야.",
      "오늘은 마음을 말랑하게 풀어줘. 무리하면 운도 같이 뻣뻣해질 수 있어."
    ],
    balance: [
      "평소 루틴이 제일 든든한 날이야. 밥, 물, 잠만 잘 챙겨도 흐름이 좋아져.",
      "조용히 쌓이는 운이 있어. 크게 바꾸지 말고 편한 리듬을 지켜보자."
    ]
  },
  nova: {
    support: [
      "외부 지원값이 올라왔어. 혼자 계산하지 말고 주변 자원을 변수에 넣어봐.",
      "협력 신호가 안정적이야. 도움 요청은 리스크가 아니라 효율을 높이는 선택값이야."
    ],
    output: [
      "출력 신호가 강해. 머릿속 데이터는 실행으로 변환될 때 의미가 생겨.",
      "오늘은 아이디어를 저장만 하지 말고 하나라도 배포해봐. 결과값이 갱신될 수 있어."
    ],
    control: [
      "판단 모듈이 활성화됐어. 기준을 먼저 세우면 선택 오류를 줄일 수 있어.",
      "오늘은 주도권을 가져도 좋아. 다만 근거 없는 확신은 한 번 필터링해."
    ],
    pressure: [
      "경고값이 감지됐어. 중요한 선택은 즉시 실행보다 재검토 루프를 추천해.",
      "속도보다 안정성이 우선이야. 오늘은 보수적인 선택이 전체 손실을 줄여."
    ],
    balance: [
      "균형값이 안정적이야. 새로운 변수보다 기존 루틴을 최적화하는 쪽이 효율적이야.",
      "현재 시스템은 안정 모드야. 유지보수와 정리가 오늘의 핵심 작업이야."
    ]
  }
};

const partnerTemplates = [
  {
    id: "lumy",
    name: "루미",
    type: "빛과 마음을 읽는 다정한 파트너",
    symbols: ["✦", "☾", "✧"],
    bonds: ["새벽빛 동반자", "따뜻한 응원자", "빛의 수호자"],
    greetings: [
      "오늘도 같이 운세를 봐줄게. 너무 서두르지 않아도 괜찮아.",
      "네 하루에 작은 빛이 생기도록 내가 옆에서 읽어볼게.",
      "오늘의 마음 흐름을 천천히 살펴보자."
    ],
    analyzing: [
      "마음의 결이 어디로 흐르는지 조용히 읽고 있어.",
      "오늘의 빛과 관계의 흐름을 연결하는 중이야.",
      "작은 신호까지 놓치지 않게 천천히 분석하고 있어."
    ],
    reactions: {
      support: [
        "오늘은 주변의 도움을 받아도 좋은 날이야. 혼자 버티지 말고 따뜻한 말 한마디를 믿어봐.",
        "관계의 흐름이 부드러워. 먼저 마음을 닫기보다 작은 호의를 받아들여봐."
      ],
      output: [
        "표현의 운이 살아나는 날이야. 마음을 너무 숨기지 말고 부드럽게 꺼내봐.",
        "오늘은 말과 글에 빛이 실려. 진심을 차분히 전하면 좋은 반응이 올 수 있어."
      ],
      control: [
        "오늘은 네가 중심을 잡을 수 있어. 다만 상대의 마음도 같이 살피면 더 좋아.",
        "결정력이 올라오는 날이야. 강하게 밀기보다 따뜻하게 이끌어봐."
      ],
      pressure: [
        "조금 부담이 느껴질 수 있어. 오늘은 스스로에게 너무 엄격하지 않아도 괜찮아.",
        "마음이 예민해질 수 있어. 대답을 서두르지 말고 숨을 한 번 고른 뒤 움직여봐."
      ],
      balance: [
        "큰 변화보다 안정이 좋은 날이야. 평소의 리듬을 지키는 게 운을 밝게 만들어줘.",
        "오늘은 잔잔한 빛이 강해. 무리하지 않고 기본을 지키면 충분히 좋아."
      ]
    },
    levelUps: [
      "빛이 조금 더 선명해졌어. 내가 너를 더 잘 읽을 수 있게 됐어.",
      "우리의 연결이 깊어졌어. 이제 더 따뜻하게 운세를 해석해줄게.",
      "빛의 형태가 완성됐어. 오늘부터 더 깊은 신호까지 볼 수 있어."
    ],
    result: [
      "분석이 끝났어. 오늘은 작은 친절이 운을 열어줄 수 있어.",
      "오늘의 흐름이 정리됐어. 천천히 읽어봐.",
      "좋아, 오늘의 운세코드를 찾았어."
    ]
  },
  {
    id: "moko",
    name: "모코",
    type: "휴식과 균형을 지키는 말랑한 파트너",
    symbols: ["●", "♧", "☘"],
    bonds: ["말랑 새싹", "편안한 친구", "숲의 수호자"],
    greetings: [
      "왔구나. 오늘도 천천히 같이 봐보자.",
      "오늘은 무리하지 않는 쪽으로 운을 잘 굴려보자.",
      "준비됐어? 네 하루의 컨디션부터 살펴볼게."
    ],
    analyzing: [
      "몸과 마음의 리듬을 말랑하게 확인하고 있어.",
      "오늘의 기운이 너무 뾰족하지 않은지 살펴보는 중이야.",
      "잠깐만. 쉬어가야 할 신호가 있는지 확인하고 있어."
    ],
    reactions: {
      support: [
        "오늘은 편하게 도움을 받아도 좋아. 혼자 다 하려고 하면 오히려 피곤해질 수 있어.",
        "주변에서 받쳐주는 기운이 있어. 힘을 빼고 흘러가도 괜찮아."
      ],
      output: [
        "움직임이 생기는 날이야. 다만 너무 신나서 체력을 한 번에 쓰지는 말자.",
        "하고 싶은 말이나 일이 생길 수 있어. 천천히 꺼내면 더 오래 갈 거야."
      ],
      control: [
        "정리하고 관리하기 좋은 날이야. 작은 것부터 차근차근 처리하면 편해질 거야.",
        "오늘은 미뤄둔 걸 하나만 정리해도 마음이 꽤 가벼워질 거야."
      ],
      pressure: [
        "오늘은 무리 금지야. 잠깐 쉬는 것도 네 운을 지키는 방법이야.",
        "몸과 마음이 뻣뻣해질 수 있어. 속도를 줄이고 물 한 잔부터 챙겨보자."
      ],
      balance: [
        "안정적인 흐름이야. 평소 루틴만 잘 지켜도 하루가 꽤 괜찮게 지나갈 거야.",
        "큰 욕심보다 편안한 반복이 좋아. 오늘은 천천히가 이기는 날이야."
      ]
    },
    levelUps: [
      "나 조금 더 포근해졌어. 이제 네 컨디션 신호를 더 잘 볼 수 있어.",
      "말랑한 기운이 커졌어. 우리 꽤 잘 맞는 것 같아.",
      "숲의 기운이 열렸어. 이제 흔들리는 날에도 중심을 같이 잡아줄게."
    ],
    result: [
      "분석 끝. 오늘은 천천히 가도 괜찮아.",
      "오늘의 힌트가 나왔어. 무리하지 않는 게 핵심이야.",
      "운세코드 확인 완료. 몸의 신호도 같이 챙겨줘."
    ]
  },
  {
    id: "nova",
    name: "노바",
    type: "별과 데이터를 읽는 신비로운 AI 파트너",
    symbols: ["◆", "✶", "✹"],
    bonds: ["초기화된 별", "분석 동반자", "각성 오라클"],
    greetings: [
      "오늘의 별빛 데이터가 준비됐어. 흐름을 열어볼게.",
      "네 운세코드는 아직 잠들어 있어. 지금부터 깨워보자.",
      "오늘의 선택값을 분석할 준비가 됐어."
    ],
    analyzing: [
      "시간의 결을 따라 오늘의 패턴을 계산하고 있어.",
      "오행 데이터와 오늘의 흐름을 매칭하는 중이야.",
      "잠시만. 숨겨진 신호와 반복되는 패턴을 확인하고 있어."
    ],
    reactions: {
      support: [
        "오늘은 외부 흐름이 너를 보조하는 패턴이야. 기회가 오면 거절보다 확인을 먼저 해봐.",
        "지원 신호가 감지됐어. 혼자 처리하는 것보다 연결을 활용하는 쪽이 효율적이야."
      ],
      output: [
        "표현과 실행 쪽 신호가 강해. 머릿속에 있던 걸 밖으로 꺼내면 결과값이 달라질 수 있어.",
        "출력값이 좋은 날이야. 생각만 하던 일을 작게라도 실행해보면 데이터가 바뀔 거야."
      ],
      control: [
        "주도권을 잡기 좋은 흐름이야. 단, 강한 판단일수록 근거를 한 번 더 확인해.",
        "결정 신호가 강해. 오늘은 감정보다 기준표를 세우면 더 정확해져."
      ],
      pressure: [
        "압박 신호가 감지됐어. 오늘은 속도보다 안정성이 더 높은 선택값이야.",
        "리스크 수치가 조금 올라왔어. 중요한 결정은 검토 시간을 하나 더 넣는 게 좋아."
      ],
      balance: [
        "균형 패턴이야. 큰 변화보다 루틴을 정렬하는 쪽이 오늘의 효율을 높여줘.",
        "현재 흐름은 안정형이야. 새로 벌리기보다 기존 상태를 최적화해봐."
      ]
    },
    levelUps: [
      "연결 강도가 상승했어. 이제 더 많은 패턴을 읽을 수 있어.",
      "분석 모듈이 확장됐어. 오늘부터 해석 정밀도가 조금 더 올라갈 거야.",
      "각성 프로토콜이 열렸어. 별빛 데이터와 네 운세코드가 더 깊게 연결됐어."
    ],
    result: [
      "운세코드가 응답했어. 오늘은 균형이 중요해.",
      "분석은 끝났어. 이제 선택은 네가 하면 돼.",
      "오늘의 흐름이 열렸어. 결과를 천천히 살펴봐."
    ]
  }
];


const partnerDexMeta = {
  lumy: {
    specialty: "관계운 · 마음 흐름 · 부드러운 조언",
    personality: "다정하고 조심스럽게 마음을 살피는 빛의 파트너",
    profile: "루미는 하루의 감정선과 사람 사이의 작은 신호를 읽는 데 강합니다. 관계가 예민한 날에는 말의 온도를 낮춰주는 조언을 건넵니다.",
    unlockHint: "첫 파트너로 선택하거나 랜덤 연결에서 만나면 도감에 기록됩니다.",
    growthHint: "운세를 함께 볼수록 빛이 선명해지고, Lv.5부터 성장형 분위기가 열립니다."
  },
  moko: {
    specialty: "건강운 · 휴식 · 루틴 균형",
    personality: "말랑하고 편안하게 컨디션을 챙겨주는 숲의 파트너",
    profile: "모코는 몸과 마음의 속도를 살피는 데 강합니다. 무리하기 쉬운 날에는 쉬어가는 선택도 좋은 운이라는 걸 알려줍니다.",
    unlockHint: "첫 파트너로 선택하거나 랜덤 연결에서 만나면 도감에 기록됩니다.",
    growthHint: "매일의 방문과 운세 분석으로 숲의 기운이 커지고, Lv.10부터 각성형 분위기가 열립니다."
  },
  nova: {
    specialty: "재물운 · 일운 · 데이터 분석",
    personality: "별빛 데이터로 패턴을 읽는 신비로운 AI 파트너",
    profile: "노바는 오늘의 선택값과 흐름을 차갑지만 정확하게 정리하는 데 강합니다. 돈, 일, 판단이 필요한 날에 특히 잘 맞습니다.",
    unlockHint: "첫 파트너로 선택하거나 랜덤 연결에서 만나면 도감에 기록됩니다.",
    growthHint: "운세코드를 함께 쌓을수록 분석 모듈이 확장되고, 각성형이 되면 오라클 느낌이 더 강해집니다."
  }
};

const stems = [
  ["갑", "wood"], ["을", "wood"], ["병", "fire"], ["정", "fire"], ["무", "earth"],
  ["기", "earth"], ["경", "metal"], ["신", "metal"], ["임", "water"], ["계", "water"]
];

const branches = [
  ["자", "쥐", "water", "23:00~00:59"],
  ["축", "소", "earth", "01:00~02:59"],
  ["인", "호랑이", "wood", "03:00~04:59"],
  ["묘", "토끼", "wood", "05:00~06:59"],
  ["진", "용", "earth", "07:00~08:59"],
  ["사", "뱀", "fire", "09:00~10:59"],
  ["오", "말", "fire", "11:00~12:59"],
  ["미", "양", "earth", "13:00~14:59"],
  ["신", "원숭이", "metal", "15:00~16:59"],
  ["유", "닭", "metal", "17:00~18:59"],
  ["술", "개", "earth", "19:00~20:59"],
  ["해", "돼지", "water", "21:00~22:59"]
];

const timeIndex = {
  ja: 0, chuk: 1, in: 2, myo: 3, jin: 4, sa: 5,
  oh: 6, mi: 7, shin: 8, yu: 9, sul: 10, hae: 11
};

const elementName = {
  wood: "목(木)",
  fire: "화(火)",
  earth: "토(土)",
  metal: "금(金)",
  water: "수(水)"
};

const luckyData = {
  wood: ["초록색", "동쪽", "성장"],
  fire: ["붉은색", "남쪽", "표현"],
  earth: ["노란색", "중앙", "정리"],
  metal: ["흰색", "서쪽", "결정"],
  water: ["검은색", "북쪽", "흐름"]
};

const generates = {
  wood: "fire",
  fire: "earth",
  earth: "metal",
  metal: "water",
  water: "wood"
};

const controls = {
  wood: "earth",
  earth: "water",
  water: "fire",
  fire: "metal",
  metal: "wood"
};

const fortuneText = {
  support: {
    total: "오늘은 주변의 흐름이 비교적 부드럽게 받쳐주는 날입니다. 혼자 모든 것을 해결하려 하기보다 도움을 받아들이면 일이 수월해질 수 있습니다.",
    money: "재물운은 안정적인 편입니다. 큰 욕심보다 계획한 지출을 지키는 쪽이 유리합니다.",
    love: "관계운은 부드럽습니다. 먼저 다가가기보다 상대의 반응을 살피며 천천히 대화하면 좋습니다.",
    work: "일운은 협력에 강합니다. 주변과 의견을 맞추면 생각보다 빠르게 정리될 수 있습니다.",
    health: "컨디션은 무난하지만 과신은 금물입니다. 수면과 식사 리듬을 지키는 것이 좋습니다.",
    caution: "편안한 흐름에 방심하면 작은 실수가 생길 수 있습니다. 마지막 확인을 잊지 마세요.",
    advice: "오늘은 도움을 거절하기보다 적절히 받아들이는 태도가 운을 살립니다."
  },
  output: {
    total: "오늘은 생각을 밖으로 꺼내고 표현할수록 운이 살아나는 날입니다. 말, 글, 행동으로 분명하게 드러내는 것이 좋습니다.",
    money: "아이디어나 능력을 활용해 금전 흐름을 만들기 좋은 날입니다. 다만 즉흥적인 지출은 줄이는 편이 좋습니다.",
    love: "표현운이 살아납니다. 마음을 숨기기보다 부드럽게 말하면 관계가 편해질 수 있습니다.",
    work: "기획, 발표, 정리, 제안에 좋은 흐름입니다. 머릿속에 있던 것을 밖으로 꺼내보세요.",
    health: "활동량이 늘 수 있는 날입니다. 가벼운 움직임은 좋지만 과한 일정은 피하세요.",
    caution: "말이 빨라지거나 감정이 앞서기 쉽습니다. 중요한 말은 한 번 더 정리하고 전달하세요.",
    advice: "오늘은 완벽한 결과보다 표현하고 시작하는 힘이 더 중요합니다."
  },
  control: {
    total: "오늘은 현실적인 문제를 정리하고 주도권을 잡기 좋은 흐름입니다. 다만 강하게 밀어붙이기보다 차분한 판단이 필요합니다.",
    money: "재물운은 관리와 판단이 중요합니다. 수입보다 새는 돈을 막는 데서 운이 생깁니다.",
    love: "관계에서는 주도권보다 배려가 중요합니다. 내 기준만 앞세우면 상대가 부담을 느낄 수 있습니다.",
    work: "일운은 강한 편입니다. 정리, 협상, 결정, 책임 있는 업무에서 능력을 발휘할 수 있습니다.",
    health: "긴장감이 올라갈 수 있습니다. 목, 어깨, 소화 쪽 컨디션을 살펴보세요.",
    caution: "내가 맞다는 확신이 강해질 수 있습니다. 중요한 결정일수록 다른 관점도 확인하세요.",
    advice: "오늘은 힘을 쓰되, 힘 조절을 아는 사람이 좋은 결과를 얻습니다."
  },
  pressure: {
    total: "오늘은 책임감이나 부담이 조금 크게 느껴질 수 있습니다. 서두르기보다 우선순위를 정하면 흐름이 안정됩니다.",
    money: "재물운은 보수적으로 보는 것이 좋습니다. 큰 지출이나 성급한 결정은 하루 더 생각해보세요.",
    love: "관계에서는 예민함이 올라올 수 있습니다. 상대의 말에 바로 반응하기보다 한 박자 쉬어가는 것이 좋습니다.",
    work: "일운은 압박이 있지만 성장의 기회도 있습니다. 어려운 일을 작은 단위로 나누어 처리하세요.",
    health: "피로가 쌓이기 쉬운 날입니다. 수면, 식사, 스트레스 관리에 신경 쓰는 것이 좋습니다.",
    caution: "조급함이 판단을 흐릴 수 있습니다. 오늘은 빠른 결정보다 안전한 선택이 유리합니다.",
    advice: "오늘은 속도를 줄일수록 오히려 실수를 줄일 수 있습니다."
  },
  balance: {
    total: "오늘은 큰 변화보다 균형을 잡는 데 좋은 흐름입니다. 현재 상태를 정돈하면 안정감이 살아납니다.",
    money: "재물운은 평이하지만 안정적입니다. 큰 이익보다 새는 돈을 막는 쪽에서 운이 따릅니다.",
    love: "관계운은 무난합니다. 특별한 사건보다 일상적인 배려가 더 크게 작용합니다.",
    work: "일운은 정리와 루틴에 강합니다. 반복 업무, 확인 작업, 일정 정리에 좋은 흐름입니다.",
    health: "컨디션은 안정적이나 생활 리듬에 따라 쉽게 달라질 수 있습니다. 식사와 수면 시간을 지켜보세요.",
    caution: "안정적인 날일수록 미루는 습관이 생길 수 있습니다. 작은 일 하나는 오늘 안에 끝내는 것이 좋습니다.",
    advice: "오늘은 기본을 지키는 것이 가장 강한 운입니다."
  }
};

function getTodayKey() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function randomItem(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (match) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;"
  }[match]));
}

function loadPartner() {
  try {
    return JSON.parse(localStorage.getItem(PARTNER_KEY));
  } catch (error) {
    localStorage.removeItem(PARTNER_KEY);
    return null;
  }
}

function savePartner(partner) {
  localStorage.setItem(PARTNER_KEY, JSON.stringify(partner));
  persistActiveProfileData();
}

function getPartnerTemplate(id) {
  return partnerTemplates.find((item) => item.id === id) || partnerTemplates[0];
}

function getLevel(exp) {
  return Math.floor(exp / EXP_PER_LEVEL) + 1;
}

function getStageIndex(level) {
  if (level >= 10) return 2;
  if (level >= 5) return 1;
  return 0;
}

function getStageName(level) {
  if (level >= 10) return "각성형";
  if (level >= 5) return "성장형";
  return "새싹형";
}

function getPartnerBond(template, level) {
  const stageIndex = getStageIndex(level);
  return template.bonds[stageIndex] || "운세 동반자";
}

function getMoodInfo(mood) {
  return moodMeta[mood] || moodMeta.calm;
}

function renderPartnerMoodHint(partner) {
  if (!partnerMoodHint) return;

  if (!partner) {
    partnerMoodHint.className = "partner-mood-hint hint-calm";
    partnerMoodHint.innerHTML = `
      <span>현재 반응</span>
      <strong>균형 모드</strong>
      <p>파트너를 선택하고 운세를 분석하면 표정과 대사가 결과에 맞춰 바뀝니다.</p>
    `;
    return;
  }

  const mood = partner.mood || "calm";
  const info = getMoodInfo(mood);
  const relationText = partner.lastRelation ? ` · ${escapeHtml(partner.lastRelation)}` : "";

  partnerMoodHint.className = `partner-mood-hint hint-${mood}`;
  partnerMoodHint.innerHTML = `
    <span>현재 반응${relationText}</span>
    <strong>${escapeHtml(partner.moodTitle || info.title)}</strong>
    <p>${escapeHtml(partner.moodHint || info.hint)}</p>
  `;
}


function loadPartnerDex() {
  try {
    const saved = JSON.parse(localStorage.getItem(DEX_KEY));
    return saved && typeof saved === "object" && !Array.isArray(saved) ? saved : {};
  } catch (error) {
    localStorage.removeItem(DEX_KEY);
    return {};
  }
}

function savePartnerDex(dex) {
  try {
    localStorage.setItem(DEX_KEY, JSON.stringify(dex));
    persistActiveProfileData();
  } catch (error) {
    console.error("파트너 도감 저장 실패", error);
  }
}

function rememberPartnerDiscovery(id, countMeet = false) {
  const template = getPartnerTemplate(id);
  const dex = loadPartnerDex();
  const todayKey = getTodayKey();

  if (!dex[template.id]) {
    dex[template.id] = {
      id: template.id,
      name: template.name,
      discoveredAt: todayKey,
      lastSeen: todayKey,
      meetCount: 0
    };
  }

  dex[template.id].name = template.name;
  dex[template.id].lastSeen = todayKey;

  if (countMeet) {
    dex[template.id].meetCount = (dex[template.id].meetCount || 0) + 1;
  }

  savePartnerDex(dex);
}

function syncCurrentPartnerToDex() {
  const partner = loadPartner();
  if (!partner) return;
  rememberPartnerDiscovery(partner.id, false);
}

function getNextStageInfo(exp) {
  const level = getLevel(exp || 0);

  if (level < 5) {
    const targetExp = (5 - 1) * EXP_PER_LEVEL;
    return {
      label: "Lv.5 성장형까지",
      remaining: Math.max(0, targetExp - (exp || 0)),
      percent: Math.min(100, ((exp || 0) / targetExp) * 100)
    };
  }

  if (level < 10) {
    const targetExp = (10 - 1) * EXP_PER_LEVEL;
    return {
      label: "Lv.10 각성형까지",
      remaining: Math.max(0, targetExp - (exp || 0)),
      percent: Math.min(100, ((exp || 0) / targetExp) * 100)
    };
  }

  return {
    label: "최종 각성형 도달",
    remaining: 0,
    percent: 100
  };
}

function formatDexDate(value) {
  if (!value) return "기록 없음";
  return String(value).replaceAll("-", ".");
}

function renderActivePartnerProfile(partner) {
  if (!activePartnerProfile) return;

  if (!partner) {
    activePartnerProfile.className = "active-partner-profile empty-profile";
    activePartnerProfile.innerHTML = `
      <div class="profile-empty-symbol">?</div>
      <div>
        <strong>현재 파트너 없음</strong>
        <p>루미 / 모코 / 노바 중 한 명을 선택하면 이곳에 파트너 프로필과 성장 조건이 표시됩니다.</p>
      </div>
    `;
    return;
  }

  const template = getPartnerTemplate(partner.id);
  const meta = partnerDexMeta[template.id];
  const level = getLevel(partner.exp || 0);
  const stageIndex = getStageIndex(level);
  const nextStage = getNextStageInfo(partner.exp || 0);
  const currentLevelExp = (partner.exp || 0) % EXP_PER_LEVEL;

  activePartnerProfile.className = `active-partner-profile active-${template.id}`;
  activePartnerProfile.innerHTML = `
    <div class="profile-avatar partner-${template.id} stage-${stageIndex + 1}">
      <span>${escapeHtml(template.symbols[stageIndex])}</span>
    </div>

    <div class="profile-main">
      <div class="profile-title-row">
        <div>
          <span class="small-label">CURRENT PARTNER</span>
          <h3>${escapeHtml(template.name)} · ${escapeHtml(getStageName(level))}</h3>
        </div>
        <strong>Lv.${escapeHtml(level)}</strong>
      </div>

      <p>${escapeHtml(meta.profile)}</p>

      <div class="profile-stat-grid">
        <div><span>현재 EXP</span><strong>${escapeHtml(currentLevelExp)} / ${EXP_PER_LEVEL}</strong></div>
        <div><span>누적 EXP</span><strong>${escapeHtml(partner.exp || 0)}</strong></div>
        <div><span>방문 횟수</span><strong>${escapeHtml(partner.visits || 0)}회</strong></div>
        <div><span>칭호</span><strong>${escapeHtml(getPartnerBond(template, level))}</strong></div>
        <div><span>최근 반응</span><strong>${escapeHtml(partner.moodBadge || getMoodInfo(partner.mood || "calm").badge)}</strong></div>
      </div>

      <div class="growth-guide">
        <div class="growth-guide-top">
          <span>${escapeHtml(nextStage.label)}</span>
          <strong>${nextStage.remaining ? `남은 EXP ${escapeHtml(nextStage.remaining)}` : "완료"}</strong>
        </div>
        <div class="growth-guide-bar" aria-hidden="true">
          <div style="width: ${nextStage.percent}%"></div>
        </div>
        <p>성장 조건: Lv.5 성장형 · Lv.10 각성형</p>
      </div>
    </div>
  `;
}


function getDefaultAttendance() {
  return {
    lastClaimDate: "",
    currentStreak: 0,
    bestStreak: 0,
    totalClaims: 0,
    totalExp: 0,
    log: []
  };
}

function loadAttendance() {
  try {
    const saved = JSON.parse(localStorage.getItem(ATTENDANCE_KEY));
    return {
      ...getDefaultAttendance(),
      ...(saved && typeof saved === "object" ? saved : {})
    };
  } catch (error) {
    localStorage.removeItem(ATTENDANCE_KEY);
    return getDefaultAttendance();
  }
}

function saveAttendance(attendance) {
  try {
    localStorage.setItem(ATTENDANCE_KEY, JSON.stringify(attendance));
    persistActiveProfileData();
  } catch (error) {
    console.error("출석 보상 저장 실패", error);
  }
}

function getDateDiffDays(fromDateKey, toDateKey) {
  if (!fromDateKey || !toDateKey) return null;

  const from = new Date(`${fromDateKey}T00:00:00`);
  const to = new Date(`${toDateKey}T00:00:00`);

  if (Number.isNaN(from.getTime()) || Number.isNaN(to.getTime())) return null;

  return Math.round((to - from) / 86400000);
}

function getNextAttendanceStreak(attendance, todayKey) {
  if (!attendance.lastClaimDate) return 1;
  if (attendance.lastClaimDate === todayKey) return attendance.currentStreak || 1;

  const diff = getDateDiffDays(attendance.lastClaimDate, todayKey);
  return diff === 1 ? (attendance.currentStreak || 0) + 1 : 1;
}

function getAttendanceReward(streak) {
  const baseExp = 5;
  let bonusExp = 0;
  let bonusLabel = "기본 보상";

  if (streak > 0 && streak % 30 === 0) {
    bonusExp = 20;
    bonusLabel = "30일 연속 대보상";
  } else if (streak > 0 && streak % 14 === 0) {
    bonusExp = 12;
    bonusLabel = "14일 연속 보상";
  } else if (streak > 0 && streak % 7 === 0) {
    bonusExp = 7;
    bonusLabel = "7일 연속 보상";
  } else if (streak > 0 && streak % 3 === 0) {
    bonusExp = 3;
    bonusLabel = "3일 연속 보상";
  }

  return {
    baseExp,
    bonusExp,
    totalExp: baseExp + bonusExp,
    bonusLabel
  };
}

function formatAttendanceDate(value) {
  if (!value) return "기록 없음";
  return String(value).replaceAll("-", ".");
}

function renderAttendance() {
  if (!attendanceStreak || !attendanceBest || !attendanceTotal || !attendanceTodayStatus || !attendanceRewardText || !attendanceClaimBtn || !attendanceLogList) return;

  const partner = loadPartner();
  const attendance = loadAttendance();
  const todayKey = getTodayKey();
  const alreadyClaimed = attendance.lastClaimDate === todayKey;
  const previewStreak = getNextAttendanceStreak(attendance, todayKey);
  const reward = getAttendanceReward(previewStreak);

  attendanceStreak.textContent = `${attendance.currentStreak || 0}일`;
  attendanceBest.textContent = `${attendance.bestStreak || 0}일`;
  attendanceTotal.textContent = `${attendance.totalClaims || 0}회`;

  if (!partner) {
    attendanceTodayStatus.textContent = "파트너 선택 필요";
    attendanceRewardText.textContent = "파트너를 먼저 만나면 출석 보상을 받을 수 있습니다.";
    attendanceClaimBtn.disabled = true;
    attendanceClaimBtn.textContent = "파트너 선택 후 가능";
  } else if (alreadyClaimed) {
    attendanceTodayStatus.textContent = "오늘 보상 수령 완료";
    attendanceRewardText.textContent = `최근 수령일 ${formatAttendanceDate(attendance.lastClaimDate)} · 내일 다시 받을 수 있습니다.`;
    attendanceClaimBtn.disabled = true;
    attendanceClaimBtn.textContent = "오늘 보상 완료";
  } else {
    attendanceTodayStatus.textContent = "오늘 보상 대기";
    attendanceRewardText.textContent = `${previewStreak}일차 출석 보상: EXP +${reward.totalExp}${reward.bonusExp ? ` (${reward.bonusLabel} +${reward.bonusExp})` : ""}`;
    attendanceClaimBtn.disabled = false;
    attendanceClaimBtn.textContent = "오늘 출석 보상 받기";
  }

  if (!attendance.log || !attendance.log.length) {
    attendanceLogList.innerHTML = `<li>아직 출석 보상 기록이 없습니다.</li>`;
    return;
  }

  attendanceLogList.innerHTML = attendance.log.slice(0, ATTENDANCE_LOG_LIMIT).map((item) => `
    <li>
      <span>${escapeHtml(formatAttendanceDate(item.date))}</span>
      <strong>${escapeHtml(item.streak)}일차 · EXP +${escapeHtml(item.exp)}</strong>
      <em>${escapeHtml(item.partnerName)} · ${escapeHtml(item.rewardLabel)}</em>
    </li>
  `).join("");
}

function playAttendanceRewardEffect() {
  const partner = loadPartner();
  if (!partner || !partnerOrb) return;

  partnerOrb.classList.add("attendance-reward");
  setTimeout(() => partnerOrb.classList.remove("attendance-reward"), 1100);
}

function renderPartnerDex() {
  if (!partnerDexGrid || !partnerDexProgress) return;

  syncCurrentPartnerToDex();

  const partner = loadPartner();
  const dex = loadPartnerDex();
  const discoveredCount = partnerTemplates.filter((template) => dex[template.id]).length;

  partnerDexProgress.textContent = `${discoveredCount} / ${partnerTemplates.length} 발견`;
  renderActivePartnerProfile(partner);

  partnerDexGrid.innerHTML = partnerTemplates.map((template) => {
    const meta = partnerDexMeta[template.id];
    const found = Boolean(dex[template.id]);
    const current = partner && partner.id === template.id;
    const level = current ? getLevel(partner.exp || 0) : null;
    const stageIndex = current ? getStageIndex(level) : 0;
    const symbol = found || current ? template.symbols[stageIndex] : "?";
    const discoveredAt = found ? formatDexDate(dex[template.id].discoveredAt) : "미발견";
    const cardClass = `dex-card dex-${template.id}${found ? " discovered" : " locked"}${current ? " current" : ""}`;

    return `
      <article class="${cardClass}">
        <div class="dex-card-top">
          <div class="dex-symbol partner-${template.id} stage-${stageIndex + 1}">${escapeHtml(symbol)}</div>
          <span>${current ? "CURRENT" : found ? "DISCOVERED" : "LOCKED"}</span>
        </div>

        <h3>${found || current ? escapeHtml(template.name) : "???"}</h3>
        <p class="dex-type">${found || current ? escapeHtml(template.type) : "아직 만나지 않은 파트너입니다."}</p>

        <div class="dex-info-list">
          <div><span>담당</span><strong>${found || current ? escapeHtml(meta.specialty) : "도감에 기록되면 공개"}</strong></div>
          <div><span>성격</span><strong>${found || current ? escapeHtml(meta.personality) : "미발견"}</strong></div>
          <div><span>발견일</span><strong>${escapeHtml(discoveredAt)}</strong></div>
        </div>

        <p class="dex-hint">${escapeHtml(found || current ? meta.growthHint : meta.unlockHint)}</p>
      </article>
    `;
  }).join("");
}

function showLevelToast(title, text) {
  if (!levelToast || !levelToastTitle || !levelToastText) return;

  levelToastTitle.textContent = title;
  levelToastText.textContent = text;
  levelToast.classList.remove("hidden");
  levelToast.classList.add("show");

  setTimeout(() => {
    levelToast.classList.remove("show");
    levelToast.classList.add("hidden");
  }, 2400);
}

function renderPartnerInsight(reaction) {
  if (!partnerInsightBox || !partnerInsightLabel || !partnerInsightText) return;

  if (!reaction) {
    partnerInsightBox.classList.add("hidden");
    return;
  }

  partnerInsightLabel.textContent = reaction.label;
  partnerInsightText.textContent = reaction.text;
  partnerInsightBox.className = `partner-insight-box insight-${reaction.mood}`;
}

function renderPartner() {
  const partner = loadPartner();

  if (!partner) {
    partnerEmpty.classList.remove("hidden");
    partnerActive.classList.add("hidden");
    renderPartnerMoodHint(null);
    renderPartnerDex();
    renderAttendance();
    renderDataManager();
    return;
  }

  const template = getPartnerTemplate(partner.id);
  const level = getLevel(partner.exp || 0);
  const stageIndex = getStageIndex(level);
  const currentLevelExp = (partner.exp || 0) % EXP_PER_LEVEL;
  const expPercent = (currentLevelExp / EXP_PER_LEVEL) * 100;

  partnerEmpty.classList.add("hidden");
  partnerActive.classList.remove("hidden");

  const moodClass = partner.mood ? ` mood-${partner.mood}` : "";
  partnerOrb.className = `partner-orb partner-${template.id} stage-${stageIndex + 1}${moodClass}`;
  if (partnerSymbol) {
    partnerSymbol.textContent = template.symbols[stageIndex];
  }

  partnerName.textContent = template.name;
  partnerType.textContent = template.type;

  partnerLevel.textContent = `Lv.${level}`;
  partnerStage.textContent = getStageName(level);
  partnerExpText.textContent = `EXP ${currentLevelExp} / ${EXP_PER_LEVEL}`;
  if (partnerBond) {
    partnerBond.textContent = getPartnerBond(template, level);
  }
  if (partnerMoodBadge) {
    const moodInfo = getMoodInfo(partner.mood || "calm");
    partnerMoodBadge.textContent = partner.moodBadge || moodInfo.badge;
  }
  partnerExpFill.style.width = `${expPercent}%`;

  partnerSpeech.textContent = partner.speech || randomItem(template.greetings);
  renderPartnerMoodHint(partner);
  renderPartnerDex();
  renderAttendance();
  renderDataManager();
}

async function playPartnerDraw(template, isRandom = false) {
  if (!partnerDrawStage || !partnerDrawName) return;

  partnerDrawStage.classList.remove("hidden");
  partnerDrawName.textContent = isRandom
    ? "오라클 신호를 섞는 중..."
    : `${template.name}와 연결하는 중...`;

  statusText.textContent = isRandom
    ? "랜덤 파트너 신호를 탐색하고 있습니다..."
    : `${template.name}와 연결을 준비하고 있습니다...`;

  await wait(420);

  partnerDrawName.textContent = `${template.name} 발견!`;
  statusText.textContent = `${template.name}의 운세코드가 응답했습니다.`;

  await wait(520);
  partnerDrawStage.classList.add("hidden");
}

function buildPartner(template) {
  return {
    id: template.id,
    exp: 0,
    visits: 0,
    createdAt: getTodayKey(),
    lastVisit: "",
    mood: "calm",
    moodBadge: moodMeta.calm.badge,
    moodTitle: moodMeta.calm.title,
    moodHint: moodMeta.calm.hint,
    lastRelation: "",
    speech: `안녕, 나는 ${template.name}. 오늘부터 네 운세를 같이 봐줄게.`
  };
}

async function createPartnerById(id, isRandom = false) {
  const template = getPartnerTemplate(id);

  await playPartnerDraw(template, isRandom);

  const partner = buildPartner(template);
  savePartner(partner);
  rememberPartnerDiscovery(template.id, true);
  claimDailyVisitExp(true);
  renderPartner();
  renderDataManager();

  showLevelToast("PARTNER CONNECT", `${template.name}가 파트너로 연결되었습니다.`);
  statusText.textContent = `${template.name}가 파트너로 연결되었습니다.`;
}

async function createRandomPartner() {
  const template = randomItem(partnerTemplates);
  await createPartnerById(template.id, true);
}

function claimDailyVisitExp(isFirstMeet = false) {
  const partner = loadPartner();

  if (!partner) {
    renderAttendance();
    statusText.textContent = "출석 보상은 파트너를 선택한 뒤 받을 수 있습니다.";
    return;
  }

  const todayKey = getTodayKey();
  const attendance = loadAttendance();
  const alreadyClaimed = attendance.lastClaimDate === todayKey;
  const template = getPartnerTemplate(partner.id);

  if (alreadyClaimed) {
    if (isFirstMeet && partner.lastVisit !== todayKey) {
      partner.exp = (partner.exp || 0) + 5;
      partner.visits = (partner.visits || 0) + 1;
      partner.lastVisit = todayKey;
      partner.speech = `안녕, 나는 ${template.name}. 첫 만남 보너스로 EXP +5를 얻었어.`;
      savePartner(partner);
      renderPartner();
      renderAttendance();
      return;
    }

    renderAttendance();
    statusText.textContent = "오늘 출석 보상은 이미 받았습니다.";
    return;
  }

  const nextStreak = getNextAttendanceStreak(attendance, todayKey);
  const reward = getAttendanceReward(nextStreak);
  const oldLevel = getLevel(partner.exp || 0);

  partner.exp = (partner.exp || 0) + reward.totalExp;
  partner.visits = (partner.visits || 0) + 1;
  partner.lastVisit = todayKey;
  partner.speech = isFirstMeet
    ? `안녕, 나는 ${template.name}. 첫 만남과 ${nextStreak}일차 출석 보상으로 EXP +${reward.totalExp}를 얻었어.`
    : `${nextStreak}일차 출석 보상을 받았어. EXP +${reward.totalExp}! 내일도 같이 와보자.`;

  const newLevel = getLevel(partner.exp || 0);

  attendance.lastClaimDate = todayKey;
  attendance.currentStreak = nextStreak;
  attendance.bestStreak = Math.max(attendance.bestStreak || 0, nextStreak);
  attendance.totalClaims = (attendance.totalClaims || 0) + 1;
  attendance.totalExp = (attendance.totalExp || 0) + reward.totalExp;
  attendance.log = [
    {
      date: todayKey,
      streak: nextStreak,
      exp: reward.totalExp,
      partnerName: template.name,
      rewardLabel: reward.bonusLabel
    },
    ...(attendance.log || [])
  ].slice(0, ATTENDANCE_LOG_LIMIT);

  saveAttendance(attendance);
  savePartner(partner);
  renderPartner();
  renderAttendance();
  playAttendanceRewardEffect();

  if (newLevel > oldLevel) {
    showLevelToast("ATTENDANCE LEVEL UP", `${template.name}가 출석 보상으로 Lv.${newLevel}이 되었습니다.`);
  } else {
    showLevelToast("ATTENDANCE REWARD", `${nextStreak}일차 출석 보상 EXP +${reward.totalExp}`);
  }

  renderDataManager();
  statusText.textContent = `${nextStreak}일차 출석 보상을 받았습니다. EXP +${reward.totalExp}`;
}

function addPartnerExp(amount, reaction) {
  const partner = loadPartner();
  if (!partner) return;

  const oldLevel = getLevel(partner.exp || 0);
  partner.exp = (partner.exp || 0) + amount;
  const newLevel = getLevel(partner.exp);

  const template = getPartnerTemplate(partner.id);
  const reactionText = typeof reaction === "string" ? reaction : reaction?.text;
  const reactionMood = typeof reaction === "object" ? reaction?.mood : null;

  if (reactionMood) {
    const moodInfo = getMoodInfo(reactionMood);
    partner.mood = reactionMood;
    partner.moodBadge = reaction?.moodBadge || moodInfo.badge;
    partner.moodTitle = reaction?.moodTitle || moodInfo.title;
    partner.moodHint = reaction?.moodHint || moodInfo.hint;
    partner.lastRelation = reaction?.short || "";
  }

  if (newLevel > oldLevel) {
    const oldStage = getStageIndex(oldLevel);
    const newStage = getStageIndex(newLevel);
    const levelUpText = template.levelUps[newStage] || template.levelUps[0] || `Lv.${newLevel}이 되었어.`;

    if (newStage > oldStage) {
      partner.speech = `${levelUpText} 나는 이제 ${getStageName(newLevel)}이야!`;
      showLevelToast(`${template.name} 성장!`, `${getStageName(newLevel)}으로 변화했습니다.`);
    } else {
      partner.speech = `${levelUpText} Lv.${newLevel} 달성!`;
      showLevelToast("LEVEL UP", `${template.name}가 Lv.${newLevel}이 되었습니다.`);
    }
  } else {
    partner.speech = reactionText || randomItem(template.result);
  }

  savePartner(partner);
  renderPartner();
  renderDataManager();

  const effectClass = newLevel > oldLevel ? "level-up" : "happy";
  partnerOrb.classList.add(effectClass);
  setTimeout(() => partnerOrb.classList.remove(effectClass), 1100);
}

function resetPartner() {
  const ok = confirm("현재 파트너 기록을 초기화할까요?");
  if (!ok) return;

  localStorage.removeItem(PARTNER_KEY);
  persistActiveProfileData();
  renderPartner();
  renderPartnerInsight(null);
  renderAttendance();
  renderDataManager();
  statusText.textContent = "파트너 기록이 초기화되었습니다. 새 파트너를 선택할 수 있습니다.";
}

function changePartner() {
  const ok = confirm("현재 파트너를 교체할까요? 레벨과 EXP 기록은 초기화됩니다.");
  if (!ok) return;

  localStorage.removeItem(PARTNER_KEY);
  persistActiveProfileData();
  renderPartner();
  renderPartnerInsight(null);
  renderAttendance();
  renderDataManager();
  statusText.textContent = "새 파트너를 선택하거나 랜덤으로 만나보세요.";
}

function setPartnerSpeech(type) {
  const partner = loadPartner();
  if (!partner) return;

  const template = getPartnerTemplate(partner.id);

  if (type === "analyzing") {
    partner.speech = randomItem(template.analyzing);
  } else if (type === "result") {
    partner.speech = randomItem(template.result);
  } else {
    partner.speech = randomItem(template.greetings);
  }

  savePartner(partner);
  renderPartner();
}

function getPartnerReaction(result) {
  const partner = loadPartner();
  if (!partner) return null;

  const template = getPartnerTemplate(partner.id);
  const meta = relationMeta[result.relation] || relationMeta.balance;
  const baseList = template.reactions[result.relation] || template.result;
  const bonusList = reactionBonusLines[partner.id]?.[result.relation] || [];
  const list = baseList.concat(bonusList);
  const seed = getHash(`${partner.id}-${result.code}-${result.relation}`);
  const text = list[seed % list.length];
  const moodInfo = getMoodInfo(meta.mood);

  return {
    label: `${template.name}의 해석 · ${meta.label}`,
    text,
    mood: meta.mood,
    moodBadge: moodInfo.badge,
    moodTitle: meta.emotion || moodInfo.title,
    moodHint: moodInfo.hint,
    short: meta.short
  };
}

function mod(value, size) {
  return ((value % size) + size) % size;
}

function parseDate(value) {
  const [year, month, day] = value.split("-").map(Number);
  return { year, month, day };
}

function getYearInfo(year) {
  const stem = stems[mod(year - 4, 10)];
  const branch = branches[mod(year - 4, 12)];

  return {
    ganji: stem[0] + branch[0],
    animal: branch[1],
    stemElement: stem[1],
    branchElement: branch[2]
  };
}

function getTimeInfo(key) {
  if (key === "unknown") return null;

  const branch = branches[timeIndex[key]];

  return {
    name: branch[0],
    animal: branch[1],
    element: branch[2],
    range: branch[3]
  };
}

function getMonthElement(month) {
  if (month === 3 || month === 4) return "wood";
  if (month === 5 || month === 6) return "fire";
  if (month === 7 || month === 8) return "earth";
  if (month === 9 || month === 10) return "metal";
  return "water";
}

function getTodayElement() {
  const today = new Date();
  const base = new Date(1900, 0, 1);
  const diff = Math.floor((today - base) / 86400000);
  const stem = stems[mod(diff + 6, 10)];

  return stem[1];
}

function getMainElement(yearElement, monthElement, timeElement) {
  const score = {
    wood: 0,
    fire: 0,
    earth: 0,
    metal: 0,
    water: 0
  };

  score[yearElement] += 2;
  score[monthElement] += 2;

  if (timeElement) {
    score[timeElement] += 1;
  }

  return Object.entries(score).sort((a, b) => b[1] - a[1])[0][0];
}

function getRelation(myElement, todayElement) {
  if (myElement === todayElement) return "balance";
  if (generates[todayElement] === myElement) return "support";
  if (generates[myElement] === todayElement) return "output";
  if (controls[myElement] === todayElement) return "control";
  if (controls[todayElement] === myElement) return "pressure";
  return "balance";
}

function getHash(text) {
  let hash = 0;

  for (let i = 0; i < text.length; i += 1) {
    hash = (hash << 5) - hash + text.charCodeAt(i);
    hash |= 0;
  }

  return Math.abs(hash);
}

function makeResult(profile) {
  const yearInfo = getYearInfo(profile.year);
  const monthElement = getMonthElement(profile.month);
  const timeInfo = getTimeInfo(profile.time);
  const timeElement = timeInfo ? timeInfo.element : null;
  const mainElement = getMainElement(yearInfo.stemElement, monthElement, timeElement);
  const todayElement = getTodayElement();
  const relation = getRelation(mainElement, todayElement);
  const text = fortuneText[relation];

  const seed = getHash(`${profile.date}-${profile.time}-${profile.name}-${profile.gender}-${getTodayKey()}`);
  const lucky = luckyData[mainElement];
  const luckyNumber = String((seed % 9) + 1);

  return {
    title: profile.name ? `${profile.name}님의 오늘 운세` : "오늘의 운세 분석 결과",
    code: `#${yearInfo.ganji}-${seed % 10000}`,
    complete: timeInfo ? "94%" : "82%",
    relation,
    mainElement,
    todayElement,
    base: [
      ["출생 간지", yearInfo.ganji],
      ["띠", `${yearInfo.animal}띠`],
      ["중심 오행", elementName[mainElement]],
      ["태어난 시간", timeInfo ? `${timeInfo.name}시 ${timeInfo.range}` : "시간 모름"]
    ],
    fortunes: text,
    lucky: [
      ["행운 색", lucky[0]],
      ["좋은 방향", lucky[1]],
      ["행운 숫자", luckyNumber],
      ["키워드", lucky[2]]
    ]
  };
}

function renderChips(items) {
  return items.map(([label, value]) => `
    <div class="info-chip">
      <span>${label}</span>
      <strong>${value}</strong>
    </div>
  `).join("");
}

function renderLucky(items) {
  return items.map(([label, value]) => `
    <div class="lucky-item">
      <span>${label}</span>
      <strong>${value}</strong>
    </div>
  `).join("");
}

function renderResult(result, partnerReaction = null) {
  analysisCode.textContent = result.code;
  completeRate.textContent = result.complete;
  resultTitle.textContent = result.title;

  baseInfo.innerHTML = renderChips(result.base);

  totalFortune.textContent = result.fortunes.total;
  moneyFortune.textContent = result.fortunes.money;
  loveFortune.textContent = result.fortunes.love;
  workFortune.textContent = result.fortunes.work;
  healthFortune.textContent = result.fortunes.health;
  cautionFortune.textContent = result.fortunes.caution;

  luckyItems.innerHTML = renderLucky(result.lucky);
  finalAdvice.textContent = result.fortunes.advice;

  renderPartnerInsight(partnerReaction);
  resultCard.classList.remove("hidden");
}

function loadFortuneHistory() {
  try {
    const saved = JSON.parse(localStorage.getItem(HISTORY_KEY));
    return Array.isArray(saved) ? saved : [];
  } catch (error) {
    localStorage.removeItem(HISTORY_KEY);
    return [];
  }
}

function saveFortuneHistoryList(list) {
  try {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(list));
    persistActiveProfileData();
  } catch (error) {
    console.error("운세 기록 저장 실패", error);
  }
}

function getGenderLabel(value) {
  if (value === "male") return "남성";
  if (value === "female") return "여성";
  return "선택 안 함";
}

function getBirthTimeLabel(key) {
  if (key === "unknown") return "시간 모름";

  const info = getTimeInfo(key);
  if (!info) return "시간 모름";

  return `${info.name}시 ${info.range}`;
}

function formatSavedAt(value) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value || "저장 시간 없음";
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");

  return `${year}.${month}.${day} ${hour}:${minute}`;
}

function buildHistoryRecord(profile, result, partnerReaction) {
  const partner = loadPartner();
  const template = partner ? getPartnerTemplate(partner.id) : null;
  const relation = relationMeta[result.relation] || relationMeta.balance;
  const inputKey = getHash(`${profile.date}-${profile.time}-${profile.name}-${profile.gender}`);

  return {
    id: `${getTodayKey()}-${inputKey}`,
    savedAt: new Date().toISOString(),
    todayKey: getTodayKey(),
    title: result.title,
    code: result.code,
    name: profile.name || "이름 없음",
    birthDate: profile.date,
    birthTime: getBirthTimeLabel(profile.time),
    gender: getGenderLabel(profile.gender),
    relationLabel: relation.label,
    relationShort: relation.short,
    mainElement: elementName[result.mainElement],
    todayElement: elementName[result.todayElement],
    total: result.fortunes.total,
    advice: result.fortunes.advice,
    lucky: result.lucky,
    partnerName: template ? template.name : "파트너 없음",
    partnerLevel: partner ? getLevel(partner.exp || 0) : null,
    partnerStage: partner ? getStageName(getLevel(partner.exp || 0)) : null,
    partnerMood: partnerReaction ? partnerReaction.moodBadge : null,
    partnerReaction: partnerReaction ? partnerReaction.text : "파트너 없이 저장된 운세입니다."
  };
}

function saveFortuneHistory(profile, result, partnerReaction) {
  const record = buildHistoryRecord(profile, result, partnerReaction);
  const history = loadFortuneHistory().filter((item) => item.id !== record.id);
  const nextHistory = [record, ...history].slice(0, HISTORY_LIMIT);

  saveFortuneHistoryList(nextHistory);
  renderFortuneHistory();
  renderDataManager();
}

function renderHistoryLucky(items) {
  if (!Array.isArray(items) || !items.length) return "";

  return items.map(([label, value]) => `
    <span class="history-lucky-chip">${escapeHtml(label)} · ${escapeHtml(value)}</span>
  `).join("");
}

function renderFortuneHistory() {
  if (!fortuneHistoryEmpty || !fortuneHistoryList) return;

  const history = loadFortuneHistory();

  if (!history.length) {
    fortuneHistoryEmpty.classList.remove("hidden");
    fortuneHistoryList.innerHTML = "";
    if (clearHistoryBtn) clearHistoryBtn.disabled = true;
    return;
  }

  fortuneHistoryEmpty.classList.add("hidden");
  if (clearHistoryBtn) clearHistoryBtn.disabled = false;

  fortuneHistoryList.innerHTML = history.map((item) => `
    <article class="history-item">
      <details>
        <summary>
          <span class="history-date">${escapeHtml(formatSavedAt(item.savedAt))}</span>
          <strong>${escapeHtml(item.title)}</strong>
          <em>${escapeHtml(item.code)} · ${escapeHtml(item.relationShort)}</em>
        </summary>

        <div class="history-detail">
          <div class="history-mini-grid">
            <div><span>생년월일</span><strong>${escapeHtml(item.birthDate)}</strong></div>
            <div><span>태어난 시간</span><strong>${escapeHtml(item.birthTime)}</strong></div>
            <div><span>중심 오행</span><strong>${escapeHtml(item.mainElement)}</strong></div>
            <div><span>오늘 흐름</span><strong>${escapeHtml(item.relationLabel)}</strong></div>
          </div>

          <div class="history-text-block">
            <span>총운</span>
            <p>${escapeHtml(item.total)}</p>
          </div>

          <div class="history-text-block">
            <span>파트너 해석</span>
            <p>${escapeHtml(item.partnerName)}${item.partnerLevel ? ` Lv.${escapeHtml(item.partnerLevel)}` : ""}${item.partnerStage ? ` · ${escapeHtml(item.partnerStage)}` : ""}${item.partnerMood ? ` · ${escapeHtml(item.partnerMood)}` : ""}<br>${escapeHtml(item.partnerReaction)}</p>
          </div>

          <div class="history-lucky-row">
            ${renderHistoryLucky(item.lucky)}
          </div>

          <div class="history-text-block advice-history">
            <span>한 줄 조언</span>
            <p>${escapeHtml(item.advice)}</p>
          </div>

          <button class="small-button history-delete-btn" type="button" data-history-delete="${escapeHtml(item.id)}">이 기록 삭제</button>
        </div>
      </details>
    </article>
  `).join("");
}

function deleteHistoryRecord(id) {
  const history = loadFortuneHistory().filter((item) => item.id !== id);
  saveFortuneHistoryList(history);
  renderFortuneHistory();
  renderDataManager();
  statusText.textContent = "선택한 운세 기록을 삭제했습니다.";
}

function clearFortuneHistory() {
  const ok = confirm("저장된 이전 운세 기록을 모두 삭제할까요?");
  if (!ok) return;

  localStorage.removeItem(HISTORY_KEY);
  persistActiveProfileData();
  renderFortuneHistory();
  renderDataManager();
  statusText.textContent = "이전 운세 기록을 모두 삭제했습니다.";
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function analyzeFortune(event) {
  event.preventDefault();

  if (!birthDateEl.value) {
    statusText.textContent = "생년월일을 입력해주세요.";
    return;
  }

  analyzeBtn.disabled = true;
  resultCard.classList.add("hidden");
  renderPartnerInsight(null);
  document.body.classList.add("scanning");

  try {
    const date = parseDate(birthDateEl.value);

    const profile = {
      name: userNameEl.value.trim(),
      gender: genderEl.value,
      date: birthDateEl.value,
      year: date.year,
      month: date.month,
      day: date.day,
      time: birthTimeEl.value
    };

    if (loadPartner()) {
      setPartnerSpeech("analyzing");
      partnerOrb.classList.add("analyzing");
    }

    statusText.textContent = "출생 정보를 읽는 중...";
    await wait(450);

    statusText.textContent = "파트너 오라클과 연결하는 중...";
    await wait(450);

    statusText.textContent = "천간·지지 흐름을 계산하는 중...";
    await wait(550);

    statusText.textContent = "오늘의 오행 균형을 분석하는 중...";
    await wait(550);

    statusText.textContent = "AI 운세 리포트를 생성하는 중...";
    await wait(450);

    const result = makeResult(profile);
    const reaction = loadPartner() ? getPartnerReaction(result) : null;
    renderResult(result, reaction);

    if (loadPartner()) {
      partnerOrb.classList.remove("analyzing");
      addPartnerExp(10, reaction);
    }

    saveFortuneHistory(profile, result, reaction);
    statusText.textContent = "오늘의 운세 분석이 완료되었습니다. 파트너 반응과 이전 운세 기록도 저장되었습니다.";
  } catch (error) {
    console.error(error);
    statusText.textContent = "분석 중 오류가 생겼습니다. 파일을 새로 덮어씌운 뒤 Ctrl + F5로 새로고침해주세요.";
  } finally {
    document.body.classList.remove("scanning");
    partnerOrb.classList.remove("analyzing");
    analyzeBtn.disabled = false;
  }
}


function readJsonFromStorage(key) {
  try {
    return JSON.parse(localStorage.getItem(key)) || {};
  } catch (error) {
    localStorage.removeItem(key);
    return {};
  }
}

function loadChecklistState() {
  const stableState = readJsonFromStorage(CHECKLIST_KEY);

  CHECKLIST_LEGACY_KEYS.forEach((key) => {
    const legacyState = readJsonFromStorage(key);
    Object.keys(legacyState).forEach((id) => {
      if (stableState[id] === undefined) {
        stableState[id] = legacyState[id];
      }
    });
  });

  return stableState;
}

function getChecklistStateFromDom() {
  const state = {};

  devChecklistItems.forEach((item) => {
    const id = item.getAttribute("data-check-id");
    if (id) {
      state[id] = item.checked;
    }
  });

  return state;
}

function saveChecklistState(state) {
  try {
    localStorage.setItem(CHECKLIST_KEY, JSON.stringify(state));
    persistActiveProfileData();
  } catch (error) {
    console.error("체크리스트 저장 실패", error);
  }
}

function restoreChecklistState() {
  if (!devChecklistItems.length) return;

  const saved = loadChecklistState();

  devChecklistItems.forEach((item) => {
    const id = item.getAttribute("data-check-id");
    item.checked = Boolean(saved[id]);
  });

  updateChecklistProgress();
}

function persistChecklistState() {
  saveChecklistState(getChecklistStateFromDom());
  updateChecklistProgress();
}

function updateChecklistProgress() {
  if (!devChecklistItems.length || !devChecklistProgress || !devChecklistFill) return;

  const total = devChecklistItems.length;
  const checked = Array.from(devChecklistItems).filter((item) => item.checked).length;
  const percent = total ? (checked / total) * 100 : 0;

  devChecklistProgress.textContent = `${checked} / ${total} 확인 완료 · 자동 저장됨`;
  devChecklistFill.style.width = `${percent}%`;
  renderDataManager();
}

function initDevChecklist() {
  if (devVersionBadge) {
    devVersionBadge.textContent = DEV_VERSION;
  }

  if (!devChecklistItems.length) return;

  restoreChecklistState();

  devChecklistItems.forEach((item) => {
    item.addEventListener("change", persistChecklistState);
    item.addEventListener("input", persistChecklistState);
  });

  window.addEventListener("pageshow", restoreChecklistState);
}

function jumpToDevChecklist() {
  if (!devCheckCard) return;

  devCheckCard.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

  devCheckCard.classList.add("dev-check-highlight");
  setTimeout(() => {
    devCheckCard.classList.remove("dev-check-highlight");
  }, 1600);
}

function resetDevChecklist() {
  const ok = confirm("개발 점검표 체크 상태를 초기화할까요?");
  if (!ok) return;

  localStorage.removeItem(CHECKLIST_KEY);
  CHECKLIST_LEGACY_KEYS.forEach((key) => localStorage.removeItem(key));
  persistActiveProfileData();
  devChecklistItems.forEach((item) => {
    item.checked = false;
  });
  updateChecklistProgress();
  renderDataManager();
  statusText.textContent = "개발 점검표가 초기화되었습니다.";
}


function makeProfileId() {
  if (window.crypto && window.crypto.randomUUID) {
    return `profile-${window.crypto.randomUUID().slice(0, 8)}`;
  }

  return `profile-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`;
}

function getDefaultProfileName() {
  return "기본 프로필";
}

function readProfileStore() {
  try {
    const saved = JSON.parse(localStorage.getItem(PROFILE_STORE_KEY));

    if (saved && saved.profiles && typeof saved.profiles === "object" && !Array.isArray(saved.profiles)) {
      return saved;
    }
  } catch (error) {
    console.error("프로필 저장소 읽기 실패", error);
  }

  return null;
}

function writeProfileStore(store) {
  try {
    localStorage.setItem(PROFILE_STORE_KEY, JSON.stringify(store));
  } catch (error) {
    console.error("프로필 저장소 저장 실패", error);
  }
}

function getCurrentLegacyStorage() {
  const storage = {};

  PROFILE_DATA_KEYS.forEach((key) => {
    const value = localStorage.getItem(key);
    if (value !== null) {
      storage[key] = value;
    }
  });

  return storage;
}

function applyProfileStorage(storage) {
  PROFILE_DATA_KEYS.forEach((key) => {
    if (storage && Object.prototype.hasOwnProperty.call(storage, key)) {
      localStorage.setItem(key, storage[key]);
    } else {
      localStorage.removeItem(key);
    }
  });
}

function getActiveProfileId() {
  return localStorage.getItem(PROFILE_ACTIVE_KEY) || PROFILE_DEFAULT_ID;
}

function getActiveProfile() {
  const store = readProfileStore();
  if (!store) return null;

  const activeId = getActiveProfileId();
  return store.profiles[activeId] || Object.values(store.profiles)[0] || null;
}

function ensureProfileStore() {
  let store = readProfileStore();
  const now = new Date().toISOString();

  if (!store) {
    const legacyStorage = getCurrentLegacyStorage();
    store = {
      app: "today_fortune_code_profiles",
      version: 1,
      createdAt: now,
      updatedAt: now,
      migratedFrom: "V2-8",
      profiles: {
        [PROFILE_DEFAULT_ID]: {
          id: PROFILE_DEFAULT_ID,
          name: getDefaultProfileName(),
          createdAt: now,
          updatedAt: now,
          storage: legacyStorage
        }
      }
    };

    writeProfileStore(store);
    localStorage.setItem(PROFILE_ACTIVE_KEY, PROFILE_DEFAULT_ID);
    return store;
  }

  if (!store.profiles[PROFILE_DEFAULT_ID] && Object.keys(store.profiles).length === 0) {
    store.profiles[PROFILE_DEFAULT_ID] = {
      id: PROFILE_DEFAULT_ID,
      name: getDefaultProfileName(),
      createdAt: now,
      updatedAt: now,
      storage: {}
    };
  }

  store.updatedAt = now;
  writeProfileStore(store);

  const activeId = getActiveProfileId();
  if (!store.profiles[activeId]) {
    const firstId = Object.keys(store.profiles)[0] || PROFILE_DEFAULT_ID;
    localStorage.setItem(PROFILE_ACTIVE_KEY, firstId);
  }

  return store;
}

function persistActiveProfileData() {
  if (!isProfileSystemReady) return;

  const store = ensureProfileStore();
  const activeId = getActiveProfileId();
  const active = store.profiles[activeId];

  if (!active) return;

  active.storage = getCurrentLegacyStorage();
  active.updatedAt = new Date().toISOString();
  store.updatedAt = active.updatedAt;
  writeProfileStore(store);
}

function renderProfileManager() {
  if (!profileSelect || !profileCurrentBadge || !profileCountText || !profileMigrationState) return;

  const store = ensureProfileStore();
  const activeId = getActiveProfileId();
  const profiles = Object.values(store.profiles);
  const active = store.profiles[activeId] || profiles[0];

  profileSelect.innerHTML = profiles.map((profile) => `
    <option value="${escapeHtml(profile.id)}" ${profile.id === active.id ? "selected" : ""}>${escapeHtml(profile.name)}</option>
  `).join("");

  profileCurrentBadge.textContent = active.name;
  profileCountText.textContent = `${profiles.length}개`;
  profileMigrationState.textContent = store.migratedFrom ? `${store.migratedFrom} 데이터 이전 완료` : "프로필 저장 중";

  if (renameProfileName) {
    renameProfileName.value = active.name;
  }
}

function setProfileMessage(message) {
  if (profileMessage) {
    profileMessage.textContent = message;
  }
}

function initProfileSystem() {
  const store = ensureProfileStore();
  const activeId = getActiveProfileId();
  const active = store.profiles[activeId] || Object.values(store.profiles)[0];

  if (active) {
    localStorage.setItem(PROFILE_ACTIVE_KEY, active.id);
    applyProfileStorage(active.storage || {});
  }

  isProfileSystemReady = true;
  renderProfileManager();
}

function createNewProfile() {
  const name = newProfileName ? newProfileName.value.trim() : "";

  if (!name) {
    setProfileMessage("새 프로필 이름을 입력해주세요.");
    statusText.textContent = "새 프로필 이름을 입력해주세요.";
    return;
  }

  persistActiveProfileData();

  const store = ensureProfileStore();
  const duplicated = Object.values(store.profiles).some((profile) => profile.name === name);

  if (duplicated) {
    setProfileMessage("이미 같은 이름의 프로필이 있습니다.");
    statusText.textContent = "이미 같은 이름의 프로필이 있습니다.";
    return;
  }

  const now = new Date().toISOString();
  const id = makeProfileId();

  store.profiles[id] = {
    id,
    name,
    createdAt: now,
    updatedAt: now,
    storage: {}
  };
  store.updatedAt = now;
  writeProfileStore(store);
  localStorage.setItem(PROFILE_ACTIVE_KEY, id);
  applyProfileStorage({});

  if (newProfileName) {
    newProfileName.value = "";
  }

  refreshAllViewsAfterDataChange();
  setProfileMessage(`${name} 프로필을 만들고 전환했습니다.`);
  statusText.textContent = `${name} 프로필로 전환했습니다.`;
}

function makeUniqueProfileName(store, baseName) {
  const names = Object.values(store.profiles).map((profile) => profile.name);
  let name = baseName;
  let count = 2;

  while (names.includes(name)) {
    name = `${baseName} ${count}`;
    count += 1;
  }

  return name;
}

function isDuplicatedProfileName(store, name, ignoreId = "") {
  return Object.values(store.profiles).some((profile) => profile.id !== ignoreId && profile.name === name);
}

function renameCurrentProfile() {
  const name = renameProfileName ? renameProfileName.value.trim() : "";

  if (!name) {
    setProfileMessage("바꿀 프로필 이름을 입력해주세요.");
    statusText.textContent = "바꿀 프로필 이름을 입력해주세요.";
    return;
  }

  persistActiveProfileData();

  const store = ensureProfileStore();
  const activeId = getActiveProfileId();
  const active = store.profiles[activeId];

  if (!active) {
    setProfileMessage("현재 프로필을 찾을 수 없습니다.");
    statusText.textContent = "현재 프로필을 찾을 수 없습니다.";
    renderProfileManager();
    return;
  }

  if (active.name === name) {
    setProfileMessage("이미 같은 이름을 사용 중입니다.");
    statusText.textContent = "이미 같은 이름을 사용 중입니다.";
    return;
  }

  if (isDuplicatedProfileName(store, name, activeId)) {
    setProfileMessage("이미 같은 이름의 프로필이 있습니다.");
    statusText.textContent = "이미 같은 이름의 프로필이 있습니다.";
    return;
  }

  active.name = name;
  active.updatedAt = new Date().toISOString();
  store.updatedAt = active.updatedAt;
  writeProfileStore(store);

  renderProfileManager();
  renderDataManager();
  setProfileMessage(`${name}으로 프로필 이름을 변경했습니다.`);
  statusText.textContent = `${name}으로 프로필 이름을 변경했습니다.`;
}

function duplicateCurrentProfile() {
  persistActiveProfileData();

  const store = ensureProfileStore();
  const activeId = getActiveProfileId();
  const active = store.profiles[activeId];

  if (!active) {
    setProfileMessage("복사할 현재 프로필을 찾을 수 없습니다.");
    statusText.textContent = "복사할 현재 프로필을 찾을 수 없습니다.";
    renderProfileManager();
    return;
  }

  const now = new Date().toISOString();
  const id = makeProfileId();
  const name = makeUniqueProfileName(store, `${active.name} 복사`);
  const clonedStorage = JSON.parse(JSON.stringify(active.storage || {}));

  store.profiles[id] = {
    id,
    name,
    createdAt: now,
    updatedAt: now,
    copiedFrom: active.id,
    storage: clonedStorage
  };

  store.updatedAt = now;
  writeProfileStore(store);
  localStorage.setItem(PROFILE_ACTIVE_KEY, id);
  applyProfileStorage(clonedStorage);

  refreshAllViewsAfterDataChange();
  renderPartnerInsight(null);
  setProfileMessage(`${name} 프로필을 복사하고 전환했습니다.`);
  statusText.textContent = `${name} 프로필을 복사하고 전환했습니다.`;
}

function deleteCurrentProfile() {
  persistActiveProfileData();

  const store = ensureProfileStore();
  const activeId = getActiveProfileId();
  const active = store.profiles[activeId];
  const profiles = Object.values(store.profiles);

  if (!active) {
    setProfileMessage("삭제할 현재 프로필을 찾을 수 없습니다.");
    statusText.textContent = "삭제할 현재 프로필을 찾을 수 없습니다.";
    renderProfileManager();
    return;
  }

  if (profiles.length <= 1) {
    setProfileMessage("프로필은 최소 1개가 필요해서 마지막 프로필은 삭제할 수 없습니다.");
    statusText.textContent = "마지막 프로필은 삭제할 수 없습니다.";
    return;
  }

  const ok = confirm(`${active.name} 프로필을 삭제할까요? 이 프로필의 파트너, 출석, 기록도 함께 삭제됩니다.`);
  if (!ok) return;

  delete store.profiles[activeId];

  const nextProfile = Object.values(store.profiles)[0];
  store.updatedAt = new Date().toISOString();
  writeProfileStore(store);
  localStorage.setItem(PROFILE_ACTIVE_KEY, nextProfile.id);
  applyProfileStorage(nextProfile.storage || {});

  refreshAllViewsAfterDataChange();
  renderPartnerInsight(null);
  setProfileMessage(`${active.name} 프로필을 삭제하고 ${nextProfile.name} 프로필로 전환했습니다.`);
  statusText.textContent = `${active.name} 프로필을 삭제했습니다.`;
}

function switchProfile() {
  if (!profileSelect) return;

  const targetId = profileSelect.value;
  const store = ensureProfileStore();
  const target = store.profiles[targetId];

  if (!target) {
    setProfileMessage("선택한 프로필을 찾을 수 없습니다.");
    statusText.textContent = "선택한 프로필을 찾을 수 없습니다.";
    renderProfileManager();
    return;
  }

  const currentId = getActiveProfileId();

  if (currentId === targetId) {
    setProfileMessage(`이미 ${target.name} 프로필을 사용 중입니다.`);
    statusText.textContent = `이미 ${target.name} 프로필입니다.`;
    return;
  }

  persistActiveProfileData();
  localStorage.setItem(PROFILE_ACTIVE_KEY, targetId);
  applyProfileStorage(target.storage || {});
  refreshAllViewsAfterDataChange();
  renderPartnerInsight(null);
  setProfileMessage(`${target.name} 프로필로 전환했습니다.`);
  statusText.textContent = `${target.name} 프로필로 전환했습니다.`;
}

function getKnownStorageSnapshot() {
  persistActiveProfileData();

  const storage = {};

  DATA_BACKUP_KEYS.forEach((item) => {
    const value = localStorage.getItem(item.key);
    if (value !== null) {
      storage[item.key] = value;
    }
  });

  return storage;
}

function getChecklistCheckedCount() {
  const state = loadChecklistState();
  return Object.values(state).filter(Boolean).length;
}

function getStorageSizeText(value) {
  if (value === null || value === undefined) return "없음";
  const bytes = new Blob([String(value)]).size;

  if (bytes >= 1024) {
    return `${(bytes / 1024).toFixed(1)}KB`;
  }

  return `${bytes}B`;
}

function getStorageKeyState(key) {
  const value = localStorage.getItem(key);
  return {
    hasData: value !== null,
    size: getStorageSizeText(value)
  };
}

function getCurrentDataSummary() {
  const partner = loadPartner();
  const history = loadFortuneHistory();
  const dex = loadPartnerDex();
  const attendance = loadAttendance();
  const checklistChecked = getChecklistCheckedCount();
  const discoveredCount = partnerTemplates.filter((template) => dex[template.id]).length;
  const partnerName = partner ? getPartnerTemplate(partner.id).name : "없음";

  return {
    partner: partner ? `${partnerName} Lv.${getLevel(partner.exp || 0)}` : "없음",
    historyCount: history.length,
    dexCount: `${discoveredCount} / ${partnerTemplates.length}`,
    attendance: `${attendance.totalClaims || 0}회 · ${attendance.currentStreak || 0}일 연속`,
    checklistChecked
  };
}

function buildLoginReadyDataBundle() {
  const storage = getKnownStorageSnapshot();
  const activeProfile = getActiveProfile();
  const profileStore = readProfileStore();
  const summary = getCurrentDataSummary();

  return {
    app: "today_fortune_code",
    version: DEV_VERSION,
    schemaVersion: LOGIN_SCHEMA_VERSION,
    exportedAt: new Date().toISOString(),
    storageMode: "localStorage_profile_bundle",
    futureLoginShape: {
      userId: "future_login_user_id",
      activeProfileId: activeProfile ? activeProfile.id : PROFILE_DEFAULT_ID,
      profiles: "profileStore.profiles",
      currentProfileStorage: "profiles[activeProfileId].storage"
    },
    activeProfile,
    profileCount: Object.keys(profileStore.profiles || {}).length,
    dataKeys: DATA_BACKUP_KEYS.map((item) => ({
      key: item.key,
      label: item.label,
      hasData: Object.prototype.hasOwnProperty.call(storage, item.key),
      size: getStorageSizeText(storage[item.key])
    })),
    summary
  };
}

function buildLoginSchemaPreview() {
  const bundle = buildLoginReadyDataBundle();
  const activeProfile = bundle.activeProfile || { id: PROFILE_DEFAULT_ID, name: "기본 프로필" };

  return {
    app: bundle.app,
    version: bundle.version,
    schemaVersion: bundle.schemaVersion,
    loginStorageExample: {
      userId: "로그인_사용자_ID",
      activeProfileId: activeProfile.id,
      profiles: {
        [activeProfile.id]: {
          id: activeProfile.id,
          name: activeProfile.name,
          storage: {
            [PARTNER_KEY]: "파트너 데이터",
            [HISTORY_KEY]: "이전 운세 기록",
            [DEX_KEY]: "파트너 도감 데이터",
            [ATTENDANCE_KEY]: "출석 데이터",
            [CHECKLIST_KEY]: "개발 점검표 데이터"
          }
        }
      }
    },
    currentProfileSummary: bundle.summary,
    dataKeys: bundle.dataKeys
  };
}

function setLoginInspectorMessage(message) {
  if (loginInspectorMessage) {
    loginInspectorMessage.textContent = message;
  }
}

function renderLoginStorageInspector() {
  if (!loginReadyBadge || !loginActiveProfileName || !loginSchemaVersionText || !loginDataBundleState || !loginStorageModeText || !loginSchemaPreview) return;

  const activeProfile = getActiveProfile();
  const bundle = buildLoginReadyDataBundle();
  const filledCount = bundle.dataKeys.filter((item) => item.hasData).length;
  const states = {
    [PARTNER_KEY]: loginPartnerKeyState,
    [HISTORY_KEY]: loginHistoryKeyState,
    [DEX_KEY]: loginDexKeyState,
    [ATTENDANCE_KEY]: loginAttendanceKeyState,
    [CHECKLIST_KEY]: loginChecklistKeyState
  };

  loginReadyBadge.textContent = `${filledCount} / ${DATA_BACKUP_KEYS.length} 항목 준비`;
  loginActiveProfileName.textContent = activeProfile ? activeProfile.name : "기본 프로필";
  loginSchemaVersionText.textContent = LOGIN_SCHEMA_VERSION;
  loginDataBundleState.textContent = filledCount ? `${filledCount}개 저장 항목 있음` : "아직 저장 항목 없음";
  loginStorageModeText.textContent = "localStorage → 로그인 계정 저장 예정";

  DATA_BACKUP_KEYS.forEach((item) => {
    const state = getStorageKeyState(item.key);
    const target = states[item.key];
    if (target) {
      target.textContent = state.hasData ? `있음 · ${state.size}` : "없음";
    }
  });

  loginSchemaPreview.textContent = JSON.stringify(buildLoginSchemaPreview(), null, 2);
}

function copyLoginSchemaPreview() {
  if (!loginSchemaPreview) return;

  const text = loginSchemaPreview.textContent || "";

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      setLoginInspectorMessage("로그인 저장용 데이터 미리보기를 복사했습니다.");
      statusText.textContent = "로그인 저장용 데이터 미리보기를 복사했습니다.";
    }).catch(() => {
      fallbackCopyLoginSchema(text);
    });
    return;
  }

  fallbackCopyLoginSchema(text);
}

function fallbackCopyLoginSchema(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "readonly");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  setLoginInspectorMessage("로그인 저장용 데이터 미리보기를 복사했습니다.");
  statusText.textContent = "로그인 저장용 데이터 미리보기를 복사했습니다.";
}

function setDataManagerMessage(message) {
  if (dataManagerMessage) {
    dataManagerMessage.textContent = message;
  }
}

function renderDataManager() {
  if (!dataManagerStatus || !dataProfileState || !dataPartnerState || !dataHistoryState || !dataDexState || !dataAttendanceState || !dataChecklistState) return;

  const activeProfile = getActiveProfile();
  const partner = loadPartner();
  const history = loadFortuneHistory();
  const dex = loadPartnerDex();
  const attendance = loadAttendance();
  const checklistChecked = getChecklistCheckedCount();
  const discoveredCount = partnerTemplates.filter((template) => dex[template.id]).length;

  dataProfileState.textContent = activeProfile ? activeProfile.name : "기본 프로필";

  if (partner) {
    const template = getPartnerTemplate(partner.id);
    dataPartnerState.textContent = `${template.name} Lv.${getLevel(partner.exp || 0)}`;
  } else {
    dataPartnerState.textContent = "없음";
  }

  dataHistoryState.textContent = `${history.length}개`;
  dataDexState.textContent = `${discoveredCount} / ${partnerTemplates.length}`;
  dataAttendanceState.textContent = `${attendance.totalClaims || 0}회 · ${attendance.currentStreak || 0}일 연속`;
  dataChecklistState.textContent = `${checklistChecked}개 체크`;

  const hasData = Boolean(partner) || history.length > 0 || discoveredCount > 0 || (attendance.totalClaims || 0) > 0 || checklistChecked > 0;
  dataManagerStatus.textContent = hasData ? "저장 데이터 있음" : "저장 데이터 없음";
}

function buildBackupData() {
  return {
    app: "today_fortune_code",
    version: DEV_VERSION,
    schemaVersion: LOGIN_SCHEMA_VERSION,
    exportedAt: new Date().toISOString(),
    loginReadyData: buildLoginReadyDataBundle(),
    activeProfile: getActiveProfile(),
    profileStore: readProfileStore(),
    summary: {
      partner: dataPartnerState ? dataPartnerState.textContent : "",
      history: dataHistoryState ? dataHistoryState.textContent : "",
      dex: dataDexState ? dataDexState.textContent : "",
      attendance: dataAttendanceState ? dataAttendanceState.textContent : "",
      checklist: dataChecklistState ? dataChecklistState.textContent : ""
    },
    storage: getKnownStorageSnapshot()
  };
}

function downloadBackupData() {
  const backup = buildBackupData();
  const json = JSON.stringify(backup, null, 2);
  const blob = new Blob([json], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const activeProfile = getActiveProfile();
  const safeProfileName = activeProfile ? activeProfile.name.replace(/[^가-힣a-zA-Z0-9_-]/g, "_") : "profile";
  const fileName = `fortune-code-${safeProfileName}-backup-${getTodayKey()}.json`;

  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);

  setDataManagerMessage(`${fileName} 백업 파일을 만들었습니다.`);
  statusText.textContent = "저장 데이터를 백업 파일로 다운로드했습니다.";
  renderDataManager();
  renderLoginStorageInspector();
  renderCloudSaveState();
}

function getBackupStorageFromFile(parsed) {
  if (parsed && parsed.activeProfile && parsed.activeProfile.storage && typeof parsed.activeProfile.storage === "object" && !Array.isArray(parsed.activeProfile.storage)) {
    return parsed.activeProfile.storage;
  }

  if (parsed && parsed.storage && typeof parsed.storage === "object" && !Array.isArray(parsed.storage)) {
    return parsed.storage;
  }

  if (parsed && parsed.data && typeof parsed.data === "object" && !Array.isArray(parsed.data)) {
    return parsed.data;
  }

  return null;
}

function restoreKnownStorage(storage) {
  let restoredCount = 0;

  DATA_BACKUP_KEYS.forEach((item) => {
    if (!Object.prototype.hasOwnProperty.call(storage, item.key)) return;

    const value = storage[item.key];

    if (value === null || value === undefined || value === "") {
      localStorage.removeItem(item.key);
    } else if (typeof value === "string") {
      localStorage.setItem(item.key, value);
    } else {
      localStorage.setItem(item.key, JSON.stringify(value));
    }

    restoredCount += 1;
  });

  persistActiveProfileData();
  return restoredCount;
}

function refreshAllViewsAfterDataChange() {
  renderProfileManager();
  restoreChecklistState();
  renderPartner();
  renderFortuneHistory();
  renderAttendance();
  renderPartnerDex();
  renderDataManager();
  renderLoginStorageInspector();
}

function importBackupFile(file) {
  if (!file) return;

  const reader = new FileReader();

  reader.onload = () => {
    try {
      const parsed = JSON.parse(reader.result);
      const storage = getBackupStorageFromFile(parsed);

      if (!storage) {
        setDataManagerMessage("백업 파일 형식이 맞지 않습니다.");
        statusText.textContent = "백업 파일 형식이 맞지 않습니다.";
        return;
      }

      const restoredCount = restoreKnownStorage(storage);

      if (!restoredCount) {
        setDataManagerMessage("복원할 수 있는 저장 데이터가 없습니다.");
        statusText.textContent = "복원할 수 있는 저장 데이터가 없습니다.";
        return;
      }

      refreshAllViewsAfterDataChange();
      setDataManagerMessage(`${file.name} 파일에서 ${restoredCount}개 저장 항목을 복원했습니다.`);
      statusText.textContent = "백업 파일을 불러와 저장 데이터를 복원했습니다.";
    } catch (error) {
      console.error(error);
      setDataManagerMessage("백업 파일을 읽는 중 오류가 생겼습니다.");
      statusText.textContent = "백업 파일을 읽는 중 오류가 생겼습니다.";
    } finally {
      dataImportFile.value = "";
    }
  };

  reader.onerror = () => {
    setDataManagerMessage("파일을 읽지 못했습니다. 다시 선택해주세요.");
    statusText.textContent = "파일을 읽지 못했습니다.";
    dataImportFile.value = "";
  };

  reader.readAsText(file, "utf-8");
}

function resetAllStoredData() {
  const activeProfile = getActiveProfile();
  const profileName = activeProfile ? activeProfile.name : "현재 프로필";
  const firstOk = confirm(`${profileName}의 파트너, 출석, 도감, 이전 운세, 점검표 저장 데이터를 모두 삭제할까요?`);
  if (!firstOk) return;

  const secondOk = confirm("정말 삭제합니다. 백업하지 않았다면 복구할 수 없습니다.");
  if (!secondOk) return;

  DATA_BACKUP_KEYS.forEach((item) => localStorage.removeItem(item.key));
  CHECKLIST_LEGACY_KEYS.forEach((key) => localStorage.removeItem(key));
  persistActiveProfileData();

  refreshAllViewsAfterDataChange();
  renderPartnerInsight(null);
  setDataManagerMessage("저장 데이터를 모두 초기화했습니다.");
  statusText.textContent = "저장 데이터를 모두 초기화했습니다.";
}

if (createProfileBtn) {
  createProfileBtn.addEventListener("click", createNewProfile);
}

if (switchProfileBtn) {
  switchProfileBtn.addEventListener("click", switchProfile);
}

if (newProfileName) {
  newProfileName.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      createNewProfile();
    }
  });
}

if (renameProfileBtn) {
  renameProfileBtn.addEventListener("click", renameCurrentProfile);
}

if (renameProfileName) {
  renameProfileName.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      renameCurrentProfile();
    }
  });
}

if (duplicateProfileBtn) {
  duplicateProfileBtn.addEventListener("click", duplicateCurrentProfile);
}

if (deleteProfileBtn) {
  deleteProfileBtn.addEventListener("click", deleteCurrentProfile);
}

if (form) {
  form.addEventListener("submit", analyzeFortune);
}

if (meetPartnerBtn) {
  meetPartnerBtn.addEventListener("click", () => {
    createRandomPartner();
  });
}

partnerChoiceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const partnerId = button.getAttribute("data-partner-id");
    createPartnerById(partnerId, false);
  });
});

if (changePartnerBtn) {
  changePartnerBtn.addEventListener("click", changePartner);
}

if (resetPartnerBtn) {
  resetPartnerBtn.addEventListener("click", resetPartner);
}

if (attendanceClaimBtn) {
  attendanceClaimBtn.addEventListener("click", () => claimDailyVisitExp(false));
}

if (resetChecklistBtn) {
  resetChecklistBtn.addEventListener("click", resetDevChecklist);
}

if (clearHistoryBtn) {
  clearHistoryBtn.addEventListener("click", clearFortuneHistory);
}

if (backupDataBtn) {
  backupDataBtn.addEventListener("click", downloadBackupData);
}

if (importDataBtn && dataImportFile) {
  importDataBtn.addEventListener("click", () => dataImportFile.click());
}

if (dataImportFile) {
  dataImportFile.addEventListener("change", (event) => {
    importBackupFile(event.target.files[0]);
  });
}

if (resetAllDataBtn) {
  resetAllDataBtn.addEventListener("click", resetAllStoredData);
}

if (refreshLoginSchemaBtn) {
  refreshLoginSchemaBtn.addEventListener("click", () => {
    renderLoginStorageInspector();
    setLoginInspectorMessage("로그인 저장 구조를 새로고침했습니다.");
    statusText.textContent = "로그인 저장 구조를 새로고침했습니다.";
  });
}

if (copyLoginSchemaBtn) {
  copyLoginSchemaBtn.addEventListener("click", copyLoginSchemaPreview);
}

if (firebaseSignInBtn) {
  firebaseSignInBtn.addEventListener("click", handleFirebaseSignIn);
}

if (firebaseSignOutBtn) {
  firebaseSignOutBtn.addEventListener("click", handleFirebaseSignOut);
}

if (cloudSaveBtn) {
  cloudSaveBtn.addEventListener("click", saveCurrentDataToCloud);
}

if (cloudLoadBtn) {
  cloudLoadBtn.addEventListener("click", loadCurrentDataFromCloud);
}

if (cloudRefreshBtn) {
  cloudRefreshBtn.addEventListener("click", refreshCloudServerState);
}

if (fortuneHistoryList) {
  fortuneHistoryList.addEventListener("click", (event) => {
    const deleteButton = event.target.closest("[data-history-delete]");
    if (!deleteButton) return;

    deleteHistoryRecord(deleteButton.getAttribute("data-history-delete"));
  });
}

if (checklistJumpBtn) {
  checklistJumpBtn.addEventListener("click", jumpToDevChecklist);
}

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

const letters = "운세사주오행천간지지오늘흐름AIORACLE01";
const fontSize = 17;

let columns = 0;
let drops = [];

function resize() {
  const dpr = window.devicePixelRatio || 1;

  canvas.width = window.innerWidth * dpr;
  canvas.height = window.innerHeight * dpr;

  canvas.style.width = window.innerWidth + "px";
  canvas.style.height = window.innerHeight + "px";

  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  columns = Math.floor(window.innerWidth / fontSize);
  drops = Array(columns).fill(1);
}

function drawMatrix() {
  ctx.fillStyle = "rgba(4, 8, 18, 0.13)";
  ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

  ctx.fillStyle = "rgba(142, 245, 255, 0.42)";
  ctx.font = fontSize + "px monospace";
  ctx.shadowBlur = 6;
  ctx.shadowColor = "rgba(142, 245, 255, 0.3)";

  for (let i = 0; i < drops.length; i += 1) {
    const text = letters[Math.floor(Math.random() * letters.length)];

    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > window.innerHeight && Math.random() > 0.982) {
      drops[i] = 0;
    }

    drops[i] += 0.72;
  }

  requestAnimationFrame(drawMatrix);
}

function clearOldCachesAndWorkers() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      registrations.forEach((registration) => registration.unregister());
    });
  }

  if ("caches" in window) {
    caches.keys().then((keys) => {
      keys.forEach((key) => caches.delete(key));
    });
  }
}

if (canvas && ctx) {
  resize();
  drawMatrix();
  window.addEventListener("resize", resize);
}

clearOldCachesAndWorkers();
initProfileSystem();
initDevChecklist();
renderPartner();
renderFortuneHistory();
renderAttendance();
renderDataManager();
renderLoginStorageInspector();
renderCloudSaveState();
initFirebaseLoginTest();
